import type { Lesson } from "@/lib/data/lessons/types";

/**
 * Topic: Binomial Expansions
 * Ref:   BE
 */
export const lesson: Lesson = {
  topicRef: "BE",
  title: "Binomial Expansions",
  intro:
    "Raising \\((a+b)\\) to a high power by multiplying out is slow and error-prone. In this lesson you'll learn the pattern of coefficients that lets you write down any expansion of \\((a+b)^n\\) directly.",
  cards: [
    {
      id: "BE-c1",
      title: "The pattern in the coefficients",
      concept:
        "When you expand \\((a+b)^n\\), the numbers in front of each term follow a fixed pattern. Pascal's triangle lists them: each row starts and ends with \\(1\\), and every other entry is the sum of the two numbers diagonally above it. Row \\(n=2\\) is \\(1,\\ 2,\\ 1\\) and row \\(n=3\\) is \\(1,\\ 3,\\ 3,\\ 1\\). Continuing the rule, row \\(n=4\\) begins \\(1,\\ 4,\\ \\ldots\\)",
      miniQuestion: {
        prompt:
          "Using Pascal's triangle, write out the full row for \\(n=4\\) (the coefficients of \\((a+b)^4\\)).",
        expectedAnswer: "1, 4, 6, 4, 1",
        options: ["1, 3, 3, 1", "1, 4, 4, 1", "1, 4, 6, 4, 1", "1, 5, 10, 10, 5, 1"],
        correctIndex: 2,
        answerType: "expression",
        insight:
          "Adding adjacent pairs of row 3 \\((1,3,3,1)\\) gives \\(1,\\ 1+3,\\ 3+3,\\ 3+1,\\ 1 = 1, 4, 6, 4, 1\\). The triangle builds each row from the one above, so you never need to multiply brackets out.",
        hints: [
          "Start from row \\(n=3\\): \\(1, 3, 3, 1\\).",
          "Each new entry is the sum of the two numbers diagonally above it, with \\(1\\) at each end.",
        ],
      },
    },
    {
      id: "BE-c2",
      title: "Counting coefficients with nCr",
      concept:
        "For large \\(n\\) writing out Pascal's triangle is slow, so we compute each coefficient directly with the binomial coefficient \\(\\binom{n}{r} = \\dfrac{n!}{r!\\,(n-r)!}\\). This counts the entries of row \\(n\\): \\(\\binom{n}{0}=1\\) at the start, then \\(\\binom{n}{1}, \\binom{n}{2}, \\ldots\\) For example \\(\\binom{5}{2} = \\dfrac{5\\times 4}{2\\times 1} = 10\\), which is the third entry of row \\(5\\).",
      miniQuestion: {
        prompt: "Evaluate \\( \\binom{7}{3} \\).",
        expectedAnswer: "35",
        options: ["35", "21", "210", "42"],
        correctIndex: 0,
        answerType: "numeric",
        insight:
          "\\(\\binom{7}{3} = \\dfrac{7\\times 6\\times 5}{3\\times 2\\times 1} = \\dfrac{210}{6} = 35\\). Cancelling the bottom \\(r!\\) means you only ever multiply \\(r\\) numbers on top, so no factorial gets large.",
        hints: [
          "Use \\(\\binom{n}{r} = \\dfrac{n!}{r!\\,(n-r)!}\\), then cancel the \\(4!\\) against the \\(7!\\).",
          "This leaves \\(\\dfrac{7\\times 6\\times 5}{3\\times 2\\times 1}\\).",
        ],
      },
    },
    {
      id: "BE-c3",
      title: "The binomial theorem",
      concept:
        "Putting the coefficients and the powers together gives the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). As \\(r\\) increases the power of \\(a\\) falls and the power of \\(b\\) rises, but the two always add to \\(n\\). For \\((1+x)^n\\) every \\(a=1\\), so it simplifies to \\(\\binom{n}{0} + \\binom{n}{1}x + \\binom{n}{2}x^2 + \\ldots\\)",
      miniQuestion: {
        prompt: "Expand \\( (1 + x)^5 \\) fully in ascending powers of \\(x\\).",
        expectedAnswer: "\\(1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5\\)",
        options: [
          "\\(1 + 4x + 6x^2 + 4x^3 + x^4\\)",
          "\\(1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5\\)",
          "\\(1 + 5x + 5x^2 + 5x^3 + 5x^4 + x^5\\)",
          "\\(5 + 10x + 10x^2 + 5x^3 + x^4\\)",
        ],
        correctIndex: 1,
        answerType: "expression",
        insight:
          "The coefficients are row \\(5\\) of Pascal's triangle: \\(1, 5, 10, 10, 5, 1\\). Because \\(a=1\\), only the powers of \\(x\\) change across the terms, so the row of coefficients is the whole answer.",
        hints: [
          "With \\(a=1\\), the term in \\(x^r\\) is just \\(\\binom{5}{r}x^r\\).",
          "Compute \\(\\binom{5}{0}, \\binom{5}{1}, \\ldots, \\binom{5}{5}\\) — these are \\(1, 5, 10, 10, 5, 1\\).",
        ],
      },
    },
    {
      id: "BE-c4",
      title: "Picking out one term",
      concept:
        "You rarely need a whole expansion — often just one coefficient. The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\), so to find the coefficient of a particular power you choose the \\(r\\) that produces it and evaluate that one term. In \\((2+x)^6\\) the term in \\(x^2\\) comes from \\(r=2\\): \\(\\binom{6}{2}(2)^{4}x^2\\), so its coefficient is \\(15\\times 16 = 240\\).",
      miniQuestion: {
        prompt: "Find the coefficient of \\(x^3\\) in the expansion of \\( (1 + x)^8 \\).",
        expectedAnswer: "56",
        options: ["28", "70", "56", "336"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The term in \\(x^3\\) is \\(\\binom{8}{3}x^3 = 56x^3\\), so the coefficient is \\(56\\). Targeting a single \\(r\\) lets you answer without expanding the other eight terms.",
        hints: [
          "The general term of \\((1+x)^8\\) is \\(\\binom{8}{r}x^r\\). Which \\(r\\) gives \\(x^3\\)?",
          "Set \\(r=3\\) and evaluate \\(\\binom{8}{3}\\).",
        ],
      },
    },
    {
      id: "BE-c5",
      title: "Keeping signs and coefficients attached",
      concept:
        "When the second term is negative or carries a coefficient, treat the whole thing as \\(b\\) and raise it to the power \\(r\\). In \\((1-2x)^n\\) we have \\(b=-2x\\), so the term for index \\(r\\) is \\(\\binom{n}{r}(-2x)^r = \\binom{n}{r}(-2)^r x^r\\). The factor \\((-2)^r\\) both scales the coefficient by \\(2^r\\) and alternates its sign — odd \\(r\\) gives a minus, even \\(r\\) gives a plus.",
      miniQuestion: {
        prompt: "Find the coefficient of \\(x^3\\) in the expansion of \\( (1 - 2x)^9 \\).",
        expectedAnswer: "-672",
        options: ["672", "-168", "-672", "-1344"],
        correctIndex: 2,
        answerType: "numeric",
        insight:
          "The term is \\(\\binom{9}{3}(-2)^3 x^3 = 84\\times(-8)\\,x^3 = -672x^3\\). The cube of \\(-2\\) supplies both the factor \\(8\\) and the negative sign, so the coefficient is \\(-672\\).",
        hints: [
          "The general term is \\(\\binom{9}{r}(-2x)^r\\). Set \\(r=3\\).",
          "Evaluate \\(\\binom{9}{3}=84\\) and \\((-2)^3=-8\\), then multiply.",
        ],
      },
    },
  ],
};
