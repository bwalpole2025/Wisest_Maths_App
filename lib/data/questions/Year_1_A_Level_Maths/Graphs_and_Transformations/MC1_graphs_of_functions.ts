import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: "MC1-001",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 01",
    difficulty: "Foundation",
    questionText:
      "Sketch the curve \\( y = (x-1)(x+2)(x-3) \\), showing clearly the coordinates of the points where the curve crosses the coordinate axes.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic", "sketch", "roots", "y-intercept"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the x-intercepts by setting \\( y = 0 \\).",
          workingLatex:
            "(x-1)(x+2)(x-3) = 0\\\\[0.5em] x = 1, \\quad x = -2, \\quad x = 3",
          explanation:
            "The curve crosses the x-axis where each factor equals zero.",
        },
        {
          stepNumber: 2,
          description: "Find the y-intercept by setting \\( x = 0 \\).",
          workingLatex:
            "y = (0-1)(0+2)(0-3) = (-1)(2)(-3) = 6",
          explanation:
            "Substitute \\( x = 0 \\) into the equation.",
        },
        {
          stepNumber: 3,
          description: "Determine the shape.",
          workingLatex:
            "\\text{Positive } x^3 \\text{ coefficient: as } x \\to \\infty,\\; y \\to \\infty \\text{ and as } x \\to -\\infty,\\; y \\to -\\infty.",
          explanation:
            "The leading term is \\( x^3 \\) (positive), so the curve goes from bottom-left to top-right. It crosses the x-axis at three distinct points.",
        },
      ],
      finalAnswer:
        "The curve crosses the x-axis at \\( (-2, 0) \\), \\( (1, 0) \\) and \\( (3, 0) \\), and the y-axis at \\( (0, 6) \\).",
      commonMistakes: [
        "Forgetting to find the y-intercept.",
        "Drawing the wrong end behaviour for a positive cubic.",
      ],
    },
  },
  {
    id: "MC1-002",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 02",
    difficulty: "Foundation",
    questionText:
      "Sketch the curve \\( y = x(x+1)(x-2) \\), showing the points of intersection with the axes.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["cubic", "sketch", "roots", "origin"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the x-intercepts.",
          workingLatex:
            "x(x+1)(x-2) = 0\\\\[0.5em] x = 0, \\quad x = -1, \\quad x = 2",
          explanation:
            "The curve passes through the origin and crosses the x-axis at \\( x = -1 \\) and \\( x = 2 \\).",
        },
        {
          stepNumber: 2,
          description: "The y-intercept is at the origin since \\( x = 0 \\) is a root.",
          workingLatex:
            "\\text{y-intercept: } (0, 0)",
          explanation:
            "When \\( x = 0 \\), \\( y = 0 \\), so the curve passes through the origin.",
        },
        {
          stepNumber: 3,
          description: "Determine the shape.",
          workingLatex:
            "\\text{Leading term is } x^3 \\text{ (positive coefficient).}\\\\[0.5em] x \\to \\infty \\Rightarrow y \\to \\infty, \\quad x \\to -\\infty \\Rightarrow y \\to -\\infty",
          explanation:
            "A positive cubic with three distinct real roots.",
        },
      ],
      finalAnswer:
        "The curve crosses the x-axis at \\( (-1, 0) \\), \\( (0, 0) \\) and \\( (2, 0) \\).",
    },
  },
  {
    id: "MC1-003",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 03",
    difficulty: "Foundation",
    questionText:
      "Sketch the graph of \\( y = \\dfrac{3}{x} \\), stating the equations of any asymptotes.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["reciprocal", "sketch", "asymptote", "hyperbola"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the asymptotes.",
          workingLatex:
            "\\text{Vertical asymptote: } x = 0 \\text{ (the y-axis)}\\\\[0.5em] \\text{Horizontal asymptote: } y = 0 \\text{ (the x-axis)}",
          explanation:
            "The function is undefined at \\( x = 0 \\), and as \\( x \\to \\pm\\infty \\), \\( y \\to 0 \\).",
        },
        {
          stepNumber: 2,
          description: "Determine the shape in each quadrant.",
          workingLatex:
            "\\text{When } x > 0: y > 0 \\text{ (curve in first quadrant)}\\\\[0.5em] \\text{When } x < 0: y < 0 \\text{ (curve in third quadrant)}",
          explanation:
            "Since \\( k = 3 > 0 \\), the curve lies in the first and third quadrants. It is a rectangular hyperbola.",
        },
      ],
      finalAnswer:
        "Asymptotes: \\( x = 0 \\) and \\( y = 0 \\). The curve is in quadrants 1 and 3.",
    },
  },
  {
    id: "MC1-004",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 04",
    difficulty: "Standard",
    questionText:
      "Sketch the curve \\( y = -(x+1)(x-2)(x-4) \\), showing the coordinates of all axis intercepts.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic", "negative", "sketch", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the x-intercepts.",
          workingLatex:
            "-(x+1)(x-2)(x-4) = 0\\\\[0.5em] x = -1, \\quad x = 2, \\quad x = 4",
          explanation:
            "Set \\( y = 0 \\) and solve each factor.",
        },
        {
          stepNumber: 2,
          description: "Find the y-intercept.",
          workingLatex:
            "y = -(0+1)(0-2)(0-4) = -(1)(-2)(-4) = -8",
          explanation:
            "Substitute \\( x = 0 \\). Note the negative sign in front.",
        },
        {
          stepNumber: 3,
          description: "Determine the shape.",
          workingLatex:
            "\\text{Leading term: } -x^3 \\text{ (negative coefficient).}\\\\[0.5em] x \\to \\infty \\Rightarrow y \\to -\\infty, \\quad x \\to -\\infty \\Rightarrow y \\to \\infty",
          explanation:
            "A negative cubic goes from top-left to bottom-right, the opposite of a positive cubic.",
        },
      ],
      finalAnswer:
        "x-intercepts: \\( (-1, 0) \\), \\( (2, 0) \\), \\( (4, 0) \\). y-intercept: \\( (0, -8) \\).",
      commonMistakes: [
        "Forgetting the negative sign when computing the y-intercept.",
        "Drawing the wrong end behaviour for a negative cubic.",
      ],
    },
  },
  {
    id: "MC1-005",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 05",
    difficulty: "Standard",
    questionText:
      "Sketch the curve \\( y = (x-1)^2(x+3) \\), showing the coordinates of all axis intercepts. State the nature of the root at \\( x = 1 \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic", "repeated root", "sketch", "touching"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Find the x-intercepts.",
          workingLatex:
            "(x-1)^2(x+3) = 0\\\\[0.5em] x = 1 \\text{ (repeated root)}, \\quad x = -3",
          explanation:
            "The factor \\( (x-1)^2 \\) gives a repeated root at \\( x = 1 \\).",
        },
        {
          stepNumber: 2,
          description: "Find the y-intercept.",
          workingLatex:
            "y = (0-1)^2(0+3) = 1 \\times 3 = 3",
          explanation:
            "Substitute \\( x = 0 \\).",
        },
        {
          stepNumber: 3,
          description: "Describe the behaviour at the repeated root.",
          workingLatex:
            "\\text{At } x = 1 \\text{: the curve touches the x-axis (does not cross).}\\\\[0.5em] \\text{At } x = -3 \\text{: the curve crosses the x-axis.}\\\\[0.5em] \\text{Leading term: } x^3 \\text{ (positive).}",
          explanation:
            "A repeated root means the curve touches the x-axis at that point. The curve crosses at simple roots.",
        },
      ],
      finalAnswer:
        "x-intercepts: \\( (-3, 0) \\) (crosses) and \\( (1, 0) \\) (touches). y-intercept: \\( (0, 3) \\). The root at \\( x = 1 \\) is a repeated root where the curve touches the x-axis.",
    },
  },
  {
    id: "MC1-006",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 06",
    difficulty: "Standard",
    questionText:
      "Sketch the graph of \\( y = \\dfrac{-4}{x^2} \\), stating the equations of any asymptotes and describing the symmetry of the curve.",
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: ["reciprocal", "sketch", "asymptote", "symmetry"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Identify the asymptotes.",
          workingLatex:
            "\\text{Vertical asymptote: } x = 0\\\\[0.5em] \\text{Horizontal asymptote: } y = 0",
          explanation:
            "The function is undefined at \\( x = 0 \\), and \\( y \\to 0 \\) as \\( x \\to \\pm\\infty \\).",
        },
        {
          stepNumber: 2,
          description: "Determine the sign of \\( y \\).",
          workingLatex:
            "x^2 > 0 \\text{ for all } x \\neq 0\\\\[0.5em] \\Rightarrow \\frac{-4}{x^2} < 0 \\text{ for all } x \\neq 0",
          explanation:
            "Since \\( x^2 \\) is always positive, dividing \\(-4\\) by it always gives a negative result. The curve is entirely below the x-axis.",
        },
        {
          stepNumber: 3,
          description: "Describe the symmetry.",
          workingLatex:
            "f(-x) = \\frac{-4}{(-x)^2} = \\frac{-4}{x^2} = f(x)\\\\[0.5em] \\text{The function is even — symmetric about the y-axis.}",
          explanation:
            "Replacing \\( x \\) with \\( -x \\) gives the same function, so the graph is symmetric about the y-axis.",
        },
      ],
      finalAnswer:
        "Asymptotes: \\( x = 0 \\) and \\( y = 0 \\). The curve lies entirely below the x-axis (quadrants 3 and 4) and is symmetric about the y-axis.",
    },
  },
  {
    id: "MC1-007",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 07",
    difficulty: "Challenge",
    questionText:
      "Sketch the curve \\( y = x^4 - 5x^2 + 4 \\), showing all axis intercepts.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["quartic", "sketch", "factorising", "roots"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Factorise by treating as a quadratic in \\( x^2 \\).",
          workingLatex:
            "\\text{Let } u = x^2:\\\\[0.5em] u^2 - 5u + 4 = (u - 1)(u - 4)\\\\[0.5em] \\Rightarrow (x^2 - 1)(x^2 - 4) = (x-1)(x+1)(x-2)(x+2)",
          explanation:
            "This is a \"quadratic in disguise\" — substitute \\( u = x^2 \\) to factorise, then factorise each factor further as a difference of two squares.",
        },
        {
          stepNumber: 2,
          description: "Find the x-intercepts.",
          workingLatex:
            "x = -2, \\; -1, \\; 1, \\; 2",
          explanation:
            "Set each factor to zero.",
        },
        {
          stepNumber: 3,
          description: "Find the y-intercept.",
          workingLatex:
            "y = 0 - 0 + 4 = 4",
          explanation:
            "Substitute \\( x = 0 \\).",
        },
        {
          stepNumber: 4,
          description: "Determine the shape.",
          workingLatex:
            "\\text{Leading term: } x^4 \\text{ (positive, even degree).}\\\\[0.5em] x \\to \\pm\\infty \\Rightarrow y \\to \\infty\\\\[0.5em] \\text{The curve is a W-shape with four roots.}",
          explanation:
            "A positive quartic with four distinct roots has a W-shape, dipping below the x-axis between pairs of roots.",
        },
      ],
      finalAnswer:
        "x-intercepts: \\( (\\pm 1, 0) \\) and \\( (\\pm 2, 0) \\). y-intercept: \\( (0, 4) \\). The curve has a W-shape.",
    },
  },
  {
    id: "MC1-008",
    topicRef: "MC1",
    topicTitle: "Graphs of Functions 08",
    difficulty: "Challenge",
    questionText:
      "The curve \\( C \\) has equation \\( y = (2-x)(x+1)^2 \\).\\newline (a) Sketch \\( C \\), showing all axis intercepts.\\newline (b) Find the exact coordinates of the local maximum of \\( C \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["cubic", "repeated root", "sketch", "turning point", "differentiation"],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "(a) Find the axis intercepts.",
          workingLatex:
            "\\text{x-intercepts: } (2-x)(x+1)^2 = 0 \\Rightarrow x = 2 \\text{ (crosses)}, \\; x = -1 \\text{ (touches)}\\\\[0.5em] \\text{y-intercept: } y = (2)(1)^2 = 2\\\\[0.5em] \\text{Leading term: } -x^3 \\text{ (negative cubic).}",
          explanation:
            "The repeated root at \\( x = -1 \\) means the curve touches the x-axis. The negative leading coefficient means the curve goes from top-left to bottom-right.",
        },
        {
          stepNumber: 2,
          description: "(b) Expand and differentiate.",
          workingLatex:
            "\\begin{aligned} y &= (2-x)(x^2+2x+1) \\\\ &= 2x^2 + 4x + 2 - x^3 - 2x^2 - x \\\\ &= -x^3 + 3x + 2 \\end{aligned}\\\\[0.5em] \\frac{dy}{dx} = -3x^2 + 3 = -3(x^2 - 1) = -3(x-1)(x+1)",
          explanation:
            "Expand the brackets, then differentiate term by term.",
        },
        {
          stepNumber: 3,
          description: "Find the stationary points.",
          workingLatex:
            "\\frac{dy}{dx} = 0 \\Rightarrow x = 1 \\text{ or } x = -1\\\\[0.5em] x = 1: \\; y = -1 + 3 + 2 = 4 \\quad \\Rightarrow (1, 4)\\\\[0.5em] x = -1: \\; y = 1 - 3 + 2 = 0 \\quad \\Rightarrow (-1, 0)",
          explanation:
            "The point \\( (1, 4) \\) is the local maximum (since the curve is a negative cubic). The point \\( (-1, 0) \\) is a local minimum.",
        },
      ],
      finalAnswer:
        "The local maximum is at \\( (1, 4) \\).",
    },
  },
];
