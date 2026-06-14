/**
 * Topic: Graphing linear inequalities in two variables
 * Ref: ga49  (DfE A22)
 * Strand: Algebra — GCSE Maths (Higher tier)
 *
 * Coverage: drawing and interpreting regions defined by linear inequalities in
 *   two variables. Key conventions used throughout:
 *     - The BOUNDARY line is the corresponding equality (replace the inequality
 *       sign by =). For x > a / x < a draw the vertical line x = a; for y > b /
 *       y < b draw the horizontal line y = b.
 *     - Line STYLE: SOLID when the boundary is included (<= or >=); DASHED when
 *       the boundary is NOT included (< or >).
 *     - SHADING SIDE: test a point not on the line — usually the origin (0,0).
 *       If the test point satisfies the inequality, shade the side containing
 *       it; if not, shade the other side. (When the line passes through the
 *       origin, test another easy point such as (1,0) or (0,1).)
 *   Clusters:
 *   (1) a single inequality y < mx+c / y >= mx+c (and x > a, y <= b): state the
 *       boundary, dashed vs solid, and which side to shade via an origin test;
 *   (2) regions bounded by 2–3 inequalities at once — describe the overlap
 *       region R and its vertices;
 *   (3) IDENTIFY the inequalities defining a described shaded region (reverse
 *       direction): from the boundary lines and shading, write the set;
 *   (4) test whether given integer points lie in R / LIST integer points
 *       satisfying all inequalities;
 *   (5) worded constraint / feasible-region problems — form the inequalities,
 *       describe R, and optimise a simple quantity at a vertex.
 *   Solutions stress: name the boundary line, state solid/dashed, perform an
 *   explicit point (origin) test, name the shaded side, and for multi-inequality
 *   regions check a sample interior point against ALL inequalities.
 *
 * Difficulty split (30 total):
 *   - Foundation: ga49-001 .. ga49-004  (4)   single inequality, 2 marks
 *   - Standard:   ga49-005 .. ga49-018  (14)
 *   - Challenge:  ga49-019 .. ga49-030  (12)
 * Id range: ga49-001 .. ga49-030.
 *
 * LaTeX note: questionText maths is wrapped in \\( ... \\) and uses \\dfrac for
 *   display fractions in the stem; workingLatex is RAW LaTeX (no \\(...\\) or
 *   $...$ wrappers) and uses \\frac (never \\tfrac) for fractions and \\cdot for
 *   multiplication, per hard project rules. Inequality signs: \\le, \\ge, <, >.
 *   Regions are described in words only — no Mafs/TikZ/diagram fields are used.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  // ───────────────────────── FOUNDATION (001–004) ─────────────────────────
  {
    id: "ga49-001",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Describe how to draw the boundary line and which side to shade for the region \\(x > 2\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["region", "dashed boundary", "shading", "vertical line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify and draw the boundary line.",
          workingLatex: "\\text{boundary: } x = 2 \\;\\text{(vertical line), DASHED}",
          explanation:
            "The boundary is the equality x = 2, a vertical line through x = 2 on the x-axis. Because the inequality is strict (>), points on the line are NOT included, so the line is drawn DASHED.",
        },
        {
          stepNumber: 2,
          description: "Decide which side to shade with a point test.",
          workingLatex: "\\text{test } (0,0): \\; 0 > 2 \\text{ false} \\Rightarrow \\text{shade the other side (where } x>2)",
          explanation:
            "Test the origin (0,0): is 0 > 2? No. So the origin's side is wrong; shade the opposite side — everything to the RIGHT of x = 2.",
        },
      ],
      finalAnswer:
        "\\(\\text{Dashed line } x=2; \\text{ shade the region to the right where } x>2\\)",
      canonicalAnswer: "x>2",
    },
  },
  {
    id: "ga49-002",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Describe how to draw the boundary line and which side to shade for the region \\(y \\le 3\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["region", "solid boundary", "shading", "horizontal line"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify and draw the boundary line.",
          workingLatex: "\\text{boundary: } y = 3 \\;\\text{(horizontal line), SOLID}",
          explanation:
            "The boundary is y = 3, a horizontal line. Because the inequality includes equality (\\le), points on the line ARE included, so the line is drawn SOLID.",
        },
        {
          stepNumber: 2,
          description: "Decide which side to shade with a point test.",
          workingLatex: "\\text{test } (0,0): \\; 0 \\le 3 \\text{ true} \\Rightarrow \\text{shade the origin's side (below)}",
          explanation:
            "Test the origin (0,0): is 0 \\le 3? Yes. The origin satisfies the inequality, so shade the side containing it — everything on or BELOW the line y = 3.",
        },
      ],
      finalAnswer:
        "\\(\\text{Solid line } y=3; \\text{ shade the region below where } y\\le 3\\)",
      canonicalAnswer: "y<=3",
    },
  },
  {
    id: "ga49-003",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Describe how to draw the boundary line and which side to shade for the region \\(y < x + 1\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["region", "dashed boundary", "shading", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify and draw the boundary line.",
          workingLatex: "\\text{boundary: } y = x + 1, \\;\\text{DASHED}",
          explanation:
            "The boundary is the line y = x + 1 (gradient 1, y-intercept 1). The inequality is strict (<), so the line is NOT included and is drawn DASHED.",
        },
        {
          stepNumber: 2,
          description: "Decide which side to shade with the origin test.",
          workingLatex: "\\text{test } (0,0): \\; 0 < 0 + 1 = 1 \\text{ true} \\Rightarrow \\text{shade the origin's side (below the line)}",
          explanation:
            "Substitute (0,0): is 0 < 1? Yes. The origin satisfies y < x + 1, so shade the side containing the origin — below the line.",
        },
      ],
      finalAnswer:
        "\\(\\text{Dashed line } y=x+1; \\text{ shade below it where } y<x+1\\)",
      canonicalAnswer: "y<x+1",
    },
  },
  {
    id: "ga49-004",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Describe how to draw the boundary line and which side to shade for the region \\(y \\ge 2x - 1\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["region", "solid boundary", "shading", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify and draw the boundary line.",
          workingLatex: "\\text{boundary: } y = 2x - 1, \\;\\text{SOLID}",
          explanation:
            "The boundary is y = 2x - 1 (gradient 2, y-intercept -1). The inequality includes equality (\\ge), so the line IS included and is drawn SOLID.",
        },
        {
          stepNumber: 2,
          description: "Decide which side to shade with the origin test.",
          workingLatex: "\\text{test } (0,0): \\; 0 \\ge 2(0) - 1 = -1 \\text{ true} \\Rightarrow \\text{shade the origin's side (above the line)}",
          explanation:
            "Substitute (0,0): is 0 \\ge -1? Yes. The origin satisfies y \\ge 2x - 1, so shade the side containing the origin — above the line.",
        },
      ],
      finalAnswer:
        "\\(\\text{Solid line } y=2x-1; \\text{ shade above it where } y\\ge 2x-1\\)",
      canonicalAnswer: "y>=2x-1",
    },
  },

  // ───────────────────────── STANDARD (005–018) ─────────────────────────
  {
    id: "ga49-005",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "On a grid you must shade the region satisfying \\(y \\ge 2x + 1\\). State the boundary line, whether it is solid or dashed, and which side to shade. Justify the side with the origin test.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "solid boundary", "shading", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the boundary line.",
          workingLatex: "y = 2x + 1",
          explanation:
            "Replace the inequality sign with '=' to get the boundary. The boundary is the straight line y = 2x + 1, with gradient 2 and y-intercept 1.",
        },
        {
          stepNumber: 2,
          description: "Decide solid or dashed from the inequality sign.",
          workingLatex: "\\ge \\Rightarrow \\text{SOLID}",
          explanation:
            "The sign is \\ge, which includes equality. Points exactly on the line satisfy the inequality, so the boundary is drawn as a SOLID line.",
        },
        {
          stepNumber: 3,
          description: "Plot two points to draw the line.",
          workingLatex: "x=0: y=1; \\quad x=1: y=3 \\Rightarrow (0,1),\\,(1,3)",
          explanation:
            "Choose convenient x-values. At x = 0, y = 1; at x = 1, y = 2(1)+1 = 3. Draw the solid line through (0,1) and (1,3).",
        },
        {
          stepNumber: 4,
          description: "Test the origin to find the correct side.",
          workingLatex: "(0,0): \\; 0 \\ge 2(0)+1 = 1 ?",
          explanation:
            "Substitute the origin (0,0) into y \\ge 2x + 1. The right-hand side is 1, so we are asking whether 0 \\ge 1.",
        },
        {
          stepNumber: 5,
          description: "Interpret the test result.",
          workingLatex: "0 \\ge 1 \\text{ is FALSE} \\Rightarrow \\text{shade the side NOT containing the origin}",
          explanation:
            "0 \\ge 1 is false, so the origin does NOT lie in the region. Shade the opposite side to the origin — the side above the line.",
        },
        {
          stepNumber: 6,
          description: "State the final instruction.",
          workingLatex: "\\text{SOLID } y=2x+1; \\;\\text{shade above (away from origin)}",
          explanation:
            "Final answer: draw a solid line y = 2x + 1 and shade the region above it (the side away from the origin), which is where y \\ge 2x + 1.",
        },
      ],
      finalAnswer:
        "\\(\\text{Solid line } y=2x+1; \\text{ shade above it (away from the origin)}\\)",
      canonicalAnswer: "y>=2x+1",
    },
  },
  {
    id: "ga49-006",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Describe fully how to shade the region \\(y < -x + 4\\): state the boundary line, whether it is solid or dashed, and which side to shade, justified by the origin test.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "dashed boundary", "shading", "origin test", "negative gradient"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write down the boundary line.",
          workingLatex: "y = -x + 4",
          explanation:
            "Replacing < by = gives the boundary y = -x + 4, a line with gradient -1 and y-intercept 4.",
        },
        {
          stepNumber: 2,
          description: "Decide solid or dashed.",
          workingLatex: "< \\Rightarrow \\text{DASHED}",
          explanation:
            "The inequality is strict (<), so points on the line are excluded. The boundary is drawn DASHED.",
        },
        {
          stepNumber: 3,
          description: "Find two points on the line.",
          workingLatex: "x=0: y=4; \\quad x=4: y=0 \\Rightarrow (0,4),\\,(4,0)",
          explanation:
            "At x = 0, y = 4; at x = 4, y = -4 + 4 = 0. Draw the dashed line through (0,4) and (4,0).",
        },
        {
          stepNumber: 4,
          description: "Test the origin.",
          workingLatex: "(0,0): \\; 0 < -(0) + 4 = 4 ?",
          explanation:
            "Substitute (0,0) into y < -x + 4. The right side is 4, so we check whether 0 < 4.",
        },
        {
          stepNumber: 5,
          description: "Interpret the result and conclude.",
          workingLatex: "0 < 4 \\text{ TRUE} \\Rightarrow \\text{shade the origin's side (below the line)}",
          explanation:
            "0 < 4 is true, so the origin lies in the region. Shade the side containing the origin — below the line y = -x + 4.",
        },
      ],
      finalAnswer:
        "\\(\\text{Dashed line } y=-x+4; \\text{ shade below it (the origin's side)}\\)",
      canonicalAnswer: "y<-x+4",
    },
  },
  {
    id: "ga49-007",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A region is defined by \\(2x + y \\le 6\\). State the boundary line, whether it is solid or dashed, and which side to shade, justified by the origin test.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "solid boundary", "shading", "rearranging", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the boundary line.",
          workingLatex: "2x + y = 6",
          explanation:
            "Replace \\le by = to get the boundary 2x + y = 6. It is often easiest to plot this using its intercepts rather than rearranging.",
        },
        {
          stepNumber: 2,
          description: "Decide solid or dashed.",
          workingLatex: "\\le \\Rightarrow \\text{SOLID}",
          explanation:
            "The sign \\le includes equality, so the boundary line is part of the region and is drawn SOLID.",
        },
        {
          stepNumber: 3,
          description: "Find the intercepts of the line.",
          workingLatex: "x=0: y=6; \\quad y=0: 2x=6 \\Rightarrow x=3",
          explanation:
            "Setting x = 0 gives y = 6; setting y = 0 gives 2x = 6 so x = 3. Draw the solid line through (0,6) and (3,0).",
        },
        {
          stepNumber: 4,
          description: "Test the origin.",
          workingLatex: "(0,0): \\; 2(0) + 0 = 0 \\le 6 ?",
          explanation:
            "Substitute (0,0) into 2x + y \\le 6. The left side is 0, so we check whether 0 \\le 6.",
        },
        {
          stepNumber: 5,
          description: "Interpret and conclude.",
          workingLatex: "0 \\le 6 \\text{ TRUE} \\Rightarrow \\text{shade the origin's side (below/left of the line)}",
          explanation:
            "0 \\le 6 is true, so the origin is inside the region. Shade the side containing the origin — below and to the left of the line.",
        },
      ],
      finalAnswer:
        "\\(\\text{Solid line } 2x+y=6; \\text{ shade the origin's side where } 2x+y\\le 6\\)",
      canonicalAnswer: "2x+y<=6",
    },
  },
  {
    id: "ga49-008",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A region is defined by \\(y > \\dfrac{1}{2}x - 2\\). State the boundary line, whether it is solid or dashed, and which side to shade, justified by the origin test.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "dashed boundary", "shading", "fractional gradient", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the boundary line.",
          workingLatex: "y = \\frac{1}{2}x - 2",
          explanation:
            "Replacing > by = gives the boundary y = (1/2)x - 2, with gradient 1/2 and y-intercept -2.",
        },
        {
          stepNumber: 2,
          description: "Decide solid or dashed.",
          workingLatex: "> \\Rightarrow \\text{DASHED}",
          explanation:
            "The inequality is strict (>), so the boundary line is excluded and drawn DASHED.",
        },
        {
          stepNumber: 3,
          description: "Find two points on the line.",
          workingLatex: "x=0: y=-2; \\quad x=4: y=\\frac{1}{2}(4)-2 = 0 \\Rightarrow (0,-2),\\,(4,0)",
          explanation:
            "At x = 0, y = -2; at x = 4, y = 2 - 2 = 0. Draw the dashed line through (0,-2) and (4,0).",
        },
        {
          stepNumber: 4,
          description: "Test the origin.",
          workingLatex: "(0,0): \\; 0 > \\frac{1}{2}(0) - 2 = -2 ?",
          explanation:
            "Substitute (0,0): the right side is -2, so we check whether 0 > -2.",
        },
        {
          stepNumber: 5,
          description: "Interpret and conclude.",
          workingLatex: "0 > -2 \\text{ TRUE} \\Rightarrow \\text{shade the origin's side (above the line)}",
          explanation:
            "0 > -2 is true, so the origin lies in the region. Shade the side containing the origin — above the line.",
        },
      ],
      finalAnswer:
        "\\(\\text{Dashed line } y=\\tfrac{1}{2}x-2; \\text{ shade above it (the origin's side)}\\)",
      canonicalAnswer: "y>1/2x-2",
    },
  },
  {
    id: "ga49-009",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A shaded region R is bounded by a SOLID vertical line through \\(x = 1\\) with shading to its right, and a DASHED horizontal line through \\(y = 4\\) with shading below it. Write down the two inequalities that define R.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "solid boundary", "dashed boundary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the vertical boundary.",
          workingLatex: "\\text{vertical line } x = 1, \\text{ SOLID, shading to the right}",
          explanation:
            "A vertical boundary controls x. Shading to the right means x is greater than 1. The line is solid, so equality is included, giving x \\ge 1.",
        },
        {
          stepNumber: 2,
          description: "Write the first inequality.",
          workingLatex: "x \\ge 1",
          explanation:
            "Right of x = 1 is x > 1; including the solid line makes it x \\ge 1.",
        },
        {
          stepNumber: 3,
          description: "Interpret the horizontal boundary.",
          workingLatex: "\\text{horizontal line } y = 4, \\text{ DASHED, shading below}",
          explanation:
            "A horizontal boundary controls y. Shading below means y is less than 4. The line is dashed, so equality is excluded, giving y < 4.",
        },
        {
          stepNumber: 4,
          description: "Write the second inequality.",
          workingLatex: "y < 4",
          explanation:
            "Below y = 4 is y < 4; the dashed line keeps the strict inequality (no equals).",
        },
        {
          stepNumber: 5,
          description: "Check a sample interior point.",
          workingLatex: "(2,0): \\; 2 \\ge 1 \\checkmark, \\; 0 < 4 \\checkmark",
          explanation:
            "Pick a point clearly inside R, e.g. (2,0). It is right of x = 1 and below y = 4, and indeed satisfies both x \\ge 1 and y < 4, confirming the inequalities.",
        },
      ],
      finalAnswer: "\\(x \\ge 1 \\;\\text{and}\\; y < 4\\)",
      canonicalAnswer: "x>=1, y<4",
    },
  },
  {
    id: "ga49-010",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Does the point \\((3,\\,2)\\) lie in the region defined by \\(y \\le 2x - 1\\)? Show your working.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "test a point", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the test: substitute the point into the inequality.",
          workingLatex: "\\text{check } (3,2) \\text{ in } y \\le 2x - 1",
          explanation:
            "A point lies in a region if its coordinates make the inequality true. Substitute x = 3 and y = 2.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the right-hand side.",
          workingLatex: "2x - 1 = 2(3) - 1 = 6 - 1 = 5",
          explanation:
            "Work out 2x - 1 at x = 3: that is 6 - 1 = 5.",
        },
        {
          stepNumber: 3,
          description: "Compare with the y-value.",
          workingLatex: "y \\le 5 ? \\quad 2 \\le 5 \\text{ TRUE}",
          explanation:
            "The inequality requires y \\le 5. Here y = 2, and 2 \\le 5 is true.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "2 \\le 5 \\Rightarrow (3,2) \\text{ lies IN the region}",
          explanation:
            "Because the inequality holds, the point (3,2) lies inside (or on the boundary of) the region.",
        },
      ],
      finalAnswer: "\\(\\text{Yes: } 2 \\le 5, \\text{ so } (3,2) \\text{ is in the region}\\)",
      canonicalAnswer: "yes",
    },
  },
  {
    id: "ga49-011",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Does the point \\((1,\\,5)\\) lie in the region defined by \\(x + y < 4\\)? Show your working.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "test a point", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Substitute the point into the inequality.",
          workingLatex: "\\text{check } (1,5) \\text{ in } x + y < 4",
          explanation:
            "Put x = 1 and y = 5 into the left-hand side and compare with 4.",
        },
        {
          stepNumber: 2,
          description: "Evaluate the left-hand side.",
          workingLatex: "x + y = 1 + 5 = 6",
          explanation:
            "1 + 5 = 6.",
        },
        {
          stepNumber: 3,
          description: "Compare with 4.",
          workingLatex: "6 < 4 ? \\quad \\text{FALSE}",
          explanation:
            "The inequality needs the sum to be less than 4, but 6 < 4 is false.",
        },
        {
          stepNumber: 4,
          description: "Conclude.",
          workingLatex: "6 \\not< 4 \\Rightarrow (1,5) \\text{ is NOT in the region}",
          explanation:
            "Since the inequality fails, the point (1,5) does not lie in the region.",
        },
      ],
      finalAnswer: "\\(\\text{No: } 1+5=6 \\not< 4, \\text{ so } (1,5) \\text{ is not in the region}\\)",
      canonicalAnswer: "no",
    },
  },
  {
    id: "ga49-012",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A region R is defined by the three inequalities \\(x \\ge 0\\), \\(y \\ge 0\\) and \\(x + y \\le 5\\). Describe the boundary lines (solid/dashed) and the shape and vertices of R.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "overlap region", "vertices", "solid boundary", "feasible region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the first two inequalities.",
          workingLatex: "x \\ge 0 \\text{ (solid } y\\text{-axis)}, \\quad y \\ge 0 \\text{ (solid } x\\text{-axis)}",
          explanation:
            "x \\ge 0 means on or right of the y-axis; y \\ge 0 means on or above the x-axis. Both use \\ge, so the axes are solid boundaries. Together they restrict R to the first quadrant.",
        },
        {
          stepNumber: 2,
          description: "Interpret the third inequality's boundary.",
          workingLatex: "x + y = 5: \\;\\; (5,0) \\text{ and } (0,5), \\text{ SOLID}",
          explanation:
            "The line x + y = 5 passes through (5,0) and (0,5). Since the sign is \\le, it is solid.",
        },
        {
          stepNumber: 3,
          description: "Find the correct side of the slanted line.",
          workingLatex: "(0,0): \\; 0 + 0 = 0 \\le 5 \\text{ TRUE} \\Rightarrow \\text{shade the origin's side}",
          explanation:
            "Test the origin: 0 \\le 5 is true, so R is on the origin's side of x + y = 5 (below/left of it).",
        },
        {
          stepNumber: 4,
          description: "Identify the vertices of the overlap region.",
          workingLatex: "(0,0),\\;(5,0),\\;(0,5)",
          explanation:
            "R is the overlap: the first quadrant cut by x + y \\le 5. Its corners are where the boundaries meet — (0,0), (5,0) and (0,5).",
        },
        {
          stepNumber: 5,
          description: "Describe the shape and confirm with an interior point.",
          workingLatex: "(1,1): \\; 1\\ge 0,\\; 1\\ge 0,\\; 1+1=2\\le 5 \\checkmark",
          explanation:
            "R is a triangle with vertices (0,0), (5,0), (0,5). Check an interior point (1,1): it satisfies all three inequalities, confirming R.",
        },
      ],
      finalAnswer:
        "\\(\\text{Triangle with solid sides; vertices } (0,0),\\,(5,0),\\,(0,5)\\)",
      canonicalAnswer: "triangle (0,0),(5,0),(0,5)",
    },
  },
  {
    id: "ga49-013",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A region R is defined by \\(x > 0\\), \\(y > 0\\) and \\(x + y \\le 3\\). List all the integer coordinate points \\((x,y)\\) that lie strictly inside or on the slanted boundary of R with \\(x \\ge 1\\) and \\(y \\ge 1\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "list integer points", "overlap region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the constraints on integer points.",
          workingLatex: "x \\ge 1, \\; y \\ge 1, \\; x + y \\le 3",
          explanation:
            "Because x > 0 and y > 0, the smallest positive integers are x = 1 and y = 1. We need integer points with x \\ge 1, y \\ge 1 and x + y \\le 3.",
        },
        {
          stepNumber: 2,
          description: "List candidates with x = 1.",
          workingLatex: "x=1: \\; y=1 \\Rightarrow 1+1=2\\le 3 \\checkmark; \\; y=2 \\Rightarrow 1+2=3\\le 3 \\checkmark",
          explanation:
            "With x = 1: (1,1) gives sum 2 \\le 3 (ok); (1,2) gives sum 3 \\le 3 (ok); (1,3) would give sum 4 > 3, rejected.",
        },
        {
          stepNumber: 3,
          description: "List candidates with x = 2.",
          workingLatex: "x=2: \\; y=1 \\Rightarrow 2+1=3\\le 3 \\checkmark",
          explanation:
            "With x = 2: (2,1) gives sum 3 \\le 3 (ok); (2,2) would give sum 4 > 3, rejected.",
        },
        {
          stepNumber: 4,
          description: "Check x = 3 and beyond.",
          workingLatex: "x=3: \\; y \\ge 1 \\Rightarrow 3+1=4 > 3 \\text{ (none)}",
          explanation:
            "With x = 3 the smallest y is 1, giving sum 4 > 3, so there are no valid points; larger x are worse.",
        },
        {
          stepNumber: 5,
          description: "Collect the valid integer points.",
          workingLatex: "\\{(1,1),\\,(1,2),\\,(2,1)\\}",
          explanation:
            "The integer points satisfying all the conditions are (1,1), (1,2) and (2,1).",
        },
      ],
      finalAnswer: "\\(\\{(1,1),\\,(1,2),\\,(2,1)\\}\\)",
      canonicalAnswer: "{(1,1),(1,2),(2,1)}",
    },
  },
  {
    id: "ga49-014",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A shaded region R lies BELOW a DASHED line \\(y = x\\) and ABOVE the SOLID line \\(y = 1\\). Write down the two inequalities that define R.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "dashed boundary", "solid boundary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the dashed line y = x.",
          workingLatex: "\\text{below } y = x \\Rightarrow y < x \\;(\\text{dashed} \\Rightarrow \\text{strict})",
          explanation:
            "Below the line y = x means the y-coordinate is smaller than x, so y < x. The dashed style means the line itself is excluded, keeping the strict <.",
        },
        {
          stepNumber: 2,
          description: "Confirm the side with a test point.",
          workingLatex: "(2,0): \\; 0 < 2 \\checkmark \\;\\text{(below } y=x)",
          explanation:
            "A point below y = x, such as (2,0), gives 0 < 2 which is true, confirming y < x describes 'below the line'.",
        },
        {
          stepNumber: 3,
          description: "Interpret the solid line y = 1.",
          workingLatex: "\\text{above } y = 1 \\Rightarrow y \\ge 1 \\;(\\text{solid} \\Rightarrow \\text{includes equality})",
          explanation:
            "Above the horizontal line y = 1 means y is greater than 1. The solid line includes equality, giving y \\ge 1.",
        },
        {
          stepNumber: 4,
          description: "Combine and check an interior point.",
          workingLatex: "(3,2): \\; 2 < 3 \\checkmark, \\; 2 \\ge 1 \\checkmark",
          explanation:
            "R is defined by y < x and y \\ge 1. Check (3,2): 2 < 3 and 2 \\ge 1, both true, so (3,2) is in R as expected.",
        },
      ],
      finalAnswer: "\\(y < x \\;\\text{and}\\; y \\ge 1\\)",
      canonicalAnswer: "y<x, y>=1",
    },
  },
  {
    id: "ga49-015",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Describe fully how to shade the region \\(3x - 2y < 6\\): state the boundary line, solid or dashed, and the shaded side using the origin test.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "dashed boundary", "shading", "rearranging", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the boundary line.",
          workingLatex: "3x - 2y = 6",
          explanation:
            "Replace < by = to get the boundary 3x - 2y = 6.",
        },
        {
          stepNumber: 2,
          description: "Decide solid or dashed.",
          workingLatex: "< \\Rightarrow \\text{DASHED}",
          explanation:
            "The inequality is strict, so the boundary line is excluded and drawn DASHED.",
        },
        {
          stepNumber: 3,
          description: "Find the intercepts to plot the line.",
          workingLatex: "y=0: 3x=6 \\Rightarrow x=2; \\quad x=0: -2y=6 \\Rightarrow y=-3",
          explanation:
            "Setting y = 0 gives x = 2; setting x = 0 gives -2y = 6 so y = -3. Draw the dashed line through (2,0) and (0,-3).",
        },
        {
          stepNumber: 4,
          description: "Test the origin.",
          workingLatex: "(0,0): \\; 3(0) - 2(0) = 0 < 6 ?",
          explanation:
            "Substitute (0,0) into 3x - 2y < 6. The left side is 0, so we check whether 0 < 6.",
        },
        {
          stepNumber: 5,
          description: "Interpret and conclude.",
          workingLatex: "0 < 6 \\text{ TRUE} \\Rightarrow \\text{shade the origin's side}",
          explanation:
            "0 < 6 is true, so the origin lies in the region. Shade the side of the dashed line that contains the origin.",
        },
      ],
      finalAnswer:
        "\\(\\text{Dashed line } 3x-2y=6; \\text{ shade the origin's side where } 3x-2y<6\\)",
      canonicalAnswer: "3x-2y<6",
    },
  },
  {
    id: "ga49-016",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The line \\(y = 2x\\) passes through the origin. Describe how to shade the region \\(y \\le 2x\\), being careful about which point to use for the side test.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "solid boundary", "shading", "line through origin", "test a point"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the boundary and its style.",
          workingLatex: "y = 2x, \\;\\text{SOLID} \\;(\\le \\text{ includes equality})",
          explanation:
            "The boundary is y = 2x through the origin with gradient 2. The sign \\le includes equality, so the line is SOLID.",
        },
        {
          stepNumber: 2,
          description: "Note that the origin cannot be used as the test point.",
          workingLatex: "(0,0) \\text{ lies ON } y=2x \\Rightarrow \\text{choose another point}",
          explanation:
            "Because the line passes through (0,0), the origin lies ON the boundary and gives no information about which side to shade. We must pick a different test point.",
        },
        {
          stepNumber: 3,
          description: "Choose a clear off-line point and test it.",
          workingLatex: "(1,0): \\; 0 \\le 2(1) = 2 ?",
          explanation:
            "Use (1,0), which is not on the line. Substitute into y \\le 2x: is 0 \\le 2?",
        },
        {
          stepNumber: 4,
          description: "Interpret and conclude.",
          workingLatex: "0 \\le 2 \\text{ TRUE} \\Rightarrow \\text{shade the side containing } (1,0)",
          explanation:
            "0 \\le 2 is true, so (1,0) is in the region. Shade the side of the line y = 2x that contains (1,0) — the region below/right of the line.",
        },
      ],
      finalAnswer:
        "\\(\\text{Solid line } y=2x; \\text{ shade the side containing } (1,0) \\text{ where } y\\le 2x\\)",
      canonicalAnswer: "y<=2x",
    },
  },
  {
    id: "ga49-017",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A region R is defined by \\(y \\ge 1\\), \\(x \\le 4\\) and \\(y \\le x\\). List all the integer points \\((x,y)\\) on or inside R.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "list integer points", "overlap region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Combine the constraints.",
          workingLatex: "1 \\le y, \\; x \\le 4, \\; y \\le x",
          explanation:
            "From y \\ge 1 and y \\le x we get x \\ge y \\ge 1, so x is at least 1; with x \\le 4 the x-values are 1, 2, 3, 4. For each x, y runs from 1 up to x.",
        },
        {
          stepNumber: 2,
          description: "List points for x = 1 and x = 2.",
          workingLatex: "x=1: y=1; \\quad x=2: y=1,2",
          explanation:
            "x = 1: y can only be 1 (since 1 \\le y \\le 1), giving (1,1). x = 2: y = 1 or 2, giving (2,1),(2,2).",
        },
        {
          stepNumber: 3,
          description: "List points for x = 3 and x = 4.",
          workingLatex: "x=3: y=1,2,3; \\quad x=4: y=1,2,3,4",
          explanation:
            "x = 3: y = 1,2,3 giving (3,1),(3,2),(3,3). x = 4: y = 1,2,3,4 giving (4,1),(4,2),(4,3),(4,4).",
        },
        {
          stepNumber: 4,
          description: "Collect all valid integer points.",
          workingLatex: "\\{(1,1),(2,1),(2,2),(3,1),(3,2),(3,3),(4,1),(4,2),(4,3),(4,4)\\}",
          explanation:
            "Gathering every point gives 10 integer coordinates lying on or inside R. A quick check: (3,2) has 2 \\ge 1, 3 \\le 4, 2 \\le 3, all true.",
        },
      ],
      finalAnswer:
        "\\(\\{(1,1),(2,1),(2,2),(3,1),(3,2),(3,3),(4,1),(4,2),(4,3),(4,4)\\}\\)",
      canonicalAnswer: "{(1,1),(2,1),(2,2),(3,1),(3,2),(3,3),(4,1),(4,2),(4,3),(4,4)}",
    },
  },
  {
    id: "ga49-018",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Standard",
    answerType: "set",
    questionText:
      "A shaded region R lies to the LEFT of the DASHED line \\(x = 5\\), ABOVE the SOLID line \\(y = 0\\), and BELOW the DASHED line \\(y = x + 1\\). Write down the three inequalities that define R.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "dashed boundary", "solid boundary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the vertical dashed line x = 5.",
          workingLatex: "\\text{left of } x=5, \\text{ dashed} \\Rightarrow x < 5",
          explanation:
            "Left of x = 5 means smaller x, so x < 5. The dashed line excludes equality, keeping the strict <.",
        },
        {
          stepNumber: 2,
          description: "Interpret the horizontal solid line y = 0.",
          workingLatex: "\\text{above } y=0, \\text{ solid} \\Rightarrow y \\ge 0",
          explanation:
            "Above the x-axis (y = 0) means y greater than 0. The solid line includes equality, giving y \\ge 0.",
        },
        {
          stepNumber: 3,
          description: "Interpret the slanted dashed line y = x + 1.",
          workingLatex: "\\text{below } y = x+1, \\text{ dashed} \\Rightarrow y < x + 1",
          explanation:
            "Below the line y = x + 1 means y smaller than x + 1, so y < x + 1. The dashed style keeps the strict inequality.",
        },
        {
          stepNumber: 4,
          description: "Combine and check an interior point.",
          workingLatex: "(3,1): \\; 3 < 5 \\checkmark, \\; 1 \\ge 0 \\checkmark, \\; 1 < 4 \\checkmark",
          explanation:
            "R is x < 5, y \\ge 0 and y < x + 1. Test (3,1): 3 < 5, 1 \\ge 0, and 1 < 3 + 1 = 4 — all true — confirming the set.",
        },
      ],
      finalAnswer: "\\(x < 5, \\;\\; y \\ge 0, \\;\\; y < x + 1\\)",
      canonicalAnswer: "x<5, y>=0, y<x+1",
    },
  },

  // ───────────────────────── CHALLENGE (019–030) ─────────────────────────
  {
    id: "ga49-019",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A region R satisfies all three of \\(y \\le 4\\), \\(y \\ge x\\) and \\(x \\ge 0\\). Describe each boundary (solid/dashed), perform the side tests, and give the vertices of R.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "overlap region", "vertices", "solid boundary", "origin test"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Boundary 1: y \\le 4.",
          workingLatex: "y = 4 \\text{ (horizontal, SOLID)}; \\;(0,0): 0 \\le 4 \\checkmark \\Rightarrow \\text{below}",
          explanation:
            "Boundary y = 4 is solid (\\le). The origin gives 0 \\le 4 (true), so R is on the origin's side — below y = 4.",
        },
        {
          stepNumber: 2,
          description: "Boundary 2: y \\ge x.",
          workingLatex: "y = x \\text{ (through origin, SOLID)}; \\;(0,1): 1 \\ge 0 \\checkmark \\Rightarrow \\text{above } y=x",
          explanation:
            "Boundary y = x passes through the origin, so test another point. Use (0,1): 1 \\ge 0 (true), so R is the side above the line y = x. The line is solid (\\ge).",
        },
        {
          stepNumber: 3,
          description: "Boundary 3: x \\ge 0.",
          workingLatex: "x = 0 \\text{ (the } y\\text{-axis, SOLID)}; \\;(1,0): 1 \\ge 0 \\checkmark \\Rightarrow \\text{right of axis}",
          explanation:
            "Boundary x = 0 is the y-axis, drawn solid (\\ge). R lies on or to the right of it.",
        },
        {
          stepNumber: 4,
          description: "Find the vertices where boundaries intersect.",
          workingLatex: "y=x \\cap x=0: (0,0); \\;\\; y=x \\cap y=4: (4,4); \\;\\; x=0 \\cap y=4: (0,4)",
          explanation:
            "The corners of R occur where pairs of boundaries cross. y = x meets x = 0 at (0,0); y = x meets y = 4 at (4,4); x = 0 meets y = 4 at (0,4).",
        },
        {
          stepNumber: 5,
          description: "Confirm with an interior point and state the shape.",
          workingLatex: "(1,3): \\; 3\\le 4\\checkmark, \\; 3\\ge 1\\checkmark, \\; 1\\ge 0\\checkmark",
          explanation:
            "Take an interior point (1,3): it satisfies all three inequalities, so R is the triangle with vertices (0,0), (4,4) and (0,4), with all sides solid.",
        },
      ],
      finalAnswer:
        "\\(\\text{Triangle (all solid); vertices } (0,0),\\,(4,4),\\,(0,4)\\)",
      canonicalAnswer: "triangle (0,0),(4,4),(0,4)",
    },
  },
  {
    id: "ga49-020",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A region R is defined by \\(x \\ge 0\\), \\(y \\ge 0\\) and \\(2x + y \\le 4\\). List all integer points \\((x,y)\\) lying in R (including its boundary).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "list integer points", "overlap region", "feasible region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the range for x.",
          workingLatex: "x \\ge 0 \\text{ and } 2x \\le 4 \\Rightarrow 0 \\le x \\le 2",
          explanation:
            "Since y \\ge 0, the constraint 2x + y \\le 4 forces 2x \\le 4, i.e. x \\le 2. Combined with x \\ge 0, the integer x-values are 0, 1, 2.",
        },
        {
          stepNumber: 2,
          description: "x = 0: find allowed y.",
          workingLatex: "2(0)+y \\le 4 \\Rightarrow y \\le 4 \\Rightarrow y = 0,1,2,3,4",
          explanation:
            "With x = 0, y ranges from 0 to 4: points (0,0),(0,1),(0,2),(0,3),(0,4).",
        },
        {
          stepNumber: 3,
          description: "x = 1: find allowed y.",
          workingLatex: "2(1)+y \\le 4 \\Rightarrow y \\le 2 \\Rightarrow y = 0,1,2",
          explanation:
            "With x = 1, y \\le 2: points (1,0),(1,1),(1,2).",
        },
        {
          stepNumber: 4,
          description: "x = 2: find allowed y.",
          workingLatex: "2(2)+y \\le 4 \\Rightarrow y \\le 0 \\Rightarrow y = 0",
          explanation:
            "With x = 2, 4 + y \\le 4 gives y \\le 0, so only y = 0: point (2,0).",
        },
        {
          stepNumber: 5,
          description: "Collect all valid points.",
          workingLatex: "\\{(0,0),(0,1),(0,2),(0,3),(0,4),(1,0),(1,1),(1,2),(2,0)\\}",
          explanation:
            "Gathering all the integer points gives 9 coordinates. Check (1,2): 2(1)+2 = 4 \\le 4 (on the boundary), valid.",
        },
      ],
      finalAnswer:
        "\\(\\{(0,0),(0,1),(0,2),(0,3),(0,4),(1,0),(1,1),(1,2),(2,0)\\}\\)",
      canonicalAnswer: "{(0,0),(0,1),(0,2),(0,3),(0,4),(1,0),(1,1),(1,2),(2,0)}",
    },
  },
  {
    id: "ga49-021",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A shaded region R is the triangle with SOLID sides whose vertices are \\((0,0)\\), \\((6,0)\\) and \\((0,6)\\). Write down the three inequalities that define R.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "vertices", "solid boundary"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the three boundary lines from the vertices.",
          workingLatex: "(0,0)\\!-\\!(6,0): y=0; \\;\\; (0,0)\\!-\\!(0,6): x=0; \\;\\; (6,0)\\!-\\!(0,6): x+y=6",
          explanation:
            "The side along the x-axis is y = 0; the side along the y-axis is x = 0; the slanted side joins (6,0) and (0,6), which lies on x + y = 6.",
        },
        {
          stepNumber: 2,
          description: "Fix the inequality for the x-axis side.",
          workingLatex: "\\text{interior point } (1,1): \\; y = 1 \\ge 0 \\Rightarrow y \\ge 0",
          explanation:
            "Pick an interior point like (1,1). It is above y = 0, and y = 1 \\ge 0, so the inequality for this solid side is y \\ge 0.",
        },
        {
          stepNumber: 3,
          description: "Fix the inequality for the y-axis side.",
          workingLatex: "(1,1): \\; x = 1 \\ge 0 \\Rightarrow x \\ge 0",
          explanation:
            "At (1,1), x = 1 \\ge 0, so the boundary x = 0 gives x \\ge 0 (solid).",
        },
        {
          stepNumber: 4,
          description: "Fix the inequality for the slanted side.",
          workingLatex: "(1,1): \\; 1 + 1 = 2 \\le 6 \\Rightarrow x + y \\le 6",
          explanation:
            "At (1,1), x + y = 2 \\le 6, so the slanted side gives x + y \\le 6 (solid).",
        },
        {
          stepNumber: 5,
          description: "State the set and verify all vertices satisfy it.",
          workingLatex: "x \\ge 0, \\; y \\ge 0, \\; x + y \\le 6",
          explanation:
            "R is x \\ge 0, y \\ge 0, x + y \\le 6. The three vertices (0,0),(6,0),(0,6) each lie on two boundaries and satisfy the third with equality or strictly, confirming the region.",
        },
      ],
      finalAnswer: "\\(x \\ge 0, \\;\\; y \\ge 0, \\;\\; x + y \\le 6\\)",
      canonicalAnswer: "x>=0, y>=0, x+y<=6",
    },
  },
  {
    id: "ga49-022",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A florist makes bouquets using two flowers. Each bouquet needs at least 2 roses and at least 1 lily, and the total number of flowers in a bouquet is at most 10. Let \\(x\\) be the number of roses and \\(y\\) the number of lilies. Write down the inequalities and describe the feasible region.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "feasible region", "worded problem", "form inequalities"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate 'at least 2 roses'.",
          workingLatex: "x \\ge 2",
          explanation:
            "'At least 2 roses' means the number of roses x is 2 or more, so x \\ge 2.",
        },
        {
          stepNumber: 2,
          description: "Translate 'at least 1 lily'.",
          workingLatex: "y \\ge 1",
          explanation:
            "'At least 1 lily' means y is 1 or more, so y \\ge 1.",
        },
        {
          stepNumber: 3,
          description: "Translate 'total at most 10'.",
          workingLatex: "x + y \\le 10",
          explanation:
            "The total number of flowers is x + y, and 'at most 10' means it cannot exceed 10, so x + y \\le 10.",
        },
        {
          stepNumber: 4,
          description: "Describe the boundary lines (all solid).",
          workingLatex: "x=2, \\; y=1, \\; x+y=10 \\text{ all SOLID (\\ge / \\le)}",
          explanation:
            "Every inequality includes equality, so all three boundary lines x = 2, y = 1 and x + y = 10 are solid.",
        },
        {
          stepNumber: 5,
          description: "Find the vertices of the feasible region.",
          workingLatex: "x=2\\cap y=1:(2,1); \\;\\; x=2\\cap x+y=10:(2,8); \\;\\; y=1\\cap x+y=10:(9,1)",
          explanation:
            "The corners are where pairs of boundaries meet: (2,1), (2,8) and (9,1). The feasible region is the triangle with these vertices; a sample point (4,2) gives 4 \\ge 2, 2 \\ge 1, 6 \\le 10 — all true.",
        },
      ],
      finalAnswer:
        "\\(x \\ge 2, \\; y \\ge 1, \\; x + y \\le 10; \\text{ triangle with vertices } (2,1),(2,8),(9,1)\\)",
      canonicalAnswer: "x>=2, y>=1, x+y<=10",
    },
  },
  {
    id: "ga49-023",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A region R is defined by \\(x \\ge 0\\), \\(y \\ge 0\\) and \\(x + y \\le 8\\). The cost is \\(C = 3x + 5y\\). Find the maximum value of \\(C\\) over the integer points of R, stating where it occurs.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "feasible region", "optimise at vertex", "vertices"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the feasible region and its vertices.",
          workingLatex: "x\\ge 0, y\\ge 0, x+y\\le 8: \\;\\text{triangle } (0,0),(8,0),(0,8)",
          explanation:
            "R is the triangle in the first quadrant cut off by x + y \\le 8, with vertices (0,0), (8,0) and (0,8). For a linear objective the optimum lies at a vertex.",
        },
        {
          stepNumber: 2,
          description: "Evaluate C at (0,0).",
          workingLatex: "C(0,0) = 3(0) + 5(0) = 0",
          explanation:
            "At the origin, C = 0.",
        },
        {
          stepNumber: 3,
          description: "Evaluate C at (8,0).",
          workingLatex: "C(8,0) = 3(8) + 5(0) = 24",
          explanation:
            "At (8,0), C = 24.",
        },
        {
          stepNumber: 4,
          description: "Evaluate C at (0,8).",
          workingLatex: "C(0,8) = 3(0) + 5(8) = 40",
          explanation:
            "At (0,8), C = 40.",
        },
        {
          stepNumber: 5,
          description: "Compare the vertex values.",
          workingLatex: "\\max\\{0,24,40\\} = 40 \\text{ at } (0,8)",
          explanation:
            "The largest value among the vertices is 40, occurring at (0,8). Since C increases fastest with y (coefficient 5 > 3), pushing all of the budget into y is best.",
        },
        {
          stepNumber: 6,
          description: "Confirm (0,8) is a valid integer point of R.",
          workingLatex: "(0,8): \\; 0\\ge 0, \\; 8\\ge 0, \\; 0+8=8\\le 8 \\checkmark",
          explanation:
            "(0,8) satisfies all three inequalities (it lies on the boundary x + y = 8 and on x = 0), so the maximum C = 40 is achieved at (0,8).",
        },
      ],
      finalAnswer: "\\(C_{\\max} = 40 \\text{ at } (0,8)\\)",
      canonicalAnswer: "40 at (0,8)",
    },
  },
  {
    id: "ga49-024",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Test whether the point \\((2,\\,3)\\) lies in the region defined by all three of \\(y \\le 2x\\), \\(y \\ge x - 1\\) and \\(x + y \\le 6\\). Show each check.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "test a point", "overlap region", "substitution"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the plan.",
          workingLatex: "\\text{check } (2,3) \\text{ in each of the three inequalities}",
          explanation:
            "A point is in the region only if it satisfies EVERY inequality. Substitute x = 2, y = 3 into each in turn.",
        },
        {
          stepNumber: 2,
          description: "Check y \\le 2x.",
          workingLatex: "y \\le 2x: \\; 3 \\le 2(2) = 4 \\;\\checkmark",
          explanation:
            "2x = 4 at x = 2, and 3 \\le 4 is true, so the first inequality holds.",
        },
        {
          stepNumber: 3,
          description: "Check y \\ge x - 1.",
          workingLatex: "y \\ge x - 1: \\; 3 \\ge 2 - 1 = 1 \\;\\checkmark",
          explanation:
            "x - 1 = 1 at x = 2, and 3 \\ge 1 is true, so the second inequality holds.",
        },
        {
          stepNumber: 4,
          description: "Check x + y \\le 6.",
          workingLatex: "x + y \\le 6: \\; 2 + 3 = 5 \\le 6 \\;\\checkmark",
          explanation:
            "x + y = 5 at (2,3), and 5 \\le 6 is true, so the third inequality holds.",
        },
        {
          stepNumber: 5,
          description: "Combine the results.",
          workingLatex: "\\text{all three TRUE} \\Rightarrow (2,3) \\in R",
          explanation:
            "Because all three inequalities are satisfied, the point (2,3) lies inside the region R.",
        },
        {
          stepNumber: 6,
          description: "Note the significance of needing all three.",
          workingLatex: "\\text{a single failed inequality would exclude the point}",
          explanation:
            "Had any one check failed, the point would be outside R; passing all three is essential. Here every check passed.",
        },
      ],
      finalAnswer: "\\(\\text{Yes: all three inequalities hold, so } (2,3) \\in R\\)",
      canonicalAnswer: "yes",
    },
  },
  {
    id: "ga49-025",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A shaded region R lies ABOVE the SOLID line \\(y = -x + 2\\), BELOW the DASHED line \\(y = x + 2\\), and to the LEFT of the SOLID line \\(x = 3\\). Write down the three inequalities defining R and find the coordinates of the vertex where the two slanted boundaries meet.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "vertices", "simultaneous"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Inequality from the line y = -x + 2 (above, solid).",
          workingLatex: "\\text{above} \\Rightarrow y \\ge -x + 2",
          explanation:
            "Above the line y = -x + 2 means y is greater than -x + 2. The solid line includes equality, giving y \\ge -x + 2.",
        },
        {
          stepNumber: 2,
          description: "Inequality from the line y = x + 2 (below, dashed).",
          workingLatex: "\\text{below} \\Rightarrow y < x + 2",
          explanation:
            "Below the line y = x + 2 means y less than x + 2. The dashed line excludes equality, giving the strict y < x + 2.",
        },
        {
          stepNumber: 3,
          description: "Inequality from the line x = 3 (left, solid).",
          workingLatex: "\\text{left of } x=3 \\Rightarrow x \\le 3",
          explanation:
            "Left of the vertical line x = 3 means smaller x. The solid line includes equality, giving x \\le 3.",
        },
        {
          stepNumber: 4,
          description: "Find where the two slanted boundaries meet.",
          workingLatex: "-x + 2 = x + 2 \\Rightarrow -2x = 0 \\Rightarrow x = 0",
          explanation:
            "Set the two line equations equal: -x + 2 = x + 2. Subtracting 2 from both sides gives -x = x, so 2x = 0 and x = 0.",
        },
        {
          stepNumber: 5,
          description: "Find the y-coordinate of the meeting point.",
          workingLatex: "x=0: \\; y = -0 + 2 = 2 \\Rightarrow (0,2)",
          explanation:
            "Substitute x = 0 into either line: y = -0 + 2 = 2. The slanted boundaries meet at (0,2).",
        },
        {
          stepNumber: 6,
          description: "State the inequalities and confirm with an interior point.",
          workingLatex: "(1,2): \\; 2 \\ge 1 \\checkmark, \\; 2 < 3 \\checkmark, \\; 1 \\le 3 \\checkmark",
          explanation:
            "R is y \\ge -x + 2, y < x + 2, x \\le 3. Test (1,2): 2 \\ge -1 + 2 = 1, 2 < 1 + 2 = 3, 1 \\le 3 — all true. The slanted boundaries meet at the vertex (0,2).",
        },
      ],
      finalAnswer:
        "\\(y \\ge -x+2, \\; y < x+2, \\; x \\le 3; \\text{ vertex at } (0,2)\\)",
      canonicalAnswer: "y>=-x+2, y<x+2, x<=3; vertex (0,2)",
    },
  },
  {
    id: "ga49-026",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A region R is defined by \\(y \\ge x - 2\\), \\(y \\le -x + 6\\) and \\(x \\ge 1\\). Find the coordinates of all three vertices of R.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "vertices", "simultaneous", "overlap region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Name the three boundary lines.",
          workingLatex: "L_1: y = x - 2, \\; L_2: y = -x + 6, \\; L_3: x = 1",
          explanation:
            "The boundaries are the equalities. The three vertices are the intersections of these lines taken in pairs.",
        },
        {
          stepNumber: 2,
          description: "Vertex A: L1 meets L3.",
          workingLatex: "x = 1: \\; y = 1 - 2 = -1 \\Rightarrow A(1,-1)",
          explanation:
            "Where x = 1 meets y = x - 2: substitute x = 1 to get y = -1. Vertex A = (1,-1).",
        },
        {
          stepNumber: 3,
          description: "Vertex B: L2 meets L3.",
          workingLatex: "x = 1: \\; y = -1 + 6 = 5 \\Rightarrow B(1,5)",
          explanation:
            "Where x = 1 meets y = -x + 6: substitute x = 1 to get y = 5. Vertex B = (1,5).",
        },
        {
          stepNumber: 4,
          description: "Vertex C: L1 meets L2.",
          workingLatex: "x - 2 = -x + 6 \\Rightarrow 2x = 8 \\Rightarrow x = 4",
          explanation:
            "Set y = x - 2 equal to y = -x + 6: x - 2 = -x + 6 gives 2x = 8, so x = 4.",
        },
        {
          stepNumber: 5,
          description: "Find the y-coordinate of C.",
          workingLatex: "x = 4: \\; y = 4 - 2 = 2 \\Rightarrow C(4,2)",
          explanation:
            "Substitute x = 4 into y = x - 2: y = 2. Vertex C = (4,2).",
        },
        {
          stepNumber: 6,
          description: "Confirm the vertices form R with an interior point.",
          workingLatex: "(2,1): \\; 1 \\ge 0 \\checkmark, \\; 1 \\le 4 \\checkmark, \\; 2 \\ge 1 \\checkmark",
          explanation:
            "Interior point (2,1): y \\ge x - 2 gives 1 \\ge 0; y \\le -x + 6 gives 1 \\le 4; x \\ge 1 gives 2 \\ge 1 — all true. R is the triangle with vertices (1,-1), (1,5), (4,2).",
        },
      ],
      finalAnswer: "\\((1,-1),\\;(1,5),\\;(4,2)\\)",
      canonicalAnswer: "(1,-1),(1,5),(4,2)",
    },
  },
  {
    id: "ga49-027",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A region R is defined by \\(y > 0\\), \\(y < 2x\\) and \\(x + y < 5\\). List all integer points \\((x,y)\\) that lie strictly inside R.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "list integer points", "strict inequalities", "overlap region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the bounds for y and x.",
          workingLatex: "y > 0 \\Rightarrow y \\ge 1; \\quad y < 2x \\Rightarrow x \\ge 1",
          explanation:
            "Since y > 0 and y is an integer, y \\ge 1. From y < 2x with y \\ge 1 we need 2x > y \\ge 1, so x \\ge 1. We test x = 1, 2, 3, ... while x + y < 5 allows it.",
        },
        {
          stepNumber: 2,
          description: "x = 1.",
          workingLatex: "y < 2 \\text{ and } y > 0 \\Rightarrow y = 1; \\; 1 + 1 = 2 < 5 \\checkmark",
          explanation:
            "With x = 1: y < 2 and y \\ge 1 forces y = 1. Check x + y = 2 < 5 (true). Point (1,1).",
        },
        {
          stepNumber: 3,
          description: "x = 2.",
          workingLatex: "y < 4 \\Rightarrow y = 1,2,3; \\;\\; x+y<5 \\Rightarrow y < 3 \\Rightarrow y = 1,2",
          explanation:
            "With x = 2: y < 2x = 4 gives y up to 3, but x + y < 5 needs y < 3, so y = 1 or 2. Points (2,1),(2,2).",
        },
        {
          stepNumber: 4,
          description: "x = 3.",
          workingLatex: "x+y < 5 \\Rightarrow y < 2 \\Rightarrow y = 1; \\; y < 2x=6 \\checkmark",
          explanation:
            "With x = 3: x + y < 5 needs y < 2, so y = 1; also y < 6 holds. Point (3,1).",
        },
        {
          stepNumber: 5,
          description: "x = 4 and beyond.",
          workingLatex: "x=4: \\; x+y<5 \\Rightarrow y < 1 \\Rightarrow \\text{no } y \\ge 1",
          explanation:
            "With x = 4: x + y < 5 needs y < 1, impossible for y \\ge 1. Larger x are worse, so stop.",
        },
        {
          stepNumber: 6,
          description: "Collect the strict-interior integer points.",
          workingLatex: "\\{(1,1),(2,1),(2,2),(3,1)\\}",
          explanation:
            "The integer points strictly inside R are (1,1),(2,1),(2,2),(3,1). Check (2,2): 2 > 0, 2 < 4, 2 + 2 = 4 < 5 — all strict, valid.",
        },
      ],
      finalAnswer: "\\(\\{(1,1),(2,1),(2,2),(3,1)\\}\\)",
      canonicalAnswer: "{(1,1),(2,1),(2,2),(3,1)}",
    },
  },
  {
    id: "ga49-028",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A workshop builds chairs (\\(x\\)) and tables (\\(y\\)). Each chair needs 1 hour and each table 3 hours of labour, with at most 12 labour hours available. There must be at least 2 chairs, and the number of tables cannot exceed the number of chairs. Write down all the inequalities and describe the feasible region's boundaries.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "feasible region", "worded problem", "form inequalities"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the labour constraint.",
          workingLatex: "1\\cdot x + 3\\cdot y \\le 12 \\Rightarrow x + 3y \\le 12",
          explanation:
            "Each chair uses 1 hour and each table 3 hours, so total labour is x + 3y. 'At most 12 hours' gives x + 3y \\le 12.",
        },
        {
          stepNumber: 2,
          description: "Translate 'at least 2 chairs'.",
          workingLatex: "x \\ge 2",
          explanation:
            "'At least 2 chairs' means x \\ge 2.",
        },
        {
          stepNumber: 3,
          description: "Translate 'tables cannot exceed chairs'.",
          workingLatex: "y \\le x",
          explanation:
            "The number of tables y cannot exceed the number of chairs x, so y \\le x.",
        },
        {
          stepNumber: 4,
          description: "Add the natural non-negativity constraint.",
          workingLatex: "y \\ge 0",
          explanation:
            "You cannot make a negative number of tables, so y \\ge 0. (x \\ge 2 already keeps x positive.)",
        },
        {
          stepNumber: 5,
          description: "Describe the boundary lines (all solid).",
          workingLatex: "x+3y=12, \\; x=2, \\; y=x, \\; y=0 \\text{ — all SOLID}",
          explanation:
            "Every inequality uses \\le or \\ge, so all four boundary lines are solid: x + 3y = 12, x = 2, y = x and y = 0.",
        },
        {
          stepNumber: 6,
          description: "Locate a vertex and confirm an interior point.",
          workingLatex: "x=2 \\cap y=x: (2,2); \\;\\; (3,1): 3\\ge 2,\\,1\\le 3,\\,3+3=6\\le 12 \\checkmark",
          explanation:
            "One vertex is where x = 2 meets y = x, namely (2,2). A sample feasible point (3,1) satisfies x \\ge 2, y \\le x, y \\ge 0 and x + 3y = 6 \\le 12, confirming the region.",
        },
      ],
      finalAnswer:
        "\\(x + 3y \\le 12, \\; x \\ge 2, \\; y \\le x, \\; y \\ge 0 \\text{ (all boundaries solid)}\\)",
      canonicalAnswer: "x+3y<=12, x>=2, y<=x, y>=0",
    },
  },
  {
    id: "ga49-029",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A region R is defined by \\(x \\ge 0\\), \\(y \\ge 0\\), \\(x + 2y \\le 8\\) and \\(2x + y \\le 8\\). Find the coordinates of all four vertices of R.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "vertices", "simultaneous", "feasible region"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "List the boundary lines.",
          workingLatex: "x=0, \\; y=0, \\; x+2y=8, \\; 2x+y=8",
          explanation:
            "R is a polygon bounded by these four lines. The vertices are intersections of adjacent boundaries.",
        },
        {
          stepNumber: 2,
          description: "Vertex at the origin.",
          workingLatex: "x=0 \\cap y=0 \\Rightarrow (0,0)",
          explanation:
            "The axes meet at (0,0), which satisfies both slanted inequalities (0 \\le 8), so it is a vertex.",
        },
        {
          stepNumber: 3,
          description: "Vertex on the x-axis.",
          workingLatex: "y=0 \\text{ in } 2x+y=8 \\Rightarrow 2x=8 \\Rightarrow (4,0)",
          explanation:
            "On y = 0, the binding line is 2x + y = 8 (it limits x to 4, smaller than x + 2y = 8 which gives x = 8). So the x-axis vertex is (4,0). Check x + 2y = 4 \\le 8 (ok).",
        },
        {
          stepNumber: 4,
          description: "Vertex on the y-axis.",
          workingLatex: "x=0 \\text{ in } x+2y=8 \\Rightarrow 2y=8 \\Rightarrow (0,4)",
          explanation:
            "On x = 0, the binding line is x + 2y = 8 (it limits y to 4, smaller than 2x + y = 8 giving y = 8). So the y-axis vertex is (0,4). Check 2x + y = 4 \\le 8 (ok).",
        },
        {
          stepNumber: 5,
          description: "Vertex where the two slanted lines meet.",
          workingLatex: "x+2y=8, \\; 2x+y=8 \\Rightarrow \\text{subtract: } (2x+y)-(x+2y)=0 \\Rightarrow x-y=0",
          explanation:
            "Solve the two slanted equations simultaneously. Subtracting gives x - y = 0, so x = y.",
        },
        {
          stepNumber: 6,
          description: "Finish the simultaneous solution and list all vertices.",
          workingLatex: "x=y \\text{ in } x+2y=8 \\Rightarrow 3y=8 \\Rightarrow y=\\frac{8}{3}, \\; (\\tfrac{8}{3},\\tfrac{8}{3})",
          explanation:
            "Substitute x = y into x + 2y = 8: 3y = 8 so y = 8/3 and x = 8/3. The four vertices of R are (0,0), (4,0), (8/3, 8/3) and (0,4).",
        },
      ],
      finalAnswer:
        "\\((0,0),\\;(4,0),\\;\\left(\\tfrac{8}{3},\\tfrac{8}{3}\\right),\\;(0,4)\\)",
      canonicalAnswer: "(0,0),(4,0),(8/3,8/3),(0,4)",
    },
  },
  {
    id: "ga49-030",
    topicRef: "ga49",
    topicTitle: "Graphing linear inequalities in two variables",
    difficulty: "Challenge",
    answerType: "set",
    questionText:
      "A shaded region R is the quadrilateral with SOLID sides and vertices \\((0,0)\\), \\((4,0)\\), \\((4,3)\\) and \\((0,5)\\). One slanted side joins \\((4,3)\\) to \\((0,5)\\). Write down the four inequalities that define R.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["region", "identify inequalities", "reverse", "vertices", "simultaneous"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the two axis sides.",
          workingLatex: "(0,0)\\!-\\!(0,5): x=0; \\;\\; (0,0)\\!-\\!(4,0): y=0",
          explanation:
            "The side from (0,0) to (0,5) lies on the y-axis (x = 0); the side from (0,0) to (4,0) lies on the x-axis (y = 0).",
        },
        {
          stepNumber: 2,
          description: "Identify the vertical side.",
          workingLatex: "(4,0)\\!-\\!(4,3): x=4",
          explanation:
            "The side from (4,0) to (4,3) is vertical, lying on the line x = 4.",
        },
        {
          stepNumber: 3,
          description: "Find the equation of the slanted side.",
          workingLatex: "(4,3)\\!-\\!(0,5): \\; m = \\frac{5-3}{0-4} = \\frac{2}{-4} = -\\frac{1}{2}, \\; c = 5",
          explanation:
            "The slanted side joins (4,3) and (0,5). Gradient = (5-3)/(0-4) = -1/2; the y-intercept is 5 (from the point (0,5)). So the line is y = -1/2 x + 5.",
        },
        {
          stepNumber: 4,
          description: "Assign the inequalities for the two axes and vertical side.",
          workingLatex: "x \\ge 0, \\;\\; y \\ge 0, \\;\\; x \\le 4",
          explanation:
            "An interior point such as (1,1) has x = 1 \\ge 0, y = 1 \\ge 0 and x = 1 \\le 4, fixing these three solid-boundary inequalities.",
        },
        {
          stepNumber: 5,
          description: "Assign the inequality for the slanted side.",
          workingLatex: "(1,1): \\; 1 \\le -\\frac{1}{2}(1) + 5 = 4.5 \\Rightarrow y \\le -\\frac{1}{2}x + 5",
          explanation:
            "Test the interior point (1,1) in y = -1/2 x + 5: the line value is 4.5, and 1 \\le 4.5, so the region is below the slanted line: y \\le -1/2 x + 5.",
        },
        {
          stepNumber: 6,
          description: "Verify the listed vertices satisfy the slanted inequality.",
          workingLatex: "(4,3): 3 \\le -2 + 5 = 3 \\checkmark; \\;\\; (0,5): 5 \\le 5 \\checkmark",
          explanation:
            "Both (4,3) and (0,5) lie on the slanted boundary (equality holds), consistent with y \\le -1/2 x + 5 and the solid line.",
        },
        {
          stepNumber: 7,
          description: "State the full set of inequalities.",
          workingLatex: "x \\ge 0, \\; y \\ge 0, \\; x \\le 4, \\; y \\le -\\frac{1}{2}x + 5",
          explanation:
            "R is defined by x \\ge 0, y \\ge 0, x \\le 4 and y \\le -1/2 x + 5, all with solid boundaries. A final interior check at (2,2): 2\\ge 0, 2\\ge 0, 2\\le 4, 2 \\le 4 — all true.",
        },
      ],
      finalAnswer:
        "\\(x \\ge 0, \\; y \\ge 0, \\; x \\le 4, \\; y \\le -\\tfrac{1}{2}x + 5\\)",
      canonicalAnswer: "x>=0, y>=0, x<=4, y<=-1/2x+5",
    },
  },
];
