/**
 * Topic: Coordinates in all four quadrants
 * Ref: ga22
 * Strand: Algebra, GCSE Maths (DfE A8)
 * Coverage: identifying quadrants and reading/stating coordinates (incl. negatives);
 *   midpoint of a line segment; fourth vertex of a rectangle/parallelogram and
 *   reflections in the x- or y-axis; distance between two points via Pythagoras;
 *   coordinate reasoning (find an endpoint from the midpoint and one end, points
 *   dividing a segment). Pure coordinate work only — line equations live elsewhere.
 * Split: 4 Foundation / 14 Standard / 12 Challenge (30 total).
 * Id range: ga22-001 .. ga22-030.
 * LaTeX note: questionText uses \\( ... \\) with \\dfrac in stems; workedSolution
 *   workingLatex is RAW (no \\( \\) wrappers) and uses \\frac (not \\tfrac).
 *   Multiplication is shown with \\cdot.
 */

import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "ga22-001",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State the coordinates of the point \\(P\\) which is \\(3\\) units to the right of the origin and \\(2\\) units up.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coordinates", "reading coordinates", "first quadrant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall how a coordinate pair is written.",
          workingLatex: "P=(x,\\,y)",
          explanation:
            "Every point is written as an ordered pair \\((x,\\,y)\\): the first number is always the horizontal position (across) and the second is the vertical position (up or down). Getting the order right is the whole battle in this question.",
        },
        {
          stepNumber: 2,
          description: "Write the horizontal (x) value.",
          workingLatex: "x = 3",
          explanation:
            "The x-coordinate tells you how far across from the origin the point is. Moving to the right counts as positive, so 3 units right gives x = 3.",
        },
        {
          stepNumber: 3,
          description: "Write the vertical (y) value.",
          workingLatex: "y = 2",
          explanation:
            "The y-coordinate tells you how far up or down the point is. Moving up counts as positive, so 2 units up gives y = 2.",
        },
        {
          stepNumber: 4,
          description: "Combine into a coordinate pair.",
          workingLatex: "P = (3,\\,2)",
          explanation:
            "Put the across-value first and the up-value second: P = (3, 2). Both values are positive, so P lies in the top-right region, the first quadrant.",
          mafs: `<Mafs viewBox={{ x: [-2, 5], y: [-2, 5] }} height={260}><Coordinates.Cartesian /><Point x={3} y={2} color="var(--mafs-fg-accent)" /><Text x={3} y={2} attach="ne" attachDistance={18}>P(3, 2)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(P = (3,\\,2)\\)",
      canonicalAnswer: "(3,2)",
    },
  },
  {
    id: "ga22-002",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Foundation",
    answerType: "numeric",
    questionText:
      "In which quadrant does the point \\((-4,\\,-1)\\) lie? Give your answer as the quadrant number (\\(1\\), \\(2\\), \\(3\\) or \\(4\\)).",
    marks: 2,
    examStyle: false,
    tags: ["coordinates", "quadrants", "negative coordinates"],
    yearCreated: 2026,
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Read the sign of the x-coordinate.",
          workingLatex: "x = -4 < 0",
          explanation:
            "The x-coordinate is negative, which means the point lies to the left of the y-axis.",
        },
        {
          stepNumber: 2,
          description: "Read the sign of the y-coordinate.",
          workingLatex: "y = -1 < 0",
          explanation:
            "The y-coordinate is also negative, which means the point lies below the x-axis. So the point is in the bottom-left region of the grid.",
        },
        {
          stepNumber: 3,
          description: "Recall how the quadrants are numbered.",
          workingLatex:
            "(+,+)\\to 1,\\;\\; (-,+)\\to 2,\\;\\; (-,-)\\to 3,\\;\\; (+,-)\\to 4",
          explanation:
            "Quadrants are numbered anticlockwise starting from the top-right. Quadrant 1 is top-right, quadrant 2 top-left, quadrant 3 bottom-left, quadrant 4 bottom-right.",
        },
        {
          stepNumber: 4,
          description: "Match the signs to a quadrant.",
          workingLatex: "(-4,\\,-1):\\ (-,-)\\ \\Rightarrow\\ \\text{quadrant } 3",
          explanation:
            "A point with both coordinates negative sits in the bottom-left, which is quadrant 3. A common slip is to count clockwise; remember the numbering runs anticlockwise.",
          mafs: `<Mafs viewBox={{ x: [-6, 6], y: [-6, 6] }} height={260}><Coordinates.Cartesian /><Point x={-4} y={-1} color="var(--mafs-fg-accent)" /><Text x={-4} y={-1} attach="sw" attachDistance={18}>(-4, -1)</Text><Text x={-3} y={-3} attach="s" attachDistance={6}>Quadrant 3</Text></Mafs>`,
        },
      ],
      finalAnswer: "Quadrant \\(3\\)",
      canonicalAnswer: "3",
    },
  },
  {
    id: "ga22-003",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Find the midpoint of the line segment joining \\((2,\\,4)\\) and \\((6,\\,8)\\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "midpoint formula"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the midpoint formula.",
          workingLatex:
            "M=\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
          explanation:
            "The midpoint is the point exactly halfway along the segment. Its x-coordinate is the average of the two x-coordinates, and its y-coordinate is the average of the two y-coordinates.",
        },
        {
          stepNumber: 2,
          description: "Add the two x-coordinates.",
          workingLatex: "x_1+x_2=2+6=8",
          explanation:
            "Take the x-value of each endpoint and add them together. This sum will be halved in the next step.",
        },
        {
          stepNumber: 3,
          description: "Halve to get the midpoint x.",
          workingLatex: "\\frac{8}{2}=4",
          explanation:
            "Dividing the sum by 2 gives the average of the two x-values, which is the x-coordinate of the midpoint.",
        },
        {
          stepNumber: 4,
          description: "Add and halve the y-coordinates.",
          workingLatex: "\\frac{y_1+y_2}{2}=\\frac{4+8}{2}=\\frac{12}{2}=6",
          explanation:
            "Repeat the same add-then-halve process for the y-values: 4 + 8 = 12, and half of 12 is 6.",
        },
        {
          stepNumber: 5,
          description: "Write the midpoint.",
          workingLatex: "M=(4,\\,6)",
          explanation:
            "Combine the two averages into a coordinate pair. Quick check: (4, 6) sits between (2, 4) and (6, 8), as a midpoint should.",
          mafs: `<Mafs viewBox={{ x: [-1, 9], y: [-1, 10] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[2, 4]} point2={[6, 8]} color="var(--mafs-fg-blue)" /><Point x={2} y={4} color="var(--mafs-fg-blue)" /><Text x={2} y={4} attach="sw" attachDistance={18}>(2, 4)</Text><Point x={6} y={8} color="var(--mafs-fg-blue)" /><Text x={6} y={8} attach="ne" attachDistance={18}>(6, 8)</Text><Point x={4} y={6} color="var(--mafs-fg-accent)" /><Text x={4} y={6} attach="se" attachDistance={18}>M(4, 6)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(M = (4,\\,6)\\)",
      canonicalAnswer: "(4,6)",
    },
  },
  {
    id: "ga22-004",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "The point \\((3,\\,5)\\) is reflected in the \\(x\\)-axis. State the coordinates of its image.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["coordinates", "reflection", "x-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the rule for reflecting in the x-axis.",
          workingLatex: "(x,\\,y)\\ \\longrightarrow\\ (x,\\,-y)",
          explanation:
            "Reflecting in the x-axis flips the point top-to-bottom across the horizontal axis. The x-coordinate stays the same and only the y-coordinate changes sign.",
        },
        {
          stepNumber: 2,
          description: "Keep the x-coordinate unchanged.",
          workingLatex: "x = 3",
          explanation:
            "The mirror line here is horizontal (the x-axis), so left-right position is untouched. x = 3 stays as 3.",
        },
        {
          stepNumber: 3,
          description: "Change the sign of the y-coordinate.",
          workingLatex: "y = 5\\ \\longrightarrow\\ -y = -5",
          explanation:
            "The point was 5 units above the x-axis; its image lands 5 units below, so y = 5 becomes y = -5.",
        },
        {
          stepNumber: 4,
          description: "Write the image point.",
          workingLatex: "(3,\\,5)\\ \\longrightarrow\\ (3,\\,-5)",
          explanation:
            "Put the unchanged x with the negated y. The image (3, -5) sits the same distance below the axis as the original was above it.",
          mafs: `<Mafs viewBox={{ x: [-2, 6], y: [-7, 7] }} height={260}><Coordinates.Cartesian /><Point x={3} y={5} color="var(--mafs-fg-blue)" /><Text x={3} y={5} attach="ne" attachDistance={18}>(3, 5)</Text><Point x={3} y={-5} color="var(--mafs-fg-accent)" /><Text x={3} y={-5} attach="se" attachDistance={18}>(3, -5)</Text><Line.Segment point1={[3, 5]} point2={[3, -5]} color="var(--mafs-fg-orange)" /></Mafs>`,
        },
      ],
      finalAnswer: "\\((3,\\,-5)\\)",
      canonicalAnswer: "(3,-5)",
    },
  },
  {
    id: "ga22-005",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the midpoint of the line segment joining \\(A(-3,\\,2)\\) and \\(B(5,\\,-4)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the midpoint formula.",
          workingLatex:
            "M=\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
          explanation:
            "The midpoint averages the two endpoints coordinate by coordinate. Average the x-values for the midpoint x, and the y-values for the midpoint y.",
        },
        {
          stepNumber: 2,
          description: "Label the coordinates with their signs.",
          workingLatex: "x_1=-3,\\ y_1=2,\\quad x_2=5,\\ y_2=-4",
          explanation:
            "Write each value down with its sign before substituting. Most mistakes in this kind of question come from losing a minus sign, so make the negatives explicit now.",
        },
        {
          stepNumber: 3,
          description: "Add the x-coordinates.",
          workingLatex: "x_1+x_2=-3+5=2",
          explanation:
            "Adding a negative and a positive: start at -3 and move 5 to the right, landing on +2.",
        },
        {
          stepNumber: 4,
          description: "Halve to get the midpoint x.",
          workingLatex: "\\frac{2}{2}=1",
          explanation:
            "Divide the sum by 2 to get the average x-coordinate of the midpoint.",
        },
        {
          stepNumber: 5,
          description: "Add and halve the y-coordinates.",
          workingLatex: "\\frac{2+(-4)}{2}=\\frac{-2}{2}=-1",
          explanation:
            "2 + (-4) = -2, and halving a negative stays negative, so the midpoint y is -1.",
        },
        {
          stepNumber: 6,
          description: "Write the midpoint.",
          workingLatex: "M=(1,\\,-1)",
          explanation:
            "Sanity check: x = 1 lies between -3 and 5, and y = -1 lies between 2 and -4, so M genuinely sits between A and B.",
          mafs: `<Mafs viewBox={{ x: [-5, 7], y: [-6, 4] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[-3, 2]} point2={[5, -4]} color="var(--mafs-fg-blue)" /><Point x={-3} y={2} color="var(--mafs-fg-blue)" /><Text x={-3} y={2} attach="nw" attachDistance={18}>A(-3, 2)</Text><Point x={5} y={-4} color="var(--mafs-fg-blue)" /><Text x={5} y={-4} attach="se" attachDistance={18}>B(5, -4)</Text><Point x={1} y={-1} color="var(--mafs-fg-accent)" /><Text x={1} y={-1} attach="ne" attachDistance={18}>M(1, -1)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(M = (1,\\,-1)\\)",
      canonicalAnswer: "(1,-1)",
    },
  },
  {
    id: "ga22-006",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the distance between \\((1,\\,2)\\) and \\((4,\\,6)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the distance formula.",
          workingLatex: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          explanation:
            "This is just Pythagoras in disguise: the horizontal gap and the vertical gap are the two short sides of a right-angled triangle, and the distance between the points is the hypotenuse.",
        },
        {
          stepNumber: 2,
          description: "Find the horizontal change.",
          workingLatex: "x_2-x_1=4-1=3",
          explanation:
            "Subtract the x-coordinates to get the width of the triangle: one leg has length 3.",
        },
        {
          stepNumber: 3,
          description: "Find the vertical change.",
          workingLatex: "y_2-y_1=6-2=4",
          explanation:
            "Subtract the y-coordinates to get the height of the triangle: the other leg has length 4.",
        },
        {
          stepNumber: 4,
          description: "Square each change and add.",
          workingLatex: "3^2+4^2=9+16=25",
          explanation:
            "Squaring removes any sign, so it does not matter which way round you subtracted. Adding gives 25, the square of the hypotenuse.",
        },
        {
          stepNumber: 5,
          description: "Take the square root.",
          workingLatex: "d=\\sqrt{25}=5",
          explanation:
            "This is the classic 3-4-5 right-angled triangle, so the distance comes out as exactly 5 units.",
          mafs: `<Mafs viewBox={{ x: [-1, 6], y: [-1, 8] }} height={260}><Coordinates.Cartesian /><Polygon points={[[1, 2], [4, 2], [4, 6]]} color="var(--mafs-fg-orange)" fillOpacity={0.12} /><Line.Segment point1={[1, 2]} point2={[4, 6]} color="var(--mafs-fg-accent)" /><Point x={1} y={2} color="var(--mafs-fg-blue)" /><Text x={1} y={2} attach="sw" attachDistance={18}>(1, 2)</Text><Point x={4} y={6} color="var(--mafs-fg-blue)" /><Text x={4} y={6} attach="ne" attachDistance={18}>(4, 6)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(d = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga22-007",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The point \\((-2,\\,7)\\) is reflected in the \\(y\\)-axis. State the coordinates of its image.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "reflection", "y-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the rule for reflecting in the y-axis.",
          workingLatex: "(x,\\,y)\\ \\longrightarrow\\ (-x,\\,y)",
          explanation:
            "Reflecting in the y-axis flips the point left-to-right across the vertical axis, so the x-coordinate changes sign while the y-coordinate stays put.",
        },
        {
          stepNumber: 2,
          description: "Change the sign of x.",
          workingLatex: "x=-2\\ \\longrightarrow\\ -x=-(-2)=2",
          explanation:
            "The negative of -2 is +2. A point 2 units to the left of the y-axis maps to a point 2 units to the right of it.",
        },
        {
          stepNumber: 3,
          description: "Keep y unchanged.",
          workingLatex: "y = 7",
          explanation:
            "The mirror line is vertical, so up-down position is untouched. y = 7 stays as 7.",
        },
        {
          stepNumber: 4,
          description: "Write the image point.",
          workingLatex: "(-2,\\,7)\\ \\longrightarrow\\ (2,\\,7)",
          explanation:
            "Combine the negated x with the unchanged y. The image (2, 7) lies in the first quadrant, mirrored across from the original in the second.",
          mafs: `<Mafs viewBox={{ x: [-5, 5], y: [-1, 9] }} height={260}><Coordinates.Cartesian /><Point x={-2} y={7} color="var(--mafs-fg-blue)" /><Text x={-2} y={7} attach="nw" attachDistance={18}>(-2, 7)</Text><Point x={2} y={7} color="var(--mafs-fg-accent)" /><Text x={2} y={7} attach="ne" attachDistance={18}>(2, 7)</Text><Line.Segment point1={[-2, 7]} point2={[2, 7]} color="var(--mafs-fg-orange)" /></Mafs>`,
        },
      ],
      finalAnswer: "\\((2,\\,7)\\)",
      canonicalAnswer: "(2,7)",
    },
  },
  {
    id: "ga22-008",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The midpoint of \\(A(2,\\,3)\\) and \\(B\\) is \\(M(5,\\,7)\\). Find the coordinates of \\(B\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "find endpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the midpoint equations.",
          workingLatex:
            "\\frac{2+x_B}{2}=5,\\qquad \\frac{3+y_B}{2}=7",
          explanation:
            "Each coordinate of the midpoint is the average of the matching coordinates of A and B. Writing one equation per coordinate turns the geometry into two simple linear equations.",
        },
        {
          stepNumber: 2,
          description: "Clear the fraction in the x-equation.",
          workingLatex: "2+x_B=2\\cdot 5=10",
          explanation:
            "Multiply both sides of the x-equation by 2 to undo the division and get a clean linear equation in x_B.",
        },
        {
          stepNumber: 3,
          description: "Solve for the x-coordinate of B.",
          workingLatex: "x_B=10-2=8",
          explanation:
            "Subtract A's x-coordinate (2) from both sides to isolate x_B.",
        },
        {
          stepNumber: 4,
          description: "Solve the y-equation the same way.",
          workingLatex: "3+y_B=14\\ \\Rightarrow\\ y_B=14-3=11",
          explanation:
            "Multiply by 2 to get 3 + y_B = 14, then subtract 3 to find y_B = 11.",
        },
        {
          stepNumber: 5,
          description: "State B and check.",
          workingLatex:
            "B=(8,\\,11);\\quad \\frac{2+8}{2}=5,\\ \\frac{3+11}{2}=7\\ \\checkmark",
          explanation:
            "Substituting B back gives the midpoint (5, 7), so it is consistent. A neat shortcut: B is A 'stepped over' M, so B = A + 2(M - A) = (2,3) + 2(3,4) = (8,11).",
          mafs: `<Mafs viewBox={{ x: [-1, 11], y: [-1, 13] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[2, 3]} point2={[8, 11]} color="var(--mafs-fg-blue)" /><Point x={2} y={3} color="var(--mafs-fg-blue)" /><Text x={2} y={3} attach="se" attachDistance={18}>A(2, 3)</Text><Point x={5} y={7} color="var(--mafs-fg-orange)" /><Text x={5} y={7} attach="se" attachDistance={18}>M(5, 7)</Text><Point x={8} y={11} color="var(--mafs-fg-accent)" /><Text x={8} y={11} attach="nw" attachDistance={18}>B(8, 11)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(B = (8,\\,11)\\)",
      canonicalAnswer: "(8,11)",
    },
  },
  {
    id: "ga22-009",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Three vertices of a rectangle are \\(A(1,\\,1)\\), \\(B(5,\\,1)\\) and \\(C(5,\\,4)\\). Find the coordinates of the fourth vertex \\(D\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "rectangle", "fourth vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify how the given vertices are joined.",
          workingLatex: "A(1,1)\\to B(5,1)\\to C(5,4)\\to D",
          explanation:
            "Going round the rectangle in order, AB is the bottom edge and BC is the right edge. D completes the loop back to A, so the side AD must be parallel and equal to BC, and side DC parallel and equal to AB.",
        },
        {
          stepNumber: 2,
          description: "Find the displacement along edge BC.",
          workingLatex: "\\vec{BC}=(5-5,\\ 4-1)=(0,\\,3)",
          explanation:
            "Subtract B from C to get the step from B to C: 0 across and 3 up. This same step describes the opposite edge AD.",
        },
        {
          stepNumber: 3,
          description: "Apply the same displacement from A to reach D.",
          workingLatex: "D=A+\\vec{BC}=(1+0,\\ 1+3)=(1,\\,4)",
          explanation:
            "AD is the left edge, parallel and equal to BC, so add the displacement (0, 3) to A. This places D directly above A.",
        },
        {
          stepNumber: 4,
          description: "Check the shape is a rectangle.",
          workingLatex:
            "\\vec{DC}=(5-1,\\,4-4)=(4,0)=\\vec{AB}\\ \\checkmark",
          explanation:
            "The remaining side DC equals AB = (4, 0), so opposite sides match and (since the edges are horizontal and vertical) the corners are right angles. D = (1, 4).",
          mafs: `<Mafs viewBox={{ x: [-1, 7], y: [-1, 6] }} height={260}><Coordinates.Cartesian /><Polygon points={[[1, 1], [5, 1], [5, 4], [1, 4]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Point x={1} y={1} color="var(--mafs-fg-blue)" /><Text x={1} y={1} attach="sw" attachDistance={18}>A(1, 1)</Text><Point x={5} y={1} color="var(--mafs-fg-blue)" /><Text x={5} y={1} attach="se" attachDistance={18}>B(5, 1)</Text><Point x={5} y={4} color="var(--mafs-fg-blue)" /><Text x={5} y={4} attach="ne" attachDistance={18}>C(5, 4)</Text><Point x={1} y={4} color="var(--mafs-fg-accent)" /><Text x={1} y={4} attach="nw" attachDistance={18}>D(1, 4)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(D = (1,\\,4)\\)",
      canonicalAnswer: "(1,4)",
    },
  },
  {
    id: "ga22-010",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Find the midpoint of the line segment joining \\((-6,\\,-2)\\) and \\((-1,\\,5)\\). Give each coordinate as a fraction where necessary.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "fractional answer"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the midpoint formula.",
          workingLatex:
            "M=\\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
          explanation:
            "Average each coordinate. The result need not be a whole number, so be ready to leave an answer as a fraction.",
        },
        {
          stepNumber: 2,
          description: "Add the x-coordinates.",
          workingLatex: "x_1+x_2=-6+(-1)=-7",
          explanation:
            "Both x-values are negative, so the sum is more negative: -6 + (-1) = -7.",
        },
        {
          stepNumber: 3,
          description: "Halve to get the midpoint x.",
          workingLatex: "\\frac{-7}{2}=-\\frac{7}{2}",
          explanation:
            "Since 7 is odd, dividing by 2 does not give a whole number, so the midpoint x stays as the fraction -7/2.",
        },
        {
          stepNumber: 4,
          description: "Add and halve the y-coordinates.",
          workingLatex: "\\frac{-2+5}{2}=\\frac{3}{2}",
          explanation:
            "-2 + 5 = 3, and halving gives 3/2. Again an odd numerator, so leave it as a fraction.",
        },
        {
          stepNumber: 5,
          description: "Write the midpoint.",
          workingLatex: "M=\\left(-\\frac{7}{2},\\ \\frac{3}{2}\\right)",
          explanation:
            "Equivalently (-3.5, 1.5). Check: -3.5 lies between -6 and -1, and 1.5 lies between -2 and 5, so M sits inside the segment.",
          mafs: `<Mafs viewBox={{ x: [-8, 2], y: [-4, 7] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[-6, -2]} point2={[-1, 5]} color="var(--mafs-fg-blue)" /><Point x={-6} y={-2} color="var(--mafs-fg-blue)" /><Text x={-6} y={-2} attach="sw" attachDistance={18}>(-6, -2)</Text><Point x={-1} y={5} color="var(--mafs-fg-blue)" /><Text x={-1} y={5} attach="ne" attachDistance={18}>(-1, 5)</Text><Point x={-3.5} y={1.5} color="var(--mafs-fg-accent)" /><Text x={-3.5} y={1.5} attach="se" attachDistance={18}>M(-3.5, 1.5)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(M = \\left(-\\dfrac{7}{2},\\ \\dfrac{3}{2}\\right)\\)",
      canonicalAnswer: "(-7/2,3/2)",
    },
  },
  {
    id: "ga22-011",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the distance between \\((-2,\\,1)\\) and \\((3,\\,13)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the distance formula.",
          workingLatex: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          explanation:
            "The horizontal and vertical gaps between the points form the legs of a right-angled triangle; the distance is the hypotenuse, found by Pythagoras.",
        },
        {
          stepNumber: 2,
          description: "Find the horizontal change.",
          workingLatex: "x_2-x_1=3-(-2)=3+2=5",
          explanation:
            "Subtracting a negative is the same as adding, so 3 - (-2) becomes 3 + 2 = 5. This is a classic place to drop a sign, so write the double-negative step out.",
        },
        {
          stepNumber: 3,
          description: "Find the vertical change.",
          workingLatex: "y_2-y_1=13-1=12",
          explanation:
            "Both y-values are positive, so this is a straightforward subtraction giving 12.",
        },
        {
          stepNumber: 4,
          description: "Square each change and add.",
          workingLatex: "5^2+12^2=25+144=169",
          explanation:
            "Square the two legs and add: 25 + 144 = 169. A 5-12-13 triangle is about to appear.",
        },
        {
          stepNumber: 5,
          description: "Take the square root.",
          workingLatex: "d=\\sqrt{169}=13",
          explanation:
            "The square root of 169 is exactly 13, so the distance is 13 units.",
          mafs: `<Mafs viewBox={{ x: [-4, 5], y: [-1, 15] }} height={260}><Coordinates.Cartesian /><Polygon points={[[-2, 1], [3, 1], [3, 13]]} color="var(--mafs-fg-orange)" fillOpacity={0.12} /><Line.Segment point1={[-2, 1]} point2={[3, 13]} color="var(--mafs-fg-accent)" /><Point x={-2} y={1} color="var(--mafs-fg-blue)" /><Text x={-2} y={1} attach="sw" attachDistance={18}>(-2, 1)</Text><Point x={3} y={13} color="var(--mafs-fg-blue)" /><Text x={3} y={13} attach="ne" attachDistance={18}>(3, 13)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(d = 13\\)",
      canonicalAnswer: "13",
    },
  },
  {
    id: "ga22-012",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Three vertices of a parallelogram, taken in order, are \\(P(0,\\,0)\\), \\(Q(4,\\,1)\\) and \\(R(6,\\,5)\\). Find the coordinates of the fourth vertex \\(S\\) so that \\(PQRS\\) is a parallelogram.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "parallelogram", "fourth vertex"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the parallelogram property.",
          workingLatex: "\\vec{PQ}=\\vec{SR}\\quad\\Leftrightarrow\\quad Q-P=R-S",
          explanation:
            "In parallelogram PQRS (vertices in order), opposite sides PQ and SR are parallel and equal in length, so they represent the same displacement vector.",
        },
        {
          stepNumber: 2,
          description: "Find the displacement PQ.",
          workingLatex: "\\vec{PQ}=Q-P=(4-0,\\ 1-0)=(4,\\,1)",
          explanation:
            "Subtract P from Q to get the step from P to Q: 4 across and 1 up.",
        },
        {
          stepNumber: 3,
          description: "Rearrange to make S the subject.",
          workingLatex: "Q-P=R-S\\ \\Rightarrow\\ S=R-\\vec{PQ}",
          explanation:
            "Since \\vec{PQ}=\\vec{SR}=R-S, rearranging gives S = R - \\vec{PQ}. We subtract because S is found by stepping backwards from R along the PQ direction.",
        },
        {
          stepNumber: 4,
          description: "Compute S.",
          workingLatex: "S=(6-4,\\ 5-1)=(2,\\,4)",
          explanation:
            "Subtract the displacement (4, 1) from R = (6, 5) component by component to land on S = (2, 4).",
        },
        {
          stepNumber: 5,
          description: "Check with the other pair of sides.",
          workingLatex:
            "\\vec{PS}=(2,4),\\ \\vec{QR}=(2,4)\\ \\checkmark",
          explanation:
            "The other pair of opposite sides PS and QR are also equal, confirming PQRS is a parallelogram. S = (2, 4).",
          mafs: `<Mafs viewBox={{ x: [-2, 8], y: [-2, 7] }} height={260}><Coordinates.Cartesian /><Polygon points={[[0, 0], [4, 1], [6, 5], [2, 4]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Point x={0} y={0} color="var(--mafs-fg-blue)" /><Text x={0} y={0} attach="sw" attachDistance={18}>P(0, 0)</Text><Point x={4} y={1} color="var(--mafs-fg-blue)" /><Text x={4} y={1} attach="se" attachDistance={18}>Q(4, 1)</Text><Point x={6} y={5} color="var(--mafs-fg-blue)" /><Text x={6} y={5} attach="ne" attachDistance={18}>R(6, 5)</Text><Point x={2} y={4} color="var(--mafs-fg-accent)" /><Text x={2} y={4} attach="nw" attachDistance={18}>S(2, 4)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(S = (2,\\,4)\\)",
      canonicalAnswer: "(2,4)",
    },
  },
  {
    id: "ga22-013",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The point \\(A(-4,\\,6)\\) is reflected in the \\(x\\)-axis to give \\(A'\\), and then \\(A'\\) is reflected in the \\(y\\)-axis to give \\(A''\\). Find the coordinates of \\(A''\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "reflection", "composite transformation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Recall the x-axis reflection rule.",
          workingLatex: "(x,\\,y)\\ \\longrightarrow\\ (x,\\,-y)",
          explanation:
            "Reflecting in the x-axis keeps the x-coordinate and negates the y-coordinate, flipping the point top-to-bottom.",
        },
        {
          stepNumber: 2,
          description: "Reflect A in the x-axis.",
          workingLatex: "A(-4,6)\\ \\xrightarrow{\\ x\\text{-axis}\\ }\\ A'(-4,\\,-6)",
          explanation:
            "Keep x = -4 and negate y = 6 to -6, giving the first image A' = (-4, -6).",
        },
        {
          stepNumber: 3,
          description: "Reflect A' in the y-axis.",
          workingLatex: "A'(-4,-6)\\ \\xrightarrow{\\ y\\text{-axis}\\ }\\ A''(4,\\,-6)",
          explanation:
            "Reflecting in the y-axis negates x and keeps y: (x,y) -> (-x,y). So -4 becomes +4 and -6 stays, giving A'' = (4, -6).",
        },
        {
          stepNumber: 4,
          description: "State the result and note the overall effect.",
          workingLatex: "A''=(4,\\,-6)",
          explanation:
            "Both coordinates have ended up with the opposite sign to A. Reflecting in both axes in turn is equivalent to a 180-degree rotation about the origin: (x,y) -> (-x,-y).",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-8, 8] }} height={280}><Coordinates.Cartesian /><Point x={-4} y={6} color="var(--mafs-fg-blue)" /><Text x={-4} y={6} attach="nw" attachDistance={18}>A(-4, 6)</Text><Point x={-4} y={-6} color="var(--mafs-fg-orange)" /><Text x={-4} y={-6} attach="sw" attachDistance={18}>A'(-4, -6)</Text><Point x={4} y={-6} color="var(--mafs-fg-accent)" /><Text x={4} y={-6} attach="se" attachDistance={18}>A''(4, -6)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(A'' = (4,\\,-6)\\)",
      canonicalAnswer: "(4,-6)",
    },
  },
  {
    id: "ga22-014",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "\\(M(2,\\,-1)\\) is the midpoint of \\(PQ\\), where \\(P=(-3,\\,4)\\). Find the coordinates of \\(Q\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "find endpoint", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up the midpoint equations.",
          workingLatex:
            "\\frac{-3+x_Q}{2}=2,\\qquad \\frac{4+y_Q}{2}=-1",
          explanation:
            "Each coordinate of the midpoint M is the average of P's and Q's matching coordinate. Write one equation per coordinate, keeping P's negative x explicit.",
        },
        {
          stepNumber: 2,
          description: "Clear the fraction in the x-equation.",
          workingLatex: "-3+x_Q=2\\cdot 2=4",
          explanation:
            "Multiply both sides by 2 to remove the division, giving -3 + x_Q = 4.",
        },
        {
          stepNumber: 3,
          description: "Solve for the x-coordinate of Q.",
          workingLatex: "x_Q=4+3=7",
          explanation:
            "Add 3 to both sides (the opposite of the -3) to isolate x_Q = 7.",
        },
        {
          stepNumber: 4,
          description: "Solve the y-equation.",
          workingLatex: "4+y_Q=2\\cdot(-1)=-2\\ \\Rightarrow\\ y_Q=-2-4=-6",
          explanation:
            "Multiply by 2 to get 4 + y_Q = -2 (watch that 2 x (-1) = -2), then subtract 4 to get y_Q = -6. The double negative is the easy place to slip.",
        },
        {
          stepNumber: 5,
          description: "State Q and check.",
          workingLatex:
            "Q=(7,\\,-6);\\quad \\frac{-3+7}{2}=2,\\ \\frac{4+(-6)}{2}=-1\\ \\checkmark",
          explanation:
            "Averaging P and Q returns M = (2, -1), so Q = (7, -6) is correct.",
          mafs: `<Mafs viewBox={{ x: [-5, 9], y: [-8, 6] }} height={280}><Coordinates.Cartesian /><Line.Segment point1={[-3, 4]} point2={[7, -6]} color="var(--mafs-fg-blue)" /><Point x={-3} y={4} color="var(--mafs-fg-blue)" /><Text x={-3} y={4} attach="nw" attachDistance={18}>P(-3, 4)</Text><Point x={2} y={-1} color="var(--mafs-fg-orange)" /><Text x={2} y={-1} attach="ne" attachDistance={18}>M(2, -1)</Text><Point x={7} y={-6} color="var(--mafs-fg-accent)" /><Text x={7} y={-6} attach="se" attachDistance={18}>Q(7, -6)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(Q = (7,\\,-6)\\)",
      canonicalAnswer: "(7,-6)",
    },
  },
  {
    id: "ga22-015",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "A line segment runs from \\(A(-5,\\,2)\\) to \\(B(7,\\,2)\\). A point \\(C\\) lies on \\(AB\\) such that \\(AC:CB = 1:3\\). Find the coordinates of \\(C\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "dividing a segment", "ratio"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the ratio.",
          workingLatex: "AC:CB=1:3\\ \\Rightarrow\\ AC=\\tfrac14 AB",
          explanation:
            "The ratio 1:3 splits AB into 1 + 3 = 4 equal parts. C is 1 part along from A, which is one quarter of the way from A to B. A common slip is to read 1:3 as 'a third'; it is a quarter.",
        },
        {
          stepNumber: 2,
          description: "Find the full displacement from A to B.",
          workingLatex: "\\vec{AB}=(7-(-5),\\ 2-2)=(12,\\,0)",
          explanation:
            "Subtract A from B. Here 7 - (-5) = 12 across and 2 - 2 = 0 up, so AB is horizontal.",
        },
        {
          stepNumber: 3,
          description: "Take one quarter of that displacement.",
          workingLatex:
            "\\frac{1}{4}\\vec{AB}=\\left(\\frac{12}{4},\\ \\frac{0}{4}\\right)=(3,\\,0)",
          explanation:
            "Since C is one quarter along, scale the whole displacement by 1/4 to get the step from A to C.",
        },
        {
          stepNumber: 4,
          description: "Add to A to locate C.",
          workingLatex: "C=A+\\tfrac14\\vec{AB}=(-5+3,\\ 2+0)=(-2,\\,2)",
          explanation:
            "Add the quarter-step (3, 0) to A = (-5, 2). Check: AC has length 3 and CB has length 7-(-2) = 9, and 3:9 simplifies to 1:3. Correct.",
          mafs: `<Mafs viewBox={{ x: [-7, 9], y: [-3, 6] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[-5, 2]} point2={[7, 2]} color="var(--mafs-fg-blue)" /><Point x={-5} y={2} color="var(--mafs-fg-blue)" /><Text x={-5} y={2} attach="nw" attachDistance={18}>A(-5, 2)</Text><Point x={7} y={2} color="var(--mafs-fg-blue)" /><Text x={7} y={2} attach="ne" attachDistance={18}>B(7, 2)</Text><Point x={-2} y={2} color="var(--mafs-fg-accent)" /><Text x={-2} y={2} attach="s" attachDistance={18}>C(-2, 2)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(C = (-2,\\,2)\\)",
      canonicalAnswer: "(-2,2)",
    },
  },
  {
    id: "ga22-016",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "numeric",
    questionText:
      "Find the distance between \\((-3,\\,-2)\\) and \\((1,\\,1)\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras", "negative coordinates"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the distance formula.",
          workingLatex: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          explanation:
            "The horizontal gap and vertical gap are the legs of a right-angled triangle, and the distance is the hypotenuse via Pythagoras.",
        },
        {
          stepNumber: 2,
          description: "Find the horizontal change.",
          workingLatex: "x_2-x_1=1-(-3)=4",
          explanation:
            "Subtracting -3 is the same as adding 3, so 1 - (-3) = 4.",
        },
        {
          stepNumber: 3,
          description: "Find the vertical change.",
          workingLatex: "y_2-y_1=1-(-2)=3",
          explanation:
            "Likewise 1 - (-2) = 3. Both gaps came from subtracting a negative, so watch the signs.",
        },
        {
          stepNumber: 4,
          description: "Square each change and add.",
          workingLatex: "4^2+3^2=16+9=25",
          explanation:
            "Square the two legs and add: 16 + 9 = 25, the square of the hypotenuse.",
        },
        {
          stepNumber: 5,
          description: "Take the square root.",
          workingLatex: "d=\\sqrt{25}=5",
          explanation:
            "Another 3-4-5 triangle, so the distance is exactly 5 units.",
          mafs: `<Mafs viewBox={{ x: [-5, 3], y: [-4, 3] }} height={260}><Coordinates.Cartesian /><Polygon points={[[-3, -2], [1, -2], [1, 1]]} color="var(--mafs-fg-orange)" fillOpacity={0.12} /><Line.Segment point1={[-3, -2]} point2={[1, 1]} color="var(--mafs-fg-accent)" /><Point x={-3} y={-2} color="var(--mafs-fg-blue)" /><Text x={-3} y={-2} attach="sw" attachDistance={18}>(-3, -2)</Text><Point x={1} y={1} color="var(--mafs-fg-blue)" /><Text x={1} y={1} attach="ne" attachDistance={18}>(1, 1)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(d = 5\\)",
      canonicalAnswer: "5",
    },
  },
  {
    id: "ga22-017",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "On a coordinate grid, point \\(P\\) is in the fourth quadrant, \\(2\\) units below the \\(x\\)-axis and \\(5\\) units to the right of the \\(y\\)-axis. State the coordinates of \\(P\\), and the coordinates of its reflection \\(P'\\) in the \\(y\\)-axis. Give your answer as the pair \\((P,\\,P')\\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "quadrants", "reflection", "y-axis"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Translate the description into signs.",
          workingLatex: "x=+5\\ (\\text{right}),\\qquad y=-2\\ (\\text{below})",
          explanation:
            "Right of the y-axis means a positive x; below the x-axis means a negative y. Positive-x with negative-y is indeed the fourth quadrant, which matches the description.",
        },
        {
          stepNumber: 2,
          description: "State P.",
          workingLatex: "P=(5,\\,-2)",
          explanation:
            "Combine the two values into the coordinate pair P = (5, -2).",
        },
        {
          stepNumber: 3,
          description: "Reflect P in the y-axis.",
          workingLatex: "(x,\\,y)\\to(-x,\\,y):\\quad P'=(-5,\\,-2)",
          explanation:
            "Reflecting in the y-axis negates the x-coordinate and leaves y unchanged, so 5 becomes -5 and -2 stays.",
        },
        {
          stepNumber: 4,
          description: "State both points.",
          workingLatex: "(P,\\,P')=\\big((5,-2),\\,(-5,-2)\\big)",
          explanation:
            "P' lies in the third quadrant, the mirror image of P across the vertical axis.",
          mafs: `<Mafs viewBox={{ x: [-7, 7], y: [-5, 3] }} height={260}><Coordinates.Cartesian /><Point x={5} y={-2} color="var(--mafs-fg-accent)" /><Text x={5} y={-2} attach="se" attachDistance={18}>P(5, -2)</Text><Point x={-5} y={-2} color="var(--mafs-fg-blue)" /><Text x={-5} y={-2} attach="sw" attachDistance={18}>P'(-5, -2)</Text><Line.Segment point1={[5, -2]} point2={[-5, -2]} color="var(--mafs-fg-orange)" /></Mafs>`,
        },
      ],
      finalAnswer: "\\(P=(5,\\,-2),\\quad P'=(-5,\\,-2)\\)",
      canonicalAnswer: "((5,-2),(-5,-2))",
    },
  },
  {
    id: "ga22-018",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "The diagonals of a parallelogram bisect each other. A parallelogram has vertices \\(A(-2,\\,1)\\), \\(B(4,\\,3)\\), \\(C(6,\\,-1)\\) and \\(D\\), where \\(AC\\) and \\(BD\\) are the diagonals. Find the coordinates of \\(D\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "parallelogram", "diagonals", "midpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the bisecting-diagonals property.",
          workingLatex: "\\text{midpoint of }AC=\\text{midpoint of }BD",
          explanation:
            "In a parallelogram the diagonals cross at their common midpoint, so the midpoint of AC must equal the midpoint of BD. This single fact pins down D.",
        },
        {
          stepNumber: 2,
          description: "Find the midpoint of diagonal AC.",
          workingLatex:
            "M=\\left(\\frac{-2+6}{2},\\ \\frac{1+(-1)}{2}\\right)=(2,\\,0)",
          explanation:
            "Average A and C coordinate by coordinate: (-2+6)/2 = 2 and (1+(-1))/2 = 0, giving the crossing point M = (2, 0).",
        },
        {
          stepNumber: 3,
          description: "Set the midpoint of BD equal to M.",
          workingLatex:
            "\\frac{4+x_D}{2}=2,\\qquad \\frac{3+y_D}{2}=0",
          explanation:
            "B = (4, 3) is known, so write the midpoint of BD using D's unknown coordinates and set it equal to M = (2, 0).",
        },
        {
          stepNumber: 4,
          description: "Solve for D.",
          workingLatex:
            "4+x_D=4\\Rightarrow x_D=0;\\quad 3+y_D=0\\Rightarrow y_D=-3",
          explanation:
            "Multiply each equation by 2, then subtract B's coordinate. Check the midpoint of BD: ((4+0)/2, (3-3)/2) = (2, 0) = M. Correct, so D = (0, -3).",
          mafs: `<Mafs viewBox={{ x: [-4, 8], y: [-5, 5] }} height={280}><Coordinates.Cartesian /><Polygon points={[[-2, 1], [4, 3], [6, -1], [0, -3]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Line.Segment point1={[-2, 1]} point2={[6, -1]} color="var(--mafs-fg-orange)" /><Line.Segment point1={[4, 3]} point2={[0, -3]} color="var(--mafs-fg-orange)" /><Point x={-2} y={1} color="var(--mafs-fg-blue)" /><Text x={-2} y={1} attach="nw" attachDistance={18}>A(-2, 1)</Text><Point x={4} y={3} color="var(--mafs-fg-blue)" /><Text x={4} y={3} attach="ne" attachDistance={18}>B(4, 3)</Text><Point x={6} y={-1} color="var(--mafs-fg-blue)" /><Text x={6} y={-1} attach="se" attachDistance={18}>C(6, -1)</Text><Point x={0} y={-3} color="var(--mafs-fg-accent)" /><Text x={0} y={-3} attach="sw" attachDistance={18}>D(0, -3)</Text><Point x={2} y={0} color="var(--mafs-fg-green)" /><Text x={2} y={0} attach="ne" attachDistance={14}>M(2, 0)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(D = (0,\\,-3)\\)",
      canonicalAnswer: "(0,-3)",
    },
  },
  {
    id: "ga22-019",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Find the exact distance between \\((-4,\\,3)\\) and \\((2,\\,-1)\\), giving your answer as a simplified surd.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras", "surd"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the distance formula.",
          workingLatex: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          explanation:
            "From Pythagoras on the right-angled triangle formed by the horizontal and vertical gaps between the two points.",
        },
        {
          stepNumber: 2,
          description: "Find the horizontal and vertical changes.",
          workingLatex:
            "x_2-x_1=2-(-4)=6,\\qquad y_2-y_1=-1-3=-4",
          explanation:
            "Take care with signs: 2 - (-4) = 6, and -1 - 3 = -4 (a downward change). The sign of the vertical change will not matter once we square it.",
        },
        {
          stepNumber: 3,
          description: "Square each change and add.",
          workingLatex: "6^2+(-4)^2=36+16=52",
          explanation:
            "Squaring (-4) gives +16, so the negative causes no trouble. The sum 52 is the square of the distance.",
        },
        {
          stepNumber: 4,
          description: "Write the distance as a root.",
          workingLatex: "d=\\sqrt{52}",
          explanation:
            "Since 52 is not a perfect square, the exact distance is the surd \\sqrt{52}, which we now simplify.",
        },
        {
          stepNumber: 5,
          description: "Simplify the surd.",
          workingLatex:
            "\\sqrt{52}=\\sqrt{4\\cdot 13}=\\sqrt{4}\\,\\sqrt{13}=2\\sqrt{13}",
          explanation:
            "Split 52 into 4 x 13, where 4 is the largest square factor. The 4 comes out of the root as 2, and 13 is prime so the surd is fully simplified.",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-3, 5] }} height={260}><Coordinates.Cartesian /><Polygon points={[[-4, 3], [2, 3], [2, -1]]} color="var(--mafs-fg-orange)" fillOpacity={0.12} /><Line.Segment point1={[-4, 3]} point2={[2, -1]} color="var(--mafs-fg-accent)" /><Point x={-4} y={3} color="var(--mafs-fg-blue)" /><Text x={-4} y={3} attach="nw" attachDistance={18}>(-4, 3)</Text><Point x={2} y={-1} color="var(--mafs-fg-blue)" /><Text x={2} y={-1} attach="se" attachDistance={18}>(2, -1)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(d = 2\\sqrt{13}\\)",
      canonicalAnswer: "2*sqrt(13)",
    },
  },
  {
    id: "ga22-020",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line segment from \\(A(-3,\\,-4)\\) to \\(B(9,\\,8)\\) is divided by a point \\(P\\) such that \\(AP:PB = 2:1\\). Find the coordinates of \\(P\\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "dividing a segment", "ratio", "section"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the ratio.",
          workingLatex: "AP:PB=2:1\\ \\Rightarrow\\ AP=\\tfrac{2}{3}AB",
          explanation:
            "AB is split into 2 + 1 = 3 equal parts; P sits 2 parts from A, i.e. two thirds of the way from A to B. The fraction is parts-from-A over total parts.",
        },
        {
          stepNumber: 2,
          description: "Find the displacement A to B.",
          workingLatex:
            "\\vec{AB}=(9-(-3),\\ 8-(-4))=(12,\\,12)",
          explanation:
            "Subtract A from B. Both 9 - (-3) and 8 - (-4) involve subtracting a negative, each giving 12, so AB = (12, 12).",
        },
        {
          stepNumber: 3,
          description: "Scale by two thirds.",
          workingLatex:
            "\\frac{2}{3}\\vec{AB}=\\left(\\frac{2}{3}\\cdot 12,\\ \\frac{2}{3}\\cdot 12\\right)=(8,\\,8)",
          explanation:
            "Multiply each component of the displacement by 2/3 to get the step from A to P: (8, 8).",
        },
        {
          stepNumber: 4,
          description: "Add to A to locate P.",
          workingLatex:
            "P=A+\\tfrac{2}{3}\\vec{AB}=(-3+8,\\ -4+8)=(5,\\,4)",
          explanation:
            "Add the step (8, 8) to A = (-3, -4). Check: AP = (8, 8) and PB = (9-5, 8-4) = (4, 4), and (8,8):(4,4) = 2:1. Correct.",
          mafs: `<Mafs viewBox={{ x: [-5, 11], y: [-6, 10] }} height={280}><Coordinates.Cartesian /><Line.Segment point1={[-3, -4]} point2={[9, 8]} color="var(--mafs-fg-blue)" /><Point x={-3} y={-4} color="var(--mafs-fg-blue)" /><Text x={-3} y={-4} attach="sw" attachDistance={18}>A(-3, -4)</Text><Point x={9} y={8} color="var(--mafs-fg-blue)" /><Text x={9} y={8} attach="ne" attachDistance={18}>B(9, 8)</Text><Point x={5} y={4} color="var(--mafs-fg-accent)" /><Text x={5} y={4} attach="se" attachDistance={18}>P(5, 4)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(P = (5,\\,4)\\)",
      canonicalAnswer: "(5,4)",
    },
  },
  {
    id: "ga22-021",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "\\(A(1,\\,2)\\) and \\(C(7,\\,10)\\) are opposite corners of a square \\(ABCD\\) (vertices in order). Find the coordinates of \\(B\\) and \\(D\\). Give your answer as the pair \\((B,\\,D)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "square", "diagonal", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the centre of the square.",
          workingLatex:
            "M=\\left(\\frac{1+7}{2},\\ \\frac{2+10}{2}\\right)=(4,\\,6)",
          explanation:
            "The diagonals of a square bisect each other, so they cross at the midpoint of AC. Both B and D lie on the other diagonal through this centre M.",
        },
        {
          stepNumber: 2,
          description: "Find the half-diagonal vector from M to C.",
          workingLatex: "\\vec{MC}=(7-4,\\ 10-6)=(3,\\,4)",
          explanation:
            "This vector points from the centre out to corner C. (The opposite half, M to A, is just (-3, -4).) Its length is sqrt(3^2+4^2) = 5.",
        },
        {
          stepNumber: 3,
          description: "Rotate this vector 90 degrees onto the other diagonal.",
          workingLatex: "(3,\\,4)\\ \\xrightarrow{\\ +90^\\circ\\ }\\ (-4,\\,3)",
          explanation:
            "The two diagonals of a square are perpendicular and equal in length. Rotating a vector (a, b) by 90 degrees gives (-b, a), so the half-diagonal in the BD direction is (-4, 3), with the same length 5.",
        },
        {
          stepNumber: 4,
          description: "Place B and D either side of the centre.",
          workingLatex:
            "B=M+(-4,3)=(0,\\,9),\\qquad D=M-(-4,3)=(8,\\,3)",
          explanation:
            "B and D sit at the centre plus and minus the rotated half-diagonal, one on each side along the second diagonal.",
        },
        {
          stepNumber: 5,
          description: "State and sanity check the side lengths.",
          workingLatex:
            "(B,\\,D)=\\big((0,9),\\,(8,3)\\big);\\ |AB|=\\sqrt{1+49}=\\sqrt{50}=|BC|\\ \\checkmark",
          explanation:
            "All four sides come out as sqrt(50), confirming ABCD is a genuine square. (Swapping the labels B and D describes the same square the other way round.)",
          mafs: `<Mafs viewBox={{ x: [-2, 10], y: [0, 12] }} height={280}><Coordinates.Cartesian /><Polygon points={[[1, 2], [0, 9], [7, 10], [8, 3]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Line.Segment point1={[1, 2]} point2={[7, 10]} color="var(--mafs-fg-orange)" /><Line.Segment point1={[0, 9]} point2={[8, 3]} color="var(--mafs-fg-orange)" /><Point x={1} y={2} color="var(--mafs-fg-blue)" /><Text x={1} y={2} attach="sw" attachDistance={18}>A(1, 2)</Text><Point x={7} y={10} color="var(--mafs-fg-blue)" /><Text x={7} y={10} attach="ne" attachDistance={18}>C(7, 10)</Text><Point x={0} y={9} color="var(--mafs-fg-accent)" /><Text x={0} y={9} attach="nw" attachDistance={18}>B(0, 9)</Text><Point x={8} y={3} color="var(--mafs-fg-accent)" /><Text x={8} y={3} attach="se" attachDistance={18}>D(8, 3)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(B = (0,\\,9),\\quad D = (8,\\,3)\\)",
      canonicalAnswer: "((0,9),(8,3))",
    },
  },
  {
    id: "ga22-022",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "\\(M(1,\\,-2)\\) is the midpoint of \\(AB\\). Given that \\(A\\) lies on the \\(y\\)-axis and \\(B\\) lies on the \\(x\\)-axis, find the coordinates of \\(A\\) and \\(B\\). Give your answer as the pair \\((A,\\,B)\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "axes", "reasoning"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Use the axis conditions to set unknowns.",
          workingLatex: "A=(0,\\,a)\\ \\text{on the }y\\text{-axis},\\qquad B=(b,\\,0)\\ \\text{on the }x\\text{-axis}",
          explanation:
            "A point on the y-axis has x = 0, and a point on the x-axis has y = 0. That leaves just one unknown in each point: a for A and b for B.",
        },
        {
          stepNumber: 2,
          description: "Write the midpoint of AB.",
          workingLatex:
            "M=\\left(\\frac{0+b}{2},\\ \\frac{a+0}{2}\\right)=\\left(\\frac{b}{2},\\ \\frac{a}{2}\\right)",
          explanation:
            "Average the coordinates of A and B. The 0s simplify the formula to (b/2, a/2).",
        },
        {
          stepNumber: 3,
          description: "Match to M = (1, -2).",
          workingLatex: "\\frac{b}{2}=1,\\qquad \\frac{a}{2}=-2",
          explanation:
            "The midpoint must equal the given M, so equate the x-parts and the y-parts separately to get two simple equations.",
        },
        {
          stepNumber: 4,
          description: "Solve for a and b.",
          workingLatex: "b=2\\cdot 1=2,\\qquad a=2\\cdot(-2)=-4",
          explanation:
            "Multiply each equation by 2. Note a = -4 because 2 x (-2) = -4.",
        },
        {
          stepNumber: 5,
          description: "State the points and check.",
          workingLatex:
            "A=(0,\\,-4),\\ B=(2,\\,0);\\ \\text{midpoint}=\\left(\\tfrac{0+2}{2},\\tfrac{-4+0}{2}\\right)=(1,-2)\\ \\checkmark",
          explanation:
            "Substituting a = -4 and b = 2 gives A = (0, -4) and B = (2, 0). Their midpoint returns M = (1, -2), so the answer is consistent.",
          mafs: `<Mafs viewBox={{ x: [-3, 5], y: [-6, 3] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[0, -4]} point2={[2, 0]} color="var(--mafs-fg-blue)" /><Point x={0} y={-4} color="var(--mafs-fg-accent)" /><Text x={0} y={-4} attach="sw" attachDistance={18}>A(0, -4)</Text><Point x={2} y={0} color="var(--mafs-fg-accent)" /><Text x={2} y={0} attach="ne" attachDistance={18}>B(2, 0)</Text><Point x={1} y={-2} color="var(--mafs-fg-orange)" /><Text x={1} y={-2} attach="se" attachDistance={18}>M(1, -2)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(A=(0,\\,-4),\\quad B=(2,\\,0)\\)",
      canonicalAnswer: "((0,-4),(2,0))",
    },
  },
  {
    id: "ga22-023",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A triangle has vertices \\(A(-2,\\,1)\\), \\(B(4,\\,1)\\) and \\(C(1,\\,5)\\). Show whether the triangle is isosceles by comparing side lengths, and state the length of the side \\(AB\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras", "isosceles"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "State the distance formula.",
          workingLatex: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
          explanation:
            "To decide whether the triangle is isosceles we must find all three side lengths and compare them, applying this formula to AB, BC and CA in turn.",
        },
        {
          stepNumber: 2,
          description: "Find AB.",
          workingLatex:
            "AB=\\sqrt{(4-(-2))^2+(1-1)^2}=\\sqrt{6^2+0}=\\sqrt{36}=6",
          explanation:
            "A and B share the same y-coordinate, so AB is horizontal and its length is simply the gap in x: 6.",
        },
        {
          stepNumber: 3,
          description: "Find BC.",
          workingLatex:
            "BC=\\sqrt{(1-4)^2+(5-1)^2}=\\sqrt{(-3)^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5",
          explanation:
            "The changes are -3 and 4; squaring removes the minus, giving 9 + 16 = 25, so BC = 5.",
        },
        {
          stepNumber: 4,
          description: "Find CA.",
          workingLatex:
            "CA=\\sqrt{(-2-1)^2+(1-5)^2}=\\sqrt{(-3)^2+(-4)^2}=\\sqrt{9+16}=5",
          explanation:
            "The changes are -3 and -4; both square to give 9 and 16 again, so CA = 5 as well.",
        },
        {
          stepNumber: 5,
          description: "Compare and conclude.",
          workingLatex: "BC=CA=5\\neq AB=6\\ \\Rightarrow\\ \\text{isosceles}",
          explanation:
            "Two of the three sides are equal (BC = CA = 5) while the third differs, which is exactly the definition of an isosceles triangle. The requested side AB has length 6.",
          mafs: `<Mafs viewBox={{ x: [-4, 6], y: [-1, 7] }} height={260}><Coordinates.Cartesian /><Polygon points={[[-2, 1], [4, 1], [1, 5]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Point x={-2} y={1} color="var(--mafs-fg-blue)" /><Text x={-2} y={1} attach="sw" attachDistance={18}>A(-2, 1)</Text><Point x={4} y={1} color="var(--mafs-fg-blue)" /><Text x={4} y={1} attach="se" attachDistance={18}>B(4, 1)</Text><Point x={1} y={5} color="var(--mafs-fg-accent)" /><Text x={1} y={5} attach="n" attachDistance={18}>C(1, 5)</Text></Mafs>`,
        },
      ],
      finalAnswer: "Isosceles; \\(AB = 6\\)",
      canonicalAnswer: "6",
    },
  },
  {
    id: "ga22-024",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Three vertices of a parallelogram are \\(P(-1,\\,2)\\), \\(Q(3,\\,-1)\\) and \\(R(6,\\,4)\\). There are three possible positions for the fourth vertex. Find the position \\(S\\) for which \\(PQRS\\) (in that order) is a parallelogram.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "parallelogram", "fourth vertex", "vectors"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Decide which sides are opposite.",
          workingLatex: "PQRS:\\quad PQ\\parallel SR,\\ \\ QR\\parallel PS",
          explanation:
            "Naming the parallelogram PQRS in order fixes which sides are opposite: PQ is opposite SR, and QR is opposite PS. We will use the condition PS = QR to find S.",
        },
        {
          stepNumber: 2,
          description: "Find the displacement QR.",
          workingLatex: "\\vec{QR}=R-Q=(6-3,\\ 4-(-1))=(3,\\,5)",
          explanation:
            "Subtract Q from R: 6 - 3 = 3 across, and 4 - (-1) = 5 up. So QR = (3, 5).",
        },
        {
          stepNumber: 3,
          description: "Apply PS = QR.",
          workingLatex:
            "S=P+\\vec{QR}=(-1+3,\\ 2+5)=(2,\\,7)",
          explanation:
            "Since PS must equal QR, the step from P to S is the same (3, 5); add it to P = (-1, 2) to land on S = (2, 7).",
        },
        {
          stepNumber: 4,
          description: "Verify the other pair of sides.",
          workingLatex:
            "\\vec{PQ}=(4,-3),\\quad \\vec{SR}=R-S=(6-2,\\,4-7)=(4,-3)\\ \\checkmark",
          explanation:
            "The remaining pair PQ and SR are equal, confirming PQRS is a genuine parallelogram with the vertices in the required order.",
        },
        {
          stepNumber: 5,
          description: "State the answer.",
          workingLatex: "S=(2,\\,7)",
          explanation:
            "Only S = (2, 7) gives PQRS in the stated order. The other two candidate fourth vertices correspond to different vertex orderings (such as PQSR or PRQS), so they are not what is asked for here.",
          mafs: `<Mafs viewBox={{ x: [-3, 8], y: [-3, 9] }} height={280}><Coordinates.Cartesian /><Polygon points={[[-1, 2], [3, -1], [6, 4], [2, 7]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Point x={-1} y={2} color="var(--mafs-fg-blue)" /><Text x={-1} y={2} attach="w" attachDistance={18}>P(-1, 2)</Text><Point x={3} y={-1} color="var(--mafs-fg-blue)" /><Text x={3} y={-1} attach="se" attachDistance={18}>Q(3, -1)</Text><Point x={6} y={4} color="var(--mafs-fg-blue)" /><Text x={6} y={4} attach="e" attachDistance={18}>R(6, 4)</Text><Point x={2} y={7} color="var(--mafs-fg-accent)" /><Text x={2} y={7} attach="n" attachDistance={18}>S(2, 7)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(S = (2,\\,7)\\)",
      canonicalAnswer: "(2,7)",
    },
  },
  {
    id: "ga22-025",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "\\(B\\) is the midpoint of \\(AC\\). Given \\(A(-5,\\,8)\\) and that the midpoint of \\(AB\\) is \\((-2,\\,5)\\), find the coordinates of \\(C\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "chained reasoning", "find endpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set up equations for B from the midpoint of AB.",
          workingLatex:
            "\\frac{-5+x_B}{2}=-2,\\qquad \\frac{8+y_B}{2}=5",
          explanation:
            "We are told (-2, 5) is the midpoint of A and B, so each of its coordinates is the average of A's and B's. This is the first link in the chain; find B before tackling C.",
        },
        {
          stepNumber: 2,
          description: "Solve for B.",
          workingLatex:
            "-5+x_B=-4\\Rightarrow x_B=1;\\quad 8+y_B=10\\Rightarrow y_B=2",
          explanation:
            "Multiply each equation by 2, then move A's coordinate across: x_B = -4 + 5 = 1 and y_B = 10 - 8 = 2, so B = (1, 2).",
        },
        {
          stepNumber: 3,
          description: "Use that B is the midpoint of AC.",
          workingLatex:
            "\\frac{-5+x_C}{2}=1,\\qquad \\frac{8+y_C}{2}=2",
          explanation:
            "Now use the second piece of information: B = (1, 2) is the midpoint of A and the unknown C. Set up the average equations again, this time for C.",
        },
        {
          stepNumber: 4,
          description: "Solve for C.",
          workingLatex:
            "-5+x_C=2\\Rightarrow x_C=7;\\quad 8+y_C=4\\Rightarrow y_C=-4",
          explanation:
            "Multiply each equation by 2 (note 2 x 2 = 4 on the right of the y-equation), then rearrange: x_C = 2 + 5 = 7 and y_C = 4 - 8 = -4.",
        },
        {
          stepNumber: 5,
          description: "State C and check.",
          workingLatex:
            "C=(7,\\,-4);\\ \\text{mid}(A,C)=\\left(\\tfrac{-5+7}{2},\\tfrac{8-4}{2}\\right)=(1,2)=B\\ \\checkmark",
          explanation:
            "The midpoint of A and C comes out as B = (1, 2), confirming the chain holds, so C = (7, -4).",
          mafs: `<Mafs viewBox={{ x: [-7, 9], y: [-6, 10] }} height={280}><Coordinates.Cartesian /><Line.Segment point1={[-5, 8]} point2={[7, -4]} color="var(--mafs-fg-blue)" /><Point x={-5} y={8} color="var(--mafs-fg-blue)" /><Text x={-5} y={8} attach="nw" attachDistance={18}>A(-5, 8)</Text><Point x={-2} y={5} color="var(--mafs-fg-green)" /><Text x={-2} y={5} attach="ne" attachDistance={14}>(-2, 5)</Text><Point x={1} y={2} color="var(--mafs-fg-orange)" /><Text x={1} y={2} attach="ne" attachDistance={18}>B(1, 2)</Text><Point x={7} y={-4} color="var(--mafs-fg-accent)" /><Text x={7} y={-4} attach="se" attachDistance={18}>C(7, -4)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(C = (7,\\,-4)\\)",
      canonicalAnswer: "(7,-4)",
    },
  },
  {
    id: "ga22-026",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "Point \\(A=(2,\\,-3)\\) and point \\(B=(t,\\,5)\\) are a distance of \\(10\\) units apart, where \\(t>0\\). Find the value of \\(t\\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "distance", "Pythagoras", "solve for unknown"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Write the distance condition.",
          workingLatex:
            "\\sqrt{(t-2)^2+(5-(-3))^2}=10",
          explanation:
            "Substitute A = (2, -3) and B = (t, 5) into the distance formula and set the whole expression equal to the given distance, 10.",
        },
        {
          stepNumber: 2,
          description: "Simplify the known vertical gap.",
          workingLatex: "5-(-3)=8,\\qquad \\sqrt{(t-2)^2+8^2}=10",
          explanation:
            "The y-gap is fixed: 5 - (-3) = 8. Only the horizontal gap (t - 2) still depends on the unknown t.",
        },
        {
          stepNumber: 3,
          description: "Square both sides.",
          workingLatex: "(t-2)^2+64=100",
          explanation:
            "Squaring removes the square root. Here 8^2 = 64 on the left and 10^2 = 100 on the right.",
        },
        {
          stepNumber: 4,
          description: "Isolate the squared bracket.",
          workingLatex: "(t-2)^2=100-64=36",
          explanation:
            "Subtract 64 from both sides to leave the bracket on its own equal to 36.",
        },
        {
          stepNumber: 5,
          description: "Take the square root.",
          workingLatex: "t-2=\\pm\\sqrt{36}=\\pm 6",
          explanation:
            "Taking the square root of both sides gives two possibilities, +6 and -6. Do not forget the negative root at this stage — it is needed for the next step.",
        },
        {
          stepNumber: 6,
          description: "Solve and apply t > 0.",
          workingLatex: "t=2\\pm 6\\ \\Rightarrow\\ t=8\\ \\text{or}\\ t=-4;\\quad t>0\\Rightarrow t=8",
          explanation:
            "Adding 2 gives t = 8 or t = -4. The condition t > 0 rules out -4, leaving the single answer t = 8.",
          mafs: `<Mafs viewBox={{ x: [-1, 10], y: [-5, 7] }} height={280}><Coordinates.Cartesian /><Polygon points={[[2, -3], [8, -3], [8, 5]]} color="var(--mafs-fg-orange)" fillOpacity={0.12} /><Line.Segment point1={[2, -3]} point2={[8, 5]} color="var(--mafs-fg-accent)" /><Point x={2} y={-3} color="var(--mafs-fg-blue)" /><Text x={2} y={-3} attach="sw" attachDistance={18}>A(2, -3)</Text><Point x={8} y={5} color="var(--mafs-fg-blue)" /><Text x={8} y={5} attach="ne" attachDistance={18}>B(8, 5)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(t = 8\\)",
      canonicalAnswer: "8",
    },
  },
  {
    id: "ga22-027",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A line segment from \\(A(-7,\\,5)\\) to \\(B(5,\\,-7)\\) is split into four equal parts by points \\(P\\), \\(Q\\) and \\(R\\) (in order from \\(A\\)). Find the coordinates of \\(Q\\), the point exactly halfway along, and of \\(P\\), the first quarter point.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "dividing a segment", "midpoint", "quarter points"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the displacement A to B.",
          workingLatex:
            "\\vec{AB}=(5-(-7),\\ -7-5)=(12,\\,-12)",
          explanation:
            "Subtract A from B: 5 - (-7) = 12 across and -7 - 5 = -12 (i.e. 12 down). So B is below and to the right of A.",
        },
        {
          stepNumber: 2,
          description: "Find Q, the halfway point.",
          workingLatex:
            "Q=\\left(\\frac{-7+5}{2},\\ \\frac{5+(-7)}{2}\\right)=(-1,\\,-1)",
          explanation:
            "Q is exactly halfway along, so it is simply the midpoint of A and B: average the coordinates to get (-1, -1).",
        },
        {
          stepNumber: 3,
          description: "Take one quarter of the displacement.",
          workingLatex:
            "\\frac{1}{4}\\vec{AB}=\\left(\\frac{12}{4},\\ \\frac{-12}{4}\\right)=(3,\\,-3)",
          explanation:
            "Splitting AB into four equal parts means each quarter-step is (1/4) of AB = (3, -3).",
        },
        {
          stepNumber: 4,
          description: "Find P, the first quarter point.",
          workingLatex:
            "P=A+\\tfrac14\\vec{AB}=(-7+3,\\ 5-3)=(-4,\\,2)",
          explanation:
            "Start at A and take a single quarter-step (3, -3) to reach the first division point P = (-4, 2).",
        },
        {
          stepNumber: 5,
          description: "Cross-check Q from P.",
          workingLatex:
            "P+\\tfrac14\\vec{AB}=(-4+3,\\ 2-3)=(-1,\\,-1)=Q\\ \\checkmark",
          explanation:
            "Taking another quarter-step from P lands exactly on Q, which confirms both points are placed correctly.",
          mafs: `<Mafs viewBox={{ x: [-9, 7], y: [-9, 7] }} height={280}><Coordinates.Cartesian /><Line.Segment point1={[-7, 5]} point2={[5, -7]} color="var(--mafs-fg-blue)" /><Point x={-7} y={5} color="var(--mafs-fg-blue)" /><Text x={-7} y={5} attach="nw" attachDistance={18}>A(-7, 5)</Text><Point x={5} y={-7} color="var(--mafs-fg-blue)" /><Text x={5} y={-7} attach="se" attachDistance={18}>B(5, -7)</Text><Point x={-4} y={2} color="var(--mafs-fg-accent)" /><Text x={-4} y={2} attach="ne" attachDistance={18}>P(-4, 2)</Text><Point x={-1} y={-1} color="var(--mafs-fg-orange)" /><Text x={-1} y={-1} attach="ne" attachDistance={18}>Q(-1, -1)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(P=(-4,\\,2),\\quad Q=(-1,\\,-1)\\)",
      canonicalAnswer: "((-4,2),(-1,-1))",
    },
  },
  {
    id: "ga22-028",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A rectangle \\(ABCD\\) (vertices in order) has \\(A(-2,\\,-1)\\), \\(B(2,\\,1)\\) and \\(C(0,\\,5)\\). Find the coordinates of \\(D\\), and verify that \\(ABCD\\) has a right angle at \\(B\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "rectangle", "fourth vertex", "perpendicular"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the edge vectors meeting at B.",
          workingLatex:
            "\\vec{BA}=A-B=(-4,\\,-2),\\qquad \\vec{BC}=C-B=(-2,\\,4)",
          explanation:
            "The two sides of the rectangle that meet at vertex B are BA and BC. Compute each as 'tip minus tail': BA = A - B and BC = C - B.",
        },
        {
          stepNumber: 2,
          description: "Check the right angle using the dot product.",
          workingLatex:
            "\\vec{BA}\\cdot\\vec{BC}=(-4)(-2)+(-2)(4)=8-8=0",
          explanation:
            "Two vectors are perpendicular exactly when their dot product is zero. Here 8 - 8 = 0, so the angle at B is 90 degrees, as a rectangle requires.",
        },
        {
          stepNumber: 3,
          description: "Relate D to the known vertices.",
          workingLatex: "\\vec{AD}=\\vec{BC}=(-2,\\,4)",
          explanation:
            "Going round ABCD in order, side AD is opposite to BC, so they are equal vectors. Thus the step from A to D equals the step from B to C.",
        },
        {
          stepNumber: 4,
          description: "Compute D.",
          workingLatex:
            "D=A+\\vec{BC}=(-2+(-2),\\ -1+4)=(-4,\\,3)",
          explanation:
            "Add the displacement (-2, 4) to A = (-2, -1) to find D = (-4, 3).",
        },
        {
          stepNumber: 5,
          description: "Verify the opposite side DC.",
          workingLatex:
            "\\vec{DC}=C-D=(0-(-4),\\,5-3)=(4,\\,2)=\\vec{AB}\\ \\checkmark",
          explanation:
            "Side DC should equal AB. Indeed DC = (4, 2) = AB, so the four vertices form rectangle ABCD with D = (-4, 3).",
          mafs: `<Mafs viewBox={{ x: [-6, 4], y: [-3, 7] }} height={280}><Coordinates.Cartesian /><Polygon points={[[-2, -1], [2, 1], [0, 5], [-4, 3]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Point x={-2} y={-1} color="var(--mafs-fg-blue)" /><Text x={-2} y={-1} attach="s" attachDistance={18}>A(-2, -1)</Text><Point x={2} y={1} color="var(--mafs-fg-blue)" /><Text x={2} y={1} attach="se" attachDistance={18}>B(2, 1)</Text><Point x={0} y={5} color="var(--mafs-fg-blue)" /><Text x={0} y={5} attach="ne" attachDistance={18}>C(0, 5)</Text><Point x={-4} y={3} color="var(--mafs-fg-accent)" /><Text x={-4} y={3} attach="nw" attachDistance={18}>D(-4, 3)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(D = (-4,\\,3)\\) (right angle at \\(B\\) confirmed)",
      canonicalAnswer: "(-4,3)",
    },
  },
  {
    id: "ga22-029",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Points \\(A(-6,\\,3)\\) and \\(B(6,\\,-1)\\) are given. Find the point \\(C\\) on segment \\(AB\\) with \\(AC:CB=3:1\\), then state the midpoint of \\(CB\\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "dividing a segment", "ratio", "midpoint"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Interpret the ratio for C.",
          workingLatex: "AC:CB=3:1\\ \\Rightarrow\\ AC=\\tfrac{3}{4}AB",
          explanation:
            "AB splits into 3 + 1 = 4 equal parts; C sits 3 parts from A, which is three quarters of the way from A to B.",
        },
        {
          stepNumber: 2,
          description: "Find the displacement A to B.",
          workingLatex:
            "\\vec{AB}=(6-(-6),\\ -1-3)=(12,\\,-4)",
          explanation:
            "Subtract A from B: 6 - (-6) = 12 across and -1 - 3 = -4 (4 down).",
        },
        {
          stepNumber: 3,
          description: "Scale by three quarters.",
          workingLatex:
            "\\frac{3}{4}\\vec{AB}=\\left(\\frac{3}{4}\\cdot 12,\\ \\frac{3}{4}\\cdot(-4)\\right)=(9,\\,-3)",
          explanation:
            "Multiply each component of AB by 3/4 to get the step from A to C: (9, -3).",
        },
        {
          stepNumber: 4,
          description: "Locate C.",
          workingLatex:
            "C=A+\\tfrac34\\vec{AB}=(-6+9,\\ 3-3)=(3,\\,0)",
          explanation:
            "Add the step (9, -3) to A = (-6, 3) to get C = (3, 0). Check: AC = (9, -3) and CB = (3, -1), and (9,-3):(3,-1) = 3:1.",
        },
        {
          stepNumber: 5,
          description: "Find the midpoint of CB.",
          workingLatex:
            "\\text{mid}(C,B)=\\left(\\frac{3+6}{2},\\ \\frac{0+(-1)}{2}\\right)=\\left(\\frac{9}{2},\\ -\\frac{1}{2}\\right)",
          explanation:
            "Average C = (3, 0) and B = (6, -1) coordinate by coordinate. Both averages are fractions, so leave them as 9/2 and -1/2.",
          mafs: `<Mafs viewBox={{ x: [-8, 8], y: [-3, 5] }} height={260}><Coordinates.Cartesian /><Line.Segment point1={[-6, 3]} point2={[6, -1]} color="var(--mafs-fg-blue)" /><Point x={-6} y={3} color="var(--mafs-fg-blue)" /><Text x={-6} y={3} attach="nw" attachDistance={18}>A(-6, 3)</Text><Point x={6} y={-1} color="var(--mafs-fg-blue)" /><Text x={6} y={-1} attach="se" attachDistance={18}>B(6, -1)</Text><Point x={3} y={0} color="var(--mafs-fg-accent)" /><Text x={3} y={0} attach="nw" attachDistance={18}>C(3, 0)</Text><Point x={4.5} y={-0.5} color="var(--mafs-fg-orange)" /><Text x={4.5} y={-0.5} attach="s" attachDistance={14}>(4.5, -0.5)</Text></Mafs>`,
        },
      ],
      finalAnswer:
        "\\(C=(3,\\,0)\\); midpoint of \\(CB=\\left(\\dfrac{9}{2},\\ -\\dfrac{1}{2}\\right)\\)",
      canonicalAnswer: "(9/2,-1/2)",
    },
  },
  {
    id: "ga22-030",
    topicRef: "ga22",
    topicTitle: "Coordinates in all four quadrants",
    difficulty: "Challenge",
    answerType: "numeric",
    questionText:
      "A triangle has vertices \\(A(0,\\,0)\\), \\(B(6,\\,0)\\) and \\(C(0,\\,8)\\). Find the distance from the right-angle vertex \\(A\\) to the midpoint of the hypotenuse \\(BC\\), and comment on what you notice.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["coordinates", "midpoint", "distance", "circumcentre"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the hypotenuse.",
          workingLatex: "\\angle A=90^\\circ\\ (AB\\text{ along }x\\text{-axis},\\ AC\\text{ along }y\\text{-axis})",
          explanation:
            "Side AB lies along the x-axis and AC along the y-axis, so they are perpendicular and the right angle is at A. The side opposite the right angle, BC, is therefore the hypotenuse.",
        },
        {
          stepNumber: 2,
          description: "Find the midpoint of the hypotenuse.",
          workingLatex:
            "M=\\text{mid}(B,C)=\\left(\\frac{6+0}{2},\\ \\frac{0+8}{2}\\right)=(3,\\,4)",
          explanation:
            "Average B = (6, 0) and C = (0, 8) to get the midpoint M = (3, 4) of the hypotenuse.",
        },
        {
          stepNumber: 3,
          description: "Set up the distance from A to M.",
          workingLatex: "AM=\\sqrt{(3-0)^2+(4-0)^2}",
          explanation:
            "Apply the distance formula between A = (0, 0) and M = (3, 4).",
        },
        {
          stepNumber: 4,
          description: "Evaluate AM.",
          workingLatex: "AM=\\sqrt{9+16}=\\sqrt{25}=5",
          explanation:
            "9 + 16 = 25 (another 3-4-5 triangle), so AM = 5.",
        },
        {
          stepNumber: 5,
          description: "Find the hypotenuse length for comparison.",
          workingLatex:
            "BC=\\sqrt{(6-0)^2+(0-8)^2}=\\sqrt{36+64}=\\sqrt{100}=10",
          explanation:
            "Apply the distance formula to B and C: the hypotenuse BC has length 10 units.",
        },
        {
          stepNumber: 6,
          description: "Compare and comment.",
          workingLatex: "AM=5=\\tfrac12\\cdot 10=\\tfrac12 BC",
          explanation:
            "The distance from the right-angle vertex to the midpoint of the hypotenuse is exactly half the hypotenuse. This is the circumcentre property: M is equidistant from all three vertices, so it is the centre of the circle through A, B and C.",
          mafs: `<Mafs viewBox={{ x: [-2, 8], y: [-2, 10] }} height={280}><Coordinates.Cartesian /><Polygon points={[[0, 0], [6, 0], [0, 8]]} color="var(--mafs-fg-blue)" fillOpacity={0.15} /><Line.Segment point1={[0, 0]} point2={[3, 4]} color="var(--mafs-fg-accent)" /><Point x={0} y={0} color="var(--mafs-fg-blue)" /><Text x={0} y={0} attach="sw" attachDistance={18}>A(0, 0)</Text><Point x={6} y={0} color="var(--mafs-fg-blue)" /><Text x={6} y={0} attach="se" attachDistance={18}>B(6, 0)</Text><Point x={0} y={8} color="var(--mafs-fg-blue)" /><Text x={0} y={8} attach="nw" attachDistance={18}>C(0, 8)</Text><Point x={3} y={4} color="var(--mafs-fg-orange)" /><Text x={3} y={4} attach="ne" attachDistance={18}>M(3, 4)</Text></Mafs>`,
        },
      ],
      finalAnswer: "\\(AM = 5\\) (this is exactly half of \\(BC = 10\\))",
      canonicalAnswer: "5",
    },
  },
];
