/**
 * Topic: Inverse functions
 * Ref: ga20  (DfE A7)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: finding and using the inverse function f^{-1}(x). Clusters:
 *   (1) linear inverses, e.g. f(x)=3x-2 -> f^{-1}(x)=(x+2)/3;
 *   (2) inverses involving a fraction, e.g. f(x)=(x+5)/2, f(x)=x/4-1;
 *   (3) evaluating f^{-1}(a) for a given value;
 *   (4) two-step rearrangements and the idea that the inverse "undoes" the
 *       function, including verifying f(f^{-1}(x)) = x;
 *   (5) inverses of simple non-linear functions with a STATED domain, e.g.
 *       f(x)=x^2 for x>=0 -> f^{-1}(x)=sqrt(x), or f(x)=(x-1)^2.
 *   Throughout, solutions write y=f(x), rearrange to make x the subject (each
 *   step named as the inverse operation), then replace the variable with x and
 *   write f^{-1}(x). Non-linear cases discuss the domain restriction and the
 *   +/- choice. Common warnings: rearrangement/sign slips; forgetting the
 *   domain restriction; confusing f^{-1}(x) with 1/f(x).
 *
 * Difficulty split (30 total):
 *   - Foundation: ga20-001 .. ga20-004  (4)   cleanest linear inverses
 *   - Standard:   ga20-005 .. ga20-018  (14)
 *   - Challenge:  ga20-019 .. ga20-030  (12)
 * Id range: ga20-001 .. ga20-030.
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
    id: "ga20-001",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = x + 7\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the function as y = f(x).",
          workingLatex: "y = x + 7",
          explanation:
            "Replacing f(x) with y gives an equation linking the input x to the output y. The inverse will tell us how to get the input back from the output, so we aim to make x the subject.",
        },
        {
          stepNumber: 2,
          description: "Make x the subject by undoing the +7.",
          workingLatex: "x = y - 7",
          explanation:
            "The function adds 7 to its input, so to reverse it we subtract 7. Subtracting 7 from both sides isolates x and gives the rule that recovers the original input.",
        },
        {
          stepNumber: 3,
          description: "Replace y with x to write the inverse function.",
          workingLatex: "f^{-1}(x) = x - 7",
          explanation:
            "An inverse function is written in terms of x, so we rename the input variable. Check: f^{-1}(f(x)) = (x+7) - 7 = x, so the inverse correctly undoes f.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = x - 7\\)",
      canonicalAnswer: "x-7",
    },
  },
  {
    id: "ga20-002",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 5x\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the function as y = f(x).",
          workingLatex: "y = 5x",
          explanation:
            "Setting the output equal to y turns the function into an equation we can rearrange. We want to express the input x in terms of the output y.",
        },
        {
          stepNumber: 2,
          description: "Make x the subject by undoing the multiplication by 5.",
          workingLatex: "x = \\frac{y}{5}",
          explanation:
            "The function multiplies its input by 5, so the reverse operation is dividing by 5. Dividing both sides by 5 isolates x.",
        },
        {
          stepNumber: 3,
          description: "Replace y with x to write the inverse function.",
          workingLatex: "f^{-1}(x) = \\frac{x}{5}",
          explanation:
            "Rename the variable to x. Check: f^{-1}(f(x)) = (5x)/5 = x. Note the inverse is x/5, NOT 1/(5x); f^{-1} is not the same as 1/f.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x}{5}\\)",
      canonicalAnswer: "x/5",
    },
  },
  {
    id: "ga20-003",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 3x - 2\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the function as y = f(x).",
          workingLatex: "y = 3x - 2",
          explanation:
            "Writing the output as y gives an equation to rearrange. The function does two things to the input: it multiplies by 3, then subtracts 2. The inverse undoes these in reverse order.",
        },
        {
          stepNumber: 2,
          description: "Undo the subtraction: add 2 to both sides.",
          workingLatex: "y + 2 = 3x",
          explanation:
            "The last operation applied to x was subtracting 2, so the first step of reversing is to add 2. This isolates the 3x term.",
        },
        {
          stepNumber: 3,
          description: "Undo the multiplication: divide both sides by 3.",
          workingLatex: "x = \\frac{y + 2}{3}",
          explanation:
            "Now reverse the multiplication by 3 by dividing by 3. The whole numerator y+2 is divided by 3, which is why brackets/a single fraction bar are needed.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x to write the inverse function.",
          workingLatex: "f^{-1}(x) = \\frac{x + 2}{3}",
          explanation:
            "Rename the variable to x. Check: f^{-1}(f(x)) = ((3x-2)+2)/3 = 3x/3 = x, confirming the inverse undoes f.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x + 2}{3}\\)",
      canonicalAnswer: "(x+2)/3",
    },
  },
  {
    id: "ga20-004",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Foundation",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 2x + 9\\).",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the function as y = f(x).",
          workingLatex: "y = 2x + 9",
          explanation:
            "The function multiplies the input by 2 then adds 9. To find the inverse we make x the subject, undoing those operations in reverse.",
        },
        {
          stepNumber: 2,
          description: "Undo the +9 by subtracting 9 from both sides.",
          workingLatex: "y - 9 = 2x",
          explanation:
            "The last thing done to x was adding 9, so reverse it first by subtracting 9. This leaves the 2x term on its own.",
        },
        {
          stepNumber: 3,
          description: "Undo the multiplication by 2: divide both sides by 2.",
          workingLatex: "x = \\frac{y - 9}{2}",
          explanation:
            "Divide the whole right-hand side by 2 to reverse the multiplication. The entire expression y-9 sits over 2.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x to write the inverse function.",
          workingLatex: "f^{-1}(x) = \\frac{x - 9}{2}",
          explanation:
            "Rename to x. Check: f^{-1}(f(x)) = ((2x+9)-9)/2 = 2x/2 = x. The inverse works.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x - 9}{2}\\)",
      canonicalAnswer: "(x-9)/2",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga20-005",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 4x + 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = 4x + 1",
          explanation:
            "Set the output equal to y. The function multiplies by 4 then adds 1; the inverse reverses both, last operation first.",
        },
        {
          stepNumber: 2,
          description: "Subtract 1 from both sides to undo the +1.",
          workingLatex: "y - 1 = 4x",
          explanation:
            "Reversing the final operation (adding 1) means subtracting 1, isolating the 4x term.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 4 to undo the multiplication.",
          workingLatex: "x = \\frac{y - 1}{4}",
          explanation:
            "The whole numerator y-1 is divided by 4, reversing the multiplication by 4.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{x - 1}{4}",
          explanation:
            "Check: f^{-1}(f(x)) = ((4x+1)-1)/4 = 4x/4 = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x - 1}{4}\\)",
      canonicalAnswer: "(x-1)/4",
    },
  },
  {
    id: "ga20-006",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{x + 5}{2}\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "fractional function", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{x + 5}{2}",
          explanation:
            "Here the function adds 5 to the input then divides by 2. The inverse multiplies by 2 first, then subtracts 5.",
        },
        {
          stepNumber: 2,
          description: "Undo the division by 2: multiply both sides by 2.",
          workingLatex: "2y = x + 5",
          explanation:
            "The last operation was dividing by 2, so we reverse it first by multiplying both sides by 2. This clears the fraction.",
        },
        {
          stepNumber: 3,
          description: "Undo the +5: subtract 5 from both sides.",
          workingLatex: "x = 2y - 5",
          explanation:
            "Subtracting 5 reverses the addition of 5 and leaves x by itself.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = 2x - 5",
          explanation:
            "Check: f^{-1}(f(x)) = 2 \\cdot \\frac{x+5}{2} - 5 = (x+5) - 5 = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = 2x - 5\\)",
      canonicalAnswer: "2x-5",
    },
  },
  {
    id: "ga20-007",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{x}{4} - 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "fractional function", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{x}{4} - 1",
          explanation:
            "The function divides the input by 4 then subtracts 1. The inverse adds 1 first, then multiplies by 4.",
        },
        {
          stepNumber: 2,
          description: "Undo the -1: add 1 to both sides.",
          workingLatex: "y + 1 = \\frac{x}{4}",
          explanation:
            "Adding 1 reverses the final operation and isolates the x/4 term.",
        },
        {
          stepNumber: 3,
          description: "Undo the division by 4: multiply both sides by 4.",
          workingLatex: "x = 4(y + 1)",
          explanation:
            "Multiplying the WHOLE side y+1 by 4 reverses the division by 4. Brackets keep the +1 inside the multiplication.",
        },
        {
          stepNumber: 4,
          description: "Expand (optional) and replace y with x.",
          workingLatex: "f^{-1}(x) = 4(x + 1) = 4x + 4",
          explanation:
            "Check: f^{-1}(f(x)) = 4\\left(\\frac{x}{4} - 1 + 1\\right) = 4 \\cdot \\frac{x}{4} = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = 4x + 4\\)",
      canonicalAnswer: "4x+4",
    },
  },
  {
    id: "ga20-008",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 7 - x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse", "self-inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = 7 - x",
          explanation:
            "The function subtracts the input from 7. We rearrange to make x the subject.",
        },
        {
          stepNumber: 2,
          description: "Move x to the left and y to the right.",
          workingLatex: "x = 7 - y",
          explanation:
            "Adding x to both sides and subtracting y from both sides gives x = 7 - y. The structure is symmetric, which hints this function is its own inverse.",
        },
        {
          stepNumber: 3,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = 7 - x",
          explanation:
            "Check: f^{-1}(f(x)) = 7 - (7 - x) = x. The inverse equals the original function — f is self-inverse.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = 7 - x\\)",
      canonicalAnswer: "7-x",
    },
  },
  {
    id: "ga20-009",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Given \\(f(x) = 2x - 3\\), find the value of \\(f^{-1}(5)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the inverse function. Write y = 2x - 3.",
          workingLatex: "y = 2x - 3",
          explanation:
            "One reliable method is to find f^{-1}(x) first, then substitute. Start by setting the output to y.",
        },
        {
          stepNumber: 2,
          description: "Make x the subject.",
          workingLatex: "y + 3 = 2x \\;\\Rightarrow\\; x = \\frac{y + 3}{2}",
          explanation:
            "Add 3 to undo the subtraction, then divide by 2 to undo the multiplication.",
        },
        {
          stepNumber: 3,
          description: "Write the inverse function.",
          workingLatex: "f^{-1}(x) = \\frac{x + 3}{2}",
          explanation:
            "Replace y with x. This is the rule for f^{-1}.",
        },
        {
          stepNumber: 4,
          description: "Substitute x = 5.",
          workingLatex: "f^{-1}(5) = \\frac{5 + 3}{2} = \\frac{8}{2} = 4",
          explanation:
            "Check directly: f(4) = 2(4) - 3 = 5, so f^{-1}(5) must be 4. Confirmed.",
        },
      ],
      finalAnswer: "\\(f^{-1}(5) = 4\\)",
      canonicalAnswer: "4",
    },
  },
  {
    id: "ga20-010",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Given \\(f(x) = \\dfrac{x + 1}{3}\\), find the value of \\(f^{-1}(4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "fractional function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the equation f(x) = 4 to find the input that gives output 4.",
          workingLatex: "\\frac{x + 1}{3} = 4",
          explanation:
            "f^{-1}(4) is the input value x for which f(x) = 4, so we solve this equation. (Finding f^{-1}(x) first would work equally well.)",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 3.",
          workingLatex: "x + 1 = 12",
          explanation:
            "Clearing the denominator removes the fraction.",
        },
        {
          stepNumber: 3,
          description: "Subtract 1 from both sides.",
          workingLatex: "x = 11",
          explanation:
            "This is the input that maps to 4, so f^{-1}(4) = 11.",
        },
        {
          stepNumber: 4,
          description: "Check.",
          workingLatex: "f(11) = \\frac{11 + 1}{3} = \\frac{12}{3} = 4",
          explanation:
            "f sends 11 to 4, confirming f^{-1}(4) = 11.",
        },
      ],
      finalAnswer: "\\(f^{-1}(4) = 11\\)",
      canonicalAnswer: "11",
    },
  },
  {
    id: "ga20-011",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{3x - 4}{2}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "fractional function", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{3x - 4}{2}",
          explanation:
            "Set the output to y so we can rearrange for x. The numerator 3x-4 is divided by 2.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 2 to clear the fraction.",
          workingLatex: "2y = 3x - 4",
          explanation:
            "Reversing the division by 2 first removes the denominator and exposes the linear expression in x.",
        },
        {
          stepNumber: 3,
          description: "Add 4 to both sides.",
          workingLatex: "2y + 4 = 3x",
          explanation:
            "Undo the subtraction of 4 to isolate the 3x term.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 3.",
          workingLatex: "x = \\frac{2y + 4}{3}",
          explanation:
            "Reverse the multiplication by 3. The whole expression 2y+4 sits over 3.",
        },
        {
          stepNumber: 5,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{2x + 4}{3}",
          explanation:
            "Check: f^{-1}(f(x)) = (2 \\cdot \\frac{3x-4}{2} + 4)/3 = ((3x-4)+4)/3 = 3x/3 = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{2x + 4}{3}\\)",
      canonicalAnswer: "(2x+4)/3",
    },
  },
  {
    id: "ga20-012",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 6 - 2x\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "linear inverse", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = 6 - 2x",
          explanation:
            "Set the output to y. Be careful: the coefficient of x is negative, which is where sign errors creep in.",
        },
        {
          stepNumber: 2,
          description: "Move the 2x term to the left and y to the right.",
          workingLatex: "2x = 6 - y",
          explanation:
            "Add 2x to both sides and subtract y from both sides. This collects the x-term on its own with a positive coefficient, which is easier to handle.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2.",
          workingLatex: "x = \\frac{6 - y}{2}",
          explanation:
            "Reverse the multiplication by 2. The whole numerator 6-y is divided by 2.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{6 - x}{2}",
          explanation:
            "Check: f^{-1}(f(x)) = (6 - (6 - 2x))/2 = (2x)/2 = x. Correct — the negative sign was handled properly.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{6 - x}{2}\\)",
      canonicalAnswer: "(6-x)/2",
    },
  },
  {
    id: "ga20-013",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "\\(f(x) = 3x + 2\\). By rearranging, find \\(f^{-1}(x)\\), and verify that \\(f\\big(f^{-1}(x)\\big) = x\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "verify composition", "linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = 3x + 2",
          explanation:
            "Set the output to y to begin the rearrangement.",
        },
        {
          stepNumber: 2,
          description: "Subtract 2, then divide by 3.",
          workingLatex: "y - 2 = 3x \\;\\Rightarrow\\; x = \\frac{y - 2}{3}",
          explanation:
            "Undo the +2 by subtracting 2, then undo the multiplication by 3 by dividing by 3.",
        },
        {
          stepNumber: 3,
          description: "Write the inverse.",
          workingLatex: "f^{-1}(x) = \\frac{x - 2}{3}",
          explanation:
            "Replace y with x to express the inverse as a function of x.",
        },
        {
          stepNumber: 4,
          description: "Verify by substituting f^{-1}(x) into f.",
          workingLatex: "f\\big(f^{-1}(x)\\big) = 3 \\cdot \\frac{x - 2}{3} + 2",
          explanation:
            "Composing f with its inverse should return the original input x. Substitute f^{-1}(x) wherever x appears in f.",
        },
        {
          stepNumber: 5,
          description: "Simplify.",
          workingLatex: "= (x - 2) + 2 = x",
          explanation:
            "The 3 cancels the denominator, leaving x-2, then +2 returns x. This confirms the inverse is correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x - 2}{3}\\)",
      canonicalAnswer: "(x-2)/3",
    },
  },
  {
    id: "ga20-014",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Given \\(f(x) = 5x + 2\\), find \\(f^{-1}(-3)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "negative input"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve f(x) = -3 for x.",
          workingLatex: "5x + 2 = -3",
          explanation:
            "f^{-1}(-3) is the input x whose output is -3, so solve this equation.",
        },
        {
          stepNumber: 2,
          description: "Subtract 2 from both sides.",
          workingLatex: "5x = -5",
          explanation:
            "Undo the +2. Be careful with signs: -3 - 2 = -5.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 5.",
          workingLatex: "x = -1",
          explanation:
            "Undo the multiplication by 5: -5 \\div 5 = -1. So f^{-1}(-3) = -1.",
        },
        {
          stepNumber: 4,
          description: "Check.",
          workingLatex: "f(-1) = 5(-1) + 2 = -5 + 2 = -3",
          explanation:
            "f sends -1 to -3, confirming the answer.",
        },
      ],
      finalAnswer: "\\(f^{-1}(-3) = -1\\)",
      canonicalAnswer: "-1",
    },
  },
  {
    id: "ga20-015",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{x}{2} + 3\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "fractional function", "two-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{x}{2} + 3",
          explanation:
            "The function halves the input then adds 3. The inverse subtracts 3 then doubles.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3 from both sides.",
          workingLatex: "y - 3 = \\frac{x}{2}",
          explanation:
            "Undo the +3 to leave the x/2 term alone.",
        },
        {
          stepNumber: 3,
          description: "Multiply both sides by 2.",
          workingLatex: "x = 2(y - 3)",
          explanation:
            "Reverse the division by 2 by multiplying the whole side y-3 by 2; brackets keep the -3 inside.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x and expand.",
          workingLatex: "f^{-1}(x) = 2(x - 3) = 2x - 6",
          explanation:
            "Check: f^{-1}(f(x)) = 2\\left(\\frac{x}{2} + 3 - 3\\right) = 2 \\cdot \\frac{x}{2} = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = 2x - 6\\)",
      canonicalAnswer: "2x-6",
    },
  },
  {
    id: "ga20-016",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = x^2\\), where \\(x \\geq 0\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "non-linear inverse", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = x^2, \\quad x \\geq 0",
          explanation:
            "The domain restriction x >= 0 is essential: without it x^2 fails to have an inverse, because two inputs (e.g. 3 and -3) give the same output 9.",
        },
        {
          stepNumber: 2,
          description: "Take the square root of both sides.",
          workingLatex: "\\sqrt{y} = \\sqrt{x^2} = |x|",
          explanation:
            "Square rooting undoes squaring, but in general gives |x| (the positive root), so we must decide on the sign using the domain.",
        },
        {
          stepNumber: 3,
          description: "Use the domain to choose the sign.",
          workingLatex: "x \\geq 0 \\;\\Rightarrow\\; x = \\sqrt{y}",
          explanation:
            "Since x >= 0, the input is non-negative, so |x| = x and we take the positive square root. The negative root is rejected.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\sqrt{x}",
          explanation:
            "Check: f^{-1}(f(x)) = \\sqrt{x^2} = x for x >= 0. The inverse is the positive square root.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\sqrt{x}\\)",
      canonicalAnswer: "sqrt(x)",
    },
  },
  {
    id: "ga20-017",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = x^2 + 4\\), where \\(x \\geq 0\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "non-linear inverse", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = x^2 + 4, \\quad x \\geq 0",
          explanation:
            "The function squares the input then adds 4. The domain x >= 0 guarantees an inverse exists.",
        },
        {
          stepNumber: 2,
          description: "Subtract 4 from both sides.",
          workingLatex: "y - 4 = x^2",
          explanation:
            "Undo the +4 first to isolate the x^2 term.",
        },
        {
          stepNumber: 3,
          description: "Take the square root.",
          workingLatex: "x = \\sqrt{y - 4}",
          explanation:
            "Square rooting reverses the squaring. Because x >= 0 we take the POSITIVE root only (the negative root would lie outside the domain).",
        },
        {
          stepNumber: 4,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\sqrt{x - 4}",
          explanation:
            "Check: f^{-1}(f(x)) = \\sqrt{(x^2 + 4) - 4} = \\sqrt{x^2} = x for x >= 0. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\sqrt{x - 4}\\)",
      canonicalAnswer: "sqrt(x-4)",
    },
  },
  {
    id: "ga20-018",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Standard",
    answerType: "numeric",
    questionText: "Given \\(f(x) = x^2 - 1\\) for \\(x \\geq 0\\), find \\(f^{-1}(8)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "non-linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve f(x) = 8 for x with x >= 0.",
          workingLatex: "x^2 - 1 = 8",
          explanation:
            "f^{-1}(8) is the input (in the domain x >= 0) that gives output 8.",
        },
        {
          stepNumber: 2,
          description: "Add 1 to both sides.",
          workingLatex: "x^2 = 9",
          explanation:
            "Undo the -1 to isolate x^2.",
        },
        {
          stepNumber: 3,
          description: "Take the square root, using the domain to pick the sign.",
          workingLatex: "x = \\sqrt{9} = 3 \\quad (\\text{reject } x = -3 \\text{ since } x \\geq 0)",
          explanation:
            "x^2 = 9 gives x = 3 or x = -3, but the domain x >= 0 rules out -3. So f^{-1}(8) = 3.",
        },
        {
          stepNumber: 4,
          description: "Check.",
          workingLatex: "f(3) = 3^2 - 1 = 9 - 1 = 8",
          explanation:
            "f sends 3 to 8, confirming f^{-1}(8) = 3.",
        },
      ],
      finalAnswer: "\\(f^{-1}(8) = 3\\)",
      canonicalAnswer: "3",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga20-019",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{2x + 1}{5}\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "fractional function", "multi-step"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{2x + 1}{5}",
          explanation:
            "Set the output to y. The numerator 2x+1 is divided by 5.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 5.",
          workingLatex: "5y = 2x + 1",
          explanation:
            "Clear the denominator by reversing the division by 5.",
        },
        {
          stepNumber: 3,
          description: "Subtract 1 from both sides.",
          workingLatex: "5y - 1 = 2x",
          explanation:
            "Undo the +1 to isolate the 2x term.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2.",
          workingLatex: "x = \\frac{5y - 1}{2}",
          explanation:
            "Reverse the multiplication by 2; the whole expression 5y-1 sits over 2.",
        },
        {
          stepNumber: 5,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{5x - 1}{2}",
          explanation:
            "Check: f^{-1}(f(x)) = (5 \\cdot \\frac{2x+1}{5} - 1)/2 = ((2x+1)-1)/2 = 2x/2 = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{5x - 1}{2}\\)",
      canonicalAnswer: "(5x-1)/2",
    },
  },
  {
    id: "ga20-020",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{1}{x + 2}\\), \\(x \\neq -2\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "reciprocal function", "rearrangement"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{1}{x + 2}",
          explanation:
            "Here the variable is in the denominator, so the rearrangement is different from a linear case. This is f^{-1}, not the reciprocal 1/f.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by (x + 2).",
          workingLatex: "y(x + 2) = 1",
          explanation:
            "Multiplying clears the fraction and brings the unknown x out of the denominator.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by y to isolate the bracket.",
          workingLatex: "x + 2 = \\frac{1}{y}",
          explanation:
            "Dividing by y (valid for y \\neq 0) leaves x+2 equal to 1/y.",
        },
        {
          stepNumber: 4,
          description: "Subtract 2 from both sides.",
          workingLatex: "x = \\frac{1}{y} - 2",
          explanation:
            "Undo the +2 to make x the subject.",
        },
        {
          stepNumber: 5,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{1}{x} - 2",
          explanation:
            "Check: f(f^{-1}(x)) = 1/\\left(\\left(\\frac{1}{x} - 2\\right) + 2\\right) = 1/\\frac{1}{x} = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{1}{x} - 2\\)",
      canonicalAnswer: "1/x-2",
    },
  },
  {
    id: "ga20-021",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = (x - 1)^2\\), where \\(x \\geq 1\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "non-linear inverse", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = (x - 1)^2, \\quad x \\geq 1",
          explanation:
            "The function subtracts 1 then squares. The domain x >= 1 makes the bracket x-1 non-negative, so an inverse exists.",
        },
        {
          stepNumber: 2,
          description: "Take the square root of both sides.",
          workingLatex: "\\sqrt{y} = |x - 1|",
          explanation:
            "Square rooting undoes the squaring but produces the modulus |x-1|; the sign is fixed by the domain.",
        },
        {
          stepNumber: 3,
          description: "Resolve the modulus using the domain.",
          workingLatex: "x \\geq 1 \\;\\Rightarrow\\; x - 1 \\geq 0 \\;\\Rightarrow\\; |x - 1| = x - 1",
          explanation:
            "Since x >= 1, the bracket x-1 is non-negative, so we take the positive root: \\sqrt{y} = x - 1.",
        },
        {
          stepNumber: 4,
          description: "Add 1 to both sides.",
          workingLatex: "x = \\sqrt{y} + 1",
          explanation:
            "Undo the -1 to make x the subject.",
        },
        {
          stepNumber: 5,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\sqrt{x} + 1",
          explanation:
            "Check: f^{-1}(f(x)) = \\sqrt{(x-1)^2} + 1 = (x-1) + 1 = x for x >= 1. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\sqrt{x} + 1\\)",
      canonicalAnswer: "sqrt(x)+1",
    },
  },
  {
    id: "ga20-022",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = (x + 3)^2 - 5\\), where \\(x \\geq -3\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "non-linear inverse", "completed square", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = (x + 3)^2 - 5, \\quad x \\geq -3",
          explanation:
            "This is in completed-square form. The domain x >= -3 makes the bracket x+3 non-negative, allowing a single-valued inverse.",
        },
        {
          stepNumber: 2,
          description: "Add 5 to both sides.",
          workingLatex: "y + 5 = (x + 3)^2",
          explanation:
            "Undo the -5 to isolate the squared bracket.",
        },
        {
          stepNumber: 3,
          description: "Take the square root.",
          workingLatex: "\\sqrt{y + 5} = |x + 3|",
          explanation:
            "Reversing the squaring gives the modulus of the bracket; the domain fixes the sign.",
        },
        {
          stepNumber: 4,
          description: "Resolve the sign with the domain.",
          workingLatex: "x \\geq -3 \\;\\Rightarrow\\; x + 3 \\geq 0 \\;\\Rightarrow\\; x + 3 = \\sqrt{y + 5}",
          explanation:
            "Since x+3 is non-negative, take the positive root only.",
        },
        {
          stepNumber: 5,
          description: "Subtract 3 from both sides.",
          workingLatex: "x = \\sqrt{y + 5} - 3",
          explanation:
            "Undo the +3 to make x the subject.",
        },
        {
          stepNumber: 6,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\sqrt{x + 5} - 3",
          explanation:
            "Check: f^{-1}(f(x)) = \\sqrt{((x+3)^2 - 5) + 5} - 3 = \\sqrt{(x+3)^2} - 3 = (x+3) - 3 = x for x >= -3. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\sqrt{x + 5} - 3\\)",
      canonicalAnswer: "sqrt(x+5)-3",
    },
  },
  {
    id: "ga20-023",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{x + 4}{x - 1}\\), \\(x \\neq 1\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "rational function", "factorising out x"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{x + 4}{x - 1}",
          explanation:
            "The unknown x appears in both the numerator and the denominator, so we will clear the fraction and then collect the x-terms.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by (x - 1).",
          workingLatex: "y(x - 1) = x + 4",
          explanation:
            "Clearing the denominator removes the fraction.",
        },
        {
          stepNumber: 3,
          description: "Expand the left-hand side.",
          workingLatex: "xy - y = x + 4",
          explanation:
            "Distribute y over the bracket so all terms are visible.",
        },
        {
          stepNumber: 4,
          description: "Collect all x-terms on one side, everything else on the other.",
          workingLatex: "xy - x = y + 4",
          explanation:
            "Add y to both sides and subtract x from both sides so that the two terms containing x are together.",
        },
        {
          stepNumber: 5,
          description: "Factorise out x.",
          workingLatex: "x(y - 1) = y + 4",
          explanation:
            "x is a common factor of xy and -x; factorising lets us isolate x by a single division.",
        },
        {
          stepNumber: 6,
          description: "Divide by (y - 1).",
          workingLatex: "x = \\frac{y + 4}{y - 1}",
          explanation:
            "Dividing by y-1 makes x the subject. Interestingly the same form reappears.",
        },
        {
          stepNumber: 7,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{x + 4}{x - 1}",
          explanation:
            "The inverse equals the original function, so f is self-inverse. Check with x=2: f(2) = 6/1 = 6, and f(6) = 10/5 = 2, returning the input.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{x + 4}{x - 1}\\)",
      canonicalAnswer: "(x+4)/(x-1)",
    },
  },
  {
    id: "ga20-024",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\dfrac{3x}{x + 2}\\), \\(x \\neq -2\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "rational function", "factorising out x"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{3x}{x + 2}",
          explanation:
            "x appears top and bottom; clear the fraction, then gather the x-terms.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by (x + 2).",
          workingLatex: "y(x + 2) = 3x",
          explanation:
            "Clear the denominator.",
        },
        {
          stepNumber: 3,
          description: "Expand the left-hand side.",
          workingLatex: "xy + 2y = 3x",
          explanation:
            "Distribute y over the bracket.",
        },
        {
          stepNumber: 4,
          description: "Collect x-terms on one side.",
          workingLatex: "2y = 3x - xy",
          explanation:
            "Subtract xy from both sides so both x-terms are on the right.",
        },
        {
          stepNumber: 5,
          description: "Factorise out x.",
          workingLatex: "2y = x(3 - y)",
          explanation:
            "x is common to 3x and -xy; factorising prepares to isolate x.",
        },
        {
          stepNumber: 6,
          description: "Divide by (3 - y).",
          workingLatex: "x = \\frac{2y}{3 - y}",
          explanation:
            "Dividing by 3-y makes x the subject.",
        },
        {
          stepNumber: 7,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\frac{2x}{3 - x}",
          explanation:
            "Check with x=2: f(2) = 6/4 = 3/2; f^{-1}(3/2) = (2 \\cdot 3/2)/(3 - 3/2) = 3/(3/2) = 2, recovering the input.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{2x}{3 - x}\\)",
      canonicalAnswer: "2x/(3-x)",
    },
  },
  {
    id: "ga20-025",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText: "Given \\(f(x) = \\dfrac{2x - 7}{3}\\), find \\(f^{-1}(1)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "fractional function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve f(x) = 1.",
          workingLatex: "\\frac{2x - 7}{3} = 1",
          explanation:
            "f^{-1}(1) is the input whose output is 1, so set f(x) = 1 and solve.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 3.",
          workingLatex: "2x - 7 = 3",
          explanation:
            "Clear the denominator.",
        },
        {
          stepNumber: 3,
          description: "Add 7 to both sides.",
          workingLatex: "2x = 10",
          explanation:
            "Undo the -7.",
        },
        {
          stepNumber: 4,
          description: "Divide by 2.",
          workingLatex: "x = 5",
          explanation:
            "So f^{-1}(1) = 5.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "f(5) = \\frac{2(5) - 7}{3} = \\frac{3}{3} = 1",
          explanation:
            "f sends 5 to 1, confirming f^{-1}(1) = 5.",
        },
      ],
      finalAnswer: "\\(f^{-1}(1) = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga20-026",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Given \\(f(x) = (x - 2)^2 + 3\\) for \\(x \\geq 2\\), find \\(f^{-1}(12)\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "evaluate inverse", "non-linear inverse", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Solve f(x) = 12 with x >= 2.",
          workingLatex: "(x - 2)^2 + 3 = 12",
          explanation:
            "f^{-1}(12) is the input in the domain x >= 2 mapping to 12.",
        },
        {
          stepNumber: 2,
          description: "Subtract 3 from both sides.",
          workingLatex: "(x - 2)^2 = 9",
          explanation:
            "Isolate the squared bracket.",
        },
        {
          stepNumber: 3,
          description: "Take the square root.",
          workingLatex: "x - 2 = \\pm 3",
          explanation:
            "Square rooting gives two possibilities; the domain will select one.",
        },
        {
          stepNumber: 4,
          description: "Use the domain to pick the valid root.",
          workingLatex: "x - 2 = 3 \\;\\Rightarrow\\; x = 5 \\quad (\\text{reject } x - 2 = -3 \\Rightarrow x = -1)",
          explanation:
            "x = -1 lies outside x >= 2, so it is rejected. Only x = 5 is valid.",
        },
        {
          stepNumber: 5,
          description: "Check.",
          workingLatex: "f(5) = (5 - 2)^2 + 3 = 9 + 3 = 12",
          explanation:
            "f sends 5 to 12, so f^{-1}(12) = 5.",
        },
      ],
      finalAnswer: "\\(f^{-1}(12) = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga20-027",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText: "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = \\sqrt{x - 3}\\), where \\(x \\geq 3\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "square-root function", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\sqrt{x - 3}, \\quad x \\geq 3",
          explanation:
            "The domain x >= 3 keeps the expression under the root non-negative, and the output y is >= 0. This output range becomes the domain of the inverse.",
        },
        {
          stepNumber: 2,
          description: "Square both sides to remove the root.",
          workingLatex: "y^2 = x - 3",
          explanation:
            "Squaring undoes the square root. Because y = \\sqrt{...} is non-negative, squaring is valid with no sign ambiguity here.",
        },
        {
          stepNumber: 3,
          description: "Add 3 to both sides.",
          workingLatex: "x = y^2 + 3",
          explanation:
            "Undo the -3 to make x the subject.",
        },
        {
          stepNumber: 4,
          description: "Replace y with x and state the domain.",
          workingLatex: "f^{-1}(x) = x^2 + 3, \\quad x \\geq 0",
          explanation:
            "The inverse takes the original outputs (which were >= 0) as its inputs, so its domain is x >= 0. Check: f^{-1}(f(x)) = (\\sqrt{x-3})^2 + 3 = (x-3) + 3 = x. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = x^2 + 3, \\; x \\geq 0\\)",
      canonicalAnswer: "x^2+3",
    },
  },
  {
    id: "ga20-028",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "\\(f(x) = \\dfrac{4x - 3}{2}\\). Find \\(f^{-1}(x)\\) and verify that \\(f\\big(f^{-1}(x)\\big) = x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "verify composition", "fractional function"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = \\frac{4x - 3}{2}",
          explanation:
            "Set the output to y to begin rearranging.",
        },
        {
          stepNumber: 2,
          description: "Multiply both sides by 2.",
          workingLatex: "2y = 4x - 3",
          explanation:
            "Clear the denominator.",
        },
        {
          stepNumber: 3,
          description: "Add 3, then divide by 4.",
          workingLatex: "2y + 3 = 4x \\;\\Rightarrow\\; x = \\frac{2y + 3}{4}",
          explanation:
            "Undo the -3 by adding 3, then undo the multiplication by 4 by dividing by 4.",
        },
        {
          stepNumber: 4,
          description: "Write the inverse.",
          workingLatex: "f^{-1}(x) = \\frac{2x + 3}{4}",
          explanation:
            "Replace y with x.",
        },
        {
          stepNumber: 5,
          description: "Substitute f^{-1}(x) into f.",
          workingLatex: "f\\big(f^{-1}(x)\\big) = \\frac{4 \\cdot \\frac{2x + 3}{4} - 3}{2}",
          explanation:
            "Wherever f has an input, put f^{-1}(x). We expect the result to simplify to x.",
        },
        {
          stepNumber: 6,
          description: "Simplify.",
          workingLatex: "= \\frac{(2x + 3) - 3}{2} = \\frac{2x}{2} = x",
          explanation:
            "The 4 cancels with the denominator 4, then -3+3 vanishes and 2x/2 = x. The verification succeeds.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\dfrac{2x + 3}{4}\\)",
      canonicalAnswer: "(2x+3)/4",
    },
  },
  {
    id: "ga20-029",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Find the inverse function \\(f^{-1}(x)\\) for \\(f(x) = 2x^2 - 8\\), where \\(x \\geq 0\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "non-linear inverse", "domain restriction"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write y = f(x).",
          workingLatex: "y = 2x^2 - 8, \\quad x \\geq 0",
          explanation:
            "The function squares the input, multiplies by 2, then subtracts 8. The domain x >= 0 guarantees a one-to-one function and hence an inverse.",
        },
        {
          stepNumber: 2,
          description: "Add 8 to both sides.",
          workingLatex: "y + 8 = 2x^2",
          explanation:
            "Undo the -8 first.",
        },
        {
          stepNumber: 3,
          description: "Divide both sides by 2.",
          workingLatex: "\\frac{y + 8}{2} = x^2",
          explanation:
            "Reverse the multiplication by 2 to isolate x^2. The whole numerator y+8 is divided by 2.",
        },
        {
          stepNumber: 4,
          description: "Take the square root, choosing the positive root.",
          workingLatex: "x = \\sqrt{\\frac{y + 8}{2}}",
          explanation:
            "Because x >= 0 we take the positive root only; the negative root lies outside the domain.",
        },
        {
          stepNumber: 5,
          description: "Replace y with x.",
          workingLatex: "f^{-1}(x) = \\sqrt{\\frac{x + 8}{2}}",
          explanation:
            "Check: f^{-1}(f(x)) = \\sqrt{\\frac{(2x^2 - 8) + 8}{2}} = \\sqrt{\\frac{2x^2}{2}} = \\sqrt{x^2} = x for x >= 0. Correct.",
        },
      ],
      finalAnswer: "\\(f^{-1}(x) = \\sqrt{\\dfrac{x + 8}{2}}\\)",
      canonicalAnswer: "sqrt((x+8)/2)",
    },
  },
  {
    id: "ga20-030",
    topicRef: "ga20",
    topicTitle: "Inverse functions",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "The functions are \\(f(x) = 3x + 1\\) and \\(g(x) = \\dfrac{x - 4}{2}\\). Find the value of \\(x\\) for which \\(f^{-1}(x) = g(x)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["inverse functions", "equation", "linear inverse"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find f^{-1}(x). Write y = 3x + 1.",
          workingLatex: "y = 3x + 1",
          explanation:
            "First we need a formula for f^{-1}(x), then we set it equal to g(x).",
        },
        {
          stepNumber: 2,
          description: "Make x the subject.",
          workingLatex: "y - 1 = 3x \\;\\Rightarrow\\; x = \\frac{y - 1}{3}",
          explanation:
            "Subtract 1 then divide by 3.",
        },
        {
          stepNumber: 3,
          description: "Write the inverse.",
          workingLatex: "f^{-1}(x) = \\frac{x - 1}{3}",
          explanation:
            "Replace y with x.",
        },
        {
          stepNumber: 4,
          description: "Set f^{-1}(x) = g(x).",
          workingLatex: "\\frac{x - 1}{3} = \\frac{x - 4}{2}",
          explanation:
            "We want the x-value where the two expressions are equal.",
        },
        {
          stepNumber: 5,
          description: "Cross-multiply to clear the fractions.",
          workingLatex: "2(x - 1) = 3(x - 4)",
          explanation:
            "Multiplying both sides by 6 (the common denominator) gives 2(x-1) = 3(x-4).",
        },
        {
          stepNumber: 6,
          description: "Expand both sides.",
          workingLatex: "2x - 2 = 3x - 12",
          explanation:
            "Distribute the brackets carefully.",
        },
        {
          stepNumber: 7,
          description: "Solve for x.",
          workingLatex: "-2 + 12 = 3x - 2x \\;\\Rightarrow\\; x = 10",
          explanation:
            "Collect x-terms on one side and constants on the other: 10 = x.",
        },
        {
          stepNumber: 8,
          description: "Check both sides.",
          workingLatex: "f^{-1}(10) = \\frac{10 - 1}{3} = 3, \\quad g(10) = \\frac{10 - 4}{2} = 3",
          explanation:
            "Both give 3 when x = 10, confirming the solution.",
        },
      ],
      finalAnswer: "\\(x = 10\\)",
      canonicalAnswer: "10",
    },
  },
];
