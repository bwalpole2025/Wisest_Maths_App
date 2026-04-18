import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "C2-001",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 01",
    difficulty: "Foundation",
    questionText:
      "Find the coordinates of the points where the line \\( y = x + 2 \\) meets the curve \\( y = x^2 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "simultaneous", "quadratic", "line and curve"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 = x + 2\\\\[0.5em] x^2 - x - 2 = 0",
          explanation:
            "At the intersection points, both equations give the same \\( y \\)-value.",
        },
        {
          stepNumber: 2,
          description: "Factorise and solve.",
          workingLatex:
            "(x-2)(x+1) = 0\\\\[0.5em] x = 2 \\quad \\text{or} \\quad x = -1",
          explanation:
            "Factorise the quadratic to find the x-coordinates.",
        },
        {
          stepNumber: 3,
          description: "Find the y-coordinates.",
          workingLatex:
            "x = 2: \\; y = 2 + 2 = 4\\\\[0.5em] x = -1: \\; y = -1 + 2 = 1",
          explanation:
            "Substitute back into the linear equation (it's simpler).",
        },
      ],
      finalAnswer:
        "The points of intersection are \\( (-1, 1) \\) and \\( (2, 4) \\).",
      commonMistakes: [
        "Forgetting to find the y-coordinates after solving for x.",
      ],
    },
  },
  {
    id: "C2-002",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 02",
    difficulty: "Foundation",
    questionText:
      "Find the coordinates of the points where the line \\( y = 2x + 3 \\) intersects the curve \\( y = x^2 + x - 1 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "simultaneous", "quadratic"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 + x - 1 = 2x + 3\\\\[0.5em] x^2 - x - 4 = 0",
          explanation:
            "Rearrange to get a quadratic equation equal to zero.",
        },
        {
          stepNumber: 2,
          description: "Use the quadratic formula.",
          workingLatex:
            "x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}",
          explanation:
            "This doesn't factorise, so use the formula with \\( a = 1, b = -1, c = -4 \\).",
        },
        {
          stepNumber: 3,
          description: "Find the y-coordinates using \\( y = 2x + 3 \\).",
          workingLatex:
            "y = 2 \\cdot \\frac{1 + \\sqrt{17}}{2} + 3 = 4 + \\sqrt{17}\\\\[0.5em] y = 2 \\cdot \\frac{1 - \\sqrt{17}}{2} + 3 = 4 - \\sqrt{17}",
          explanation:
            "Substitute each x-value into the linear equation.",
        },
      ],
      finalAnswer:
        "\\( \\left(\\dfrac{1 + \\sqrt{17}}{2},\\; 4 + \\sqrt{17}\\right) \\) and \\( \\left(\\dfrac{1 - \\sqrt{17}}{2},\\; 4 - \\sqrt{17}\\right) \\)",
    },
  },
  {
    id: "C2-003",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 03",
    difficulty: "Foundation",
    questionText:
      "Show that the line \\( y = x + 5 \\) does not intersect the curve \\( y = x^2 + 3x + 8 \\).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "discriminant", "no intersection"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 + 3x + 8 = x + 5\\\\[0.5em] x^2 + 2x + 3 = 0",
          explanation:
            "Rearrange to standard form.",
        },
        {
          stepNumber: 2,
          description: "Calculate the discriminant.",
          workingLatex:
            "b^2 - 4ac = 4 - 12 = -8 < 0",
          explanation:
            "With \\( a = 1, b = 2, c = 3 \\), the discriminant is negative.",
        },
        {
          stepNumber: 3,
          description: "Conclude.",
          workingLatex:
            "\\text{Since } b^2 - 4ac < 0, \\text{ the equation has no real solutions.}\\\\[0.5em] \\text{Therefore the line and curve do not intersect.}",
          explanation:
            "A negative discriminant means no real roots, so the line and curve have no points in common.",
        },
      ],
      finalAnswer:
        "The discriminant is \\( -8 < 0 \\), so there are no real solutions and the line does not intersect the curve.",
    },
  },
  {
    id: "C2-004",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 04",
    difficulty: "Standard",
    questionText:
      "The line \\( y = 2x + k \\) is a tangent to the curve \\( y = x^2 + 3 \\). Find the value of \\( k \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "tangent", "discriminant"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 + 3 = 2x + k\\\\[0.5em] x^2 - 2x + 3 - k = 0",
          explanation:
            "For a tangent, the line touches the curve at exactly one point.",
        },
        {
          stepNumber: 2,
          description: "Set the discriminant equal to zero.",
          workingLatex:
            "b^2 - 4ac = (-2)^2 - 4(1)(3-k) = 0\\\\[0.5em] 4 - 12 + 4k = 0\\\\[0.5em] 4k = 8\\\\[0.5em] k = 2",
          explanation:
            "A tangent means exactly one point of intersection, so the discriminant must be zero.",
        },
      ],
      finalAnswer:
        "\\( k = 2 \\)",
      commonMistakes: [
        "Setting the discriminant > 0 instead of = 0 for a tangent.",
      ],
    },
  },
  {
    id: "C2-005",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 05",
    difficulty: "Standard",
    questionText:
      "Find the set of values of \\( k \\) for which the line \\( y = kx - 1 \\) intersects the curve \\( y = x^2 + 2 \\) at two distinct points.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "discriminant", "inequality"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 + 2 = kx - 1\\\\[0.5em] x^2 - kx + 3 = 0",
          explanation:
            "Rearrange into standard quadratic form.",
        },
        {
          stepNumber: 2,
          description: "For two distinct intersections, require \\( b^2 - 4ac > 0 \\).",
          workingLatex:
            "(-k)^2 - 4(1)(3) > 0\\\\[0.5em] k^2 - 12 > 0\\\\[0.5em] k^2 > 12\\\\[0.5em] k > 2\\sqrt{3} \\quad \\text{or} \\quad k < -2\\sqrt{3}",
          explanation:
            "Two distinct points of intersection require a positive discriminant.",
        },
      ],
      finalAnswer:
        "\\( k < -2\\sqrt{3} \\) or \\( k > 2\\sqrt{3} \\)",
    },
  },
  {
    id: "C2-006",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 06",
    difficulty: "Standard",
    questionText:
      "Find the points of intersection of the curves \\( y = x^2 - 3x + 2 \\) and \\( y = 2x^2 - 7x + 5 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "simultaneous", "two curves"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 - 3x + 2 = 2x^2 - 7x + 5\\\\[0.5em] 0 = x^2 - 4x + 3\\\\[0.5em] 0 = (x-1)(x-3)",
          explanation:
            "Rearrange so all terms are on one side, then factorise.",
        },
        {
          stepNumber: 2,
          description: "Find the coordinates.",
          workingLatex:
            "x = 1: \\; y = 1 - 3 + 2 = 0\\\\[0.5em] x = 3: \\; y = 9 - 9 + 2 = 2",
          explanation:
            "Substitute into either equation (the first is simpler) to find \\( y \\).",
        },
      ],
      finalAnswer:
        "The curves intersect at \\( (1, 0) \\) and \\( (3, 2) \\).",
    },
  },
  {
    id: "C2-007",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 07",
    difficulty: "Challenge",
    questionText:
      "The line \\( y = mx + 4 \\) is a tangent to the curve \\( y = x^2 + x + 1 \\). Find the possible values of \\( m \\) and the corresponding point of tangency in each case.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "tangent", "discriminant", "parameter"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Set the equations equal.",
          workingLatex:
            "x^2 + x + 1 = mx + 4\\\\[0.5em] x^2 + (1-m)x - 3 = 0",
          explanation:
            "Rearrange into standard form.",
        },
        {
          stepNumber: 2,
          description: "Set discriminant equal to zero for tangency.",
          workingLatex:
            "(1-m)^2 - 4(1)(-3) = 0\\\\[0.5em] 1 - 2m + m^2 + 12 = 0\\\\[0.5em] m^2 - 2m + 13 = 0",
          explanation:
            "For a tangent, the discriminant must be zero.",
        },
        {
          stepNumber: 3,
          description: "Check the discriminant of this equation in \\( m \\).",
          workingLatex:
            "\\Delta_m = 4 - 52 = -48 < 0",
          explanation:
            "This quadratic in \\( m \\) has no real solutions, which means no real tangent line of the form \\( y = mx + 4 \\) exists.",
        },
      ],
      finalAnswer:
        "There are no real values of \\( m \\) for which \\( y = mx + 4 \\) is tangent to \\( y = x^2 + x + 1 \\). The minimum value of the curve is \\( y = \\frac{3}{4} \\), and the line always passes through \\( (0, 4) \\) which is above the curve.",
    },
  },
  {
    id: "C2-008",
    topicRef: "C2",
    topicTitle: "Intersection Points of Curves 08",
    difficulty: "Challenge",
    questionText:
      "The line \\( y = 3x + c \\) is tangent to the curve \\( y = x^2 + 5x + 2 \\).\\newline (a) Find the value of \\( c \\).\\newline (b) Find the coordinates of the point of tangency.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["intersection", "tangent", "discriminant", "completing the square"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "(a) Set the equations equal.",
          workingLatex:
            "x^2 + 5x + 2 = 3x + c\\\\[0.5em] x^2 + 2x + 2 - c = 0",
          explanation:
            "Rearrange into standard quadratic form.",
        },
        {
          stepNumber: 2,
          description: "Set discriminant to zero.",
          workingLatex:
            "b^2 - 4ac = 4 - 4(2 - c) = 0\\\\[0.5em] 4 - 8 + 4c = 0\\\\[0.5em] 4c = 4\\\\[0.5em] c = 1",
          explanation:
            "For tangency, the discriminant is zero.",
        },
        {
          stepNumber: 3,
          description: "(b) Find the point of tangency.",
          workingLatex:
            "x^2 + 2x + 1 = 0\\\\[0.5em] (x+1)^2 = 0\\\\[0.5em] x = -1\\\\[0.5em] y = 3(-1) + 1 = -2",
          explanation:
            "With \\( c = 1 \\), the quadratic has a repeated root at \\( x = -1 \\). Find \\( y \\) from the line equation.",
        },
      ],
      finalAnswer:
        "(a) \\( c = 1 \\) \\quad (b) The point of tangency is \\( (-1, -2) \\).",
    },
  },
];
