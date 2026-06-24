import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Trigonometric Equations
 * Ref:   t4
 */
export const lesson: Lesson = {
  topicRef: "t4",
  title: "Trigonometric Equations",
  intro:
    "A calculator gives you one solution to \\(\\sin x = k\\) — but over a full turn there are usually more. This lesson teaches you to find every solution in the interval, not just the one the calculator hands you.",
  cards: [
    {
      id: "t4-c1",
      title: "The principal value",
      concept:
        "Pressing \\(\\sin^{-1}\\), \\(\\cos^{-1}\\) or \\(\\tan^{-1}\\) gives the principal value — a single angle. For \\(\\sin x = 0.5\\) the calculator returns \\(x = 30^\\circ\\). This is your anchor, but rarely the only answer in \\(0^\\circ \\leq x \\leq 360^\\circ\\).",
      miniQuestion: {
        prompt:
          "What is the principal value of \\(x\\) for \\(\\cos x = 0.5\\), in degrees?",
        expectedAnswer: "60",
        options: ["30", "45", "60", "120"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(\\cos^{-1}(0.5) = 60^\\circ\\). This is the reference angle from which all other solutions are built.",
        hints: [
          "Use \\(\\cos^{-1}(0.5)\\).",
          "It is a standard exact-value angle.",
        ],
      },
    },
    {
      id: "t4-c2",
      title: "The second sine solution",
      concept:
        "For \\(\\sin x = k\\) with a positive \\(k\\), there is a second solution in the same revolution at \\(180^\\circ - x_1\\), because the sine graph is symmetric about \\(x = 90^\\circ\\). Both lie in the interval \\(0^\\circ\\) to \\(360^\\circ\\).",
      miniQuestion: {
        prompt:
          "Given \\(\\sin x = 0.5\\) has the solution \\(x = 30^\\circ\\), find the other solution in \\(0^\\circ \\leq x \\leq 360^\\circ\\).",
        expectedAnswer: "150",
        options: ["150", "210", "330", "120"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\(180^\\circ - 30^\\circ = 150^\\circ\\), and \\(\\sin 150^\\circ = 0.5\\) too. Sine takes each value twice per cycle — symmetric about the peak at \\(90^\\circ\\).",
        hints: [
          "The second sine solution is \\(180^\\circ - x_1\\).",
          "Compute \\(180^\\circ - 30^\\circ\\).",
        ],
      },
    },
    {
      id: "t4-c3",
      title: "The second cosine solution",
      concept:
        "For \\(\\cos x = k\\), the second solution in \\(0^\\circ\\) to \\(360^\\circ\\) is \\(360^\\circ - x_1\\), because the cosine graph is symmetric about \\(x = 180^\\circ\\). For \\(\\tan x = k\\), instead add \\(180^\\circ\\) to the principal value.",
      miniQuestion: {
        prompt:
          "Given \\(\\cos x = 0.45\\) has the solution \\(x = 63.3^\\circ\\), find the other solution in \\(0^\\circ \\leq x \\leq 360^\\circ\\) to 1 d.p.",
        expectedAnswer: "296.7",
        options: ["243.3", "116.7", "296.7", "126.7"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "\\(360^\\circ - 63.3^\\circ = 296.7^\\circ\\). Cosine is symmetric about \\(180^\\circ\\), so its pair of solutions sums to \\(360^\\circ\\).",
        hints: [
          "The second cosine solution is \\(360^\\circ - x_1\\).",
          "Compute \\(360^\\circ - 63.3^\\circ\\).",
        ],
      },
    },
    {
      id: "t4-c4",
      title: "Negative values and rearranging first",
      concept:
        "If the equation is dressed up, like \\(3\\sin x - 1 = 0\\), rearrange to \\(\\sin x = \\tfrac{1}{3}\\) before touching the calculator. When \\(k\\) is negative the principal value is negative; add \\(360^\\circ\\) to bring it into range, then apply the usual symmetry rule.",
      miniQuestion: {
        prompt:
          "Rearrange \\(3\\sin x - 1 = 0\\) to the form \\(\\sin x = k\\). What is \\(k\\) as a fraction?",
        expectedAnswer: "\\(\\tfrac{1}{3}\\)",
        options: [
          "\\(3\\)",
          "\\(\\tfrac{1}{3}\\)",
          "\\(-\\tfrac{1}{3}\\)",
          "\\(\\tfrac{1}{2}\\)",
        ],
        correctIndex: 1,
        answerType: "exactValue",
        insight:
          "Add \\(1\\), then divide by \\(3\\): \\(\\sin x = \\tfrac{1}{3}\\). Always isolate the trig function before finding solutions.",
        hints: [
          "Add \\(1\\) to both sides.",
          "Then divide both sides by \\(3\\).",
        ],
      },
    },
    {
      id: "t4-c5",
      title: "Equations with a multiple angle",
      concept:
        "For \\(\\sin 2x = k\\), substitute \\(u = 2x\\) and widen the interval: if \\(0^\\circ \\leq x \\leq 360^\\circ\\) then \\(0^\\circ \\leq u \\leq 720^\\circ\\). Solve for all \\(u\\) in that doubled range, then divide each by \\(2\\) — so you get more solutions than usual.",
      miniQuestion: {
        prompt:
          "To solve \\(\\sin 2x = 0.5\\) for \\(0^\\circ \\leq x \\leq 360^\\circ\\), what is the upper limit of the interval you must solve over for \\(u = 2x\\), in degrees?",
        expectedAnswer: "720",
        options: ["360", "720", "180", "1080"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "Since \\(u = 2x\\), the interval doubles to \\(0^\\circ \\leq u \\leq 720^\\circ\\). Forgetting to widen the range is the classic way to lose half the solutions.",
        hints: [
          "If \\(x\\) goes up to \\(360^\\circ\\), what does \\(2x\\) reach?",
          "Multiply the upper limit by \\(2\\).",
        ],
      },
    },
  ],
};
