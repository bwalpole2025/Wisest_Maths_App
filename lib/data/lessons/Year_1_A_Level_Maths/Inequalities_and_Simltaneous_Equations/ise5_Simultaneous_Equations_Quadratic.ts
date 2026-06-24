import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Simultaneous Equations (Quadratic)
 * Ref:   ise5
 */
export const lesson: Lesson = {
  topicRef: "ise5",
  title: "Simultaneous Equations (Quadratic)",
  intro:
    "When one equation is linear and the other quadratic, substitution turns the pair into a single quadratic — and a line can meet a curve in two points, one, or none. This lesson works through that method.",
  cards: [
    {
      id: "ise5-c1",
      title: "Substitute the linear into the quadratic",
      concept:
        "With \\( y = x + 1 \\) and \\( y = x^2 - 1 \\), set the two expressions for \\( y \\) equal: \\( x + 1 = x^2 - 1 \\). Rearranging gives a single quadratic in \\( x \\): \\( x^2 - x - 2 = 0 \\). The linear equation is the key that collapses two unknowns into one.",
      miniQuestion: {
        prompt:
          "Substituting \\( y = x + 1 \\) into \\( y = x^2 - 1 \\) and rearranging gives which quadratic equation (set equal to zero)?",
        expectedAnswer: "\\( x^2 - x - 2 = 0 \\)",
        options: ["\\( x^2 + x - 2 = 0 \\)", "\\( x^2 - x - 2 = 0 \\)", "\\( x^2 - x = 0 \\)", "\\( x^2 - 2 = 0 \\)"],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "Equating the two expressions for \\( y \\) and moving everything to one side gives \\( x^2 - x - 2 = 0 \\) — a single quadratic to solve.",
        hints: [
          "Both equal \\( y \\), so set \\( x + 1 = x^2 - 1 \\).",
          "Move all terms to one side: \\( 0 = x^2 - x - 2 \\).",
        ],
      },
    },
    {
      id: "ise5-c2",
      title: "Solve the quadratic for x",
      concept:
        "Now solve \\( x^2 - x - 2 = 0 \\). It factorises as \\( (x-2)(x+1) = 0 \\), giving \\( x = 2 \\) and \\( x = -1 \\). A line crossing a parabola usually does so at two points, so expect two \\( x \\)-values.",
      miniQuestion: {
        prompt: "Solve \\( x^2 - x - 2 = 0 \\).",
        expectedAnswer: "\\( x = 2 \\) and \\( x = -1 \\)",
        options: ["\\( x = -2 \\) and \\( x = 1 \\)", "\\( x = 2 \\) and \\( x = 1 \\)", "\\( x = 2 \\) and \\( x = -1 \\)", "\\( x = -2 \\) and \\( x = -1 \\)"],
        correctIndex: 2,
        answerType: "equationRoots",
        insight:
          "Factorising gives \\( (x-2)(x+1) = 0 \\), so \\( x = 2 \\) or \\( x = -1 \\). Two roots means the line meets the curve at two distinct points.",
        hints: [
          "Look for two numbers that multiply to \\( -2 \\) and add to \\( -1 \\).",
          "\\( (x-2)(x+1) = 0 \\) — set each factor to zero.",
        ],
      },
    },
    {
      id: "ise5-c3",
      title: "Find each matching y — and pair them up",
      concept:
        "Each \\( x \\) needs its own \\( y \\), found from the linear equation \\( y = x + 1 \\). For \\( x = 2 \\): \\( y = 3 \\). For \\( x = -1 \\): \\( y = 0 \\). The crucial discipline is pairing correctly: \\( (2, 3) \\) and \\( (-1, 0) \\) — never mix an \\( x \\) from one solution with a \\( y \\) from the other.",
      miniQuestion: {
        prompt:
          "Given \\( x = 2 \\) and \\( x = -1 \\) with \\( y = x + 1 \\), write the two solution points.",
        expectedAnswer: "\\( (2, 3) \\) and \\( (-1, 0) \\)",
        options: ["\\( (2, 0) \\) and \\( (-1, 3) \\)", "\\( (3, 2) \\) and \\( (0, -1) \\)", "\\( (2, 3) \\) and \\( (-1, 0) \\)", "\\( (2, 3) \\) and \\( (-1, -2) \\)"],
        correctIndex: 2,
        answerType: "set",
        insight:
          "Substituting each \\( x \\) into \\( y = x + 1 \\) gives \\( (2, 3) \\) and \\( (-1, 0) \\). Always feed \\( x \\) back into the linear equation and keep each pair together.",
        hints: [
          "Use the simpler linear equation \\( y = x + 1 \\) for each \\( x \\).",
          "Keep each \\( x \\) with its own \\( y \\): one point per root.",
        ],
      },
    },
    {
      id: "ise5-c4",
      title: "Tangents and irrational solutions",
      concept:
        "If the quadratic has a repeated root, the line is tangent to the curve — just one point of contact. And not every quadratic factorises: use the formula when needed. \\( y = x - 3 \\) with \\( y = x^2 - 5x + 3 \\) gives \\( x^2 - 6x + 6 = 0 \\), so \\( x = 3 \\pm \\sqrt{3} \\) — surd answers are perfectly valid and often expected.",
      miniQuestion: {
        prompt: "Solve \\( x^2 - 6x + 6 = 0 \\), giving exact (surd) values of \\( x \\).",
        expectedAnswer: "\\( x = 3 + \\sqrt{3} \\) and \\( x = 3 - \\sqrt{3} \\)",
        options: ["\\( x = -3 + \\sqrt{3} \\) and \\( x = -3 - \\sqrt{3} \\)", "\\( x = 3 + \\sqrt{3} \\) and \\( x = 3 - \\sqrt{3} \\)", "\\( x = 3 + 2\\sqrt{3} \\) and \\( x = 3 - 2\\sqrt{3} \\)", "\\( x = 6 + \\sqrt{3} \\) and \\( x = 6 - \\sqrt{3} \\)"],
        correctIndex: 1,
        answerType: "equationRoots",
        insight:
          "The quadratic formula gives \\( x = \\dfrac{6 \\pm \\sqrt{36 - 24}}{2} = 3 \\pm \\sqrt{3} \\). When factorising fails, the formula still delivers — leave the answer in surd form.",
        hints: [
          "It won't factorise nicely — use the quadratic formula.",
          "Compute the discriminant \\( 36 - 24 = 12 \\), and \\( \\sqrt{12} = 2\\sqrt{3} \\).",
        ],
      },
    },
    {
      id: "ise5-c5",
      title: "When the curve is a circle",
      concept:
        "The same method works when the second equation is a circle like \\( x^2 + y^2 = 25 \\). Substitute the line \\( y = x + 1 \\): \\( x^2 + (x+1)^2 = 25 \\) expands to \\( 2x^2 + 2x - 24 = 0 \\), i.e. \\( x^2 + x - 12 = 0 \\), giving \\( x = 3 \\) and \\( x = -4 \\). Then \\( y = x + 1 \\) gives the points \\( (3, 4) \\) and \\( (-4, -3) \\).",
      miniQuestion: {
        prompt: "Solve \\( y = x + 1 \\) and \\( x^2 + y^2 = 25 \\). Give both \\( (x, y) \\) points.",
        expectedAnswer: "\\( (3, 4) \\) and \\( (-4, -3) \\)",
        options: ["\\( (3, 4) \\) and \\( (-4, -3) \\)", "\\( (4, 3) \\) and \\( (-3, -4) \\)", "\\( (3, -4) \\) and \\( (-4, 3) \\)", "\\( (3, 4) \\) and \\( (4, -3) \\)"],
        correctIndex: 0,
        answerType: "set",
        insight:
          "Substituting gives \\( x^2 + x - 12 = 0 \\Rightarrow x = 3, -4 \\); then \\( y = x + 1 \\) yields \\( (3, 4) \\) and \\( (-4, -3) \\). A line meets a circle in at most two points — same substitution idea throughout.",
        hints: [
          "Replace \\( y \\) with \\( x + 1 \\) in the circle equation and expand.",
          "You get \\( x^2 + x - 12 = 0 \\); factorise, then find each \\( y \\) from the line.",
        ],
      },
    },
  ],
};
