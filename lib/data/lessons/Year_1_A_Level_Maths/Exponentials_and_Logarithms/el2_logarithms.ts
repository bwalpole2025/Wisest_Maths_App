import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Logarithms
 * Ref:   el2
 */
export const lesson: Lesson = {
  topicRef: "el2",
  title: "Logarithms",
  intro:
    "A logarithm answers one question: \"what power do I raise the base to?\" Once you see a log as the inverse of an exponential, converting between the two forms becomes routine.",
  cards: [
    {
      id: "el2-c1",
      title: "Logs reverse powers",
      concept:
        "The statements \\( a^c = b \\) and \\( \\log_a b = c \\) say exactly the same thing: the logarithm \\( \\log_a b \\) is the power you raise the base \\( a \\) to in order to get \\( b \\). For example, \\( 3^4 = 81 \\) becomes \\( \\log_3 81 = 4 \\).",
      miniQuestion: {
        prompt: "Write \\( 5^3 = 125 \\) in logarithm form.",
        expectedAnswer: "\\( \\log_5 125 = 3 \\)",
        options: [
          "\\( \\log_5 125 = 3 \\)",
          "\\( \\log_3 125 = 5 \\)",
          "\\( \\log_5 3 = 125 \\)",
          "\\( \\log_{125} 5 = 3 \\)",
        ],
        correctIndex: 0,
        answerType: "expression",
        insight:
          "The base stays the base, the result \\( 125 \\) goes inside the log, and the power \\( 3 \\) is the answer: \\( \\log_5 125 = 3 \\).",
        hints: [
          "Use \\( a^c = b \\Leftrightarrow \\log_a b = c \\). Here \\( a = 5 \\).",
          "The exponent \\( 3 \\) is what the logarithm evaluates to.",
        ],
      },
    },
    {
      id: "el2-c2",
      title: "Evaluating a logarithm",
      concept:
        "To find \\( \\log_a b \\), ask what power of \\( a \\) gives \\( b \\). So \\( \\log_2 32 = 5 \\) because \\( 2^5 = 32 \\). Reciprocals give negative answers — \\( \\log_3 \\tfrac{1}{9} = -2 \\) because \\( 3^{-2} = \\tfrac{1}{9} \\).",
      miniQuestion: {
        prompt: "Find \\( \\log_2 \\dfrac{1}{8} \\).",
        expectedAnswer: "-3",
        options: ["3", "-3", "\\( -\\tfrac{1}{3} \\)", "4"],
        correctIndex: 1,
        answerType: "numeric",
        insight:
          "\\( \\tfrac{1}{8} = 2^{-3} \\), so the power is \\( -3 \\). A value below 1 always gives a negative logarithm.",
        hints: [
          "Write \\( \\tfrac{1}{8} \\) as a power of 2.",
          "\\( \\tfrac{1}{8} = 2^{-3} \\), so \\( \\log_2 \\tfrac{1}{8} = -3 \\).",
        ],
      },
    },
    {
      id: "el2-c3",
      title: "Two bases worth naming",
      concept:
        "Two logarithms appear so often they get shorthand. \\( \\log \\) with no base written means \\( \\log_{10} \\) (base ten), and \\( \\ln \\) means \\( \\log_e \\), the natural logarithm with base \\( e \\). So \\( \\ln p = 7 \\) is just \\( \\log_e p = 7 \\), i.e. \\( e^7 = p \\).",
      miniQuestion: {
        prompt: "Write \\( \\ln p = 7 \\) in index form.",
        expectedAnswer: "\\( e^7 = p \\)",
        options: [
          "\\( 10^7 = p \\)",
          "\\( p^7 = e \\)",
          "\\( e^7 = p \\)",
          "\\( 7^e = p \\)",
        ],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "\\( \\ln \\) is \\( \\log_e \\), so the base is \\( e \\): \\( \\ln p = 7 \\) means \\( e^7 = p \\).",
        hints: [
          "What base does \\( \\ln \\) use?",
          "With base \\( e \\): \\( \\log_e p = 7 \\Leftrightarrow e^7 = p \\).",
        ],
      },
    },
    {
      id: "el2-c4",
      title: "\\( e \\) and \\( \\ln \\) undo each other",
      concept:
        "Because \\( \\ln \\) and \\( e^x \\) are inverse functions, they cancel: \\( \\ln(e^x) = x \\) and \\( e^{\\ln x} = x \\). This is how you solve \\( e^x = k \\): apply \\( \\ln \\) to both sides to get \\( x = \\ln k \\), since \\( \\ln(e^x) = x \\).",
      miniQuestion: {
        prompt: "Solve \\( e^x = 7 \\), giving an exact answer.",
        expectedAnswer: "\\( x = \\ln 7 \\)",
        options: [
          "\\( x = e^7 \\)",
          "\\( x = \\ln 7 \\)",
          "\\( x = \\log_7 e \\)",
          "\\( x = \\dfrac{7}{e} \\)",
        ],
        correctIndex: 1,
        answerType: "exactValue",
        insight:
          "Taking \\( \\ln \\) of both sides, \\( \\ln(e^x) = x \\), so \\( x = \\ln 7 \\). The exact answer keeps the log rather than rounding.",
        hints: [
          "Apply \\( \\ln \\) to both sides. What does \\( \\ln(e^x) \\) simplify to?",
          "\\( \\ln(e^x) = x \\), so \\( x = \\ln 7 \\).",
        ],
      },
    },
    {
      id: "el2-c5",
      title: "Solving \\( \\ln x = k \\)",
      concept:
        "To undo a natural log, raise \\( e \\) to both sides: \\( \\ln x = k \\) gives \\( x = e^k \\), because \\( e^{\\ln x} = x \\). If the equation has a coefficient or an inner expression, deal with that first — e.g. \\( 4\\ln x = 20 \\) becomes \\( \\ln x = 5 \\), so \\( x = e^5 \\).",
      miniQuestion: {
        prompt: "Solve \\( \\ln x = 4 \\), giving an exact answer.",
        expectedAnswer: "\\( x = e^4 \\)",
        options: [
          "\\( x = \\ln 4 \\)",
          "\\( x = 4e \\)",
          "\\( x = e^4 \\)",
          "\\( x = 10^4 \\)",
        ],
        correctIndex: 2,
        answerType: "exactValue",
        insight:
          "Raising \\( e \\) to both sides, \\( e^{\\ln x} = x \\), so \\( x = e^4 \\). The exponential is the inverse that frees \\( x \\).",
        hints: [
          "What operation undoes \\( \\ln \\)?",
          "Raise \\( e \\) to both sides: \\( x = e^4 \\).",
        ],
      },
    },
  ],
};
