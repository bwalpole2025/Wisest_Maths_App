/**
 * Topic: Representing inequalities on a number line
 * Ref: ga47  (DfE A22)
 * Strand: Algebra — GCSE Maths (Foundation and Higher — Tier "Both")
 *
 * Coverage: representing inequalities on a number line using the standard
 *   convention — an OPEN circle ○ marks an endpoint that is NOT included
 *   (strict < or >), a CLOSED/filled circle ● marks an endpoint that IS
 *   included (≤ or ≥), and an arrow/line shows the direction of the solution
 *   set (to the left for x < / ≤, to the right for x > / ≥). A compound
 *   inequality a ≤ x < b is shown as a SEGMENT between two endpoints, one end
 *   open and one end closed. Number lines cannot be image files in this bank,
 *   so every diagram is described precisely in words in both the stem and the
 *   worked-solution prose.
 *
 *   Clusters:
 *   (1) WRITE the inequality from a described number line (circles + arrow →
 *       inequality);
 *   (2) DESCRIBE the number line for a given inequality (which endpoint open vs
 *       closed, direction/segment);
 *   (3) compound inequalities a ≤ x < b as a segment with one open + one
 *       closed end;
 *   (4) LIST the integer values shown / satisfying the represented inequality;
 *   (5) SOLVE a linear inequality, THEN represent the solution on a number line
 *       (combines the ga46 solving skill);
 *   (6) common-error spotting (open vs closed circle, wrong direction).
 *   Solutions stress: open circle = endpoint excluded (strict), closed circle =
 *   endpoint included (≤/≥); arrow direction matches the inequality sign;
 *   for compound inequalities each end is read separately; and after solving,
 *   the endpoint inclusion and direction are CHECKED against the inequality.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga47-001 .. ga47-004  (4)   clean read/describe items, 2 marks
 *   - Standard:   ga47-005 .. ga47-018  (14)
 *   - Challenge:  ga47-019 .. ga47-030  (12)
 * Id range: ga47-001 .. ga47-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Inequality signs use \\le, \\ge,
 *   < and >.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga47-001",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "A number line shows an OPEN circle ○ at \\(2\\) with the line drawn to the RIGHT (arrow pointing towards larger numbers). Write down the inequality, in terms of \\(x\\), that this number line represents.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the circle to decide strict vs inclusive.",
          workingLatex: "\\circ \\text{ at } 2 \\Rightarrow 2 \\text{ is NOT included}",
          explanation:
            "Start with the circle, because it fixes which kind of sign you need. An open (unfilled) circle means the endpoint is NOT part of the solution.",
        },
        {
          stepNumber: 2,
          description: "Turn 'not included' into a strict sign.",
          workingLatex: "2 \\text{ excluded} \\Rightarrow \\text{strict sign } (<\\text{ or }>)",
          explanation:
            "An excluded endpoint always gives a strict inequality: < or >, never ≤ or ≥. We don't yet know which of < or > — that comes from the direction of the line.",
        },
        {
          stepNumber: 3,
          description: "Read the direction of the line.",
          workingLatex: "\\text{line to the right} \\Rightarrow x \\text{ is greater than } 2",
          explanation:
            "The line points to the right, towards larger numbers, so every solution sits above 2. 'Greater than' is the > sign.",
        },
        {
          stepNumber: 4,
          description: "Combine the circle and the direction.",
          workingLatex: "x > 2",
          explanation:
            "A strict sign (open circle) pointing at larger numbers (line to the right) gives x > 2. A common slip is to write x ≥ 2 — but the open circle rules out the 'equals' part.",
        },
      ],
      finalAnswer: "\\(x > 2\\)",
      canonicalAnswer: "x>2",
    },
  },
  {
    id: "ga47-002",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "A number line shows a CLOSED (filled) circle ● at \\(-1\\) with the line drawn to the LEFT (arrow pointing towards smaller numbers). Write down the inequality, in terms of \\(x\\), that this number line represents.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the type of circle.",
          workingLatex: "\\bullet \\text{ at } -1 \\Rightarrow -1 \\text{ IS included}",
          explanation:
            "A closed (filled) circle means the endpoint IS part of the solution. So -1 itself counts as a value of x.",
        },
        {
          stepNumber: 2,
          description: "Turn 'included' into a non-strict sign.",
          workingLatex: "-1 \\text{ included} \\Rightarrow \\text{sign is } \\le \\text{ or } \\ge",
          explanation:
            "Because the endpoint is included, the inequality must carry the 'or equal to' part: ≤ or ≥, not < or >. The direction of the line will tell us which one.",
        },
        {
          stepNumber: 3,
          description: "Read the direction of the line.",
          workingLatex: "\\text{line to the left} \\Rightarrow x \\text{ is less than } -1",
          explanation:
            "The line points to the left, towards smaller numbers, so every solution is at or below -1. 'Less than' pairs with the ≤ side.",
        },
        {
          stepNumber: 4,
          description: "Combine the circle and the direction.",
          workingLatex: "x \\le -1",
          explanation:
            "An included endpoint (closed circle) with the line to the left gives x ≤ -1. Keep the minus sign on the boundary; writing x ≤ 1 would be a sign slip.",
        },
      ],
      finalAnswer: "\\(x \\le -1\\)",
      canonicalAnswer: "x<=-1",
    },
  },
  {
    id: "ga47-003",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Foundation",
    answerType: "interval",
    questionText:
      "Describe the number line that represents the inequality \\(x \\ge 3\\). State the type of circle at \\(3\\) and the direction of the line.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "describe number line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read what the ≥ sign says about the endpoint.",
          workingLatex: "x \\ge 3 \\Rightarrow 3 \\text{ is included}",
          explanation:
            "The sign ≥ means 'greater than OR EQUAL to', so 3 itself is a solution. That 'or equal to' is the key piece of information for the circle.",
        },
        {
          stepNumber: 2,
          description: "Turn 'included' into a closed circle.",
          workingLatex: "3 \\text{ included} \\Rightarrow \\bullet \\text{ at } 3",
          explanation:
            "An included endpoint is always drawn as a closed (filled) circle. If 3 had been excluded you would draw an open circle instead.",
        },
        {
          stepNumber: 3,
          description: "Decide the direction from the sign.",
          workingLatex: "x \\ge 3 \\Rightarrow \\text{line to the right}",
          explanation:
            "x is greater than (or equal to) 3, so the solutions are 3 and everything to its right. The line/arrow is therefore drawn to the right of 3.",
        },
      ],
      finalAnswer: "\\(\\text{Closed circle } \\bullet \\text{ at } 3,\\ \\text{line to the right}\\)",
      canonicalAnswer: "closed circle at 3, line to the right",
    },
  },
  {
    id: "ga47-004",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "A number line shows a CLOSED circle ● at \\(-2\\) and an OPEN circle ○ at \\(3\\), with the segment between them shaded. List all the integer values of \\(x\\) that the number line represents.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "list integers", "compound inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left (closed) endpoint.",
          workingLatex: "\\bullet \\text{ at } -2 \\Rightarrow -2 \\le x",
          explanation:
            "The closed circle at -2 includes -2, and the shading runs to its right, so x is at least -2. That gives the left half of the inequality: -2 ≤ x.",
        },
        {
          stepNumber: 2,
          description: "Read the right (open) endpoint.",
          workingLatex: "\\circ \\text{ at } 3 \\Rightarrow x < 3",
          explanation:
            "The open circle at 3 excludes 3, and the shading runs to its left, so x is strictly less than 3. That gives the right half: x < 3.",
        },
        {
          stepNumber: 3,
          description: "Combine into a compound inequality.",
          workingLatex: "-2 \\le x < 3",
          explanation:
            "Putting the two ends together with x in the middle gives -2 ≤ x < 3 — closed at -2 (≤) and open at 3 (<).",
        },
        {
          stepNumber: 4,
          description: "List the integers from -2 up to but not including 3.",
          workingLatex: "x \\in \\{-2, -1, 0, 1, 2\\}",
          explanation:
            "Start at -2 (included, closed circle) and count up. Stop BEFORE 3 because that circle is open, so 3 is not a solution. The integers are -2, -1, 0, 1, 2.",
        },
      ],
      finalAnswer: "\\(-2,\\ -1,\\ 0,\\ 1,\\ 2\\)",
      canonicalAnswer: "{-2,-1,0,1,2}",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga47-005",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "A number line shows an OPEN circle ○ at \\(-4\\) with the line drawn to the LEFT. Write down the inequality, in terms of \\(x\\), that this number line represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify what the open circle tells you about the endpoint.",
          workingLatex: "\\circ \\text{ at } -4 \\Rightarrow -4 \\text{ is NOT included}",
          explanation:
            "An open (unfilled) circle marks an endpoint that is excluded, so the inequality will be strict (< or >), never ≤ or ≥. Read the circle first; it decides the kind of sign.",
        },
        {
          stepNumber: 2,
          description: "Identify what the direction of the line tells you.",
          workingLatex: "\\text{line to the left} \\Rightarrow x \\text{ is less than } -4",
          explanation:
            "The shaded line points left, towards smaller numbers, so every solution is less than -4. 'Less than' is the < sign.",
        },
        {
          stepNumber: 3,
          description: "Combine the circle and the direction.",
          workingLatex: "x < -4",
          explanation:
            "A strict sign (open circle) plus 'to the left' (less than) gives x < -4. Note the boundary number -4 keeps its negative sign — a quick slip is to drop it and write x < 4.",
        },
      ],
      finalAnswer: "\\(x < -4\\)",
      canonicalAnswer: "x<-4",
    },
  },
  {
    id: "ga47-006",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "A number line shows a CLOSED circle ● at \\(5\\) with the line drawn to the RIGHT. Write down the inequality, in terms of \\(x\\), that this number line represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the circle to decide strict vs inclusive.",
          workingLatex: "\\bullet \\text{ at } 5 \\Rightarrow 5 \\text{ IS included}",
          explanation:
            "A filled circle means the endpoint belongs to the solution set, so the inequality uses ≤ or ≥ rather than < or >. The direction will decide which way it points.",
        },
        {
          stepNumber: 2,
          description: "Read the direction of the line.",
          workingLatex: "\\text{line to the right} \\Rightarrow x \\text{ is greater than } 5",
          explanation:
            "The line points right, towards larger numbers, so solutions are 5 and above — 'greater than'.",
        },
        {
          stepNumber: 3,
          description: "Combine the two pieces of information.",
          workingLatex: "x \\ge 5",
          explanation:
            "'Greater than' with an INCLUDED endpoint is the ≥ sign, so the inequality is x ≥ 5. If the circle had been open you'd write x > 5 instead.",
        },
      ],
      finalAnswer: "\\(x \\ge 5\\)",
      canonicalAnswer: "x>=5",
    },
  },
  {
    id: "ga47-007",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Describe the number line that represents the inequality \\(x < -2\\). State the type of circle at \\(-2\\) and the direction of the line, and explain your choice of circle.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "describe number line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read what the < sign says about the endpoint.",
          workingLatex: "x < -2 \\Rightarrow -2 \\text{ is NOT included}",
          explanation:
            "The sign < means 'strictly less than', so -2 itself is not a solution. The word 'strictly' is what excludes the endpoint.",
        },
        {
          stepNumber: 2,
          description: "Turn 'excluded' into an open circle.",
          workingLatex: "-2 \\text{ excluded} \\Rightarrow \\circ \\text{ at } -2",
          explanation:
            "An excluded endpoint is always drawn as an open (unfilled) circle. A closed circle here would wrongly include -2, which is the choice the question wants you to justify.",
        },
        {
          stepNumber: 3,
          description: "Use the sign to choose the direction.",
          workingLatex: "x < -2 \\Rightarrow \\text{line to the left of } -2",
          explanation:
            "x is less than -2, so the solutions are everything to the LEFT of -2 (smaller numbers). The arrow points left.",
        },
        {
          stepNumber: 4,
          description: "State the full description.",
          workingLatex: "\\circ \\text{ at } -2, \\ \\text{shade to the left}",
          explanation:
            "So you draw an open circle at -2 and shade/arrow the line to the left. The open circle is essential: a closed circle would wrongly include -2.",
        },
      ],
      finalAnswer: "\\(\\text{Open circle } \\circ \\text{ at } -2,\\ \\text{line to the left}\\)",
      canonicalAnswer: "open circle at -2, line to the left",
    },
  },
  {
    id: "ga47-008",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Describe the number line that represents the inequality \\(x \\le 0\\). State the type of circle at \\(0\\) and the direction of the line.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "describe number line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read what the ≤ sign says about the endpoint.",
          workingLatex: "x \\le 0 \\Rightarrow 0 \\text{ is included}",
          explanation:
            "The sign ≤ means 'less than OR EQUAL to', so 0 is a solution. The 'or equal to' part is what includes the endpoint.",
        },
        {
          stepNumber: 2,
          description: "Turn 'included' into a closed circle.",
          workingLatex: "0 \\text{ included} \\Rightarrow \\bullet \\text{ at } 0",
          explanation:
            "An included endpoint is drawn as a closed (filled) circle. The circle sits exactly on 0, not just near it.",
        },
        {
          stepNumber: 3,
          description: "Choose the direction from the sign.",
          workingLatex: "x \\le 0 \\Rightarrow \\text{line to the left}",
          explanation:
            "x is less than (or equal to) 0, so solutions are 0 and everything to its left. The line/arrow goes left.",
        },
        {
          stepNumber: 4,
          description: "State the description.",
          workingLatex: "\\bullet \\text{ at } 0, \\ \\text{shade to the left}",
          explanation:
            "Draw a closed circle exactly at 0 and shade the line to the left. The closed circle records that 0 itself satisfies x ≤ 0.",
        },
      ],
      finalAnswer: "\\(\\text{Closed circle } \\bullet \\text{ at } 0,\\ \\text{line to the left}\\)",
      canonicalAnswer: "closed circle at 0, line to the left",
    },
  },
  {
    id: "ga47-009",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "A number line shows a CLOSED circle ● at \\(-3\\) and an OPEN circle ○ at \\(2\\), with the segment between them shaded. Write down the inequality, in terms of \\(x\\), that this number line represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left-hand endpoint.",
          workingLatex: "\\bullet \\text{ at } -3 \\Rightarrow -3 \\le x",
          explanation:
            "Read each end separately. The closed circle at -3 means -3 is included, and the shading is to its right, so x is at least -3: -3 ≤ x.",
        },
        {
          stepNumber: 2,
          description: "Read the right-hand endpoint.",
          workingLatex: "\\circ \\text{ at } 2 \\Rightarrow x < 2",
          explanation:
            "The open circle at 2 means 2 is excluded, and the shading is to its left, so x is strictly less than 2: x < 2.",
        },
        {
          stepNumber: 3,
          description: "Combine both ends into one compound inequality.",
          workingLatex: "-3 \\le x < 2",
          explanation:
            "Writing the two conditions together, with x in the middle, gives -3 ≤ x < 2. The signs reflect the closed end (≤) and the open end (<) — keep each end's sign attached to its own number.",
        },
      ],
      finalAnswer: "\\(-3 \\le x < 2\\)",
      canonicalAnswer: "-3<=x<2",
    },
  },
  {
    id: "ga47-010",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Describe the number line that represents the compound inequality \\(1 < x \\le 4\\). State the type of circle at each endpoint and what is shaded between them.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "describe number line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left endpoint of the compound inequality.",
          workingLatex: "1 < x \\Rightarrow \\circ \\text{ at } 1",
          explanation:
            "Split the compound inequality into its two ends. At the left, 1 < x is strict, so 1 is NOT included — an open circle at 1.",
        },
        {
          stepNumber: 2,
          description: "Read the right endpoint.",
          workingLatex: "x \\le 4 \\Rightarrow \\bullet \\text{ at } 4",
          explanation:
            "At the right, x ≤ 4 includes 4, so that endpoint is a closed (filled) circle at 4.",
        },
        {
          stepNumber: 3,
          description: "Describe the segment between the two endpoints.",
          workingLatex: "\\text{shade the segment from } 1 \\text{ to } 4",
          explanation:
            "Because x lies between the two boundaries, shade only the segment joining them — open circle at 1, closed circle at 4, with the line between filled in. There are no arrows: the solution is bounded on both sides.",
        },
      ],
      finalAnswer: "\\(\\text{Open } \\circ \\text{ at } 1,\\ \\text{closed } \\bullet \\text{ at } 4,\\ \\text{segment shaded between}\\)",
      canonicalAnswer: "open circle at 1, closed circle at 4, segment between",
    },
  },
  {
    id: "ga47-011",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A number line shows an OPEN circle ○ at \\(-1\\) and a CLOSED circle ● at \\(4\\), with the segment between them shaded. List all the integer values of \\(x\\) that the number line represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "list integers", "compound inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left (open) endpoint.",
          workingLatex: "\\circ \\text{ at } -1 \\Rightarrow -1 < x",
          explanation:
            "The open circle at -1 excludes -1, with shading to its right, so x is strictly greater than -1: -1 < x.",
        },
        {
          stepNumber: 2,
          description: "Read the right (closed) endpoint and combine.",
          workingLatex: "\\bullet \\text{ at } 4 \\Rightarrow x \\le 4 \\Rightarrow -1 < x \\le 4",
          explanation:
            "The closed circle at 4 includes 4, so x ≤ 4. Putting the ends together gives the compound inequality -1 < x ≤ 4.",
        },
        {
          stepNumber: 3,
          description: "Find the smallest integer that satisfies it.",
          workingLatex: "x > -1 \\Rightarrow \\text{smallest integer is } 0",
          explanation:
            "Because -1 is excluded, the next integer up, 0, is the smallest solution. (-1 itself is not allowed.)",
        },
        {
          stepNumber: 4,
          description: "Find the largest integer and list the set.",
          workingLatex: "x \\le 4 \\Rightarrow \\{0, 1, 2, 3, 4\\}",
          explanation:
            "4 IS allowed because that circle is closed, so the largest integer is 4. Listing every integer from 0 to 4 gives {0, 1, 2, 3, 4}.",
        },
      ],
      finalAnswer: "\\(0,\\ 1,\\ 2,\\ 3,\\ 4\\)",
      canonicalAnswer: "{0,1,2,3,4}",
    },
  },
  {
    id: "ga47-012",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A number line shows a CLOSED circle ● at \\(-3\\) with the line drawn to the RIGHT. List all the integer values of \\(x\\) shown on the number line that also satisfy \\(x < 1\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the inequality the number line represents.",
          workingLatex: "\\bullet \\text{ at } -3, \\ \\text{line right} \\Rightarrow x \\ge -3",
          explanation:
            "A closed circle at -3 with the line to the right means -3 is included and everything larger is too: x ≥ -3.",
        },
        {
          stepNumber: 2,
          description: "Combine with the extra condition x < 1.",
          workingLatex: "x \\ge -3 \\ \\text{and}\\ x < 1 \\Rightarrow -3 \\le x < 1",
          explanation:
            "We want integers shown on the line (x ≥ -3) that ALSO satisfy x < 1. The values must obey both at once, so take the overlap: -3 ≤ x < 1.",
        },
        {
          stepNumber: 3,
          description: "List the integers in this range.",
          workingLatex: "\\{-3, -2, -1, 0\\}",
          explanation:
            "Start at -3 (included, closed circle) and go up to but NOT including 1 (strict). The integers are -3, -2, -1, 0. Note that 1 is excluded, so the list stops at 0.",
        },
      ],
      finalAnswer: "\\(-3,\\ -2,\\ -1,\\ 0\\)",
      canonicalAnswer: "{-3,-2,-1,0}",
    },
  },
  {
    id: "ga47-013",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(x + 3 < 7\\) and then describe the number line that represents your solution.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3 from both sides.",
          workingLatex: "x + 3 < 7 \\Rightarrow x < 7 - 3",
          explanation:
            "To isolate x, undo the '+3' by subtracting 3 from both sides. Adding or subtracting never changes the direction of the inequality sign.",
        },
        {
          stepNumber: 2,
          description: "Simplify the right-hand side.",
          workingLatex: "x < 4",
          explanation:
            "7 - 3 = 4, so the solution is x < 4.",
        },
        {
          stepNumber: 3,
          description: "Choose the circle from the (still strict) sign.",
          workingLatex: "x < 4 \\Rightarrow \\circ \\text{ at } 4",
          explanation:
            "The sign is still <, so 4 is not included. The endpoint is an open circle at 4.",
        },
        {
          stepNumber: 4,
          description: "Choose the direction and describe the line.",
          workingLatex: "x < 4 \\Rightarrow \\text{line to the left of } 4",
          explanation:
            "x is less than 4, so shade the line to the left. Full description: open circle at 4, line to the left.",
        },
      ],
      finalAnswer: "\\(x < 4 \\ (\\text{open circle } \\circ \\text{ at } 4,\\ \\text{line to the left})\\)",
      canonicalAnswer: "x<4",
    },
  },
  {
    id: "ga47-014",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(2x \\ge 10\\) and then describe the number line that represents your solution.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Divide both sides by 2.",
          workingLatex: "2x \\ge 10 \\Rightarrow x \\ge \\frac{10}{2}",
          explanation:
            "To get x on its own, divide both sides by 2. Because 2 is positive, the direction of the sign stays the same.",
        },
        {
          stepNumber: 2,
          description: "Simplify the right-hand side.",
          workingLatex: "x \\ge 5",
          explanation:
            "10 ÷ 2 = 5, so the solution is x ≥ 5.",
        },
        {
          stepNumber: 3,
          description: "Choose the circle.",
          workingLatex: "x \\ge 5 \\Rightarrow \\bullet \\text{ at } 5",
          explanation:
            "The sign ≥ includes the endpoint, so 5 is drawn as a closed (filled) circle.",
        },
        {
          stepNumber: 4,
          description: "Choose the direction and describe the line.",
          workingLatex: "x \\ge 5 \\Rightarrow \\text{line to the right of } 5",
          explanation:
            "x is at least 5, so shade to the right. Full description: closed circle at 5, line to the right.",
        },
      ],
      finalAnswer: "\\(x \\ge 5 \\ (\\text{closed circle } \\bullet \\text{ at } 5,\\ \\text{line to the right})\\)",
      canonicalAnswer: "x>=5",
    },
  },
  {
    id: "ga47-015",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(3x - 1 \\le 8\\) and then describe the number line that represents your solution.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Add 1 to both sides.",
          workingLatex: "3x - 1 \\le 8 \\Rightarrow 3x \\le 9",
          explanation:
            "Undo the '-1' by adding 1 to both sides: 8 + 1 = 9. Adding the same amount to both sides keeps the inequality balanced and does not change the sign.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by 3.",
          workingLatex: "x \\le 3",
          explanation:
            "Now divide both sides by 3 to isolate x: 9 ÷ 3 = 3. Dividing by the positive number 3 leaves the sign unchanged, giving x ≤ 3.",
        },
        {
          stepNumber: 3,
          description: "Choose the circle from the sign.",
          workingLatex: "x \\le 3 \\Rightarrow \\bullet \\text{ at } 3",
          explanation:
            "≤ includes the endpoint, so 3 is a closed (filled) circle.",
        },
        {
          stepNumber: 4,
          description: "Choose the direction and describe the line.",
          workingLatex: "x \\le 3 \\Rightarrow \\text{line to the left of } 3",
          explanation:
            "x is at most 3, so shade to the left. Description: closed circle at 3, line to the left.",
        },
      ],
      finalAnswer: "\\(x \\le 3 \\ (\\text{closed circle } \\bullet \\text{ at } 3,\\ \\text{line to the left})\\)",
      canonicalAnswer: "x<=3",
    },
  },
  {
    id: "ga47-016",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "A student is asked to draw the number line for \\(x > 3\\). They draw a CLOSED circle ● at \\(3\\) with the line to the right. Explain what is wrong and state the correct diagram.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the direction of the student's line.",
          workingLatex: "x > 3 \\Rightarrow \\text{line to the right} \\ \\checkmark",
          explanation:
            "Check each feature against the inequality in turn. The student shaded to the right, which is correct: x > 3 means solutions larger than 3.",
        },
        {
          stepNumber: 2,
          description: "Check the circle against the inequality sign.",
          workingLatex: "x > 3 \\ \\text{is strict} \\Rightarrow 3 \\text{ NOT included}",
          explanation:
            "The sign is > (strict), so 3 itself is NOT a solution. A closed circle wrongly says 3 IS a solution — that is the error.",
        },
        {
          stepNumber: 3,
          description: "State the correction.",
          workingLatex: "\\text{use an OPEN circle } \\circ \\text{ at } 3",
          explanation:
            "The circle at 3 should be OPEN, not closed, to show 3 is excluded. The correct diagram is an open circle at 3 with the line to the right.",
        },
      ],
      finalAnswer: "\\(\\text{Circle should be OPEN } \\circ \\text{ at } 3 \\text{ (3 is excluded); line to the right is correct}\\)",
      canonicalAnswer: "open circle at 3, line to the right",
    },
  },
  {
    id: "ga47-017",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "interval",
    questionText:
      "A number line shows an OPEN circle ○ at \\(0\\) and an OPEN circle ○ at \\(5\\), with the segment between them shaded. Write down the compound inequality, in terms of \\(x\\), that this number line represents.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left endpoint.",
          workingLatex: "\\circ \\text{ at } 0 \\Rightarrow 0 < x",
          explanation:
            "The open circle at 0 excludes 0, and the shading lies to its right, so x is strictly greater than 0: 0 < x.",
        },
        {
          stepNumber: 2,
          description: "Read the right endpoint.",
          workingLatex: "\\circ \\text{ at } 5 \\Rightarrow x < 5",
          explanation:
            "The open circle at 5 excludes 5, and the shading lies to its left, so x is strictly less than 5: x < 5.",
        },
        {
          stepNumber: 3,
          description: "Combine into a single compound inequality.",
          workingLatex: "0 < x < 5",
          explanation:
            "Both ends are strict (both circles open), so the compound inequality uses < at both ends: 0 < x < 5.",
        },
      ],
      finalAnswer: "\\(0 < x < 5\\)",
      canonicalAnswer: "0<x<5",
    },
  },
  {
    id: "ga47-018",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Solve the inequality \\(-2 < x \\le 3\\) is already given. List all the integer values of \\(x\\) it represents, and state the type of circle drawn at each endpoint.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left end to find the circle and smallest integer.",
          workingLatex: "-2 < x \\Rightarrow \\circ \\text{ at } -2, \\ \\text{smallest integer } -1",
          explanation:
            "-2 < x is strict, so -2 is excluded (open circle). The smallest integer allowed is the next one up, -1.",
        },
        {
          stepNumber: 2,
          description: "Read the right end to find the circle and largest integer.",
          workingLatex: "x \\le 3 \\Rightarrow \\bullet \\text{ at } 3, \\ \\text{largest integer } 3",
          explanation:
            "x ≤ 3 includes 3 (closed circle), so the largest integer allowed is 3 itself.",
        },
        {
          stepNumber: 3,
          description: "List every integer between the bounds.",
          workingLatex: "\\{-1, 0, 1, 2, 3\\}",
          explanation:
            "Listing the integers from -1 up to 3 inclusive gives {-1, 0, 1, 2, 3}.",
        },
      ],
      finalAnswer: "\\(-1,\\ 0,\\ 1,\\ 2,\\ 3 \\ (\\circ \\text{ at } -2,\\ \\bullet \\text{ at } 3)\\)",
      canonicalAnswer: "{-1,0,1,2,3}",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga47-019",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(4x + 5 > 2x - 3\\) and then describe the number line that represents your solution, stating the type of circle and the direction.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 2x from both sides.",
          workingLatex: "4x + 5 > 2x - 3 \\Rightarrow 4x - 2x + 5 > -3",
          explanation:
            "Gather the variable on the left by subtracting 2x from both sides. Subtracting the same term from both sides does not change the sign.",
        },
        {
          stepNumber: 2,
          description: "Simplify the x-terms.",
          workingLatex: "2x + 5 > -3",
          explanation:
            "4x - 2x = 2x, leaving 2x + 5 > -3.",
        },
        {
          stepNumber: 3,
          description: "Subtract 5 from both sides.",
          workingLatex: "2x > -8",
          explanation:
            "Subtracting 5 isolates the x-term: -3 - 5 = -8, so 2x > -8.",
        },
        {
          stepNumber: 4,
          description: "Divide both sides by 2 (positive, so the sign is unchanged).",
          workingLatex: "x > -4",
          explanation:
            "Dividing by the positive number 2 keeps the > sign, giving x > -4.",
        },
        {
          stepNumber: 5,
          description: "Choose the circle from the strict sign.",
          workingLatex: "x > -4 \\Rightarrow \\circ \\text{ at } -4",
          explanation:
            "The sign is strict (>), so the endpoint -4 is excluded — an OPEN circle at -4.",
        },
        {
          stepNumber: 6,
          description: "Choose the direction and check with a test value.",
          workingLatex: "x > -4 \\Rightarrow \\text{line right}; \\ \\text{check } x=0: \\ 5 > -3 \\ \\checkmark",
          explanation:
            "Because x is greater than -4, the line goes to the right. Check a test value to the right, x = 0: 4(0)+5 = 5 and 2(0)-3 = -3, and 5 > -3 is true, confirming values to the right of -4 work.",
        },
      ],
      finalAnswer: "\\(x > -4 \\ (\\text{open circle } \\circ \\text{ at } -4,\\ \\text{line to the right})\\)",
      canonicalAnswer: "x>-4",
    },
  },
  {
    id: "ga47-020",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(-3x \\le 12\\) and then describe the number line that represents your solution. Pay careful attention to the direction of the inequality sign.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the operation needed to isolate x.",
          workingLatex: "-3x \\le 12 \\Rightarrow \\text{divide both sides by } -3",
          explanation:
            "To get x on its own you must divide by -3. Dividing by a NEGATIVE number is the key moment: it reverses the inequality sign.",
        },
        {
          stepNumber: 2,
          description: "Divide by -3 and REVERSE the sign.",
          workingLatex: "x \\ge \\frac{12}{-3}",
          explanation:
            "Because the divisor is negative, the ≤ flips to ≥ as you divide. Forgetting to flip the sign is the most common error in this type of question.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "x \\ge -4",
          explanation:
            "12 ÷ (-3) = -4, so the solution is x ≥ -4.",
        },
        {
          stepNumber: 4,
          description: "Choose the circle for the solution.",
          workingLatex: "x \\ge -4 \\Rightarrow \\bullet \\text{ at } -4",
          explanation:
            "≥ includes the endpoint, so -4 is a closed (filled) circle.",
        },
        {
          stepNumber: 5,
          description: "Choose the direction and check.",
          workingLatex: "x \\ge -4 \\Rightarrow \\text{line right}; \\ \\text{check } x=0: -3(0)=0 \\le 12 \\ \\checkmark",
          explanation:
            "x is at least -4, so shade to the right. Check with x = 0 (which is ≥ -4): -3(0) = 0 ≤ 12 is true, confirming the reversed sign is correct. Description: closed circle at -4, line to the right.",
        },
      ],
      finalAnswer: "\\(x \\ge -4 \\ (\\text{closed circle } \\bullet \\text{ at } -4,\\ \\text{line to the right})\\)",
      canonicalAnswer: "x>=-4",
    },
  },
  {
    id: "ga47-021",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the compound inequality \\(-1 \\le 2x + 3 < 9\\) and then list all the integer values of \\(x\\) that satisfy it. State the type of circle at each endpoint of the number line.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "solve and represent", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 3 from all three parts.",
          workingLatex: "-1 - 3 \\le 2x < 9 - 3",
          explanation:
            "Treat the compound inequality as one object: whatever you do to the middle you must do to BOTH outer parts. Subtract 3 from each part to start isolating x.",
        },
        {
          stepNumber: 2,
          description: "Simplify the outer parts.",
          workingLatex: "-4 \\le 2x < 6",
          explanation:
            "-1 - 3 = -4 and 9 - 3 = 6, giving -4 ≤ 2x < 6.",
        },
        {
          stepNumber: 3,
          description: "Divide all three parts by 2 (positive, signs unchanged).",
          workingLatex: "-2 \\le x < 3",
          explanation:
            "Dividing by the positive number 2 keeps both signs the same: -4 ÷ 2 = -2 and 6 ÷ 2 = 3. So -2 ≤ x < 3.",
        },
        {
          stepNumber: 4,
          description: "State the circles at each endpoint.",
          workingLatex: "\\bullet \\text{ at } -2 \\ (\\le), \\quad \\circ \\text{ at } 3 \\ (<)",
          explanation:
            "The left end is ≤, so -2 is a closed circle; the right end is <, so 3 is an open circle.",
        },
        {
          stepNumber: 5,
          description: "List the integers from -2 up to but not including 3.",
          workingLatex: "\\{-2, -1, 0, 1, 2\\}",
          explanation:
            "-2 is included (closed) and 3 is excluded (open), so the integers are -2, -1, 0, 1, 2.",
        },
      ],
      finalAnswer: "\\(-2,\\ -1,\\ 0,\\ 1,\\ 2 \\ (\\bullet \\text{ at } -2,\\ \\circ \\text{ at } 3)\\)",
      canonicalAnswer: "{-2,-1,0,1,2}",
    },
  },
  {
    id: "ga47-022",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the compound inequality \\(2 \\le \\dfrac{x}{3} + 1 \\le 4\\) and then describe the number line that represents your solution, including the type of circle at each end.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "solve and represent"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 1 from all three parts.",
          workingLatex: "2 - 1 \\le \\frac{x}{3} \\le 4 - 1",
          explanation:
            "Subtract 1 from each of the three parts to start isolating x. The signs stay the same because subtraction never flips them.",
        },
        {
          stepNumber: 2,
          description: "Simplify the outer parts.",
          workingLatex: "1 \\le \\frac{x}{3} \\le 3",
          explanation:
            "2 - 1 = 1 and 4 - 1 = 3, giving 1 ≤ x/3 ≤ 3.",
        },
        {
          stepNumber: 3,
          description: "Multiply all three parts by 3.",
          workingLatex: "3 \\le x \\le 9",
          explanation:
            "Multiplying by the positive number 3 keeps both signs: 1 × 3 = 3 and 3 × 3 = 9. So 3 ≤ x ≤ 9.",
        },
        {
          stepNumber: 4,
          description: "State the circles at each end.",
          workingLatex: "\\bullet \\text{ at } 3 \\ (\\le), \\quad \\bullet \\text{ at } 9 \\ (\\le)",
          explanation:
            "Both ends use ≤, so BOTH circles are closed. Neither endpoint is excluded.",
        },
        {
          stepNumber: 5,
          description: "Describe the segment and check both endpoints.",
          workingLatex: "\\text{shade segment } 3 \\text{ to } 9; \\ \\text{check: } \\frac{3}{3}+1=2 \\ \\checkmark, \\ \\frac{9}{3}+1=4 \\ \\checkmark",
          explanation:
            "Shade the segment from 3 to 9 (no arrows — bounded on both sides). Check x = 3: 3/3 + 1 = 2 sits exactly on the lower bound, and x = 9: 9/3 + 1 = 4 sits exactly on the upper bound, both confirming the closed circles.",
        },
      ],
      finalAnswer: "\\(3 \\le x \\le 9 \\ (\\bullet \\text{ at } 3,\\ \\bullet \\text{ at } 9,\\ \\text{segment shaded})\\)",
      canonicalAnswer: "3<=x<=9",
    },
  },
  {
    id: "ga47-023",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "A student is asked to draw the number line for \\(x \\le -2\\). They draw an OPEN circle ○ at \\(-2\\) with the line to the right. Identify BOTH errors and state the correct diagram.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "common error"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Check the circle against the inequality sign.",
          workingLatex: "x \\le -2 \\Rightarrow -2 \\text{ IS included}",
          explanation:
            "The sign ≤ includes the endpoint, so -2 is a solution. The student drew an OPEN circle, which wrongly excludes -2 — error 1.",
        },
        {
          stepNumber: 2,
          description: "Check the direction.",
          workingLatex: "x \\le -2 \\Rightarrow \\text{solutions are smaller than } -2 \\Rightarrow \\text{line LEFT}",
          explanation:
            "x ≤ -2 means x is at most -2, i.e. -2 or smaller, so the line should go to the LEFT. The student shaded to the right — error 2.",
        },
        {
          stepNumber: 3,
          description: "Combine the corrections.",
          workingLatex: "\\bullet \\text{ at } -2, \\ \\text{line to the LEFT}",
          explanation:
            "Both features are wrong. The circle must be CLOSED (to include -2) and the line must go LEFT (towards smaller values).",
        },
        {
          stepNumber: 4,
          description: "State the correct diagram.",
          workingLatex: "x \\le -2 \\Rightarrow \\bullet \\text{ at } -2 \\text{ with line to the left}",
          explanation:
            "The correct number line has a closed circle at -2 and the line shaded to the left.",
        },
      ],
      finalAnswer: "\\(\\text{Closed circle } \\bullet \\text{ at } -2 \\text{ with the line to the LEFT (both circle and direction were wrong)}\\)",
      canonicalAnswer: "closed circle at -2, line to the left",
    },
  },
  {
    id: "ga47-024",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A number line shows a CLOSED circle ● at \\(-4\\) and an OPEN circle ○ at \\(2\\), with the segment between them shaded. (a) Write the inequality. (b) List the integers it represents. (c) State how many integers there are.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the left endpoint.",
          workingLatex: "\\bullet \\text{ at } -4 \\Rightarrow -4 \\le x",
          explanation:
            "The closed circle at -4 includes -4, with shading to its right, so -4 ≤ x.",
        },
        {
          stepNumber: 2,
          description: "Read the right endpoint and combine.",
          workingLatex: "\\circ \\text{ at } 2 \\Rightarrow x < 2 \\Rightarrow -4 \\le x < 2",
          explanation:
            "The open circle at 2 excludes 2, so x < 2. The compound inequality is -4 ≤ x < 2.",
        },
        {
          stepNumber: 3,
          description: "List the integers.",
          workingLatex: "\\{-4, -3, -2, -1, 0, 1\\}",
          explanation:
            "Start at -4 (included) and stop before 2 (excluded). The integers are -4, -3, -2, -1, 0, 1.",
        },
        {
          stepNumber: 4,
          description: "Count them.",
          workingLatex: "\\text{count} = 6",
          explanation:
            "Counting the listed integers gives 6 values. (A quick check: from -4 up to 1 inclusive is 1 - (-4) + 1 = 6.)",
        },
      ],
      finalAnswer: "\\(-4 \\le x < 2;\\ \\{-4,-3,-2,-1,0,1\\};\\ 6 \\text{ integers}\\)",
      canonicalAnswer: "{-4,-3,-2,-1,0,1}",
    },
  },
  {
    id: "ga47-025",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Solve the inequality \\(5 - 2x < 11\\) and then describe the number line that represents your solution, taking care with the direction of the sign.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 5 from both sides.",
          workingLatex: "5 - 2x < 11 \\Rightarrow -2x < 6",
          explanation:
            "Subtracting 5 from both sides gives -2x < 6 (since 11 - 5 = 6). Subtraction does not change the sign.",
        },
        {
          stepNumber: 2,
          description: "Divide both sides by -2 and REVERSE the sign.",
          workingLatex: "x > \\frac{6}{-2}",
          explanation:
            "Dividing by the negative number -2 flips < to >. The sign-flip is the crucial step here — leaving it as < would give the wrong half of the number line.",
        },
        {
          stepNumber: 3,
          description: "Simplify the right-hand side.",
          workingLatex: "x > -3",
          explanation:
            "6 ÷ (-2) = -3, so the solution is x > -3.",
        },
        {
          stepNumber: 4,
          description: "Choose the circle.",
          workingLatex: "x > -3 \\Rightarrow \\circ \\text{ at } -3",
          explanation:
            "The sign is strict (>), so -3 is excluded — an open circle.",
        },
        {
          stepNumber: 5,
          description: "Choose the direction and check.",
          workingLatex: "x > -3 \\Rightarrow \\text{line right}; \\ \\text{check } x=0: 5-0 = 5 < 11 \\ \\checkmark",
          explanation:
            "x is greater than -3, so shade to the right. Check x = 0 (which is > -3): 5 - 2(0) = 5 < 11 is true, confirming the reversed sign. Description: open circle at -3, line to the right.",
        },
      ],
      finalAnswer: "\\(x > -3 \\ (\\text{open circle } \\circ \\text{ at } -3,\\ \\text{line to the right})\\)",
      canonicalAnswer: "x>-3",
    },
  },
  {
    id: "ga47-026",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the compound inequality \\(-7 < 4x + 1 \\le 13\\) and list all the integer values of \\(x\\) that satisfy it. State the type of circle at each endpoint.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "solve and represent", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 1 from all three parts.",
          workingLatex: "-7 - 1 < 4x \\le 13 - 1",
          explanation:
            "Subtract 1 from every part of the compound inequality, keeping all three balanced.",
        },
        {
          stepNumber: 2,
          description: "Simplify the outer parts.",
          workingLatex: "-8 < 4x \\le 12",
          explanation:
            "-7 - 1 = -8 and 13 - 1 = 12, giving -8 < 4x ≤ 12.",
        },
        {
          stepNumber: 3,
          description: "Divide all three parts by 4 (positive, signs unchanged).",
          workingLatex: "-2 < x \\le 3",
          explanation:
            "Dividing by the positive number 4 keeps both signs: -8 ÷ 4 = -2 and 12 ÷ 4 = 3. So -2 < x ≤ 3.",
        },
        {
          stepNumber: 4,
          description: "State the circles.",
          workingLatex: "\\circ \\text{ at } -2 \\ (<), \\quad \\bullet \\text{ at } 3 \\ (\\le)",
          explanation:
            "The left end is strict (<), so -2 is an open circle; the right end is ≤, so 3 is a closed circle.",
        },
        {
          stepNumber: 5,
          description: "List the integers.",
          workingLatex: "\\{-1, 0, 1, 2, 3\\}",
          explanation:
            "-2 is excluded, so start at -1; 3 is included, so end at 3. The integers are -1, 0, 1, 2, 3.",
        },
      ],
      finalAnswer: "\\(-1,\\ 0,\\ 1,\\ 2,\\ 3 \\ (\\circ \\text{ at } -2,\\ \\bullet \\text{ at } 3)\\)",
      canonicalAnswer: "{-1,0,1,2,3}",
    },
  },
  {
    id: "ga47-027",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "A number line shows a CLOSED circle ● at \\(-5\\) with the line drawn to the LEFT, and a separate part with an OPEN circle ○ at \\(1\\) with the line drawn to the RIGHT. Write down the two inequalities, in terms of \\(x\\), that together describe everything shaded.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the first part of the diagram.",
          workingLatex: "\\bullet \\text{ at } -5, \\ \\text{line left} \\Rightarrow x \\le -5",
          explanation:
            "A closed circle at -5 with the line going left means -5 is included and everything smaller too: x ≤ -5.",
        },
        {
          stepNumber: 2,
          description: "Read the second part of the diagram.",
          workingLatex: "\\circ \\text{ at } 1, \\ \\text{line right} \\Rightarrow x > 1",
          explanation:
            "An open circle at 1 with the line going right means 1 is excluded and everything larger is shaded: x > 1.",
        },
        {
          stepNumber: 3,
          description: "Describe the combined solution.",
          workingLatex: "x \\le -5 \\ \\text{or}\\ x > 1",
          explanation:
            "The two shaded parts do not join up (the gap from -5 to 1 is unshaded), so the solution is the pair x ≤ -5 OR x > 1. This is NOT a single compound inequality — you can't write it as -5 ≥ x > 1 because that would be empty.",
        },
      ],
      finalAnswer: "\\(x \\le -5 \\ \\text{ or } \\ x > 1\\)",
      canonicalAnswer: "x<=-5 or x>1",
    },
  },
  {
    id: "ga47-028",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the inequality \\(3(x - 2) \\ge x + 4\\) and then list the SMALLEST three integers that satisfy it. State the type of circle drawn on the number line.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "solve and represent", "list integers"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Expand the bracket.",
          workingLatex: "3(x - 2) \\ge x + 4 \\Rightarrow 3x - 6 \\ge x + 4",
          explanation:
            "Multiply out the bracket: 3 × x = 3x and 3 × (-2) = -6, giving 3x - 6 ≥ x + 4. Watch the sign on the -6.",
        },
        {
          stepNumber: 2,
          description: "Collect the x-terms.",
          workingLatex: "3x - x - 6 \\ge 4 \\Rightarrow 2x - 6 \\ge 4",
          explanation:
            "Subtract x from both sides: 3x - x = 2x, leaving 2x - 6 ≥ 4.",
        },
        {
          stepNumber: 3,
          description: "Add 6 to both sides.",
          workingLatex: "2x \\ge 10",
          explanation:
            "Adding 6 isolates the x-term: 4 + 6 = 10, so 2x ≥ 10.",
        },
        {
          stepNumber: 4,
          description: "Divide by 2 (positive, sign unchanged).",
          workingLatex: "x \\ge 5",
          explanation:
            "Dividing by the positive number 2 keeps the ≥ sign, giving x ≥ 5.",
        },
        {
          stepNumber: 5,
          description: "Identify the circle from the sign.",
          workingLatex: "x \\ge 5 \\Rightarrow \\bullet \\text{ at } 5, \\ \\text{line to the right}",
          explanation:
            "≥ includes the endpoint, so on the number line this is a CLOSED circle at 5 (5 is included) with the line to the right.",
        },
        {
          stepNumber: 6,
          description: "List the smallest three integers.",
          workingLatex: "\\{5, 6, 7\\}",
          explanation:
            "Since 5 is included (closed circle), the smallest integer is 5, and the next two are 6 and 7. So the smallest three integers are 5, 6, 7. (If the sign had been >, you'd start at 6 instead.)",
        },
      ],
      finalAnswer: "\\(5,\\ 6,\\ 7 \\ (\\text{closed circle } \\bullet \\text{ at } 5)\\)",
      canonicalAnswer: "{5,6,7}",
    },
  },
  {
    id: "ga47-029",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "interval",
    questionText:
      "Two number lines are drawn. Line A shows \\(x \\ge -1\\) (closed circle ● at \\(-1\\), line to the right). Line B shows \\(x < 4\\) (open circle ○ at \\(4\\), line to the left). Write a single compound inequality for the values of \\(x\\) that appear on BOTH number lines, and describe its number line.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "write inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the inequality each line represents.",
          workingLatex: "\\text{A}: x \\ge -1, \\qquad \\text{B}: x < 4",
          explanation:
            "Line A: closed circle at -1, line right → x ≥ -1. Line B: open circle at 4, line left → x < 4.",
        },
        {
          stepNumber: 2,
          description: "Find the overlap (values on BOTH lines).",
          workingLatex: "x \\ge -1 \\ \\text{and}\\ x < 4",
          explanation:
            "'On both number lines' means x must satisfy A AND B at the same time — the overlap of the two shaded regions, not their union.",
        },
        {
          stepNumber: 3,
          description: "Write the overlap as a single compound inequality.",
          workingLatex: "-1 \\le x < 4",
          explanation:
            "Combining x ≥ -1 and x < 4 with x in the middle gives -1 ≤ x < 4. The ≤ comes from line A and the < comes from line B.",
        },
        {
          stepNumber: 4,
          description: "Describe the resulting number line.",
          workingLatex: "\\bullet \\text{ at } -1, \\ \\circ \\text{ at } 4, \\ \\text{segment shaded between}",
          explanation:
            "The overlap is bounded on both sides: a CLOSED circle at -1 (included), an OPEN circle at 4 (excluded), and the segment between them shaded. No arrows.",
        },
      ],
      finalAnswer: "\\(-1 \\le x < 4 \\ (\\bullet \\text{ at } -1,\\ \\circ \\text{ at } 4,\\ \\text{segment shaded})\\)",
      canonicalAnswer: "-1<=x<4",
    },
  },
  {
    id: "ga47-030",
    topicRef: "ga47",
    topicTitle: "Representing inequalities on a number line",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Solve the compound inequality \\(-9 \\le 1 - 2x < 5\\) and list all the integer values of \\(x\\) that satisfy it. State the type of circle at each endpoint, taking care with the direction of the signs.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["number line", "open/closed circle", "compound inequality", "solve and represent", "list integers", "negative coefficient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Subtract 1 from all three parts.",
          workingLatex: "-9 - 1 \\le -2x < 5 - 1",
          explanation:
            "Subtract 1 from each of the three parts to begin isolating the x-term. Subtraction does not change any signs.",
        },
        {
          stepNumber: 2,
          description: "Simplify the outer parts.",
          workingLatex: "-10 \\le -2x < 4",
          explanation:
            "-9 - 1 = -10 and 5 - 1 = 4, giving -10 ≤ -2x < 4.",
        },
        {
          stepNumber: 3,
          description: "Divide all three parts by -2 and REVERSE both signs.",
          workingLatex: "\\frac{-10}{-2} \\ge x > \\frac{4}{-2}",
          explanation:
            "Dividing by the negative number -2 flips BOTH inequality signs: ≤ becomes ≥ and < becomes >. This is the crucial step — both signs must turn, not just one.",
        },
        {
          stepNumber: 4,
          description: "Compute the two fractions.",
          workingLatex: "5 \\ge x > -2",
          explanation:
            "-10 ÷ -2 = 5 and 4 ÷ -2 = -2, giving 5 ≥ x > -2.",
        },
        {
          stepNumber: 5,
          description: "Tidy into standard left-to-right order.",
          workingLatex: "-2 < x \\le 5",
          explanation:
            "Reading 5 ≥ x > -2 from the other direction gives -2 < x ≤ 5. The end attached to -2 keeps its strict sign (now < on the left), and the end attached to 5 keeps its ≤ (now on the right).",
        },
        {
          stepNumber: 6,
          description: "State the circles and list the integers.",
          workingLatex: "\\circ \\text{ at } -2 \\ (<), \\ \\bullet \\text{ at } 5 \\ (\\le); \\ \\{-1, 0, 1, 2, 3, 4, 5\\}",
          explanation:
            "Left end strict (<) → open circle at -2; right end ≤ → closed circle at 5. -2 is excluded so start at -1, and 5 is included so end at 5: the integers are -1, 0, 1, 2, 3, 4, 5. (Check x = 0: 1 - 0 = 1, and -9 ≤ 1 < 5 ✓.)",
        },
      ],
      finalAnswer: "\\(-1,\\ 0,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5 \\ (\\circ \\text{ at } -2,\\ \\bullet \\text{ at } 5)\\)",
      canonicalAnswer: "{-1,0,1,2,3,4,5}",
    },
  },
];
