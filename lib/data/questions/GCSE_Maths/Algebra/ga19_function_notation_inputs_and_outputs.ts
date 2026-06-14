/**
 * Topic: Function notation: inputs and outputs
 * Ref: ga19  (DfE A7)
 * Strand: Algebra — GCSE Maths (Foundation + Higher)
 *
 * Coverage: function notation f(x) — understanding that f(a) means "substitute
 *   x = a into the rule" (input → output). Clusters covered:
 *     (1) evaluate f(x) at positive integers, e.g. f(x)=2x+3 → f(4);
 *     (2) evaluate at negatives, decimals and fractions, including quadratics
 *         such as f(x)=x^2-3x → f(-2), being careful that (-2)^2 = 4;
 *     (3) find the INPUT given the OUTPUT: solve f(x)=value, e.g. f(x)=2x+3,
 *         solve f(x)=11;
 *     (4) function machines (input → ×/+ → output) and writing the function
 *         rule from a machine;
 *     (5) interpret / compare, e.g. evaluate f(a)+f(b), or given f(x) write
 *         f(2x) or f(x+1) as a simplified expression.
 *   NO inverse functions and NO composite functions — those live in ga20/ga21.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga19-001 .. ga19-004  (4)
 *   - Standard:   ga19-005 .. ga19-018  (14)
 *   - Challenge:  ga19-019 .. ga19-030  (12)
 * Id range: ga19-001 .. ga19-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot
 *   for multiplication (never \\times / *), except where the question is itself
 *   about the × operation, per project style rules.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga19-001",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = 2x + 3\\). Work out \\(f(4)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the notation: f(4) means input x = 4.",
          workingLatex: "f(4) = f(x) \\text{ with } x = 4",
          explanation:
            "The number inside the brackets is the INPUT. f(4) is asking: what does the rule give when we feed in 4? It is not 'f times 4' — the brackets here mean 'evaluate at', not multiply.",
        },
        {
          stepNumber: 2,
          description: "Substitute 4 in place of x.",
          workingLatex: "f(4) = 2(4) + 3",
          explanation:
            "Replace every x in the rule 2x + 3 by 4. Writing the 4 in brackets keeps it tidy and reminds us that 2x means 2 times x.",
        },
        {
          stepNumber: 3,
          description: "Multiply before adding (BIDMAS).",
          workingLatex: "f(4) = 8 + 3",
          explanation:
            "Order of operations says the multiplication comes first: 2 \\cdot 4 = 8. Only then do we deal with the + 3.",
        },
        {
          stepNumber: 4,
          description: "Add to finish.",
          workingLatex: "f(4) = 11",
          explanation:
            "8 + 3 = 11. So the output of the function when the input is 4 is 11.",
        },
      ],
      finalAnswer: "\\(f(4) = 11\\)",
      canonicalAnswer: "11",
    },
  },
  {
    id: "ga19-002",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(g(x) = 5x - 2\\). Work out \\(g(3)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the notation: g(3) means input x = 3.",
          workingLatex: "g(3) = g(x) \\text{ with } x = 3",
          explanation:
            "The 3 inside the brackets is the input we feed into the rule. The function is called g this time, but the idea is identical to f.",
        },
        {
          stepNumber: 2,
          description: "Substitute 3 in place of x.",
          workingLatex: "g(3) = 5(3) - 2",
          explanation:
            "Replace x by 3 in 5x - 2. The bracket around the 3 reminds us that 5x means 5 times x.",
        },
        {
          stepNumber: 3,
          description: "Multiply before subtracting (BIDMAS).",
          workingLatex: "g(3) = 15 - 2",
          explanation:
            "The multiplication 5 \\cdot 3 = 15 happens first, before we touch the - 2.",
        },
        {
          stepNumber: 4,
          description: "Subtract to finish.",
          workingLatex: "g(3) = 13",
          explanation: "15 - 2 = 13, so the output is 13.",
        },
      ],
      finalAnswer: "\\(g(3) = 13\\)",
      canonicalAnswer: "13",
    },
  },
  {
    id: "ga19-003",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText: "A function is defined by \\(f(x) = 7 - x\\). Work out \\(f(2)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the notation: f(2) means input x = 2.",
          workingLatex: "f(2) = f(x) \\text{ with } x = 2",
          explanation:
            "Here x is being subtracted from 7, so watch the order: it is 7 take away the input, not the input take away 7.",
        },
        {
          stepNumber: 2,
          description: "Substitute 2 in place of x.",
          workingLatex: "f(2) = 7 - 2",
          explanation: "Replace the x in 7 - x by the input 2.",
        },
        {
          stepNumber: 3,
          description: "Subtract to finish.",
          workingLatex: "f(2) = 5",
          explanation:
            "7 - 2 = 5, so the output when the input is 2 is 5.",
        },
      ],
      finalAnswer: "\\(f(2) = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga19-004",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "A number machine takes an input, multiplies it by \\(3\\), then adds \\(1\\). The input is \\(5\\). What is the output?",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["function machine", "evaluate function", "input output"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start with the input.",
          workingLatex: "\\text{input} = 5",
          explanation:
            "A number machine processes the input one box at a time, left to right. We begin with the value going in: 5.",
        },
        {
          stepNumber: 2,
          description: "Apply the first box: multiply by 3.",
          workingLatex: "5 \\;\\xrightarrow{\\;\\times 3\\;}\\; 15",
          explanation:
            "The first operation is × 3, so 5 \\cdot 3 = 15. We must do this before the +1 box, because the machine acts in order.",
        },
        {
          stepNumber: 3,
          description: "Apply the second box: add 1.",
          workingLatex: "15 \\;\\xrightarrow{\\;+1\\;}\\; 16",
          explanation:
            "The result 15 now goes into the +1 box: 15 + 1 = 16. That final value is the output of the machine.",
        },
      ],
      finalAnswer: "The output is \\(16\\).",
      canonicalAnswer: "16",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga19-005",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = x^2 - 3x\\). Work out \\(f(-2)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "quadratic", "negative input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -2, keeping the sign in brackets.",
          workingLatex: "f(-2) = (-2)^2 - 3(-2)",
          explanation:
            "f(-2) means feed -2 into the rule. Putting -2 in brackets is essential: it ensures the WHOLE of -2 is squared, and that the -3 multiplies the full -2.",
        },
        {
          stepNumber: 2,
          description: "Square the bracket.",
          workingLatex: "(-2)^2 = (-2)\\cdot(-2) = 4",
          explanation:
            "Squaring means multiplying the number by itself. A negative times a negative is positive, so (-2)^2 = +4. A very common slip is to write -4 here — that would be -(2^2), which is different.",
        },
        {
          stepNumber: 3,
          description: "Work out the second term.",
          workingLatex: "-3(-2) = +6",
          explanation:
            "Minus times minus is plus, so -3 \\cdot (-2) = +6. Note the subtraction in the rule has turned into an addition because of the negative input.",
        },
        {
          stepNumber: 4,
          description: "Combine the two results.",
          workingLatex: "f(-2) = 4 + 6 = 10",
          explanation:
            "Adding the squared term and the second term: 4 + 6 = 10. So the output when the input is -2 is 10.",
        },
      ],
      finalAnswer: "\\(f(-2) = 10\\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "ga19-006",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(g(x) = 4x + 5\\). Work out \\(g\\left(\\dfrac{1}{2}\\right)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "fraction input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the fraction input x = 1/2.",
          workingLatex: "g\\!\\left(\\frac{1}{2}\\right) = 4\\cdot\\frac{1}{2} + 5",
          explanation:
            "The input does not have to be a whole number; here it is the fraction \\frac{1}{2}. Replace x by \\frac{1}{2} in 4x + 5.",
        },
        {
          stepNumber: 2,
          description: "Multiply 4 by the fraction first (BIDMAS).",
          workingLatex: "4\\cdot\\frac{1}{2} = \\frac{4}{2} = 2",
          explanation:
            "Multiplying a whole number by a fraction multiplies the numerator: 4 \\cdot \\frac{1}{2} = \\frac{4}{2}. Four halves make a whole 2.",
        },
        {
          stepNumber: 3,
          description: "Add the constant.",
          workingLatex: "g\\!\\left(\\frac{1}{2}\\right) = 2 + 5 = 7",
          explanation:
            "Now add the + 5 from the rule: 2 + 5 = 7. So the output is 7.",
        },
      ],
      finalAnswer: "\\(g\\left(\\tfrac{1}{2}\\right) = 7\\)",
      canonicalAnswer: "7",
    },
  },
  {
    id: "ga19-007",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(h(x) = 2x^2 + 1\\). Work out \\(h(-3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "quadratic", "negative input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = -3, keeping it in brackets.",
          workingLatex: "h(-3) = 2(-3)^2 + 1",
          explanation:
            "Feed -3 into the rule. The bracket around -3 matters: only the bracket is squared, and the coefficient 2 is applied afterwards — it is 2 \\cdot (-3)^2, not (2 \\cdot -3)^2.",
        },
        {
          stepNumber: 2,
          description: "Square the bracket first (powers before ×).",
          workingLatex: "(-3)^2 = (-3)\\cdot(-3) = 9",
          explanation:
            "BIDMAS puts indices before multiplication, so deal with the square before multiplying by 2. A negative squared is positive: (-3)^2 = 9, not -9.",
        },
        {
          stepNumber: 3,
          description: "Multiply the result by 2.",
          workingLatex: "2 \\cdot (-3)^2 = 2\\cdot 9 = 18",
          explanation:
            "Now apply the coefficient: 2 \\cdot 9 = 18. This is why the power had to be done first — multiplying before squaring would give a wrong answer.",
        },
        {
          stepNumber: 4,
          description: "Add the constant 1.",
          workingLatex: "h(-3) = 18 + 1 = 19",
          explanation:
            "Finally add the + 1 from the rule: 18 + 1 = 19. So the output is 19.",
        },
      ],
      finalAnswer: "\\(h(-3) = 19\\)",
      canonicalAnswer: "19",
    },
  },
  {
    id: "ga19-008",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = 10 - x^2\\). Work out \\(f(2.5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "decimal input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the decimal input x = 2.5 in brackets.",
          workingLatex: "f(2.5) = 10 - (2.5)^2",
          explanation:
            "Feed 2.5 into the rule. The bracket makes clear that the whole of 2.5 is squared, and that only the x^2 term is being subtracted from 10.",
        },
        {
          stepNumber: 2,
          description: "Square 2.5 (powers before subtraction).",
          workingLatex: "(2.5)^2 = 2.5\\cdot 2.5 = 6.25",
          explanation:
            "BIDMAS says deal with the square before the subtraction. 2.5 \\cdot 2.5 = 6.25; it can help to compute 25 \\cdot 25 = 625 and then place the decimal point.",
        },
        {
          stepNumber: 3,
          description: "Subtract from 10.",
          workingLatex: "f(2.5) = 10 - 6.25 = 3.75",
          explanation:
            "Now do the subtraction: 10 - 6.25 = 3.75. So the output is 3.75.",
        },
      ],
      finalAnswer: "\\(f(2.5) = 3.75\\)",
      canonicalAnswer: "3.75",
    },
  },
  {
    id: "ga19-009",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(f(x) = 2x + 3\\). Solve \\(f(x) = 11\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "linear"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the given output.",
          workingLatex: "2x + 3 = 11",
          explanation:
            "This is the reverse of the earlier questions: we are told the OUTPUT is 11 and must find the INPUT x. f(x) = 11 means the rule 2x + 3 produces 11, so we form that equation and solve.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3 from both sides to undo the +3.",
          workingLatex: "2x = 11 - 3",
          explanation:
            "To unpick the rule we reverse its operations, last one first. The +3 was applied last, so we subtract 3 from both sides to keep the equation balanced.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "2x = 8",
          explanation: "11 - 3 = 8, leaving the simpler equation 2x = 8.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 to undo the ×2.",
          workingLatex: "x = \\frac{8}{2} = 4",
          explanation:
            "The ×2 was applied first, so we undo it last by dividing both sides by 2. The input that gives output 11 is x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(4) = 2(4) + 3 = 8 + 3 = 11 \\checkmark",
          explanation:
            "Always sanity-check by feeding x = 4 back into the original rule. It returns 11, the required output, so x = 4 is correct.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga19-010",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(g(x) = 5x - 4\\). Solve \\(g(x) = 26\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "linear"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the given output.",
          workingLatex: "5x - 4 = 26",
          explanation:
            "We know the output is 26 and must find the input. g(x) = 26 means the rule 5x - 4 equals 26, giving us an equation to solve for x.",
        },
        {
          stepNumber: 2,
          description: "Add 4 to both sides to undo the -4.",
          workingLatex: "5x = 26 + 4",
          explanation:
            "Reverse the operations of the rule. The -4 was applied last, so undo it first by adding 4 to both sides.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "5x = 30",
          explanation: "26 + 4 = 30, leaving 5x = 30.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 5.",
          workingLatex: "x = \\frac{30}{5} = 6",
          explanation:
            "Undo the ×5 by dividing both sides by 5: 30 ÷ 5 = 6. The required input is x = 6.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "g(6) = 5(6) - 4 = 30 - 4 = 26 \\checkmark",
          explanation:
            "Feeding x = 6 back into the rule gives 26, the target output, which confirms x = 6.",
        },
      ],
      finalAnswer: "\\(x = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga19-011",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(f(x) = \\dfrac{x}{2} + 7\\). Solve \\(f(x) = 12\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "fraction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the given output.",
          workingLatex: "\\frac{x}{2} + 7 = 12",
          explanation:
            "We want the input x that produces output 12, so set the rule \\frac{x}{2} + 7 equal to 12.",
        },
        {
          stepNumber: 2,
          description: "Subtract 7 from both sides.",
          workingLatex: "\\frac{x}{2} = 12 - 7",
          explanation:
            "Undo the +7 first, since it was the last operation applied. Subtract 7 from both sides.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "\\frac{x}{2} = 5",
          explanation: "12 - 7 = 5, leaving \\frac{x}{2} = 5.",
        },
        {
          stepNumber: 4,
          description: "Multiply both sides by 2 to undo the ÷2.",
          workingLatex: "x = 5\\cdot 2 = 10",
          explanation:
            "The \\frac{x}{2} means x divided by 2, so we undo it by multiplying both sides by 2: 5 \\cdot 2 = 10. The input is x = 10.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(10) = \\frac{10}{2} + 7 = 5 + 7 = 12 \\checkmark",
          explanation:
            "Feeding x = 10 back in gives \\frac{10}{2} + 7 = 12, the target output, confirming x = 10.",
        },
      ],
      finalAnswer: "\\(x = 10\\)",
      canonicalAnswer: "10",
    },
  },
  {
    id: "ga19-012",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = 3x - 1\\). Work out the value of \\(f(2) + f(5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "combine outputs"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate the first output, f(2).",
          workingLatex: "f(2) = 3(2) - 1 = 6 - 1 = 5",
          explanation:
            "Treat the two outputs separately. Substitute x = 2 into 3x - 1: the multiplication gives 6, then subtract 1 to get 5.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the second output, f(5).",
          workingLatex: "f(5) = 3(5) - 1 = 15 - 1 = 14",
          explanation:
            "Now substitute x = 5 into the same rule: 3 \\cdot 5 = 15, then 15 - 1 = 14.",
        },
        {
          stepNumber: 3,
          description: "Add the two outputs.",
          workingLatex: "f(2) + f(5) = 5 + 14 = 19",
          explanation:
            "f(2) + f(5) simply means add the two values we just found: 5 + 14 = 19. Note it is NOT f(7) — you cannot add the inputs.",
        },
      ],
      finalAnswer: "\\(f(2) + f(5) = 19\\)",
      canonicalAnswer: "19",
    },
  },
  {
    id: "ga19-013",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = x^2 + 4x\\). Work out \\(f(3) - f(-1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "quadratic", "combine outputs"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate f(3).",
          workingLatex: "f(3) = (3)^2 + 4(3) = 9 + 12 = 21",
          explanation:
            "Substitute x = 3 into x^2 + 4x: (3)^2 = 9 and 4 \\cdot 3 = 12, so f(3) = 9 + 12 = 21.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f(-1), keeping the negative in brackets.",
          workingLatex: "f(-1) = (-1)^2 + 4(-1) = 1 - 4 = -3",
          explanation:
            "Substitute x = -1 carefully. (-1)^2 = 1 (a negative squared is positive), and 4 \\cdot (-1) = -4, so f(-1) = 1 - 4 = -3.",
        },
        {
          stepNumber: 3,
          description: "Write out the subtraction of the two outputs.",
          workingLatex: "f(3) - f(-1) = 21 - (-3)",
          explanation:
            "We need f(3) minus f(-1). Substituting the values gives 21 - (-3). Take care: the thing being subtracted is itself negative.",
        },
        {
          stepNumber: 4,
          description: "Subtracting a negative becomes adding.",
          workingLatex: "21 - (-3) = 21 + 3 = 24",
          explanation:
            "Minus a minus is a plus, so 21 - (-3) turns into 21 + 3 = 24. Forgetting this is a classic place to lose a mark.",
        },
      ],
      finalAnswer: "\\(f(3) - f(-1) = 24\\)",
      canonicalAnswer: "24",
    },
  },
  {
    id: "ga19-014",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A number machine takes an input, subtracts \\(2\\), then multiplies the result by \\(4\\). Write the function \\(f(x)\\) for this machine.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function machine", "write function", "form expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Start with the input x.",
          workingLatex: "\\text{input} = x",
          explanation:
            "To write the rule, send a general input x through the machine and track what happens to it, box by box.",
        },
        {
          stepNumber: 2,
          description: "Apply the first box: subtract 2.",
          workingLatex: "x \\;\\xrightarrow{\\;-2\\;}\\; x - 2",
          explanation:
            "The first operation subtracts 2 from the input, giving x - 2. This is the expression that leaves the first box.",
        },
        {
          stepNumber: 3,
          description: "Apply the second box to the whole result.",
          workingLatex: "(x - 2) \\;\\xrightarrow{\\;\\times 4\\;}\\; 4(x - 2)",
          explanation:
            "The ×4 acts on EVERYTHING that came out of the first box, not just the x. So we wrap x - 2 in brackets before multiplying: 4(x - 2). Dropping the brackets here is the most common mistake.",
        },
        {
          stepNumber: 4,
          description: "Expand to give a tidy expression.",
          workingLatex: "f(x) = 4(x - 2) = 4x - 8",
          explanation:
            "Multiplying out, 4 \\cdot x = 4x and 4 \\cdot (-2) = -8, so f(x) = 4x - 8. Either the bracketed form 4(x - 2) or the expanded 4x - 8 is acceptable.",
        },
      ],
      finalAnswer: "\\(f(x) = 4(x - 2) = 4x - 8\\)",
      canonicalAnswer: "4*x - 8",
    },
  },
  {
    id: "ga19-015",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = \\dfrac{12}{x} + 1\\). Work out \\(f(4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the input x = 4 into the rule.",
          workingLatex: "f(4) = \\frac{12}{4} + 1",
          explanation:
            "Here x sits in the denominator, so replacing x by 4 puts the 4 underneath the 12: \\frac{12}{4}.",
        },
        {
          stepNumber: 2,
          description: "Work out the division first (BIDMAS).",
          workingLatex: "\\frac{12}{4} = 3",
          explanation:
            "Division ranks above addition in BIDMAS, so evaluate \\frac{12}{4} = 3 before dealing with the + 1.",
        },
        {
          stepNumber: 3,
          description: "Add the constant 1.",
          workingLatex: "f(4) = 3 + 1 = 4",
          explanation:
            "Now add the + 1 from the rule: 3 + 1 = 4. So the output is 4.",
        },
      ],
      finalAnswer: "\\(f(4) = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga19-016",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(f(x) = 2x + 9\\). Solve \\(f(x) = 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "negative answer"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the output.",
          workingLatex: "2x + 9 = 3",
          explanation:
            "f(x) = 3 means 2x + 9 = 3. The target output 3 is smaller than the +9 already in the rule, which is a hint that the input will turn out negative.",
        },
        {
          stepNumber: 2,
          description: "Subtract 9 from both sides.",
          workingLatex: "2x = 3 - 9",
          explanation:
            "Undo the +9 by subtracting 9 from both sides. Keep the equation balanced by doing the same to each side.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "2x = -6",
          explanation:
            "3 - 9 = -6, since we are subtracting a larger number from a smaller one. The result is negative.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "x = \\frac{-6}{2} = -3",
          explanation:
            "Dividing a negative by a positive gives a negative: \\frac{-6}{2} = -3. The input is x = -3.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(-3) = 2(-3) + 9 = -6 + 9 = 3 \\checkmark",
          explanation:
            "Substituting x = -3 gives 2 \\cdot (-3) = -6, then -6 + 9 = 3, the required output. This confirms x = -3.",
        },
      ],
      finalAnswer: "\\(x = -3\\)",
      canonicalAnswer: "-3",
    },
  },
  {
    id: "ga19-017",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(g(x) = x^2 - 5\\). Work out \\(g(0.4)\\). Give your answer as a decimal.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "decimal input", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the decimal input x = 0.4 in brackets.",
          workingLatex: "g(0.4) = (0.4)^2 - 5",
          explanation:
            "Feed 0.4 into the rule. The bracket makes clear the whole 0.4 is squared before the 5 is subtracted.",
        },
        {
          stepNumber: 2,
          description: "Square 0.4 (powers before subtraction).",
          workingLatex: "(0.4)^2 = 0.4\\cdot 0.4 = 0.16",
          explanation:
            "Multiply 0.4 by itself. Since 4 \\cdot 4 = 16 and there are two decimal places in total, the answer is 0.16. A common slip is to write 1.6 — that would be 0.4 \\cdot 4, not 0.4 \\cdot 0.4.",
        },
        {
          stepNumber: 3,
          description: "Subtract 5.",
          workingLatex: "g(0.4) = 0.16 - 5 = -4.84",
          explanation:
            "Subtracting 5 from the small positive 0.16 takes us below zero: 0.16 - 5 = -4.84. So the output is -4.84.",
        },
      ],
      finalAnswer: "\\(g(0.4) = -4.84\\)",
      canonicalAnswer: "-4.84",
    },
  },
  {
    id: "ga19-018",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "A function machine has input \\(x\\), squares it, then subtracts \\(7\\), giving the function \\(f(x) = x^2 - 7\\). The output is \\(9\\). Given that the input is positive, find the input.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function machine", "find input", "solve equation", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the output 9.",
          workingLatex: "x^2 - 7 = 9",
          explanation:
            "We know the output is 9 and want the input x, so set the rule x^2 - 7 equal to 9. To undo the machine we reverse its steps, last one first.",
        },
        {
          stepNumber: 2,
          description: "Add 7 to both sides to undo the -7.",
          workingLatex: "x^2 = 9 + 7 = 16",
          explanation:
            "The -7 was the last operation, so reverse it first by adding 7 to both sides: x^2 = 16.",
        },
        {
          stepNumber: 3,
          description: "Take the square root of both sides.",
          workingLatex: "x = \\pm\\sqrt{16} = \\pm 4",
          explanation:
            "Squaring was the first operation, so undo it last by square-rooting. Note that squaring loses sign information, so in principle x could be +4 or -4.",
        },
        {
          stepNumber: 4,
          description: "Choose the positive root, as instructed.",
          workingLatex: "x = 4",
          explanation:
            "The question states the input is positive, so we reject x = -4 and keep x = 4. Always re-read the question for conditions like this.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(4) = (4)^2 - 7 = 16 - 7 = 9 \\checkmark",
          explanation:
            "Feeding x = 4 back in gives 16 - 7 = 9, the required output, confirming x = 4.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "4",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga19-019",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A function is defined by \\(f(x) = 3x - 5\\). Find an expression for \\(f(2x)\\), giving your answer in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "transform input", "form expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace the input x by 2x.",
          workingLatex: "f(2x) = 3(2x) - 5",
          explanation:
            "f(2x) means the input is the expression 2x, not a number. Wherever an x appears in the rule 3x - 5, swap in 2x, keeping it in brackets so the coefficient multiplies all of it.",
        },
        {
          stepNumber: 2,
          description: "Multiply out 3 times 2x.",
          workingLatex: "3(2x) = 6x",
          explanation:
            "The constants multiply: 3 \\cdot 2 = 6, and the x carries through, giving 6x.",
        },
        {
          stepNumber: 3,
          description: "Write the simplified expression.",
          workingLatex: "f(2x) = 6x - 5",
          explanation:
            "Putting it together gives 6x - 5. Be careful: this is NOT the same as 2f(x) = 2(3x - 5) = 6x - 10. Doubling the input is different from doubling the output.",
        },
      ],
      finalAnswer: "\\(f(2x) = 6x - 5\\)",
      canonicalAnswer: "6*x - 5",
    },
  },
  {
    id: "ga19-020",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A function is defined by \\(f(x) = 2x + 1\\). Find an expression for \\(f(x + 3)\\), giving your answer in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "transform input", "form expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace the input x by (x + 3).",
          workingLatex: "f(x + 3) = 2(x + 3) + 1",
          explanation:
            "f(x + 3) means the input is the whole expression x + 3. Substitute it for x in 2x + 1, wrapping it in brackets so the 2 multiplies both parts.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket.",
          workingLatex: "2(x + 3) = 2x + 6",
          explanation:
            "Multiply each term inside the bracket by 2: 2 \\cdot x = 2x and 2 \\cdot 3 = 6.",
        },
        {
          stepNumber: 3,
          description: "Bring down the +1.",
          workingLatex: "f(x + 3) = 2x + 6 + 1",
          explanation:
            "The +1 from the original rule is still there, sitting outside the bracket we just expanded.",
        },
        {
          stepNumber: 4,
          description: "Collect the constant terms.",
          workingLatex: "f(x + 3) = 2x + 7",
          explanation:
            "Combine the numbers: 6 + 1 = 7. The x term is unchanged, giving the simplified expression 2x + 7.",
        },
      ],
      finalAnswer: "\\(f(x + 3) = 2x + 7\\)",
      canonicalAnswer: "2*x + 7",
    },
  },
  {
    id: "ga19-021",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A function is defined by \\(f(x) = x^2 + 2\\). Find an expression for \\(f(x - 1)\\), giving your answer in its simplest form.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "transform input", "quadratic", "form expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace the input x by (x - 1).",
          workingLatex: "f(x - 1) = (x - 1)^2 + 2",
          explanation:
            "The input is now the expression x - 1. Substitute it for x in x^2 + 2; the brackets are essential because the WHOLE of x - 1 is squared.",
        },
        {
          stepNumber: 2,
          description: "Expand the square (x - 1)^2.",
          workingLatex: "(x - 1)^2 = (x - 1)(x - 1)",
          explanation:
            "Squaring means multiplying the bracket by itself. Writing it out as a double bracket sets up a careful expansion — never just square each term to get x^2 + 1.",
        },
        {
          stepNumber: 3,
          description: "Multiply out the double bracket.",
          workingLatex: "(x - 1)(x - 1) = x^2 - x - x + 1 = x^2 - 2x + 1",
          explanation:
            "Expand term by term: x \\cdot x = x^2, the two cross terms each give -x, and (-1)(-1) = +1. Collecting the middle terms gives -2x. This matches (a - b)^2 = a^2 - 2ab + b^2.",
        },
        {
          stepNumber: 4,
          description: "Add the +2 and collect like terms.",
          workingLatex: "f(x - 1) = x^2 - 2x + 1 + 2 = x^2 - 2x + 3",
          explanation:
            "Bring back the +2 from the rule and combine constants: 1 + 2 = 3. The simplified expression is x^2 - 2x + 3.",
        },
      ],
      finalAnswer: "\\(f(x - 1) = x^2 - 2x + 3\\)",
      canonicalAnswer: "x^2 - 2*x + 3",
    },
  },
  {
    id: "ga19-022",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = ax + 3\\). Given that \\(f(2) = 11\\), find the value of \\(a\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find coefficient", "solve equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 2 into the rule.",
          workingLatex: "f(2) = a(2) + 3 = 2a + 3",
          explanation:
            "This time the rule itself contains an unknown, a. We are given a matching input (2) and output (11). Put x = 2 into ax + 3; the a stays because it is part of the rule, giving 2a + 3.",
        },
        {
          stepNumber: 2,
          description: "Set the expression equal to the output 11.",
          workingLatex: "2a + 3 = 11",
          explanation:
            "Because f(2) = 11, the expression we just formed must equal 11. This gives an equation we can solve for a.",
        },
        {
          stepNumber: 3,
          description: "Subtract 3 from both sides.",
          workingLatex: "2a = 11 - 3 = 8",
          explanation:
            "Undo the +3 by subtracting 3 from both sides: 11 - 3 = 8, so 2a = 8.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "a = \\frac{8}{2} = 4",
          explanation:
            "Undo the ×2 by dividing both sides by 2: 8 ÷ 2 = 4. So a = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting a = 4 and x = 2 back.",
          workingLatex: "f(2) = 4(2) + 3 = 8 + 3 = 11 \\checkmark",
          explanation:
            "With a = 4 the rule is 4x + 3, and f(2) = 11 as required. This confirms a = 4.",
        },
      ],
      finalAnswer: "\\(a = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga19-023",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = x^2 + bx\\). Given that \\(f(3) = 24\\), find the value of \\(b\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find coefficient", "quadratic", "solve equation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 3 into the rule.",
          workingLatex: "f(3) = (3)^2 + b(3) = 9 + 3b",
          explanation:
            "The rule has an unknown coefficient b. Put x = 3 into x^2 + bx: the x^2 term becomes the number 9, while the bx term becomes 3b and keeps the unknown.",
        },
        {
          stepNumber: 2,
          description: "Set the expression equal to the output 24.",
          workingLatex: "9 + 3b = 24",
          explanation:
            "Since f(3) = 24, the expression 9 + 3b must equal 24, giving an equation in b.",
        },
        {
          stepNumber: 3,
          description: "Subtract 9 from both sides.",
          workingLatex: "3b = 24 - 9 = 15",
          explanation:
            "Undo the +9 by subtracting 9 from both sides: 24 - 9 = 15, so 3b = 15.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3.",
          workingLatex: "b = \\frac{15}{3} = 5",
          explanation:
            "Undo the ×3 by dividing both sides by 3: 15 ÷ 3 = 5. So b = 5.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(3) = (3)^2 + 5(3) = 9 + 15 = 24 \\checkmark",
          explanation:
            "With b = 5 the rule is x^2 + 5x, and f(3) = 9 + 15 = 24 as required. This confirms b = 5.",
        },
      ],
      finalAnswer: "\\(b = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga19-024",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A function is defined by \\(f(x) = x^2 - 2x\\). Solve \\(f(x) = 8\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve quadratic", "two solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the output 8.",
          workingLatex: "x^2 - 2x = 8",
          explanation:
            "f(x) = 8 means x^2 - 2x = 8. Because the rule is quadratic, there may be more than one input giving this output, so expect up to two answers.",
        },
        {
          stepNumber: 2,
          description: "Rearrange to standard quadratic form.",
          workingLatex: "x^2 - 2x - 8 = 0",
          explanation:
            "Move everything to one side so the equation equals zero. Subtracting 8 from both sides gives x^2 - 2x - 8 = 0, ready to factorise.",
        },
        {
          stepNumber: 3,
          description: "Find a factor pair for the constant.",
          workingLatex: "(-4)\\cdot(+2) = -8, \\quad (-4)+(+2) = -2",
          explanation:
            "To factorise x^2 - 2x - 8 we need two numbers that multiply to -8 (the constant) and add to -2 (the x-coefficient). The pair -4 and +2 works.",
        },
        {
          stepNumber: 4,
          description: "Write the factorised form.",
          workingLatex: "(x - 4)(x + 2) = 0",
          explanation:
            "Use that pair to build the brackets: (x - 4)(x + 2). Expanding back checks out, so the factorisation is correct.",
        },
        {
          stepNumber: 5,
          description: "Set each factor to zero and solve.",
          workingLatex: "x - 4 = 0 \\;\\Rightarrow\\; x = 4, \\quad x + 2 = 0 \\;\\Rightarrow\\; x = -2",
          explanation:
            "A product is zero only when one of its factors is zero. So either x - 4 = 0 giving x = 4, or x + 2 = 0 giving x = -2. Both inputs are valid.",
        },
        {
          stepNumber: 6,
          description: "Check both, including the negative.",
          workingLatex:
            "f(4) = 16 - 8 = 8, \\quad f(-2) = (-2)^2 - 2(-2) = 4 + 4 = 8 \\checkmark",
          explanation:
            "Verify each input gives output 8. For x = -2 take care: (-2)^2 = 4 and -2 \\cdot (-2) = +4, so f(-2) = 8. Both solutions are confirmed.",
        },
      ],
      finalAnswer: "\\(x = 4\\) or \\(x = -2\\)",
      canonicalAnswer: "{-2, 4}",
    },
  },
  {
    id: "ga19-025",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = 4x - 1\\). Work out \\(f(5) - 2f(2)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "combine outputs"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate f(5).",
          workingLatex: "f(5) = 4(5) - 1 = 20 - 1 = 19",
          explanation:
            "Substitute x = 5 into 4x - 1: 4 \\cdot 5 = 20, then 20 - 1 = 19.",
        },
        {
          stepNumber: 2,
          description: "Evaluate f(2).",
          workingLatex: "f(2) = 4(2) - 1 = 8 - 1 = 7",
          explanation:
            "Substitute x = 2 into the same rule: 4 \\cdot 2 = 8, then 8 - 1 = 7.",
        },
        {
          stepNumber: 3,
          description: "Form 2f(2) by doubling the output.",
          workingLatex: "2f(2) = 2\\cdot 7 = 14",
          explanation:
            "The notation 2f(2) means twice the value of f(2), not f of 4. So multiply the output 7 by 2 to get 14.",
        },
        {
          stepNumber: 4,
          description: "Combine the two parts.",
          workingLatex: "f(5) - 2f(2) = 19 - 14 = 5",
          explanation:
            "Now subtract: 19 - 14 = 5. Doing each piece separately first avoids mixing the operations up.",
        },
      ],
      finalAnswer: "\\(f(5) - 2f(2) = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga19-026",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Two functions are defined by \\(f(x) = 3x + 2\\) and \\(g(x) = x^2 - 1\\). Work out \\(f(4) + g(-3)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "evaluate function", "two functions", "negative input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Evaluate f(4) using the first rule.",
          workingLatex: "f(4) = 3(4) + 2 = 12 + 2 = 14",
          explanation:
            "There are two different functions here, so use the matching rule for each. For f use 3x + 2: 3 \\cdot 4 = 12, then 12 + 2 = 14.",
        },
        {
          stepNumber: 2,
          description: "Evaluate g(-3) using the second rule.",
          workingLatex: "g(-3) = (-3)^2 - 1 = 9 - 1 = 8",
          explanation:
            "For g use x^2 - 1, with the input -3 in brackets. (-3)^2 = 9 because a negative squared is positive, then 9 - 1 = 8.",
        },
        {
          stepNumber: 3,
          description: "Add the two outputs.",
          workingLatex: "f(4) + g(-3) = 14 + 8 = 22",
          explanation:
            "Finally add the results of the two separate functions: 14 + 8 = 22.",
        },
      ],
      finalAnswer: "\\(f(4) + g(-3) = 22\\)",
      canonicalAnswer: "22",
    },
  },
  {
    id: "ga19-027",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A function is defined by \\(f(x) = ax^2 + b\\). Given that \\(f(0) = 5\\) and \\(f(2) = 17\\), find the values of \\(a\\) and \\(b\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find coefficient", "simultaneous", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute x = 0 to use the simpler condition first.",
          workingLatex: "f(0) = a(0)^2 + b = 0 + b = b",
          explanation:
            "There are two unknowns, so we need two equations. Using x = 0 is clever: a \\cdot 0^2 = 0, which kills the a term entirely and leaves f(0) = b on its own.",
        },
        {
          stepNumber: 2,
          description: "Set f(0) equal to 5 to find b.",
          workingLatex: "b = 5",
          explanation:
            "Since f(0) = 5 and we just showed f(0) = b, the constant b must be 5. One unknown down already.",
        },
        {
          stepNumber: 3,
          description: "Substitute x = 2 and the known b.",
          workingLatex: "f(2) = a(2)^2 + b = 4a + 5",
          explanation:
            "Now use the second condition. (2)^2 = 4 gives the term 4a, and we drop in b = 5, so f(2) = 4a + 5.",
        },
        {
          stepNumber: 4,
          description: "Set equal to 17 and isolate the a term.",
          workingLatex: "4a + 5 = 17 \\;\\Rightarrow\\; 4a = 12",
          explanation:
            "Because f(2) = 17, we have 4a + 5 = 17. Subtract 5 from both sides to leave 4a = 12.",
        },
        {
          stepNumber: 5,
          description: "Divide by 4 to find a.",
          workingLatex: "a = \\frac{12}{4} = 3",
          explanation:
            "Divide both sides by 4: 12 ÷ 4 = 3, so a = 3. We now have both unknowns: a = 3, b = 5.",
        },
        {
          stepNumber: 6,
          description: "Check both conditions with a = 3, b = 5.",
          workingLatex:
            "f(0) = 0 + 5 = 5, \\quad f(2) = 3(4) + 5 = 12 + 5 = 17 \\checkmark",
          explanation:
            "Substituting back, both given outputs are reproduced exactly, so a = 3 and b = 5 are correct.",
        },
      ],
      finalAnswer: "\\(a = 3\\) and \\(b = 5\\)",
      canonicalAnswer: "a=3, b=5",
    },
  },
  {
    id: "ga19-028",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(f(x) = \\dfrac{20}{x} - 3\\). Solve \\(f(x) = 2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "reciprocal"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to the output 2.",
          workingLatex: "\\frac{20}{x} - 3 = 2",
          explanation:
            "We want the input x that produces output 2. Here x sits in the denominator, so we will need to clear the fraction at some point.",
        },
        {
          stepNumber: 2,
          description: "Add 3 to both sides.",
          workingLatex: "\\frac{20}{x} = 2 + 3 = 5",
          explanation:
            "Deal with the -3 first by adding 3 to both sides: 2 + 3 = 5, leaving \\frac{20}{x} = 5.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by x to clear the fraction.",
          workingLatex: "20 = 5x",
          explanation:
            "Multiplying both sides by x removes it from the denominator: the left becomes 20 and the right becomes 5x. The unknown is now on the top line.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 5.",
          workingLatex: "x = \\frac{20}{5} = 4",
          explanation:
            "Divide both sides by 5 to isolate x: 20 ÷ 5 = 4. The input is x = 4.",
        },
        {
          stepNumber: 5,
          description: "Check by substituting back.",
          workingLatex: "f(4) = \\frac{20}{4} - 3 = 5 - 3 = 2 \\checkmark",
          explanation:
            "Feeding x = 4 back in gives \\frac{20}{4} - 3 = 5 - 3 = 2, the required output. This confirms x = 4.",
        },
      ],
      finalAnswer: "\\(x = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga19-029",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A function is defined by \\(f(x) = 5 - 2x\\). Show that \\(f(x + 4) = -2x - 3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "transform input", "show that", "form expression"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Replace the input x by (x + 4).",
          workingLatex: "f(x + 4) = 5 - 2(x + 4)",
          explanation:
            "The input is the expression x + 4. Substitute it for x in 5 - 2x, keeping it in brackets — especially important here because it follows a minus sign.",
        },
        {
          stepNumber: 2,
          description: "Expand the bracket, watching the sign.",
          workingLatex: "-2(x + 4) = -2x - 8",
          explanation:
            "The -2 multiplies BOTH terms inside the bracket: -2 \\cdot x = -2x and -2 \\cdot 4 = -8. A sign slip here (writing -2x + 8) is the most common error.",
        },
        {
          stepNumber: 3,
          description: "Substitute the expansion back in.",
          workingLatex: "f(x + 4) = 5 - 2x - 8",
          explanation:
            "Put the expanded bracket back next to the 5, keeping the -2x and -8 terms exactly as found.",
        },
        {
          stepNumber: 4,
          description: "Collect the constants to finish.",
          workingLatex: "f(x + 4) = -2x - 3",
          explanation:
            "Combine the numbers: 5 - 8 = -3. This gives -2x - 3, which is exactly what we were asked to show.",
        },
      ],
      finalAnswer: "\\(f(x + 4) = -2x - 3\\) as required.",
      canonicalAnswer: "-2*x - 3",
    },
  },
  {
    id: "ga19-030",
    topicRef: "ga19",
    topicTitle: "Function notation: inputs and outputs",
    difficulty: "Challenge",
    answerType: "equationRoots",
    questionText:
      "A function is defined by \\(f(x) = 3x - 4\\). Find the value of \\(x\\) for which \\(f(x) = x\\) (the input equals the output).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["function notation", "find input", "solve equation", "fixed point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the rule equal to x.",
          workingLatex: "3x - 4 = x",
          explanation:
            "We want the special input whose output equals itself. f(x) = x means the rule 3x - 4 must equal the input x, giving an equation with x on both sides.",
        },
        {
          stepNumber: 2,
          description: "Subtract x from both sides to collect x terms.",
          workingLatex: "3x - x - 4 = 0",
          explanation:
            "Gather the x terms on one side. Subtract x from both sides so the right-hand side becomes 0.",
        },
        {
          stepNumber: 3,
          description: "Combine the x terms.",
          workingLatex: "2x - 4 = 0",
          explanation: "3x - x = 2x, leaving the tidy equation 2x - 4 = 0.",
        },
        {
          stepNumber: 4,
          description: "Add 4 to both sides.",
          workingLatex: "2x = 4",
          explanation: "Undo the -4 by adding 4 to both sides: 2x = 4.",
        },
        {
          stepNumber: 5,
          description: "Divide both sides by 2.",
          workingLatex: "x = \\frac{4}{2} = 2",
          explanation:
            "Divide both sides by 2 to isolate x: 4 ÷ 2 = 2. So the input is x = 2.",
        },
        {
          stepNumber: 6,
          description: "Check that the output equals the input.",
          workingLatex: "f(2) = 3(2) - 4 = 6 - 4 = 2 \\checkmark",
          explanation:
            "Confirm the fixed-point condition: f(2) = 2, so the input really does equal the output. (Such a value is called a fixed point of the function.)",
        },
      ],
      finalAnswer: "\\(x = 2\\)",
      canonicalAnswer: "2",
    },
  },
];
