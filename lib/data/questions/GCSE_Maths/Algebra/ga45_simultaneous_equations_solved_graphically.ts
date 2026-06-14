/**
 * Topic: Simultaneous equations solved graphically
 * Ref: ga45  (DfE A19)
 * Strand: Algebra — GCSE Maths (tier: Both)
 *
 * Coverage: solving a pair of simultaneous equations by GRAPHING both relations
 *   and reading the coordinates of the point(s) where they cross — the
 *   intersection IS the solution. No image files are used: every graph is
 *   conveyed in TEXT. For each line/curve a small table of values is built in
 *   workingLatex (e.g. "when x=0, y=...; when x=2, y=..."), the lines/curves are
 *   described, the crossing point is located, and the solution is read off as an
 *   (x, y) coordinate pair. Every read-off is CONFIRMED algebraically by
 *   substitution before locking. Clusters:
 *   (1) two straight lines given as equations — table each, find the crossing,
 *       state (x, y);
 *   (2) read the solution of a pair from a DESCRIBED already-plotted graph (the
 *       stem says the lines are drawn and cross at a marked point — the student
 *       reads and justifies it);
 *   (3) a line meets a quadratic graphically — one or two intersection points
 *       read off;
 *   (4) interpret the graphical solution IN CONTEXT (two tariffs / costs vs
 *       usage — the crossing point is the break-even);
 *   (5) number of solutions from the graph (parallel lines → none; same line →
 *       infinitely many; line + curve → 0/1/2) and approximate non-integer
 *       readings.
 *   Solutions stress: the solution of a simultaneous pair is exactly the
 *   coordinates of the intersection; build value tables before sketching;
 *   read BOTH coordinates; and always verify by substituting the read-off
 *   solution back into both equations.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga45-001 .. ga45-004  (4)   compact: table, crossing, read off
 *   - Standard:   ga45-005 .. ga45-018  (14)
 *   - Challenge:  ga45-019 .. ga45-030  (12)
 * Id range: ga45-001 .. ga45-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Coordinate tables use array
 *   environments. answerType is "set" (the intersection coordinates).
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga45-001",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The graphs of \\(y = x + 1\\) and \\(y = 5\\) are drawn on the same axes. They cross at one point. Write down the solution \\((x,\\,y)\\) of the simultaneous equations.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "intersection", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Say what the crossing point means.",
          workingLatex: "\\text{point where both graphs cross} = \\text{solution}",
          explanation:
            "The solution of a pair of simultaneous equations is the point that lies on BOTH graphs at once — that is exactly where the two lines cross. So reading off the crossing point gives the answer directly.",
        },
        {
          stepNumber: 2,
          description: "Use the horizontal line to fix the height.",
          workingLatex: "y = 5 \\text{ everywhere on the line } y = 5",
          explanation:
            "The line y = 5 is horizontal at height 5, so every point on it has y = 5. The crossing point sits on this line too, so its y-coordinate must be 5. We just need the matching x on y = x + 1.",
        },
        {
          stepNumber: 3,
          description: "Set y = x + 1 equal to 5 and solve for x.",
          workingLatex: "x + 1 = 5 \\;\\Rightarrow\\; x = 4",
          explanation:
            "On the graph the slanting line y = x + 1 reaches height 5 when x + 1 = 5. Subtracting 1 from both sides gives x = 4, so that is the x-coordinate of the crossing.",
        },
        {
          stepNumber: 4,
          description: "State the point and check it.",
          workingLatex: "(4,\\,5): \\quad 4 + 1 = 5 \\;\\checkmark",
          explanation:
            "The two lines cross at (4, 5). Check: putting x = 4 into y = x + 1 gives 5, which matches y = 5, so (4, 5) lies on both graphs.",
        },
      ],
      finalAnswer: "\\((4,\\,5)\\)",
      canonicalAnswer: "x=4, y=5",
    },
  },
  {
    id: "ga45-002",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "On a graph the line \\(x = 3\\) (vertical) and the line \\(y = 2x - 1\\) are drawn. They cross at one point. Write down the solution \\((x,\\,y)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "intersection", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the x-coordinate from the vertical line.",
          workingLatex: "x = 3 \\text{ for every point on the vertical line}",
          explanation:
            "The line x = 3 is vertical, so every point on it — including the crossing — has x = 3. That fixes the x-coordinate of the solution straight away.",
        },
        {
          stepNumber: 2,
          description: "Substitute x = 3 into y = 2x - 1.",
          workingLatex: "y = 2(3) - 1",
          explanation:
            "To find the height of the crossing we put x = 3 into the slanting line. The crossing must sit on y = 2x - 1 as well, so its y-value is whatever that line gives at x = 3.",
        },
        {
          stepNumber: 3,
          description: "Work out the height.",
          workingLatex: "y = 6 - 1 = 5",
          explanation:
            "Multiply first: 2 times 3 is 6, then subtract 1 to get 5. (Order of operations: the multiplication comes before the subtraction.)",
        },
        {
          stepNumber: 4,
          description: "State the point and check it.",
          workingLatex: "(3,\\,5): \\quad x = 3 \\;\\checkmark \\quad 2(3) - 1 = 5 \\;\\checkmark",
          explanation:
            "The lines cross at (3, 5). Check: x = 3 sits on the vertical line x = 3, and 2(3) - 1 = 5 sits on the slanting line, so both equations hold.",
        },
      ],
      finalAnswer: "\\((3,\\,5)\\)",
      canonicalAnswer: "x=3, y=5",
    },
  },
  {
    id: "ga45-003",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The lines \\(y = x\\) and \\(y = -x + 4\\) are drawn on the same axes. Use the graphs to write down the solution \\((x,\\,y)\\) where they cross.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "intersection", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Make a short table for y = x.",
          workingLatex:
            "\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline y=x & 1 & 2 \\end{array}",
          explanation:
            "Two points are enough to fix a straight line. The line y = x passes through (1, 1) and (2, 2) — its height always equals its x-value.",
        },
        {
          stepNumber: 2,
          description: "Make a short table for y = -x + 4.",
          workingLatex:
            "\\begin{array}{c|cc} x & 1 & 2 \\\\ \\hline y=-x+4 & 3 & 2 \\end{array}",
          explanation:
            "Using the same x-values, this falling line passes through (1, 3) and (2, 2). At x = 1 it is at height 3; at x = 2 it has dropped to 2.",
        },
        {
          stepNumber: 3,
          description: "Find the x-value where the heights match.",
          workingLatex: "\\text{at } x = 2: \\quad y = x \\to 2, \\quad y = -x+4 \\to 2",
          explanation:
            "Compare the two tables column by column. At x = 2 both lines have y = 2, so that shared point is where they cross on the sketch.",
        },
        {
          stepNumber: 4,
          description: "State the crossing point and check it.",
          workingLatex: "(2,\\,2): \\quad 2 = 2 \\;\\checkmark \\quad -2 + 4 = 2 \\;\\checkmark",
          explanation:
            "Both graphs pass through (2, 2). Check: y = x gives 2 = 2, and y = -x + 4 gives -2 + 4 = 2, so the solution is (2, 2).",
        },
      ],
      finalAnswer: "\\((2,\\,2)\\)",
      canonicalAnswer: "x=2, y=2",
    },
  },
  {
    id: "ga45-004",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Foundation",
    answerType: "set",
    questionText:
      "The graphs of \\(y = 3\\) and \\(y = 2x + 1\\) are drawn on the same axes. Write down the solution \\((x,\\,y)\\) of the simultaneous equations.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "intersection", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the horizontal line to fix the height.",
          workingLatex: "y = 3 \\text{ at the crossing}",
          explanation:
            "y = 3 is a horizontal line at height 3, so wherever the two graphs meet, the y-coordinate must be 3. We now hunt for the x on y = 2x + 1 that gives this height.",
        },
        {
          stepNumber: 2,
          description: "Set y = 2x + 1 equal to 3.",
          workingLatex: "2x + 1 = 3",
          explanation:
            "The slanting line reaches height 3 when 2x + 1 = 3. Writing this equation lets us solve for the matching x-coordinate.",
        },
        {
          stepNumber: 3,
          description: "Solve the equation for x.",
          workingLatex: "2x + 1 = 3 \\;\\Rightarrow\\; 2x = 2 \\;\\Rightarrow\\; x = 1",
          explanation:
            "Subtract 1 from both sides to get 2x = 2, then divide both sides by 2 to get x = 1. So the crossing happens at x = 1.",
        },
        {
          stepNumber: 4,
          description: "State the point and check it.",
          workingLatex: "(1,\\,3): \\quad 2(1) + 1 = 3 \\;\\checkmark",
          explanation:
            "The crossing point is (1, 3). Check: 2(1) + 1 = 3, which matches the line y = 3, so (1, 3) lies on both graphs.",
        },
      ],
      finalAnswer: "\\((1,\\,3)\\)",
      canonicalAnswer: "x=1, y=3",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga45-005",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "By drawing the graphs of \\(y = x + 1\\) and \\(y = 2x - 1\\) for \\(0 \\le x \\le 4\\), solve the simultaneous equations graphically. Give the solution as a coordinate pair.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Make a table of values for y = x + 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=x+1 & 1 & 3 & 5 \\end{array}",
          explanation:
            "Choose convenient x-values across the given range 0 to 4 and add 1 to each. The line passes through (0, 1), (2, 3) and (4, 5).",
        },
        {
          stepNumber: 2,
          description: "Make a table of values for y = 2x - 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=2x-1 & -1 & 3 & 7 \\end{array}",
          explanation:
            "Use the SAME x-values for the second line so the columns can be compared. Doubling x and subtracting 1 gives the points (0, -1), (2, 3) and (4, 7).",
        },
        {
          stepNumber: 3,
          description: "Compare the columns to spot the shared point.",
          workingLatex: "\\text{at } x = 2: \\quad y = 3 \\text{ in both tables}",
          explanation:
            "Reading down the two tables, at x = 2 both lines have y = 3. That is the only column where the heights agree, so it marks where the graphs cross.",
        },
        {
          stepNumber: 4,
          description: "State the intersection and verify both equations.",
          workingLatex: "(2,\\,3): \\quad 2 + 1 = 3 \\;\\checkmark \\quad 2(2) - 1 = 3 \\;\\checkmark",
          explanation:
            "The intersection coordinates ARE the solution of the simultaneous equations. Substituting x = 2 into both equations gives y = 3 each time, confirming (2, 3).",
        },
      ],
      finalAnswer: "\\((2,\\,3)\\)",
      canonicalAnswer: "x=2, y=3",
    },
  },
  {
    id: "ga45-006",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "By drawing the graphs of \\(y = 2x\\) and \\(y = x + 3\\), solve the simultaneous equations graphically. Give your answer as a coordinate pair.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Make a table of values for y = 2x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=2x & 0 & 4 & 8 \\end{array}",
          explanation:
            "Doubling each x-value, the line y = 2x passes through the origin and rises steeply: (0, 0), (2, 4), (4, 8).",
        },
        {
          stepNumber: 2,
          description: "Make a table of values for y = x + 3.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=x+3 & 3 & 5 & 7 \\end{array}",
          explanation:
            "Adding 3 to each x-value, the line y = x + 3 passes through (0, 3), (2, 5) and (4, 7) — a gentler slope that starts higher up.",
        },
        {
          stepNumber: 3,
          description: "Equate the two heights to locate the crossing.",
          workingLatex: "2x = x + 3 \\;\\Rightarrow\\; 2x - x = 3 \\;\\Rightarrow\\; x = 3",
          explanation:
            "The steeper line starts below y = x + 3 and overtakes it, so they must cross once. Setting the two right-hand sides equal and subtracting x from both sides gives x = 3.",
        },
        {
          stepNumber: 4,
          description: "Find y at x = 3.",
          workingLatex: "y = 2(3) = 6 \\;\\Rightarrow\\; (3,\\,6)",
          explanation:
            "Put x = 3 into the simpler line y = 2x to read the height: y = 6. So the two lines meet at (3, 6).",
        },
        {
          stepNumber: 5,
          description: "Verify in both equations.",
          workingLatex: "2(3) = 6 \\;\\checkmark \\qquad 3 + 3 = 6 \\;\\checkmark",
          explanation:
            "Substituting x = 3 into both lines gives y = 6 each time, so the graphical solution (3, 6) is correct.",
        },
      ],
      finalAnswer: "\\((3,\\,6)\\)",
      canonicalAnswer: "x=3, y=6",
    },
  },
  {
    id: "ga45-007",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The lines \\(y = -x + 6\\) and \\(y = 2x\\) are drawn for \\(0 \\le x \\le 6\\). Solve the simultaneous equations graphically, giving the coordinates of the intersection.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Make a table for y = -x + 6 (a falling line).",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 6 \\\\ \\hline y=-x+6 & 6 & 4 & 0 \\end{array}",
          explanation:
            "Because the x-term is negative, this line slopes downwards: it starts at (0, 6) and falls to (6, 0), passing through (2, 4) on the way.",
        },
        {
          stepNumber: 2,
          description: "Make a table for y = 2x (a rising line).",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 3 \\\\ \\hline y=2x & 0 & 4 & 6 \\end{array}",
          explanation:
            "This line rises from the origin at gradient 2: (0, 0), (2, 4), (3, 6).",
        },
        {
          stepNumber: 3,
          description: "Equate the heights of a rising and a falling line.",
          workingLatex: "2x = -x + 6 \\;\\Rightarrow\\; 2x + x = 6 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2",
          explanation:
            "A rising line and a falling line cross exactly once. Setting the two expressions equal, adding x to both sides, then dividing by 3 gives x = 2.",
        },
        {
          stepNumber: 4,
          description: "Read the height at x = 2 and state the point.",
          workingLatex: "y = 2(2) = 4 \\;\\Rightarrow\\; (2,\\,4)",
          explanation:
            "Both tables already show y = 4 at x = 2, which the algebra confirms. So the lines intersect at (2, 4).",
        },
        {
          stepNumber: 5,
          description: "Verify in both equations.",
          workingLatex: "-2 + 6 = 4 \\;\\checkmark \\qquad 2(2) = 4 \\;\\checkmark",
          explanation:
            "Both equations give y = 4 at x = 2, so the intersection — and the solution of the simultaneous equations — is (2, 4).",
        },
      ],
      finalAnswer: "\\((2,\\,4)\\)",
      canonicalAnswer: "x=2, y=4",
    },
  },
  {
    id: "ga45-008",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "On a grid, the lines \\(2x + y = 8\\) and \\(y = x - 1\\) have been drawn and cross at a single point. By making a table of values for \\(2x + y = 8\\), find the solution \\((x,\\,y)\\) of the simultaneous equations.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange 2x + y = 8 to make y the subject.",
          workingLatex: "2x + y = 8 \\;\\Rightarrow\\; y = 8 - 2x",
          explanation:
            "To tabulate a line easily we want y on its own. Subtracting 2x from both sides gives y = 8 - 2x, which is now ready to plug x-values into.",
        },
        {
          stepNumber: 2,
          description: "Make a table of values for y = 8 - 2x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=8-2x & 8 & 4 & 0 \\end{array}",
          explanation:
            "Subtracting twice each x from 8, the falling line passes through (0, 8), (2, 4) and (4, 0).",
        },
        {
          stepNumber: 3,
          description: "Make a table of values for y = x - 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 3 & 4 \\\\ \\hline y=x-1 & -1 & 2 & 3 \\end{array}",
          explanation:
            "Subtracting 1 from each x, the rising line passes through (0, -1), (3, 2) and (4, 3).",
        },
        {
          stepNumber: 4,
          description: "Equate the two expressions to find x.",
          workingLatex: "8 - 2x = x - 1 \\;\\Rightarrow\\; 8 + 1 = x + 2x \\;\\Rightarrow\\; 9 = 3x \\;\\Rightarrow\\; x = 3",
          explanation:
            "At the crossing the heights are equal. Collecting the x-terms on one side and the numbers on the other gives 9 = 3x, so x = 3.",
        },
        {
          stepNumber: 5,
          description: "Find y and state the point.",
          workingLatex: "y = 3 - 1 = 2 \\;\\Rightarrow\\; (3,\\,2)",
          explanation:
            "Substituting x = 3 into the simpler line y = x - 1 gives y = 2. The falling line agrees: 8 - 2(3) = 2. So the intersection is (3, 2).",
        },
        {
          stepNumber: 6,
          description: "Verify in both original equations.",
          workingLatex: "2(3) + 2 = 8 \\;\\checkmark \\qquad 3 - 1 = 2 \\;\\checkmark",
          explanation:
            "Substituting (3, 2) satisfies both original equations, confirming it is the solution.",
        },
      ],
      finalAnswer: "\\((3,\\,2)\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },
  {
    id: "ga45-009",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "On a graph, the lines \\(y = 2x + 1\\) and \\(y = -x + 7\\) have been drawn and cross at the point marked \\(P\\). Read off the coordinates of \\(P\\) and hence write down the solution of the simultaneous equations.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "read from graph", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall what point P represents.",
          workingLatex: "P = \\text{the point lying on BOTH lines}",
          explanation:
            "Because P is on both lines at once, its coordinates satisfy both equations simultaneously — that is precisely what 'solving simultaneously' means. So finding P solves the pair.",
        },
        {
          stepNumber: 2,
          description: "Set the two heights equal at P.",
          workingLatex: "2x + 1 = -x + 7",
          explanation:
            "At P the two lines are at the same height, so their right-hand sides are equal. Writing this equation lets us find the shared x-coordinate.",
        },
        {
          stepNumber: 3,
          description: "Solve for the x-coordinate of P.",
          workingLatex: "2x + x = 7 - 1 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2",
          explanation:
            "Adding x to both sides and subtracting 1 collects everything: 3x = 6, so x = 2. This matches where the lines meet on the graph.",
        },
        {
          stepNumber: 4,
          description: "Find the y-coordinate of P.",
          workingLatex: "y = 2(2) + 1 = 5 \\;\\Rightarrow\\; P = (2,\\,5)",
          explanation:
            "Substitute x = 2 into either line; using y = 2x + 1 gives y = 5. So P is the point (2, 5).",
        },
        {
          stepNumber: 5,
          description: "Verify with the other line.",
          workingLatex: "-x + 7 = -2 + 7 = 5 \\;\\checkmark",
          explanation:
            "The second line also gives y = 5 at x = 2, confirming both pass through (2, 5). The solution is x = 2, y = 5.",
        },
      ],
      finalAnswer: "\\((2,\\,5)\\)",
      canonicalAnswer: "x=2, y=5",
    },
  },
  {
    id: "ga45-010",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The curve \\(y = x^2\\) and the line \\(y = 4\\) are drawn for \\(-3 \\le x \\le 3\\). Use the graph to solve the simultaneous equations \\(y = x^2\\) and \\(y = 4\\). Give all solution points.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Make a table of values for y = x^2.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -2 & -1 & 0 & 1 & 2 \\\\ \\hline y=x^2 & 4 & 1 & 0 & 1 & 4 \\end{array}",
          explanation:
            "Squaring each x makes every output positive, so the parabola is symmetric about the y-axis with its lowest point at the origin. Notice (-2)^2 and 2^2 both give 4.",
        },
        {
          stepNumber: 2,
          description: "Add the horizontal line y = 4.",
          workingLatex: "y = 4 \\text{ is a flat line at height } 4",
          explanation:
            "The second equation is just the horizontal line at height 4. We need the places where the parabola reaches this same height.",
        },
        {
          stepNumber: 3,
          description: "See where the line cuts the curve.",
          workingLatex: "x^2 = 4 \\;\\Rightarrow\\; x = -2 \\text{ or } x = 2",
          explanation:
            "A horizontal line above the bottom of a parabola crosses it twice — once on each side. From the table the curve is at height 4 when x = -2 and when x = 2, so there are two intersection points.",
        },
        {
          stepNumber: 4,
          description: "Read off both intersection points.",
          workingLatex: "(-2,\\,4) \\quad \\text{and} \\quad (2,\\,4)",
          explanation:
            "Pairing each x with the common height 4 gives the crossing points (-2, 4) and (2, 4). A line meeting a quadratic can give two solutions, and here it does.",
        },
        {
          stepNumber: 5,
          description: "Verify both solutions.",
          workingLatex: "(-2)^2 = 4 \\;\\checkmark \\qquad (2)^2 = 4 \\;\\checkmark",
          explanation:
            "Squaring -2 and 2 both give 4, matching the line y = 4, so both points are genuine solutions.",
        },
      ],
      finalAnswer: "\\((-2,\\,4)\\) and \\((2,\\,4)\\)",
      canonicalAnswer: "(-2,4), (2,4)",
    },
  },
  {
    id: "ga45-011",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Two taxi firms charge as follows. Firm A: \\(y = 3 + 2x\\). Firm B: \\(y = 5 + x\\), where \\(y\\) is the cost in pounds for a journey of \\(x\\) miles. Their cost graphs cross at one point. By graphing, find the journey length where the two firms cost the same, and that cost.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "context", "break-even", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate Firm A's cost, y = 3 + 2x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=3+2x & 3 & 7 & 11 \\end{array}",
          explanation:
            "Firm A charges 3 pounds fixed plus 2 pounds per mile, so the line starts at (0, 3) and rises by 2 each mile: (0, 3), (2, 7), (4, 11).",
        },
        {
          stepNumber: 2,
          description: "Tabulate Firm B's cost, y = 5 + x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=5+x & 5 & 7 & 9 \\end{array}",
          explanation:
            "Firm B charges 5 pounds fixed plus 1 pound per mile: (0, 5), (2, 7), (4, 9). It starts higher but rises more slowly than Firm A.",
        },
        {
          stepNumber: 3,
          description: "Equate the two costs to find the break-even mileage.",
          workingLatex: "3 + 2x = 5 + x \\;\\Rightarrow\\; 2x - x = 5 - 3 \\;\\Rightarrow\\; x = 2",
          explanation:
            "The firms cost the same where the cost lines cross. Setting the formulas equal and collecting terms gives x = 2 miles.",
        },
        {
          stepNumber: 4,
          description: "Find the matching cost.",
          workingLatex: "y = 3 + 2(2) = 7 \\;\\Rightarrow\\; (2,\\,7)",
          explanation:
            "Putting x = 2 into Firm A's formula gives 7 pounds. Both tables already show y = 7 at x = 2, so the graphs intersect at (2, 7).",
        },
        {
          stepNumber: 5,
          description: "Interpret in context and verify.",
          workingLatex: "x=2 \\text{ miles}, \\; y = \\pounds 7: \\quad 3+2(2)=7 \\;\\checkmark \\quad 5+2 = 7 \\;\\checkmark",
          explanation:
            "The break-even point is a 2-mile journey costing 7 pounds; both formulas confirm this. (For shorter journeys Firm A is cheaper; beyond 2 miles Firm B is cheaper.)",
        },
      ],
      finalAnswer: "\\((2,\\,7)\\): a 2-mile journey costing \\(\\pounds 7\\)",
      canonicalAnswer: "x=2, y=7",
    },
  },
  {
    id: "ga45-012",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The lines \\(y = \\dfrac{1}{2}x + 1\\) and \\(y = -x + 4\\) are drawn for \\(0 \\le x \\le 4\\). Solve the simultaneous equations graphically, giving the coordinates of the intersection.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "fractional gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate y = (1/2)x + 1, using even x-values.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=\\frac{1}{2}x+1 & 1 & 2 & 3 \\end{array}",
          explanation:
            "Picking even x-values keeps the half-gradient tidy: half of an even number is a whole number. The line passes through (0, 1), (2, 2) and (4, 3).",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = -x + 4.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=-x+4 & 4 & 2 & 0 \\end{array}",
          explanation:
            "The falling line passes through (0, 4), (2, 2) and (4, 0).",
        },
        {
          stepNumber: 3,
          description: "Equate the two expressions.",
          workingLatex: "\\frac{1}{2}x + 1 = -x + 4 \\;\\Rightarrow\\; \\frac{1}{2}x + x = 4 - 1 \\;\\Rightarrow\\; \\frac{3}{2}x = 3",
          explanation:
            "At the crossing the heights match. Adding x to both sides combines the x-terms into (3/2)x, and moving the 1 across leaves (3/2)x = 3.",
        },
        {
          stepNumber: 4,
          description: "Solve for x and read the height.",
          workingLatex: "x = 3 \\div \\frac{3}{2} = 2, \\quad y = -2 + 4 = 2 \\;\\Rightarrow\\; (2,\\,2)",
          explanation:
            "Dividing 3 by 3/2 (i.e. multiplying by 2/3) gives x = 2. Both tables also show y = 2 at x = 2, so the lines cross at (2, 2).",
        },
        {
          stepNumber: 5,
          description: "Verify in both equations.",
          workingLatex: "\\frac{1}{2}(2)+1 = 2 \\;\\checkmark \\qquad -2+4 = 2 \\;\\checkmark",
          explanation:
            "Both equations give y = 2 at x = 2, confirming the intersection (2, 2) is the solution.",
        },
      ],
      finalAnswer: "\\((2,\\,2)\\)",
      canonicalAnswer: "x=2, y=2",
    },
  },
  {
    id: "ga45-013",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The graphs of \\(y = 2x + 5\\) and \\(y = 2x - 1\\) are drawn on the same axes. Explain, using the graphs, how many solutions the simultaneous equations have.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "number of solutions", "parallel lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Compare the gradients of the two lines.",
          workingLatex: "m_1 = 2, \\qquad m_2 = 2",
          explanation:
            "Both lines are in the form y = mx + c. The coefficient of x — the gradient m — is 2 in each, so both lines slope at the same rate and point in exactly the same direction.",
        },
        {
          stepNumber: 2,
          description: "Compare the y-intercepts.",
          workingLatex: "c_1 = 5, \\qquad c_2 = -1",
          explanation:
            "The constant term c is the y-intercept. Here one line cuts the y-axis at 5 and the other at -1, so they are NOT the same line — one sits permanently above the other.",
        },
        {
          stepNumber: 3,
          description: "Decide how often parallel lines meet.",
          workingLatex: "\\text{equal gradients} + \\text{different intercepts} \\Rightarrow \\text{parallel}",
          explanation:
            "Lines with equal gradients but different intercepts are parallel: on the graph they run alongside each other at a constant vertical gap, always 6 apart here.",
        },
        {
          stepNumber: 4,
          description: "State the number of solutions.",
          workingLatex: "\\text{parallel lines never cross} \\Rightarrow \\text{no solutions}",
          explanation:
            "The solution is a crossing point, and parallel lines have none. So the simultaneous equations have NO solutions. (You can also see this algebraically: 2x + 5 = 2x - 1 gives 5 = -1, which is impossible.)",
        },
      ],
      finalAnswer: "\\(\\text{No solutions (the lines are parallel)}\\)",
      canonicalAnswer: "no solutions",
    },
  },
  {
    id: "ga45-014",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "On a graph, the lines \\(y = 4x - 3\\) and \\(y = x + 3\\) cross at the point \\(Q\\). Use the graphs to find the coordinates of \\(Q\\), the solution of the simultaneous equations.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "read from graph", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate y = 4x - 3.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline y=4x-3 & -3 & 1 & 5 \\end{array}",
          explanation:
            "The steep line (gradient 4) passes through (0, -3), (1, 1) and (2, 5).",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = x + 3.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline y=x+3 & 3 & 4 & 5 \\end{array}",
          explanation:
            "The gentler line (gradient 1) passes through (0, 3), (1, 4) and (2, 5).",
        },
        {
          stepNumber: 3,
          description: "Equate the heights to locate Q.",
          workingLatex: "4x - 3 = x + 3 \\;\\Rightarrow\\; 4x - x = 3 + 3 \\;\\Rightarrow\\; 3x = 6 \\;\\Rightarrow\\; x = 2",
          explanation:
            "At Q the two heights are equal. Subtracting x and adding 3 to both sides gives 3x = 6, so x = 2 — exactly where both tables hit y = 5.",
        },
        {
          stepNumber: 4,
          description: "Find y and state Q.",
          workingLatex: "y = 2 + 3 = 5 \\;\\Rightarrow\\; Q = (2,\\,5)",
          explanation:
            "Substituting x = 2 into the simpler line y = x + 3 gives y = 5, so Q = (2, 5). The steeper line catches up to the gentler one exactly here.",
        },
        {
          stepNumber: 5,
          description: "Verify in both equations.",
          workingLatex: "4(2)-3 = 5 \\;\\checkmark \\qquad 2+3 = 5 \\;\\checkmark",
          explanation:
            "Both equations give y = 5 at x = 2, so Q = (2, 5) is the solution of the simultaneous equations.",
        },
      ],
      finalAnswer: "\\((2,\\,5)\\)",
      canonicalAnswer: "x=2, y=5",
    },
  },
  {
    id: "ga45-015",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "Two phone tariffs cost (in pounds) \\(y = 10 + 0.5x\\) and \\(y = 4 + x\\), where \\(x\\) is the number of gigabytes used. The graphs cross once. By graphing, find the usage at which both tariffs cost the same and the cost there.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "context", "break-even", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the first tariff, y = 10 + 0.5x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 8 & 12 \\\\ \\hline y=10+0.5x & 10 & 14 & 16 \\end{array}",
          explanation:
            "This tariff has a high fixed cost of 10 pounds but only 0.5 pounds per GB, so it rises slowly: (0, 10), (8, 14), (12, 16).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the second tariff, y = 4 + x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 8 & 12 \\\\ \\hline y=4+x & 4 & 12 & 16 \\end{array}",
          explanation:
            "This tariff has a low fixed cost of 4 pounds but 1 pound per GB, so it rises faster: (0, 4), (8, 12), (12, 16).",
        },
        {
          stepNumber: 3,
          description: "Equate the tariffs to find the break-even usage.",
          workingLatex: "10 + 0.5x = 4 + x \\;\\Rightarrow\\; 10 - 4 = x - 0.5x \\;\\Rightarrow\\; 6 = 0.5x",
          explanation:
            "Setting the two costs equal and gathering the x-terms on one side, the numbers on the other, leaves 6 = 0.5x. The cheaper-per-GB tariff starts higher and is overtaken as usage grows.",
        },
        {
          stepNumber: 4,
          description: "Solve for x and read the cost.",
          workingLatex: "x = 6 \\div 0.5 = 12, \\quad y = 4 + 12 = 16 \\;\\Rightarrow\\; (12,\\,16)",
          explanation:
            "Dividing 6 by 0.5 (the same as doubling) gives x = 12. Both tables show y = 16 at x = 12, so the lines cross at (12, 16).",
        },
        {
          stepNumber: 5,
          description: "Interpret and verify.",
          workingLatex: "10+0.5(12)=16 \\;\\checkmark \\qquad 4+12 = 16 \\;\\checkmark",
          explanation:
            "At 12 GB both tariffs cost 16 pounds. Below 12 GB the second tariff is cheaper; above 12 GB the first is cheaper.",
        },
      ],
      finalAnswer: "\\((12,\\,16)\\): \\(12\\) GB at \\(\\pounds 16\\)",
      canonicalAnswer: "x=12, y=16",
    },
  },
  {
    id: "ga45-016",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The line \\(y = x + 2\\) and the curve \\(y = x^2\\) are drawn for \\(-2 \\le x \\le 3\\). One intersection is at \\((2,\\,4)\\). Use the graphs to find the OTHER intersection point.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2.",
          workingLatex:
            "\\begin{array}{c|cccc} x & -2 & -1 & 0 & 2 \\\\ \\hline y=x^2 & 4 & 1 & 0 & 4 \\end{array}",
          explanation:
            "Squaring each x, the parabola passes through (-2, 4), (-1, 1), (0, 0) and (2, 4).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = x + 2.",
          workingLatex:
            "\\begin{array}{c|cccc} x & -2 & -1 & 0 & 2 \\\\ \\hline y=x+2 & 0 & 1 & 2 & 4 \\end{array}",
          explanation:
            "Adding 2 to each x, the line passes through (-2, 0), (-1, 1), (0, 2) and (2, 4).",
        },
        {
          stepNumber: 3,
          description: "Compare the tables for a second shared point.",
          workingLatex: "\\text{at } x=-1: \\quad x^2 = 1 \\text{ and } x+2 = 1",
          explanation:
            "A line can cut a parabola in two places. We already know about (2, 4); scanning the tables, both graphs also agree at x = -1, where the curve gives (-1)^2 = 1 and the line gives -1 + 2 = 1.",
        },
        {
          stepNumber: 4,
          description: "State the other intersection.",
          workingLatex: "(-1,\\,1)",
          explanation:
            "The second crossing point is therefore (-1, 1). Together with (2, 4) this gives the two solutions x = -1 and x = 2.",
        },
        {
          stepNumber: 5,
          description: "Verify the new point in both equations.",
          workingLatex: "(-1)^2 = 1 \\;\\checkmark \\qquad -1+2 = 1 \\;\\checkmark",
          explanation:
            "Both equations give y = 1 at x = -1, confirming (-1, 1) is a genuine intersection.",
        },
      ],
      finalAnswer: "\\((-1,\\,1)\\)",
      canonicalAnswer: "x=-1, y=1",
    },
  },
  {
    id: "ga45-017",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "On a grid the lines \\(x + y = 5\\) and \\(y = 2x - 1\\) are drawn and cross once. By tabulating \\(x + y = 5\\), solve the simultaneous equations graphically.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange x + y = 5 to make y the subject.",
          workingLatex: "x + y = 5 \\;\\Rightarrow\\; y = 5 - x",
          explanation:
            "Subtracting x from both sides puts y on its own, giving y = 5 - x, which is ready to tabulate.",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = 5 - x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 5 \\\\ \\hline y=5-x & 5 & 3 & 0 \\end{array}",
          explanation:
            "Subtracting each x from 5, the falling line passes through (0, 5), (2, 3) and (5, 0).",
        },
        {
          stepNumber: 3,
          description: "Tabulate y = 2x - 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 3 \\\\ \\hline y=2x-1 & -1 & 3 & 5 \\end{array}",
          explanation:
            "Doubling each x and subtracting 1, the rising line passes through (0, -1), (2, 3) and (3, 5).",
        },
        {
          stepNumber: 4,
          description: "Equate the expressions to find x.",
          workingLatex: "5 - x = 2x - 1 \\;\\Rightarrow\\; 5 + 1 = 2x + x \\;\\Rightarrow\\; 6 = 3x \\;\\Rightarrow\\; x = 2",
          explanation:
            "Setting the two heights equal and collecting terms gives 6 = 3x, so x = 2. This is where the falling and rising lines meet on the grid.",
        },
        {
          stepNumber: 5,
          description: "Find y and state the point.",
          workingLatex: "y = 2(2) - 1 = 3 \\;\\Rightarrow\\; (2,\\,3)",
          explanation:
            "Substituting x = 2 into y = 2x - 1 gives y = 3. The falling line agrees: 5 - 2 = 3. So the intersection is (2, 3).",
        },
        {
          stepNumber: 6,
          description: "Verify in both original equations.",
          workingLatex: "2 + 3 = 5 \\;\\checkmark \\qquad 2(2)-1 = 3 \\;\\checkmark",
          explanation:
            "Both original equations are satisfied by (2, 3), so it is the solution of the simultaneous equations.",
        },
      ],
      finalAnswer: "\\((2,\\,3)\\)",
      canonicalAnswer: "x=2, y=3",
    },
  },
  {
    id: "ga45-018",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "The equations \\(2x - 2y = 4\\) and \\(y = x - 2\\) are graphed on the same axes. Using the graphs, explain how many solutions the simultaneous equations have.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "number of solutions", "same line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Move the x-term across in 2x - 2y = 4.",
          workingLatex: "2x - 2y = 4 \\;\\Rightarrow\\; -2y = 4 - 2x",
          explanation:
            "To compare the two equations, get the first into y = mx + c form. Subtracting 2x from both sides isolates the -2y term.",
        },
        {
          stepNumber: 2,
          description: "Divide through by -2 to make y the subject.",
          workingLatex: "y = \\frac{4 - 2x}{-2} = -2 + x = x - 2",
          explanation:
            "Dividing every term by -2 flips the signs: 4 / -2 = -2 and -2x / -2 = x. So the first equation simplifies to y = x - 2.",
        },
        {
          stepNumber: 3,
          description: "Compare the two equations.",
          workingLatex: "y = x - 2 \\quad \\text{and} \\quad y = x - 2",
          explanation:
            "After rearranging, both equations are identical. On the graph they produce exactly the SAME line, lying perfectly on top of each other.",
        },
        {
          stepNumber: 4,
          description: "State the number of solutions.",
          workingLatex: "\\text{same line} \\Rightarrow \\text{infinitely many crossing points}",
          explanation:
            "When two equations give the same line, every point on that line lies on both. There is not one crossing point but infinitely many, so the simultaneous equations have INFINITELY MANY solutions.",
        },
      ],
      finalAnswer: "\\(\\text{Infinitely many solutions (same line)}\\)",
      canonicalAnswer: "infinitely many solutions",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga45-019",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "By drawing the graphs of \\(3x + 2y = 12\\) and \\(y = x - 1\\) for \\(0 \\le x \\le 4\\), solve the simultaneous equations graphically and give the intersection as a coordinate pair.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange 3x + 2y = 12 to make y the subject.",
          workingLatex: "3x + 2y = 12 \\;\\Rightarrow\\; 2y = 12 - 3x \\;\\Rightarrow\\; y = 6 - \\frac{3}{2}x",
          explanation:
            "Subtract 3x from both sides, then divide every term by 2. The line is y = 6 - (3/2)x; choosing even x-values will keep the table tidy.",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = 6 - (3/2)x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=6-\\frac{3}{2}x & 6 & 3 & 0 \\end{array}",
          explanation:
            "At even x-values the (3/2)x term is a whole number: at x = 2 it is 3, at x = 4 it is 6. The falling line passes through (0, 6), (2, 3) and (4, 0).",
        },
        {
          stepNumber: 3,
          description: "Tabulate y = x - 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 4 \\\\ \\hline y=x-1 & -1 & 1 & 3 \\end{array}",
          explanation:
            "Subtracting 1 from each x, the rising line passes through (0, -1), (2, 1) and (4, 3).",
        },
        {
          stepNumber: 4,
          description: "Equate the two expressions.",
          workingLatex: "6 - \\frac{3}{2}x = x - 1 \\;\\Rightarrow\\; 6 + 1 = x + \\frac{3}{2}x \\;\\Rightarrow\\; 7 = \\frac{5}{2}x",
          explanation:
            "Set the heights equal, then add (3/2)x and 1 to both sides. Combining x + (3/2)x gives (5/2)x, so 7 = (5/2)x.",
        },
        {
          stepNumber: 5,
          description: "Solve for x — note it is not a whole number.",
          workingLatex: "x = 7 \\div \\frac{5}{2} = \\frac{14}{5} = 2.8",
          explanation:
            "Dividing 7 by 5/2 (multiply by 2/5) gives x = 14/5 = 2.8. On the graph the lines meet between x = 2 and x = 3, nearer 3.",
        },
        {
          stepNumber: 6,
          description: "Find y and state the solution.",
          workingLatex: "y = 2.8 - 1 = 1.8 \\;\\Rightarrow\\; (2.8,\\,1.8)",
          explanation:
            "Substituting x = 2.8 into the simpler line y = x - 1 gives y = 1.8, so the intersection read from the graph is (2.8, 1.8).",
        },
        {
          stepNumber: 7,
          description: "Verify in the other equation.",
          workingLatex: "3(2.8) + 2(1.8) = 8.4 + 3.6 = 12 \\;\\checkmark",
          explanation:
            "Substituting into 3x + 2y gives 8.4 + 3.6 = 12 exactly, confirming (2.8, 1.8) is the solution.",
        },
      ],
      finalAnswer: "\\((2.8,\\,1.8)\\)",
      canonicalAnswer: "x=2.8, y=1.8",
    },
  },
  {
    id: "ga45-020",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = x^2 - 2x\\) and the line \\(y = x\\) are drawn for \\(-1 \\le x \\le 4\\). Solve the simultaneous equations graphically, giving BOTH intersection points.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic", "two solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2 - 2x.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & 0 & 1 & 2 & 3 & 4 \\\\ \\hline y=x^2-2x & 0 & -1 & 0 & 3 & 8 \\end{array}",
          explanation:
            "Work out each value, e.g. at x = 3: 3^2 - 2(3) = 9 - 6 = 3. The parabola dips to a minimum near x = 1 and rises steeply afterwards, through (0, 0), (1, -1), (2, 0), (3, 3), (4, 8).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 3 & 4 \\\\ \\hline y=x & 0 & 3 & 4 \\end{array}",
          explanation:
            "The straight line y = x passes through the origin and rises at 45 degrees: (0, 0), (3, 3), (4, 4).",
        },
        {
          stepNumber: 3,
          description: "Scan the tables for points common to both graphs.",
          workingLatex: "x=0: \\; (0,0)\\ \\text{on both}; \\qquad x=3: \\; (3,3)\\ \\text{on both}",
          explanation:
            "At x = 0 both give y = 0, and at x = 3 both give y = 3. A line can cross a parabola twice — here it does, at (0, 0) and (3, 3).",
        },
        {
          stepNumber: 4,
          description: "Confirm the crossings algebraically.",
          workingLatex: "x^2 - 2x = x \\;\\Rightarrow\\; x^2 - 3x = 0 \\;\\Rightarrow\\; x(x-3) = 0",
          explanation:
            "Setting the curve equal to the line and moving x across gives x^2 - 3x = 0. Factoring out x gives x(x - 3) = 0, so x = 0 or x = 3 — exactly the two readings from the graph.",
        },
        {
          stepNumber: 5,
          description: "State both solution points and verify.",
          workingLatex: "(0,\\,0) \\text{ and } (3,\\,3): \\quad 0^2-0 = 0 \\;\\checkmark \\quad 3^2-6 = 3 \\;\\checkmark",
          explanation:
            "The two intersection points are (0, 0) and (3, 3); substituting confirms both lie on the curve and the line. The solutions are x = 0, y = 0 and x = 3, y = 3.",
        },
      ],
      finalAnswer: "\\((0,\\,0)\\) and \\((3,\\,3)\\)",
      canonicalAnswer: "(0,0), (3,3)",
    },
  },
  {
    id: "ga45-021",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A gym offers two membership plans. Plan P: \\(y = 20 + 4x\\). Plan Q: \\(y = 50 + x\\), where \\(y\\) is the total cost in pounds and \\(x\\) is the number of months. By graphing, find the number of months at which the two plans cost the same and the cost there. State which plan is cheaper for a 12-month membership.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "context", "break-even", "interpretation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate Plan P, y = 20 + 4x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 10 & 12 \\\\ \\hline y=20+4x & 20 & 60 & 68 \\end{array}",
          explanation:
            "Plan P has a low joining fee of 20 pounds but a steep 4 pounds per month: (0, 20), (10, 60), (12, 68).",
        },
        {
          stepNumber: 2,
          description: "Tabulate Plan Q, y = 50 + x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 10 & 12 \\\\ \\hline y=50+x & 50 & 60 & 62 \\end{array}",
          explanation:
            "Plan Q has a high joining fee of 50 pounds but only 1 pound per month: (0, 50), (10, 60), (12, 62).",
        },
        {
          stepNumber: 3,
          description: "Equate the costs to find the break-even month.",
          workingLatex: "20 + 4x = 50 + x \\;\\Rightarrow\\; 4x - x = 50 - 20 \\;\\Rightarrow\\; 3x = 30 \\;\\Rightarrow\\; x = 10",
          explanation:
            "Plan P starts cheaper but rises faster, so it is overtaken. Setting the costs equal and collecting terms gives 3x = 30, so x = 10 months.",
        },
        {
          stepNumber: 4,
          description: "Find the cost and verify the break-even point.",
          workingLatex: "y = 20 + 4(10) = 60; \\quad 50 + 10 = 60 \\;\\checkmark",
          explanation:
            "At x = 10 both formulas give 60 pounds, so the cost graphs cross at (10, 60).",
        },
        {
          stepNumber: 5,
          description: "Compare the plans at 12 months.",
          workingLatex: "x=12: \\; P = \\pounds 68, \\; Q = \\pounds 62 \\;\\Rightarrow\\; Q \\text{ cheaper}",
          explanation:
            "Beyond the crossing point (after 10 months) Plan Q is cheaper. At 12 months Plan P costs 68 pounds and Plan Q costs 62 pounds, so Plan Q is the cheaper choice.",
        },
      ],
      finalAnswer: "\\((10,\\,60)\\): equal at \\(10\\) months / \\(\\pounds 60\\); Plan Q cheaper at \\(12\\) months",
      canonicalAnswer: "x=10, y=60",
    },
  },
  {
    id: "ga45-022",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The line \\(y = 2x + 1\\) and the curve \\(y = x^2 + 1\\) are drawn for \\(-1 \\le x \\le 3\\). Solve the simultaneous equations graphically, giving both intersection points.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic", "two solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2 + 1.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y=x^2+1 & 2 & 1 & 2 & 5 & 10 \\end{array}",
          explanation:
            "Square each x and add 1. The parabola has its minimum at (0, 1) and is symmetric: (-1, 2), (0, 1), (1, 2), (2, 5), (3, 10).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = 2x + 1.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -1 & 0 & 1 & 2 & 3 \\\\ \\hline y=2x+1 & -1 & 1 & 3 & 5 & 7 \\end{array}",
          explanation:
            "Doubling each x and adding 1, the line passes through (-1, -1), (0, 1), (1, 3), (2, 5), (3, 7).",
        },
        {
          stepNumber: 3,
          description: "Identify the common points.",
          workingLatex: "x=0: \\;(0,1)\\ \\text{on both}; \\qquad x=2: \\;(2,5)\\ \\text{on both}",
          explanation:
            "Scanning the tables, both graphs pass through (0, 1) and (2, 5). The line cuts the parabola at these two places.",
        },
        {
          stepNumber: 4,
          description: "Confirm algebraically by equating.",
          workingLatex: "x^2 + 1 = 2x + 1 \\;\\Rightarrow\\; x^2 - 2x = 0 \\;\\Rightarrow\\; x(x-2) = 0",
          explanation:
            "Setting curve equal to line, the +1 cancels from both sides and moving 2x across gives x^2 - 2x = 0. Factoring out x gives x(x - 2) = 0, so x = 0 or x = 2 — matching the two graph readings.",
        },
        {
          stepNumber: 5,
          description: "State both solution points and verify.",
          workingLatex: "(0,\\,1) \\text{ and } (2,\\,5): \\quad 0+1=1 \\;\\checkmark \\quad 4+1 = 5 \\;\\checkmark",
          explanation:
            "Both points satisfy the curve and the line, so the solutions are x = 0, y = 1 and x = 2, y = 5.",
        },
      ],
      finalAnswer: "\\((0,\\,1)\\) and \\((2,\\,5)\\)",
      canonicalAnswer: "(0,1), (2,5)",
    },
  },
  {
    id: "ga45-023",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A student draws \\(y = x^2\\) and the line \\(y = -x - 1\\) on the same axes for \\(-3 \\le x \\le 3\\). Using the graphs, explain how many solutions the simultaneous equations have.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "number of solutions", "line meets curve", "no solution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -2 & -1 & 0 & 1 & 2 \\\\ \\hline y=x^2 & 4 & 1 & 0 & 1 & 4 \\end{array}",
          explanation:
            "The parabola sits on or above the x-axis, with its lowest point at the origin (0, 0). Every value of y = x^2 is greater than or equal to 0.",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = -x - 1.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -2 & -1 & 0 & 1 & 2 \\\\ \\hline y=-x-1 & 1 & 0 & -1 & -2 & -3 \\end{array}",
          explanation:
            "The line falls from upper-left to lower-right, passing through (-2, 1), (-1, 0), (0, -1), (1, -2), (2, -3).",
        },
        {
          stepNumber: 3,
          description: "Set curve equal to line to test for crossings.",
          workingLatex: "x^2 = -x - 1 \\;\\Rightarrow\\; x^2 + x + 1 = 0",
          explanation:
            "Equating the two and bringing every term to one side gives the quadratic x^2 + x + 1 = 0. On the sketch the line passes below the parabola everywhere and never touches it.",
        },
        {
          stepNumber: 4,
          description: "Check the discriminant.",
          workingLatex: "b^2 - 4ac = 1^2 - 4(1)(1) = 1 - 4 = -3",
          explanation:
            "For x^2 + x + 1 = 0 the coefficients are a = 1, b = 1, c = 1. The discriminant b^2 - 4ac comes out as -3.",
        },
        {
          stepNumber: 5,
          description: "Interpret the negative discriminant.",
          workingLatex: "-3 < 0 \\;\\Rightarrow\\; \\text{no real solutions}",
          explanation:
            "A negative discriminant means the quadratic has no real roots, so the curve and line never meet. This matches the graph: the simultaneous equations have NO solutions.",
        },
      ],
      finalAnswer: "\\(\\text{No solutions (the line never meets the curve)}\\)",
      canonicalAnswer: "no solutions",
    },
  },
  {
    id: "ga45-024",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The line \\(y = 6 - x\\) is tangent to the curve \\(y = x^2\\) at one point only? Draw both for \\(0 \\le x \\le 3\\) and use the graphs to find every solution of the simultaneous equations \\(y = x^2\\), \\(y = 6 - x\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic", "two solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2.",
          workingLatex:
            "\\begin{array}{c|cccc} x & -3 & 0 & 2 & 3 \\\\ \\hline y=x^2 & 9 & 0 & 4 & 9 \\end{array}",
          explanation:
            "Squaring each x, the parabola passes through (-3, 9), (0, 0), (2, 4) and (3, 9). (We include x = -3 because the algebra below produces a solution there, even though it falls just outside the drawing range.)",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = 6 - x.",
          workingLatex:
            "\\begin{array}{c|cccc} x & -3 & 0 & 2 & 3 \\\\ \\hline y=6-x & 9 & 6 & 4 & 3 \\end{array}",
          explanation:
            "Subtracting each x from 6, the falling line passes through (-3, 9), (0, 6), (2, 4) and (3, 3).",
        },
        {
          stepNumber: 3,
          description: "Spot the two common points from the tables.",
          workingLatex: "x=2: \\;(2,4)\\ \\text{on both}; \\qquad x=-3: \\;(-3,9)\\ \\text{on both}",
          explanation:
            "Both graphs agree at (2, 4) and at (-3, 9). Two distinct crossings means the line is NOT a tangent — a tangent would touch at exactly one point.",
        },
        {
          stepNumber: 4,
          description: "Confirm algebraically.",
          workingLatex: "x^2 = 6 - x \\;\\Rightarrow\\; x^2 + x - 6 = 0 \\;\\Rightarrow\\; (x+3)(x-2) = 0",
          explanation:
            "Setting the curve equal to the line and bringing terms to one side gives x^2 + x - 6 = 0. This factorises to (x + 3)(x - 2) = 0, so x = -3 or x = 2 — the two graph readings.",
        },
        {
          stepNumber: 5,
          description: "State both solutions and verify.",
          workingLatex: "(-3,\\,9) \\text{ and } (2,\\,4): \\quad (-3)^2 = 9 \\;\\checkmark \\quad 6-2 = 4 \\;\\checkmark",
          explanation:
            "Both points satisfy y = x^2 and y = 6 - x, so the solutions are x = -3, y = 9 and x = 2, y = 4. (The claim that the line is a tangent is false.)",
        },
      ],
      finalAnswer: "\\((-3,\\,9)\\) and \\((2,\\,4)\\)",
      canonicalAnswer: "(-3,9), (2,4)",
    },
  },
  {
    id: "ga45-025",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "By drawing graphs for \\(0 \\le x \\le 5\\), solve the simultaneous equations \\(4x + 3y = 18\\) and \\(y = 2x - 4\\), giving the intersection as a coordinate pair.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "table of values", "rearranging"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Rearrange 4x + 3y = 18 to make y the subject.",
          workingLatex: "4x + 3y = 18 \\;\\Rightarrow\\; 3y = 18 - 4x \\;\\Rightarrow\\; y = 6 - \\frac{4}{3}x",
          explanation:
            "Subtract 4x from both sides, then divide every term by 3. Choosing x-values that are multiples of 3 will keep the (4/3)x term whole-numbered.",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = 6 - (4/3)x at multiples of 3.",
          workingLatex:
            "\\begin{array}{c|cc} x & 0 & 3 \\\\ \\hline y=6-\\frac{4}{3}x & 6 & 2 \\end{array}",
          explanation:
            "At x = 0, y = 6; at x = 3, (4/3)(3) = 4 so y = 6 - 4 = 2. Two points, (0, 6) and (3, 2), are enough to draw the straight line.",
        },
        {
          stepNumber: 3,
          description: "Tabulate y = 2x - 4.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 3 & 5 \\\\ \\hline y=2x-4 & -4 & 2 & 6 \\end{array}",
          explanation:
            "Doubling each x and subtracting 4, the rising line passes through (0, -4), (3, 2) and (5, 6).",
        },
        {
          stepNumber: 4,
          description: "Equate the expressions to find x.",
          workingLatex: "6 - \\frac{4}{3}x = 2x - 4 \\;\\Rightarrow\\; 6 + 4 = 2x + \\frac{4}{3}x \\;\\Rightarrow\\; 10 = \\frac{10}{3}x",
          explanation:
            "Add (4/3)x and 4 to both sides. Combining 2x + (4/3)x = (6/3)x + (4/3)x = (10/3)x, so 10 = (10/3)x.",
        },
        {
          stepNumber: 5,
          description: "Solve for x and read the height.",
          workingLatex: "x = 10 \\div \\frac{10}{3} = 3, \\quad y = 2(3) - 4 = 2 \\;\\Rightarrow\\; (3,\\,2)",
          explanation:
            "Dividing 10 by 10/3 gives x = 3. Both tables already show y = 2 at x = 3, so the lines cross at (3, 2).",
        },
        {
          stepNumber: 6,
          description: "Verify in both original equations.",
          workingLatex: "4(3)+3(2) = 12+6 = 18 \\;\\checkmark \\qquad 2(3)-4 = 2 \\;\\checkmark",
          explanation:
            "Both original equations are satisfied by (3, 2), confirming it is the solution of the simultaneous equations.",
        },
      ],
      finalAnswer: "\\((3,\\,2)\\)",
      canonicalAnswer: "x=3, y=2",
    },
  },
  {
    id: "ga45-026",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "On a graph, the lines \\(y = 3x - 4\\) and \\(y = -2x + 6\\) are drawn and cross at the point \\(R\\). Read off \\(R\\) from the graphs, giving the answer to one decimal place where necessary.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "read from graph", "approximate reading"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate y = 3x - 4.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 3 \\\\ \\hline y=3x-4 & -4 & 2 & 5 \\end{array}",
          explanation:
            "The steep rising line (gradient 3) passes through (0, -4), (2, 2) and (3, 5).",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = -2x + 6.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 2 & 3 \\\\ \\hline y=-2x+6 & 6 & 2 & 0 \\end{array}",
          explanation:
            "The falling line (gradient -2) passes through (0, 6), (2, 2) and (3, 0).",
        },
        {
          stepNumber: 3,
          description: "Equate the heights to find x.",
          workingLatex: "3x - 4 = -2x + 6 \\;\\Rightarrow\\; 3x + 2x = 6 + 4 \\;\\Rightarrow\\; 5x = 10 \\;\\Rightarrow\\; x = 2",
          explanation:
            "Set the heights equal and collect terms: adding 2x and 4 to both sides gives 5x = 10, so x = 2. Here the reading turns out to be a whole number, which the algebra confirms.",
        },
        {
          stepNumber: 4,
          description: "Find y, state R, and verify.",
          workingLatex: "y = 3(2)-4 = 2 \\;\\Rightarrow\\; R = (2,\\,2); \\quad -2(2)+6 = 2 \\;\\checkmark",
          explanation:
            "At x = 2 both lines give y = 2, so R = (2, 2) — or (2.0, 2.0) to one decimal place. Both equations are satisfied, confirming the solution.",
        },
      ],
      finalAnswer: "\\((2,\\,2)\\)",
      canonicalAnswer: "x=2, y=2",
    },
  },
  {
    id: "ga45-027",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "Two candles burn down. Candle A's height is \\(y = 20 - 2x\\) cm and Candle B's height is \\(y = 15 - x\\) cm, where \\(x\\) is the time in hours. By graphing both for \\(0 \\le x \\le 10\\), find the time at which the candles are the same height and that height.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "context", "interpretation", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate Candle A's height, y = 20 - 2x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 5 & 10 \\\\ \\hline y=20-2x & 20 & 10 & 0 \\end{array}",
          explanation:
            "Candle A starts at 20 cm and burns 2 cm per hour, reaching 0 at 10 hours: (0, 20), (5, 10), (10, 0).",
        },
        {
          stepNumber: 2,
          description: "Tabulate Candle B's height, y = 15 - x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 5 & 10 \\\\ \\hline y=15-x & 15 & 10 & 5 \\end{array}",
          explanation:
            "Candle B starts at 15 cm and burns 1 cm per hour: (0, 15), (5, 10), (10, 5). It starts shorter but burns more slowly.",
        },
        {
          stepNumber: 3,
          description: "Set the heights equal to find the time.",
          workingLatex: "20 - 2x = 15 - x \\;\\Rightarrow\\; 20 - 15 = 2x - x \\;\\Rightarrow\\; 5 = x",
          explanation:
            "The taller, faster-burning candle drops to meet the shorter one. Collecting the x-terms on one side and numbers on the other gives x = 5 hours.",
        },
        {
          stepNumber: 4,
          description: "Find the common height and verify.",
          workingLatex: "y = 20 - 2(5) = 10; \\quad 15 - 5 = 10 \\;\\checkmark",
          explanation:
            "At x = 5 both candles are 10 cm tall, so the graphs cross at (5, 10).",
        },
        {
          stepNumber: 5,
          description: "Interpret in context.",
          workingLatex: "\\text{after } 5 \\text{ hours, both candles are } 10 \\text{ cm tall}",
          explanation:
            "The solution means the candles reach equal height of 10 cm after 5 hours. (Before this Candle A is taller; afterwards Candle B is taller.)",
        },
      ],
      finalAnswer: "\\((5,\\,10)\\): equal at \\(5\\) hours, height \\(10\\) cm",
      canonicalAnswer: "x=5, y=10",
    },
  },
  {
    id: "ga45-028",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "The curve \\(y = x^2 - 3\\) and the line \\(y = 2x\\) are drawn for \\(-2 \\le x \\le 4\\). Solve the simultaneous equations graphically, giving both intersection points.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "line meets curve", "quadratic", "two solutions"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the curve y = x^2 - 3.",
          workingLatex:
            "\\begin{array}{c|ccccc} x & -2 & -1 & 0 & 1 & 3 \\\\ \\hline y=x^2-3 & 1 & -2 & -3 & -2 & 6 \\end{array}",
          explanation:
            "Square each x and subtract 3, e.g. at x = 3: 9 - 3 = 6. The parabola has its minimum at (0, -3), passing through (-2, 1), (-1, -2), (0, -3), (1, -2), (3, 6).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the line y = 2x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & -1 & 0 & 3 \\\\ \\hline y=2x & -2 & 0 & 6 \\end{array}",
          explanation:
            "Doubling each x, the line through the origin passes through (-1, -2), (0, 0) and (3, 6).",
        },
        {
          stepNumber: 3,
          description: "Find the common points.",
          workingLatex: "x=-1: \\;(-1,-2)\\ \\text{on both}; \\qquad x=3: \\;(3,6)\\ \\text{on both}",
          explanation:
            "Comparing the tables, both graphs pass through (-1, -2) and (3, 6). The line cuts the parabola at these two points.",
        },
        {
          stepNumber: 4,
          description: "Confirm algebraically.",
          workingLatex: "x^2 - 3 = 2x \\;\\Rightarrow\\; x^2 - 2x - 3 = 0 \\;\\Rightarrow\\; (x-3)(x+1) = 0",
          explanation:
            "Setting curve equal to line and moving 2x across gives x^2 - 2x - 3 = 0. This factorises to (x - 3)(x + 1) = 0, so x = 3 or x = -1, matching the graph.",
        },
        {
          stepNumber: 5,
          description: "State both solutions and verify.",
          workingLatex: "(-1,\\,-2) \\text{ and } (3,\\,6): \\quad (-1)^2-3 = -2 \\;\\checkmark \\quad 3^2-3 = 6 \\;\\checkmark",
          explanation:
            "Both points satisfy y = x^2 - 3 and y = 2x, so the solutions are x = -1, y = -2 and x = 3, y = 6.",
        },
      ],
      finalAnswer: "\\((-1,\\,-2)\\) and \\((3,\\,6)\\)",
      canonicalAnswer: "(-1,-2), (3,6)",
    },
  },
  {
    id: "ga45-029",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "By drawing the graphs of \\(y = x + 2\\) and \\(y = 4x - 1\\) for \\(0 \\le x \\le 2\\), solve the simultaneous equations graphically. Give each coordinate to one decimal place.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "approximate reading", "straight lines"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate y = x + 2.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline y=x+2 & 2 & 3 & 4 \\end{array}",
          explanation:
            "Adding 2 to each x, the gentle line passes through (0, 2), (1, 3) and (2, 4).",
        },
        {
          stepNumber: 2,
          description: "Tabulate y = 4x - 1.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 1 & 2 \\\\ \\hline y=4x-1 & -1 & 3 & 7 \\end{array}",
          explanation:
            "Multiplying each x by 4 and subtracting 1, the steep line passes through (0, -1), (1, 3) and (2, 7).",
        },
        {
          stepNumber: 3,
          description: "Equate the expressions to find x.",
          workingLatex: "x + 2 = 4x - 1 \\;\\Rightarrow\\; 2 + 1 = 4x - x \\;\\Rightarrow\\; 3 = 3x \\;\\Rightarrow\\; x = 1",
          explanation:
            "Set the two heights equal and collect terms: 3 = 3x, so x = 1. Both tables also give y = 3 at x = 1, confirming the crossing.",
        },
        {
          stepNumber: 4,
          description: "Find y, give to 1 d.p., and verify.",
          workingLatex: "y = 1 + 2 = 3 \\;\\Rightarrow\\; (1.0,\\,3.0); \\quad 4(1)-1 = 3 \\;\\checkmark",
          explanation:
            "Substituting x = 1 gives y = 3, so the intersection is (1, 3), or (1.0, 3.0) to one decimal place. Both equations give y = 3, confirming the solution.",
        },
      ],
      finalAnswer: "\\((1.0,\\,3.0)\\)",
      canonicalAnswer: "x=1, y=3",
    },
  },
  {
    id: "ga45-030",
    topicRef: "ga45",
    topicTitle: "Simultaneous equations solved graphically",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A small business has revenue \\(y = 5x\\) (pounds) and costs \\(y = 2x + 30\\) (pounds), where \\(x\\) is the number of items sold. By graphing both for \\(0 \\le x \\le 14\\), find the break-even point (where revenue equals cost) and state the number of items needed to break even.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["simultaneous equations", "graphical method", "context", "break-even", "interpretation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Tabulate the revenue line, y = 5x.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 5 & 10 \\\\ \\hline y=5x & 0 & 25 & 50 \\end{array}",
          explanation:
            "Revenue is 5 pounds per item, so the line starts at the origin and rises steeply: (0, 0), (5, 25), (10, 50).",
        },
        {
          stepNumber: 2,
          description: "Tabulate the cost line, y = 2x + 30.",
          workingLatex:
            "\\begin{array}{c|ccc} x & 0 & 5 & 10 \\\\ \\hline y=2x+30 & 30 & 40 & 50 \\end{array}",
          explanation:
            "Costs start at a fixed 30 pounds and rise by 2 pounds per item: (0, 30), (5, 40), (10, 50). Costs start above revenue.",
        },
        {
          stepNumber: 3,
          description: "Equate revenue and cost to find the break-even x.",
          workingLatex: "5x = 2x + 30 \\;\\Rightarrow\\; 5x - 2x = 30 \\;\\Rightarrow\\; 3x = 30 \\;\\Rightarrow\\; x = 10",
          explanation:
            "Break-even is where the revenue line catches up with the cost line. Subtracting 2x from both sides gives 3x = 30, so x = 10 items.",
        },
        {
          stepNumber: 4,
          description: "Find the value at the crossing.",
          workingLatex: "y = 5(10) = 50 \\;\\Rightarrow\\; (10,\\,50)",
          explanation:
            "At x = 10 the revenue is 5 times 10, which is 50 pounds — equal to the cost there. So the graphs cross at (10, 50).",
        },
        {
          stepNumber: 5,
          description: "Verify in both equations.",
          workingLatex: "5(10) = 50 \\;\\checkmark \\qquad 2(10) + 30 = 50 \\;\\checkmark",
          explanation:
            "Both the revenue and cost formulas give 50 pounds at x = 10, confirming the intersection (10, 50).",
        },
        {
          stepNumber: 6,
          description: "Interpret in context.",
          workingLatex: "\\text{break-even at } x = 10 \\text{ items}, \\; y = \\pounds 50",
          explanation:
            "The business breaks even when it sells 10 items, at which point both revenue and cost equal 50 pounds. Selling more than 10 items makes a profit; fewer makes a loss.",
        },
      ],
      finalAnswer: "\\((10,\\,50)\\): break even at \\(10\\) items / \\(\\pounds 50\\)",
      canonicalAnswer: "x=10, y=50",
    },
  },
];
