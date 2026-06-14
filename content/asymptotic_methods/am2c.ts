import { Question } from "@/lib/types";

/**
 * Graduate Asymptotic Methods — am2c
 * Optimal error bounds & exponential accuracy
 * Topic group: Divergent Series & Optimal Truncation
 *
 * Scope: error after optimal truncation of a divergent asymptotic series; the
 * least-term (smallest-term) error bound; using Stirling's formula on the
 * least term to show the optimal error is O(x^{-1/2} e^{-1/x}) = o(x^M) for
 * every M (exponential accuracy / superasymptotics).
 *
 * Seeded from Cambridge Part II Asymptotic Methods, Example Sheet 1, Q9
 * (Stieltjes integral F(x)=\int_0^\infty e^{-t}/(1+xt) dt with rho=e^{-t},
 * giving F ~ sum (-1)^n n! x^n; G(x)=\int_0^\infty e^{-t}/(1+xt)^2 dt ~
 * sum (-1)^n (n+1)! x^n with G(0.1)=0.84366660602...), Q9(c)/(d) (optimal
 * truncation by N+1=[1/x] and the Stirling optimal error bound), and Q10
 * (E_1(x) exponential integral). Constants/limits/framing varied throughout.
 *
 * Numerical checks (mpmath): F(0.1)=0.91563333..., least term of n! 0.1^n at
 * n=9,10 (=3.6288e-4), error after optimal truncation 1.770e-4 < bound
 * 3.6288e-4; floor(1/x)! x^{floor(1/x)} ~ sqrt(2 pi / x) e^{-1/x} to <1% at
 * x=0.1..0.02; G(0.1)=0.84366660602...; the alternating-series error is
 * bounded by the first omitted term at every N.
 */
export const questions: Question[] = [
  // ── Foundation: least-term index & basic optimal-truncation mechanics ──
  {
    id: "am2c-001",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 01",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The asymptotic series for a function has terms \\( a_n = (-1)^n n!\\,x^{n} \\) as \\( x \\to 0^{+} \\). For \\( x = \\tfrac{1}{10} \\), find the value of \\( n \\) at which the term magnitude \\( |a_n| \\) is smallest.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the ratio of successive magnitudes.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!\\,x^{n+1}}{n!\\,x^{n}} = (n+1)\\,x.", explanation: "The terms decrease while this ratio is below \\(1\\) and increase once it exceeds \\(1\\), so the least term sits where the ratio crosses \\(1\\)." },
        { stepNumber: 2, description: "Locate where the ratio equals one.", workingLatex: "(n+1)\\,x = 1 \\quad\\Longrightarrow\\quad n+1 = \\frac{1}{x} = 10.", explanation: "With \\(x = \\tfrac1{10}\\) the ratio is exactly \\(1\\) at \\(n+1 = 10\\), i.e. \\(n = 9\\)." },
        { stepNumber: 3, description: "Identify the smallest term.", workingLatex: "|a_9| = 9!\\,(0.1)^{9} = |a_{10}| = 0.00036288.", explanation: "Because the ratio is exactly \\(1\\) at the crossover, \\(|a_9| = |a_{10}|\\); the smallest magnitude first occurs at \\(n = 9\\)." },
      ],
      finalAnswer: "\\( n = 9 \\) (with \\( |a_9| = |a_{10}| = 9!\\,(0.1)^9 \\approx 3.63\\times10^{-4} \\)).",
      canonicalAnswer: "9",
    },
  },
  {
    id: "am2c-002",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 02",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "An asymptotic series has terms of magnitude \\( |a_n| = n!\\,x^{n} \\). Show that, as \\( x \\to 0^{+} \\), the index of the smallest term is approximately \\( n^{*} \\approx 1/x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compare consecutive terms.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = (n+1)\\,x.", explanation: "The least term occurs where consecutive terms stop decreasing, i.e. where this ratio passes through \\(1\\)." },
        { stepNumber: 2, description: "Set the ratio to one.", workingLatex: "(n+1)\\,x = 1 \\quad\\Longrightarrow\\quad n+1 = \\frac{1}{x}.", explanation: "For small \\(x\\) the \\(+1\\) is negligible beside \\(1/x\\)." },
        { stepNumber: 3, description: "Read off the optimal index.", workingLatex: "n^{*} \\approx \\frac{1}{x} \\quad (x \\to 0^{+}).", explanation: "The smallest term lies at index of order \\(1/x\\); this is the natural truncation point of the series." },
      ],
      finalAnswer: "\\( n^{*} \\approx \\dfrac{1}{x} \\).",
      canonicalAnswer: "1/x",
    },
  },
  {
    id: "am2c-003",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 03",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the asymptotic expansion \\( E_1(x) \\sim e^{-x}\\sum_{n\\ge 0} (-1)^{n} n!\\,x^{-(n+1)} \\) of the exponential integral as \\( x \\to +\\infty \\), the term magnitudes are \\( |a_n| = n!\\,x^{-(n+1)} \\). Find the index \\( n \\) of the smallest term when \\( x = 5 \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "exponential integral", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Ratio of successive magnitudes.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!\\,x^{-(n+2)}}{n!\\,x^{-(n+1)}} = \\frac{n+1}{x}.", explanation: "Here the small parameter is \\(1/x\\); terms decrease until this ratio reaches \\(1\\)." },
        { stepNumber: 2, description: "Set the ratio to one.", workingLatex: "\\frac{n+1}{x} = 1 \\quad\\Longrightarrow\\quad n+1 = x = 5.", explanation: "The crossover sits at \\(n+1 = x\\)." },
        { stepNumber: 3, description: "Read off the index.", workingLatex: "n^{*} = x - 1 = 4.", explanation: "The smallest term is the one with \\(n = 4\\) (and \\(|a_4| = |a_5|\\) at the exact tie since \\(x\\) is an integer)." },
      ],
      finalAnswer: "\\( n = 4 \\) (least term at \\( n \\approx x - 1 \\)).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "am2c-004",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 04",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "State the optimal-truncation rule for a divergent asymptotic series and the resulting error bound. (Take optimal truncation to mean keeping every term up to the one immediately before the smallest, and recall that for an alternating asymptotic series the truncation error is bounded by the first omitted term.)",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "State the truncation rule.", workingLatex: "S_N = \\sum_{n=0}^{N} a_n, \\qquad N+1 = n^{*} = \\text{index of the smallest term}.", explanation: "Optimal truncation stops the sum just before the smallest term; adding further terms makes the partial sum worse because the series is divergent." },
        { stepNumber: 2, description: "Bound the error by the first omitted term.", workingLatex: "\\bigl| f(x) - S_N \\bigr| \\le |a_{N+1}| = |a_{n^{*}}|.", explanation: "For an alternating asymptotic series the remainder is no larger in magnitude than the first term left out, which at optimal truncation is the smallest term itself." },
        { stepNumber: 3, description: "Summarise.", workingLatex: "\\boxed{\\;\\text{error} \\;\\lesssim\\; |a_{n^{*}}| \\;=\\; \\text{least-term magnitude}.\\;}", explanation: "The best accuracy achievable from the series equals roughly the size of its smallest term." },
      ],
      finalAnswer: "Truncate at \\( N+1 = n^{*} \\); then \\( |f - S_N| \\le |a_{n^{*}}| \\), the least-term magnitude.",
    },
  },
  {
    id: "am2c-005",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 05",
    difficulty: "Foundation",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the series with terms \\( |a_n| = n!\\,x^{n} \\) at \\( x = \\tfrac{1}{20} \\), use \\( N+1 = [\\,1/x\\,] \\) (integer part) to find how many terms \\( N+1 \\) optimal truncation keeps.",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Compute the truncation index.", workingLatex: "N+1 = \\left[\\frac{1}{x}\\right] = \\left[\\,20\\,\\right] = 20.", explanation: "The least term sits near \\(1/x = 20\\); the integer part gives the number of terms to retain." },
        { stepNumber: 2, description: "State the retained range.", workingLatex: "S_N = \\sum_{n=0}^{19} a_n \\quad (N = 19).", explanation: "We keep the terms \\(n = 0, 1, \\dots, 19\\): exactly \\(20\\) terms." },
      ],
      finalAnswer: "\\( N+1 = 20 \\) terms (i.e. \\( n = 0,\\dots,19 \\)).",
      canonicalAnswer: "20",
    },
  },
  {
    id: "am2c-006",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 06",
    difficulty: "Foundation",
    answerType: "expression",
    questionText:
      "Using Stirling's formula \\( m! \\sim \\sqrt{2\\pi m}\\,(m/e)^{m} \\), find an approximation for the least-term magnitude \\( a_{n^{*}} = (n^{*})!\\,x^{n^{*}} \\) of the series \\( \\sum n!\\,x^{n} \\), taking \\( n^{*} = 1/x \\).",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: ["least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Insert the least-term index.", workingLatex: "a_{n^{*}} = \\left(\\frac{1}{x}\\right)!\\;x^{1/x}.", explanation: "Put \\(n^{*} = 1/x\\) into the term magnitude." },
        { stepNumber: 2, description: "Apply Stirling with \\( m = 1/x \\).", workingLatex: "\\left(\\frac{1}{x}\\right)! \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(\\frac{1}{ex}\\right)^{1/x}.", explanation: "Here \\(m = 1/x\\), so \\((m/e)^m = (1/(ex))^{1/x}\\) and the prefactor is \\(\\sqrt{2\\pi/x}\\)." },
        { stepNumber: 3, description: "Multiply by \\( x^{1/x} \\) and simplify.", workingLatex: "a_{n^{*}} \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(\\frac{1}{ex}\\right)^{1/x} x^{1/x} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}.", explanation: "The factor \\(x^{1/x}\\) cancels the \\(x^{-1/x}\\) inside the bracket, leaving the exponentially small \\(e^{-1/x}\\)." },
      ],
      finalAnswer: "\\( a_{n^{*}} \\sim \\sqrt{\\dfrac{2\\pi}{x}}\\,e^{-1/x} \\).",
      canonicalAnswer: "sqrt(2*pi/x)*exp(-1/x)",
    },
  },

  // ── Standard: sheet-level optimal truncation, Stieltjes integral, bounds ──
  {
    id: "am2c-007",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 07",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The Stieltjes integral \\( F(x) = \\displaystyle\\int_0^{\\infty} \\frac{e^{-t}}{1+xt}\\,dt \\) has the divergent asymptotic expansion \\( F(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n n!\\,x^{n} \\) as \\( x \\to 0^{+} \\). For \\( x = \\tfrac{1}{10} \\), find the smallest-term magnitude and hence the optimal-truncation error bound.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the term magnitudes.", workingLatex: "|a_n| = n!\\,x^{n} = n!\\,(0.1)^{n}.", explanation: "The asymptotic series is alternating with these magnitudes." },
        { stepNumber: 2, description: "Locate the smallest term.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = (n+1)x = \\frac{n+1}{10} = 1 \\;\\Rightarrow\\; n = 9.", explanation: "The ratio crosses \\(1\\) at \\(n = 9\\), so the smallest term is at \\(n = 9\\) (tied with \\(n = 10\\))." },
        { stepNumber: 3, description: "Evaluate the least-term magnitude.", workingLatex: "|a_9| = 9!\\,(0.1)^{9} = 362880\\times 10^{-9} = 3.6288\\times 10^{-4}.", explanation: "This is the size of the smallest term, the floor on the accuracy obtainable from the series." },
        { stepNumber: 4, description: "State the optimal-truncation error bound.", workingLatex: "\\bigl| F(0.1) - S_N \\bigr| \\le |a_{n^{*}}| \\approx 3.63\\times 10^{-4}.", explanation: "For the alternating series the truncation error is at most the first omitted term, which at optimal truncation is the smallest term." },
      ],
      finalAnswer: "Least term \\( |a_9| = 9!\\,(0.1)^9 \\approx 3.63\\times10^{-4} \\); optimal error \\( \\lesssim 3.63\\times10^{-4} \\).",
      canonicalAnswer: "362880e-9",
    },
  },
  {
    id: "am2c-008",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 08",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the Stieltjes integral expansion \\( F(x) \\sim \\sum (-1)^n n!\\,x^{n} \\) with \\( x = \\tfrac{1}{10} \\), optimal truncation keeps \\( N+1 = [\\,1/x\\,] = 10 \\) terms. Given the exact value \\( F(0.1) = 0.9156333\\ldots \\), compute the optimal-truncation estimate \\( S_9 = \\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n \\) and verify the error is below the least-term bound.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "List the terms.", workingLatex: "(-1)^n n!\\,(0.1)^n: \\;1,\\,-0.1,\\,0.02,\\,-0.006,\\,0.0024,\\,-0.0012,\\,0.00072,\\,-0.0005040,\\,0.0004032,\\,-0.00036288.", explanation: "These are the terms \\(n = 0\\) up to \\(n = 9\\); magnitudes shrink to a minimum near \\(n = 9\\)." },
        { stepNumber: 2, description: "Sum the ten terms.", workingLatex: "S_9 = \\sum_{n=0}^{9} (-1)^n n!\\,(0.1)^n = 0.9154563\\ldots", explanation: "Adding the alternating terms gives the optimal-truncation partial sum." },
        { stepNumber: 3, description: "Compute the actual error.", workingLatex: "\\bigl| F(0.1) - S_9 \\bigr| = |0.9156333 - 0.9154563| = 1.770\\times 10^{-4}.", explanation: "The realised error of the best truncation." },
        { stepNumber: 4, description: "Compare with the least-term bound.", workingLatex: "1.770\\times 10^{-4} \\;<\\; |a_{10}| = 10!\\,(0.1)^{10} = 3.629\\times 10^{-4}.", explanation: "The error indeed lies below the first-omitted-term bound, confirming the least-term estimate." },
      ],
      finalAnswer: "\\( S_9 = 0.9154563\\ldots \\); error \\( 1.77\\times10^{-4} < 3.63\\times10^{-4} \\) (least-term bound).",
      canonicalAnswer: "0.9154563",
    },
  },
  {
    id: "am2c-009",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 09",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The companion integral \\( G(x) = \\displaystyle\\int_0^{\\infty}\\frac{e^{-t}}{(1+xt)^2}\\,dt \\) has expansion \\( G(x) \\sim \\sum_{n=0}^{\\infty} (-1)^n (n+1)!\\,x^{n} \\) as \\( x \\to 0^{+} \\). For \\( x = \\tfrac{1}{10} \\), find the index of the smallest term.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Term magnitudes.", workingLatex: "|a_n| = (n+1)!\\,x^{n}.", explanation: "The coefficient is \\((n+1)!\\) here, one factorial faster-growing than for \\(F\\)." },
        { stepNumber: 2, description: "Ratio of successive terms.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+2)!\\,x^{n+1}}{(n+1)!\\,x^{n}} = (n+2)\\,x.", explanation: "Terms decrease while \\((n+2)x < 1\\)." },
        { stepNumber: 3, description: "Find the crossover.", workingLatex: "(n+2)\\,x = 1 \\;\\Rightarrow\\; n+2 = 10 \\;\\Rightarrow\\; n = 8.", explanation: "With \\(x = 0.1\\) the smallest term is at \\(n = 8\\) (tied with \\(n = 9\\))." },
      ],
      finalAnswer: "\\( n = 8 \\) (smallest term, since \\( n+2 = 1/x \\)).",
      canonicalAnswer: "8",
    },
  },
  {
    id: "am2c-010",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 10",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the exponential-integral expansion \\( E_1(x) \\sim e^{-x}\\sum_{n\\ge0}(-1)^n n!\\,x^{-(n+1)} \\) as \\( x \\to +\\infty \\), the truncation error after \\( N \\) terms satisfies \\( |\\mathrm{Err}_N| \\le e^{-x} N!\\,x^{-(N+1)} \\). For \\( x = 5 \\), find the value of \\( N \\) giving the tightest bound and the resulting bound.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "optimal truncation", "error bound", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "The bound to minimise.", workingLatex: "B(N) = e^{-x} N!\\,x^{-(N+1)}, \\qquad x = 5.", explanation: "We minimise the first-omitted-term bound over the number of retained terms." },
        { stepNumber: 2, description: "Ratio of successive bounds.", workingLatex: "\\frac{B(N+1)}{B(N)} = \\frac{N+1}{x} = \\frac{N+1}{5}.", explanation: "The bound decreases while \\((N+1)/5 < 1\\)." },
        { stepNumber: 3, description: "Find the minimising index.", workingLatex: "\\frac{N+1}{5} = 1 \\;\\Rightarrow\\; N = 4 \\;(=x-1).", explanation: "The tightest bound is at \\(N \\approx x - 1 = 4\\)." },
        { stepNumber: 4, description: "Evaluate the bound.", workingLatex: "B(4) = e^{-5}\\,4!\\,5^{-5} = e^{-5}\\cdot 24 \\cdot \\frac{1}{3125} \\approx 5.18\\times 10^{-5}.", explanation: "This is the optimal accuracy: about \\(5\\times10^{-5}\\), consistent with \\(E_1(5) \\approx 1.148\\times10^{-3}\\)." },
      ],
      finalAnswer: "\\( N = 4 \\); optimal error bound \\( e^{-5}\\,4!\\,5^{-5} \\approx 5.2\\times10^{-5} \\).",
      canonicalAnswer: "4",
    },
  },
  {
    id: "am2c-011",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 11",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show, using Stirling's formula, that the least-term magnitude of the series \\( \\sum n!\\,x^{n} \\) (taken at \\( n^{*} = 1/x \\)) is \\( O\\!\\left(x^{-1/2}e^{-1/x}\\right) \\) as \\( x \\to 0^{+} \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Least term at \\( n^{*} = 1/x \\).", workingLatex: "a_{n^{*}} = \\left(\\frac{1}{x}\\right)!\\;x^{1/x}.", explanation: "Substitute the optimal index into the term magnitude." },
        { stepNumber: 2, description: "Apply Stirling.", workingLatex: "\\left(\\frac{1}{x}\\right)! \\sim \\sqrt{2\\pi\\cdot\\frac{1}{x}}\\left(\\frac{1/x}{e}\\right)^{1/x} = \\sqrt{\\frac{2\\pi}{x}}\\;\\frac{x^{-1/x}}{e^{1/x}}.", explanation: "Using \\(m! \\sim \\sqrt{2\\pi m}(m/e)^m\\) with \\(m = 1/x\\); note \\((1/x)^{1/x} = x^{-1/x}\\)." },
        { stepNumber: 3, description: "Multiply by \\( x^{1/x} \\).", workingLatex: "a_{n^{*}} \\sim \\sqrt{\\frac{2\\pi}{x}}\\;\\frac{x^{-1/x}}{e^{1/x}}\\cdot x^{1/x} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}.", explanation: "The algebraic powers \\(x^{\\mp 1/x}\\) cancel, leaving the exponentially small core." },
        { stepNumber: 4, description: "Read off the order.", workingLatex: "a_{n^{*}} = \\sqrt{2\\pi}\\;x^{-1/2}\\,e^{-1/x} = O\\!\\left(x^{-1/2}e^{-1/x}\\right).", explanation: "The least-term size — hence the optimal error — is of this order." },
      ],
      finalAnswer: "\\( a_{n^{*}} \\sim \\sqrt{2\\pi}\\,x^{-1/2}e^{-1/x} = O\\!\\left(x^{-1/2}e^{-1/x}\\right) \\).",
      canonicalAnswer: "sqrt(2*pi)*x^(-1/2)*exp(-1/x)",
    },
  },
  {
    id: "am2c-012",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 12",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that \\( x^{-1/2}e^{-1/x} = o(x^{M}) \\) as \\( x \\to 0^{+} \\) for every fixed positive integer \\( M \\), i.e. the optimal error is beyond all algebraic orders (exponentially accurate).",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential accuracy", "beyond all orders", "little-o"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Form the ratio to be shown to vanish.", workingLatex: "\\frac{x^{-1/2}e^{-1/x}}{x^{M}} = x^{-(M+1/2)}\\,e^{-1/x}.", explanation: "We must show this \\(\\to 0\\) as \\(x \\to 0^{+}\\) for every \\(M\\)." },
        { stepNumber: 2, description: "Substitute \\( u = 1/x \\to \\infty \\).", workingLatex: "x^{-(M+1/2)}e^{-1/x} = u^{\\,M+1/2}\\,e^{-u}, \\qquad u = \\frac{1}{x} \\to \\infty.", explanation: "As \\(x \\to 0^{+}\\) we have \\(u \\to +\\infty\\), turning the limit into a standard exponential-vs-power comparison." },
        { stepNumber: 3, description: "Exponential beats any power.", workingLatex: "\\lim_{u\\to\\infty} u^{\\,M+1/2}\\,e^{-u} = 0.", explanation: "\\(e^{-u}\\) decays faster than any fixed power of \\(u\\) grows, so the product vanishes." },
        { stepNumber: 4, description: "Conclude.", workingLatex: "\\Rightarrow\\; x^{-1/2}e^{-1/x} = o(x^{M}) \\quad\\forall\\,M \\in \\mathbb{Z}^{+}.", explanation: "The optimal error is smaller than every power of \\(x\\): genuine exponential accuracy, invisible to the algebraic series." },
      ],
      finalAnswer: "\\( x^{-1/2}e^{-1/x}/x^{M} = u^{M+1/2}e^{-u} \\to 0 \\); hence \\( o(x^{M}) \\) for all \\( M \\).",
    },
  },
  {
    id: "am2c-013",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 13",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "An asymptotic series as \\( x \\to 0^{+} \\) has term magnitudes \\( |a_n| = (2n)!\\,x^{n} \\). For \\( x = \\tfrac{1}{100} \\), find the index of the smallest term.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "optimal truncation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Ratio of successive magnitudes.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(2n+2)!\\,x^{n+1}}{(2n)!\\,x^{n}} = (2n+1)(2n+2)\\,x.", explanation: "Two extra factorial factors appear because the index of the factorial advances by \\(2\\)." },
        { stepNumber: 2, description: "Set the ratio to one.", workingLatex: "(2n+1)(2n+2)\\,x = 1 \\;\\Rightarrow\\; (2n)^2 \\approx \\frac{1}{x} = 100.", explanation: "For small \\(x\\), \\((2n+1)(2n+2) \\approx (2n)^2\\), so \\(2n \\approx 1/\\sqrt{x}\\)." },
        { stepNumber: 3, description: "Solve for the index.", workingLatex: "2n \\approx \\frac{1}{\\sqrt{x}} = 10 \\;\\Rightarrow\\; n^{*} \\approx 5.", explanation: "The least term sits near \\(n = 5\\); the optimal index scales like \\(1/(2\\sqrt{x})\\)." },
      ],
      finalAnswer: "\\( n^{*} \\approx 5 \\) (least term near \\( n = 1/(2\\sqrt{x}) \\)).",
      canonicalAnswer: "5",
    },
  },
  {
    id: "am2c-014",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 14",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "For the case \\( \\rho(t) = e^{-t} \\), the Stieltjes integral gives \\( F(x) = \\sum_{n=0}^{N}(-1)^n n!\\,x^{n} + \\mathrm{Err}_N \\) with rigorous bound \\( |\\mathrm{Err}_N| \\le (N+1)!\\,x^{N+1} \\). Verify that minimising this bound over \\( N \\) reproduces the optimal-truncation rule \\( N+1 = [\\,1/x\\,] \\).",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the bound as a function of \\( N \\).", workingLatex: "B(N) = (N+1)!\\,x^{N+1}.", explanation: "This is the rigorous remainder bound for the alternating Stieltjes series." },
        { stepNumber: 2, description: "Ratio of consecutive bounds.", workingLatex: "\\frac{B(N+1)}{B(N)} = \\frac{(N+2)!\\,x^{N+2}}{(N+1)!\\,x^{N+1}} = (N+2)\\,x.", explanation: "The bound keeps shrinking while this ratio is below \\(1\\)." },
        { stepNumber: 3, description: "Minimise.", workingLatex: "(N+2)\\,x < 1 \\iff N+2 < \\frac{1}{x} \\iff N+1 < \\frac{1}{x} - 1.", explanation: "The bound decreases up to \\(N+1 \\approx 1/x\\), then increases." },
        { stepNumber: 4, description: "Identify the optimal truncation.", workingLatex: "N+1 = \\left[\\frac{1}{x}\\right].", explanation: "The minimising number of terms is the integer part of \\(1/x\\) — exactly the optimal-truncation prescription." },
      ],
      finalAnswer: "Minimising \\( (N+1)!\\,x^{N+1} \\) gives \\( N+1 = [\\,1/x\\,] \\), the optimal truncation.",
    },
  },
  {
    id: "am2c-015",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 15",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the series with term magnitudes \\( |a_n| = n!\\,x^{n} \\) at \\( x = \\tfrac{1}{50} \\), use Stirling's formula to estimate the optimal-truncation error bound \\( \\sqrt{2\\pi/x}\\,e^{-1/x} \\) and give it to two significant figures.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Substitute \\( x = 1/50 \\).", workingLatex: "\\sqrt{\\frac{2\\pi}{x}}\\,e^{-1/x} = \\sqrt{2\\pi\\cdot 50}\\;e^{-50}.", explanation: "Here \\(1/x = 50\\), so the prefactor is \\(\\sqrt{100\\pi}\\) and the exponential is \\(e^{-50}\\)." },
        { stepNumber: 2, description: "Evaluate the prefactor.", workingLatex: "\\sqrt{100\\pi} = 10\\sqrt{\\pi} \\approx 17.72.", explanation: "A modest algebraic factor multiplying a tiny exponential." },
        { stepNumber: 3, description: "Multiply by the exponential.", workingLatex: "17.72\\times e^{-50} \\approx 17.72\\times 1.929\\times 10^{-22} \\approx 3.4\\times 10^{-21}.", explanation: "The error is utterly negligible — the hallmark of exponential accuracy at small \\(x\\)." },
      ],
      finalAnswer: "\\( \\sqrt{2\\pi/x}\\,e^{-1/x} \\approx 3.4\\times10^{-21} \\).",
      canonicalAnswer: "3.4e-21",
    },
  },
  {
    id: "am2c-016",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 16",
    difficulty: "Standard",
    answerType: "expression",
    questionText:
      "Show that for an alternating asymptotic series \\( f(x) \\sim \\sum (-1)^n a_n \\) with \\( a_n > 0 \\), if the magnitudes are first decreasing then increasing, the partial-sum error is bounded by the first omitted term whenever truncation stops within the decreasing run.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["alternating series", "error bound", "optimal truncation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Write the remainder.", workingLatex: "R_N = f(x) - \\sum_{n=0}^{N}(-1)^n a_n = (-1)^{N+1}\\!\\!\\sum_{k\\ge 0}(-1)^{k}a_{N+1+k}.", explanation: "The remainder is the tail of the same alternating series (assuming the series represents \\(f\\) to all orders with controlled remainder)." },
        { stepNumber: 2, description: "Bracket the alternating tail.", workingLatex: "\\sum_{k\\ge0}(-1)^k a_{N+1+k} = (a_{N+1}-a_{N+2}) + (a_{N+3}-a_{N+4}) + \\cdots", explanation: "While the magnitudes still decrease (\\(a_{N+1}>a_{N+2}>\\cdots\\)), each bracket is positive, so the tail is positive and below \\(a_{N+1}\\)." },
        { stepNumber: 3, description: "Bound the remainder.", workingLatex: "0 < \\bigl|R_N\\bigr| < a_{N+1}.", explanation: "Standard alternating-series enclosure: the error is smaller than the first term dropped." },
        { stepNumber: 4, description: "Apply at optimal truncation.", workingLatex: "\\text{At } N+1 = n^{*}: \\quad |R_N| < a_{n^{*}} = \\text{least term}.", explanation: "Stopping just before the smallest term makes the error bound equal to the least-term magnitude." },
      ],
      finalAnswer: "\\( |R_N| < a_{N+1} \\); at optimal truncation \\( |R_N| < a_{n^{*}} \\), the least term.",
    },
  },
  {
    id: "am2c-017",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 17",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "A function has asymptotic series with term magnitudes \\( |a_n| = n!\\,(2x)^{n} \\) as \\( x \\to 0^{+} \\). For \\( x = \\tfrac{1}{8} \\), find the index of the smallest term and the number of terms \\( N+1 \\) kept by optimal truncation.",
    marks: 3,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "optimal truncation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Effective small parameter.", workingLatex: "|a_n| = n!\\,(2x)^{n}, \\qquad 2x = \\frac{1}{4}.", explanation: "The factor \\(2\\) rescales the small parameter to \\(2x = 1/4\\)." },
        { stepNumber: 2, description: "Ratio of terms.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = (n+1)(2x) = \\frac{n+1}{4}.", explanation: "Terms decrease while \\((n+1)/4 < 1\\)." },
        { stepNumber: 3, description: "Find the least-term index.", workingLatex: "\\frac{n+1}{4} = 1 \\;\\Rightarrow\\; n^{*} = 3 = \\frac{1}{2x}.", explanation: "The smallest term is at \\(n = 3\\), i.e. \\(n^{*} = 1/(2x)\\)." },
        { stepNumber: 4, description: "Number of retained terms.", workingLatex: "N+1 = \\left[\\frac{1}{2x}\\right] = 4.", explanation: "Optimal truncation keeps \\(n = 0,\\dots,3\\): four terms." },
      ],
      finalAnswer: "\\( n^{*} = 3 \\); keep \\( N+1 = 4 \\) terms.",
      canonicalAnswer: "3",
    },
  },
  {
    id: "am2c-018",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 18",
    difficulty: "Standard",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The companion integral satisfies \\( G(0.1) = 0.84366660602\\ldots \\), with expansion \\( G(x) \\sim \\sum (-1)^n (n+1)!\\,x^{n} \\). Optimal truncation keeps terms up to \\( n = 8 \\). Compute \\( S_8 = \\sum_{n=0}^{8}(-1)^n (n+1)!\\,(0.1)^n \\) and state the truncation error to one significant figure.",
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Terms \\( (-1)^n (n+1)!\\,(0.1)^n \\).", workingLatex: "1,\\,-0.2,\\,0.06,\\,-0.024,\\,0.012,\\,-0.0072,\\,0.00504,\\,-0.0040320,\\,0.00362880.", explanation: "Magnitudes \\((n+1)!\\,(0.1)^n\\) decrease to a minimum near \\(n = 8\\)." },
        { stepNumber: 2, description: "Sum to \\( n = 8 \\).", workingLatex: "S_8 = \\sum_{n=0}^{8}(-1)^n (n+1)!\\,(0.1)^n = 0.8454368\\ldots", explanation: "The optimal-truncation estimate of \\(G(0.1)\\)." },
        { stepNumber: 3, description: "Compute the error.", workingLatex: "\\bigl| G(0.1) - S_8 \\bigr| = |0.8436666 - 0.8454368| \\approx 1.8\\times 10^{-3}.", explanation: "This sits within the first-omitted-term bound \\(10!\\,(0.1)^9 = 3.6\\times10^{-3}\\), the least-term magnitude for this series." },
      ],
      finalAnswer: "\\( S_8 = 0.845437\\ldots \\); error \\( \\approx 1.8\\times10^{-3} \\) (within the least-term bound).",
      canonicalAnswer: "0.8454368",
    },
  },

  // ── Challenge: synoptic / starred / cross-method ──
  {
    id: "am2c-019",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 19",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "For \\( \\rho(t) = e^{-t} \\) the Stieltjes integral gives the rigorous bound \\( |\\mathrm{Err}_N| \\le (N+1)!\\,x^{N+1} \\). Define optimal truncation by \\( N+1 = [\\,1/x\\,] \\) and use Stirling's formula to show the resulting optimal error bound is \\( O\\!\\left(x^{-1/2}e^{-1/x}\\right) = o(x^{M}) \\) as \\( x \\to 0^{+} \\) for every positive integer \\( M \\).",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "Stirling", "exponential accuracy", "beyond all orders"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Insert the optimal truncation index.", workingLatex: "N+1 = \\left[\\frac{1}{x}\\right] \\approx \\frac{1}{x}, \\qquad |\\mathrm{Err}| \\le \\left(\\frac{1}{x}\\right)!\\;x^{1/x}.", explanation: "Substitute \\(N+1 = 1/x\\) (to leading order) into the rigorous bound \\((N+1)!\\,x^{N+1}\\)." },
        { stepNumber: 2, description: "Stirling on the factorial.", workingLatex: "\\left(\\frac{1}{x}\\right)! \\sim \\sqrt{\\frac{2\\pi}{x}}\\left(\\frac{1}{ex}\\right)^{1/x} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}\\,x^{-1/x}.", explanation: "Apply \\(m! \\sim \\sqrt{2\\pi m}(m/e)^m\\) with \\(m = 1/x\\); the \\((1/(ex))^{1/x}\\) factor splits into \\(e^{-1/x}x^{-1/x}\\)." },
        { stepNumber: 3, description: "Multiply by \\( x^{1/x} \\).", workingLatex: "|\\mathrm{Err}| \\lesssim \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}\\,x^{-1/x}\\cdot x^{1/x} = \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}.", explanation: "The two algebraic powers \\(x^{\\mp1/x}\\) cancel exactly, leaving only the algebraic prefactor and the exponential." },
        { stepNumber: 4, description: "State the order of the optimal bound.", workingLatex: "|\\mathrm{Err}|_{\\text{opt}} = O\\!\\left(x^{-1/2}e^{-1/x}\\right).", explanation: "This is the famous optimal error bound: exponentially small with an algebraic prefactor." },
        { stepNumber: 5, description: "Compare with any power of \\( x \\).", workingLatex: "\\frac{x^{-1/2}e^{-1/x}}{x^{M}} = u^{M+1/2}e^{-u}\\Big|_{u=1/x} \\xrightarrow[u\\to\\infty]{} 0.", explanation: "Substituting \\(u = 1/x \\to \\infty\\), the exponential dominates every fixed power." },
        { stepNumber: 6, description: "Conclude exponential accuracy.", workingLatex: "|\\mathrm{Err}|_{\\text{opt}} = o(x^{M}) \\quad \\forall\\,M \\in \\mathbb{Z}^{+}.", explanation: "Optimal truncation achieves accuracy beyond every algebraic order — the divergent series, stopped at its least term, is exponentially accurate." },
      ],
      finalAnswer: "\\( |\\mathrm{Err}|_{\\text{opt}} = O\\!\\left(x^{-1/2}e^{-1/x}\\right) = o(x^{M}) \\) for all \\( M \\).",
    },
  },
  {
    id: "am2c-020",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 20",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "A divergent asymptotic series as \\( z \\to \\infty \\) has term magnitudes \\( |a_n| = n!\\,z^{-n} \\). Show that the least-term index is \\( n^{*} \\approx z \\) and that the optimal error is \\( O\\!\\left(z^{1/2}e^{-z}\\right) \\), hence exponentially small in \\( z \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Ratio of magnitudes.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)!\\,z^{-(n+1)}}{n!\\,z^{-n}} = \\frac{n+1}{z}.", explanation: "Here the small parameter is \\(1/z\\); terms decrease while \\((n+1)/z < 1\\)." },
        { stepNumber: 2, description: "Least-term index.", workingLatex: "\\frac{n+1}{z} = 1 \\;\\Rightarrow\\; n^{*} \\approx z.", explanation: "The smallest term sits at index of order \\(z\\)." },
        { stepNumber: 3, description: "Least-term magnitude.", workingLatex: "a_{n^{*}} = z!\\,z^{-z}.", explanation: "Substitute \\(n^{*} = z\\) into the magnitude." },
        { stepNumber: 4, description: "Apply Stirling.", workingLatex: "z!\\,z^{-z} \\sim \\sqrt{2\\pi z}\\left(\\frac{z}{e}\\right)^{z} z^{-z} = \\sqrt{2\\pi z}\\;e^{-z}.", explanation: "The \\(z^{z}\\) from Stirling cancels the \\(z^{-z}\\), leaving the exponential." },
        { stepNumber: 5, description: "State the order.", workingLatex: "a_{n^{*}} = O\\!\\left(z^{1/2}e^{-z}\\right).", explanation: "Exponentially small in \\(z\\), with a mild algebraic prefactor — the optimal accuracy for this series." },
      ],
      finalAnswer: "\\( n^{*} \\approx z \\); optimal error \\( a_{n^{*}} \\sim \\sqrt{2\\pi z}\\,e^{-z} = O\\!\\left(z^{1/2}e^{-z}\\right) \\).",
      canonicalAnswer: "sqrt(2*pi*z)*exp(-z)",
    },
  },
  {
    id: "am2c-021",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 21",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Using integration by parts, derive the asymptotic expansion \\( E_1(x) = \\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt \\sim e^{-x}\\left(\\frac{1}{x} - \\frac{1}{x^2} + \\frac{2!}{x^3} - \\cdots\\right) \\) as \\( x \\to \\infty \\), and show the remainder after \\( N \\) terms is \\( O\\!\\left(e^{-x}x^{-(N+1)}\\right) \\). Hence give the optimal-truncation error order.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "integration by parts", "optimal truncation", "error bound"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Integrate by parts once.", workingLatex: "E_1(x) = \\int_x^{\\infty}\\frac{e^{-t}}{t}\\,dt = \\frac{e^{-x}}{x} - \\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt.", explanation: "Take \\(u = 1/t\\), \\(dv = e^{-t}dt\\); the boundary term at \\(\\infty\\) vanishes." },
        { stepNumber: 2, description: "Integrate by parts again.", workingLatex: "\\int_x^{\\infty}\\frac{e^{-t}}{t^2}\\,dt = \\frac{e^{-x}}{x^2} - 2\\int_x^{\\infty}\\frac{e^{-t}}{t^3}\\,dt.", explanation: "Same procedure; each step pulls out one more power of \\(1/x\\) and one more factorial." },
        { stepNumber: 3, description: "Iterate to \\( N \\) terms.", workingLatex: "E_1(x) = e^{-x}\\sum_{n=0}^{N}\\frac{(-1)^n n!}{x^{n+1}} + R_N, \\quad R_N = (-1)^{N+1}(N+1)!\\!\\int_x^{\\infty}\\frac{e^{-t}}{t^{N+2}}\\,dt.", explanation: "The pattern continues; the remainder is an explicit integral with the next factorial." },
        { stepNumber: 4, description: "Bound the remainder.", workingLatex: "|R_N| = (N+1)!\\int_x^{\\infty}\\frac{e^{-t}}{t^{N+2}}\\,dt \\le \\frac{(N+1)!}{x^{N+2}}\\int_x^{\\infty}e^{-t}\\,dt = \\frac{(N+1)!\\,e^{-x}}{x^{N+2}}.", explanation: "Replace \\(t^{-(N+2)}\\) by its largest value \\(x^{-(N+2)}\\) on \\([x,\\infty)\\) and integrate the exponential." },
        { stepNumber: 5, description: "Order of the remainder.", workingLatex: "R_N = O\\!\\left(e^{-x}\\,x^{-(N+1)}\\right).", explanation: "Comparable in order to the first omitted term \\(e^{-x}N!\\,x^{-(N+1)}\\)." },
        { stepNumber: 6, description: "Optimal-truncation order.", workingLatex: "N \\approx x:\\quad |R_N|_{\\text{opt}} \\sim e^{-x}\\,x!\\,x^{-(x+1)} \\sim e^{-x}\\sqrt{2\\pi x}\\left(\\frac{x}{e}\\right)^{x} x^{-(x+1)} = \\sqrt{2\\pi}\\,x^{-1/2}e^{-2x}.", explanation: "At \\(N \\approx x\\) the least term is \\(e^{-x}\\,x!\\,x^{-(x+1)}\\); Stirling gives \\(O(x^{-1/2}e^{-2x})\\). The doubled exponential reflects the extra \\(e^{-x}\\) prefactor of \\(E_1\\)." },
      ],
      finalAnswer: "\\( R_N = O\\!\\left(e^{-x}x^{-(N+1)}\\right) \\); at \\( N\\approx x \\), optimal error \\( = O\\!\\left(x^{-1/2}e^{-2x}\\right) \\).",
    },
  },
  {
    id: "am2c-022",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 22",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the Stieltjes series \\( F(x) \\sim \\sum (-1)^n n!\\,x^{n} \\) with \\( x = \\tfrac{1}{6} \\), determine (i) the least-term index, (ii) the least-term magnitude, and (iii) confirm numerically that the optimal-truncation error is below this magnitude given \\( F(1/6) = 0.871606\\ldots \\). Give the least-term index.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Least-term index.", workingLatex: "(n+1)x = 1 \\;\\Rightarrow\\; n+1 = 6 \\;\\Rightarrow\\; n^{*} = 5.", explanation: "With \\(x = 1/6\\) the crossover is at \\(n+1 = 6\\), so the smallest term is at \\(n = 5\\) (tied with \\(n = 6\\))." },
        { stepNumber: 2, description: "Least-term magnitude.", workingLatex: "|a_5| = 5!\\,(1/6)^{5} = \\frac{120}{7776} = 0.015432\\ldots", explanation: "This is the floor on achievable accuracy from this series at \\(x = 1/6\\)." },
        { stepNumber: 3, description: "Optimal partial sum.", workingLatex: "S_5 = \\sum_{n=0}^{5}(-1)^n n!\\,(1/6)^n = 1 - 0.16667 + 0.05556 - 0.02778 + 0.01852 - 0.01543 = 0.86420\\ldots", explanation: "Keep terms up to \\(n = 5\\), one before (the tie with) the smallest." },
        { stepNumber: 4, description: "Check the error.", workingLatex: "|F(1/6) - S_5| = |0.871606 - 0.864198| = 0.00741 < |a_6| = 6!\\,(1/6)^6 = 0.01543.", explanation: "The realised error \\(7.4\\times10^{-3}\\) lies below the first-omitted-term bound, as required." },
      ],
      finalAnswer: "\\( n^{*} = 5 \\); least term \\( 5!/6^5 \\approx 0.0154 \\); error \\( 0.0074 < 0.0154 \\). Confirmed.",
      canonicalAnswer: "5",
    },
  },
  // REVIEW: I(x) leading coefficient uses Gamma(1/3); the numeric ratio of the
  // first two terms was sanity-checked below, but the exact next-term/optimal
  // structure beyond the stated two terms is Laplace-method asymptotics, not a
  // truncation-error bound I could independently certify term-by-term.
  {
    id: "am2c-023",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 23",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "An asymptotic expansion as \\( x \\to 0^{+} \\) has term magnitudes \\( |a_n| = \\Gamma(n + \\tfrac12)\\,x^{n} \\). Show that the least-term index satisfies \\( n^{*} \\approx 1/x \\) and find, via Stirling, the order of the least-term magnitude.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "Gamma function", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Ratio of magnitudes.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = \\frac{\\Gamma(n+\\tfrac32)}{\\Gamma(n+\\tfrac12)}\\,x = \\left(n+\\tfrac12\\right)x.", explanation: "Using \\(\\Gamma(z+1) = z\\,\\Gamma(z)\\) with \\(z = n+\\tfrac12\\)." },
        { stepNumber: 2, description: "Least-term index.", workingLatex: "\\left(n+\\tfrac12\\right)x = 1 \\;\\Rightarrow\\; n^{*} \\approx \\frac{1}{x}.", explanation: "The half-integer shift is negligible for small \\(x\\); the least term still sits near \\(1/x\\)." },
        { stepNumber: 3, description: "Least-term magnitude via Stirling.", workingLatex: "\\Gamma\\!\\left(n^{*}+\\tfrac12\\right) \\sim \\Gamma\\!\\left(\\tfrac1x\\right) \\sim \\sqrt{2\\pi}\\left(\\frac{1}{x}\\right)^{1/x - 1/2} e^{-1/x}.", explanation: "Stirling for the Gamma function: \\(\\Gamma(z) \\sim \\sqrt{2\\pi}\\,z^{z-1/2}e^{-z}\\) with \\(z = 1/x\\)." },
        { stepNumber: 4, description: "Multiply by \\( x^{n^{*}} \\).", workingLatex: "a_{n^{*}} \\sim \\sqrt{2\\pi}\\,x^{-(1/x - 1/2)} e^{-1/x}\\cdot x^{1/x} = \\sqrt{2\\pi}\\;x^{1/2}\\,e^{-1/x}.", explanation: "The powers \\(x^{-1/x}\\) and \\(x^{1/x}\\) cancel, leaving \\(x^{1/2}\\) from the Stirling prefactor." },
        { stepNumber: 5, description: "State the order.", workingLatex: "a_{n^{*}} = O\\!\\left(x^{1/2}e^{-1/x}\\right) = o(x^{M}) \\;\\forall M.", explanation: "Exponentially small again — the half-integer Gamma changes only the algebraic prefactor power, not the exponential." },
      ],
      finalAnswer: "\\( n^{*} \\approx 1/x \\); least term \\( O\\!\\left(x^{1/2}e^{-1/x}\\right) = o(x^M) \\) for all \\( M \\).",
      canonicalAnswer: "sqrt(2*pi)*x^(1/2)*exp(-1/x)",
    },
  },
  {
    id: "am2c-024",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 24",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Explain why summing a divergent asymptotic series \\( \\sum a_n \\) beyond its least term increases the error, and prove that for term magnitudes \\( |a_n| = n!\\,x^n \\) the partial-sum-to-partial-sum change \\( |a_{n+1}| \\) exceeds \\( |a_n| \\) once \\( n > 1/x - 1 \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["divergent series", "optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Change in partial sum.", workingLatex: "S_{n} - S_{n-1} = a_n, \\qquad |S_n - S_{n-1}| = |a_n|.", explanation: "Each new term moves the partial sum by its own magnitude." },
        { stepNumber: 2, description: "When the next term grows.", workingLatex: "\\frac{|a_{n+1}|}{|a_n|} = (n+1)x > 1 \\iff n > \\frac{1}{x} - 1.", explanation: "Beyond this index successive terms increase in size." },
        { stepNumber: 3, description: "Consequence for accuracy.", workingLatex: "n > \\frac{1}{x}-1 \\;\\Rightarrow\\; |a_{n+1}| > |a_n|,", explanation: "Adding a larger term overshoots; because the series is divergent the partial sums eventually diverge, so adding terms past the minimum degrades the estimate." },
        { stepNumber: 4, description: "Best stopping point.", workingLatex: "\\Rightarrow\\; \\text{stop at } n^{*} \\approx \\frac{1}{x}: \\quad \\text{error} \\approx |a_{n^{*}}| \\text{ minimal}.", explanation: "Optimal truncation halts exactly where the terms are smallest, minimising the error contributed by the first omitted term." },
      ],
      finalAnswer: "Terms grow once \\( n > 1/x - 1 \\); summing past \\( n^{*}\\approx 1/x \\) enlarges the error, so stop at the least term.",
    },
  },
  {
    id: "am2c-025",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 25",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "Two divergent series have term magnitudes \\( |a_n| = n!\\,x^{n} \\) and \\( |b_n| = n!\\,(x/2)^{n} \\) as \\( x \\to 0^{+} \\). For \\( x = \\tfrac{1}{5} \\), find the ratio of their least-term magnitudes \\( a_{n^{*}_a}/b_{n^{*}_b} \\) using the Stirling estimate \\( \\sqrt{2\\pi/p}\\,e^{-1/p} \\) for the series with parameter \\( p \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Identify the two parameters.", workingLatex: "p_a = x = \\tfrac15, \\qquad p_b = \\frac{x}{2} = \\tfrac1{10}.", explanation: "Each series has the form \\(\\sum n!\\,p^n\\), so its least term is \\(\\sqrt{2\\pi/p}\\,e^{-1/p}\\)." },
        { stepNumber: 2, description: "Least term of each.", workingLatex: "a_{n^{*}} \\sim \\sqrt{\\frac{2\\pi}{1/5}}\\,e^{-5} = \\sqrt{10\\pi}\\,e^{-5}, \\quad b_{n^{*}} \\sim \\sqrt{\\frac{2\\pi}{1/10}}\\,e^{-10} = \\sqrt{20\\pi}\\,e^{-10}.", explanation: "Substitute the two parameters into the Stirling least-term estimate." },
        { stepNumber: 3, description: "Form the ratio.", workingLatex: "\\frac{a_{n^{*}}}{b_{n^{*}}} = \\frac{\\sqrt{10\\pi}\\,e^{-5}}{\\sqrt{20\\pi}\\,e^{-10}} = \\frac{1}{\\sqrt{2}}\\,e^{5}.", explanation: "The algebraic prefactors give \\(1/\\sqrt2\\); the exponentials give \\(e^{-5}/e^{-10} = e^{5}\\)." },
        { stepNumber: 4, description: "Evaluate.", workingLatex: "\\frac{a_{n^{*}}}{b_{n^{*}}} = \\frac{e^{5}}{\\sqrt2} \\approx \\frac{148.41}{1.4142} \\approx 104.9.", explanation: "The smaller-parameter series \\(b\\) attains a far smaller least term — it is more accurate — by a factor of order \\(e^{5}\\)." },
      ],
      finalAnswer: "\\( \\dfrac{a_{n^{*}}}{b_{n^{*}}} = \\dfrac{e^{5}}{\\sqrt2} \\approx 105 \\).",
      canonicalAnswer: "exp(5)/sqrt(2)",
    },
  },
  {
    id: "am2c-026",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 26",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Suppose \\( f(x) \\) has a divergent asymptotic series \\( \\sum a_n x^n \\) with \\( |a_n| \\sim C\\,n!\\,A^{n} \\) for constants \\( C, A > 0 \\) (a Gevrey-1 series). Show the least term is attained near \\( n^{*} = 1/(Ax) \\) and that the optimal error is \\( O\\!\\left(x^{-1/2}e^{-1/(Ax)}\\right) \\), identifying \\( 1/A \\) as the radius governing the exponential rate.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Gevrey", "least term", "Stirling", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Term magnitude.", workingLatex: "|a_n x^n| \\sim C\\,n!\\,(Ax)^{n}.", explanation: "The product \\(A^n x^n = (Ax)^n\\) shows \\(Ax\\) is the effective small parameter." },
        { stepNumber: 2, description: "Ratio of terms.", workingLatex: "\\frac{|a_{n+1}x^{n+1}|}{|a_n x^n|} = (n+1)(Ax).", explanation: "Terms decrease while \\((n+1)Ax < 1\\)." },
        { stepNumber: 3, description: "Least-term index.", workingLatex: "(n+1)(Ax) = 1 \\;\\Rightarrow\\; n^{*} \\approx \\frac{1}{Ax}.", explanation: "The smallest term sits at \\(1/(Ax)\\)." },
        { stepNumber: 4, description: "Stirling on the least term.", workingLatex: "C\\,n^{*}!\\,(Ax)^{n^{*}} \\sim C\\sqrt{2\\pi n^{*}}\\left(\\frac{n^{*}}{e}\\right)^{n^{*}}(Ax)^{n^{*}}.", explanation: "Apply Stirling with \\(n^{*} = 1/(Ax)\\)." },
        { stepNumber: 5, description: "Simplify the powers.", workingLatex: "\\left(\\frac{n^{*}}{e}\\right)^{n^{*}}(Ax)^{n^{*}} = \\left(\\frac{n^{*}Ax}{e}\\right)^{n^{*}} = \\left(\\frac{1}{e}\\right)^{1/(Ax)} = e^{-1/(Ax)}.", explanation: "Since \\(n^{*}Ax = 1\\), the bracket reduces to \\(1/e\\) raised to \\(n^{*} = 1/(Ax)\\)." },
        { stepNumber: 6, description: "Combine.", workingLatex: "|a_{n^{*}}x^{n^{*}}| \\sim C\\sqrt{\\frac{2\\pi}{Ax}}\\;e^{-1/(Ax)} = O\\!\\left(x^{-1/2}e^{-1/(Ax)}\\right).", explanation: "The constant \\(A\\) sets the exponential rate \\(e^{-1/(Ax)}\\); a larger \\(A\\) (faster factorial growth) means a less accurate optimal truncation." },
      ],
      finalAnswer: "\\( n^{*} \\approx 1/(Ax) \\); optimal error \\( \\sim C\\sqrt{2\\pi/(Ax)}\\,e^{-1/(Ax)} = O\\!\\left(x^{-1/2}e^{-1/(Ax)}\\right) \\).",
    },
  },
  {
    id: "am2c-027",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 27",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "For the exponential integral series \\( E_1(x) \\sim e^{-x}\\sum(-1)^n n!\\,x^{-(n+1)} \\) at \\( x = 10 \\), compute the least-term magnitude \\( e^{-10}\\,9!\\,10^{-10} \\) to two significant figures, and state how many significant figures of \\( E_1(10) = 4.157\\times10^{-6} \\) are reliably obtained.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["exponential integral", "optimal truncation", "least term"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Least-term index.", workingLatex: "\\frac{n+1}{x} = 1 \\;\\Rightarrow\\; n+1 = 10 \\;\\Rightarrow\\; n^{*} = 9.", explanation: "With \\(x = 10\\) the smallest term is at \\(n = 9\\)." },
        { stepNumber: 2, description: "Least-term magnitude.", workingLatex: "e^{-10}\\,9!\\,10^{-10} = e^{-10}\\cdot 362880\\cdot 10^{-10}.", explanation: "Insert \\(n = 9\\) into \\(e^{-x}n!\\,x^{-(n+1)}\\)." },
        { stepNumber: 3, description: "Evaluate.", workingLatex: "= 4.54\\times10^{-5}\\times 3.6288\\times10^{-5} = 1.6\\times10^{-9}.", explanation: "Here \\(e^{-10} \\approx 4.54\\times10^{-5}\\) and \\(9!\\,10^{-10} = 3.63\\times10^{-5}\\)." },
        { stepNumber: 4, description: "Reliable significant figures.", workingLatex: "\\frac{1.6\\times10^{-9}}{4.157\\times10^{-6}} \\approx 3.9\\times10^{-4}.", explanation: "The relative optimal error is about \\(4\\times10^{-4}\\), so roughly \\(3\\) significant figures of \\(E_1(10)\\) are trustworthy." },
      ],
      finalAnswer: "Least term \\( \\approx 1.6\\times10^{-9} \\); relative error \\( \\sim 4\\times10^{-4} \\), so about \\( 3 \\) significant figures.",
      canonicalAnswer: "1.6e-9",
    },
  },
  {
    id: "am2c-028",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 28",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Show that doubling the small parameter from \\( x \\) to \\( 2x \\) in the Gevrey-1 series \\( \\sum n!\\,x^n \\) worsens the optimal error from \\( O\\!\\left(x^{-1/2}e^{-1/x}\\right) \\) to \\( O\\!\\left(x^{-1/2}e^{-1/(2x)}\\right) \\), and quantify the loss as an exponential factor \\( e^{1/(2x)} \\).",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["least term", "exponential accuracy", "Stirling"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Optimal error at parameter \\( p \\).", workingLatex: "\\mathcal{E}(p) \\sim \\sqrt{\\frac{2\\pi}{p}}\\;e^{-1/p}.", explanation: "The least term of \\(\\sum n!\\,p^n\\) by Stirling at \\(n^{*}=1/p\\)." },
        { stepNumber: 2, description: "Evaluate at \\( p = x \\) and \\( p = 2x \\).", workingLatex: "\\mathcal{E}(x) \\sim \\sqrt{\\frac{2\\pi}{x}}e^{-1/x}, \\qquad \\mathcal{E}(2x) \\sim \\sqrt{\\frac{2\\pi}{2x}}e^{-1/(2x)}.", explanation: "Just substitute the two parameters." },
        { stepNumber: 3, description: "Form the loss ratio.", workingLatex: "\\frac{\\mathcal{E}(2x)}{\\mathcal{E}(x)} = \\frac{1}{\\sqrt2}\\;\\frac{e^{-1/(2x)}}{e^{-1/x}} = \\frac{1}{\\sqrt2}\\,e^{1/(2x)}.", explanation: "The exponentials combine: \\(e^{-1/(2x)+1/x} = e^{1/(2x)}\\)." },
        { stepNumber: 4, description: "Interpret.", workingLatex: "\\frac{\\mathcal{E}(2x)}{\\mathcal{E}(x)} \\sim \\frac{e^{1/(2x)}}{\\sqrt2} \\to \\infty \\quad (x\\to0^{+}).", explanation: "Doubling the parameter inflates the optimal error by an exponentially large factor \\(e^{1/(2x)}\\): the accuracy is exponentially sensitive to the parameter." },
      ],
      finalAnswer: "\\( \\mathcal{E}(2x)/\\mathcal{E}(x) \\sim e^{1/(2x)}/\\sqrt2 \\); the optimal error worsens by the exponential factor \\( e^{1/(2x)} \\).",
    },
  },
  {
    id: "am2c-029",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 29",
    difficulty: "Challenge",
    answerType: "exactValue",
    answerMeta: { exactForm: true },
    questionText:
      "The Stieltjes integral \\( F(x) = \\int_0^\\infty \\frac{e^{-t}}{1+xt}\\,dt \\) at \\( x = \\tfrac{1}{10} \\) has exact value \\( 0.9156333\\ldots \\) and least term \\( 9!\\,(0.1)^9 = 3.6288\\times10^{-4} \\). Compute the relative optimal accuracy \\( |a_{n^{*}}|/F(0.1) \\) and express it as a number of correct decimal places.",
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "optimal truncation", "exponential accuracy"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Relative optimal error.", workingLatex: "\\frac{|a_{n^{*}}|}{F(0.1)} = \\frac{3.6288\\times10^{-4}}{0.9156333}.", explanation: "Divide the least-term bound by the value being approximated." },
        { stepNumber: 2, description: "Evaluate.", workingLatex: "= 3.963\\times10^{-4}.", explanation: "A relative accuracy of about \\(4\\times10^{-4}\\)." },
        { stepNumber: 3, description: "Convert to decimal places.", workingLatex: "-\\log_{10}\\!\\left(3.963\\times10^{-4}\\right) = 3.40.", explanation: "The base-10 logarithm of the relative error gives the number of correct decimal places." },
        { stepNumber: 4, description: "Interpret.", workingLatex: "\\Rightarrow\\; \\approx 3 \\text{ correct decimal places}.", explanation: "Optimal truncation of this divergent series pins down \\(F(0.1)\\) to about three decimals — the best the series can do at \\(x = 0.1\\)." },
      ],
      finalAnswer: "\\( |a_{n^{*}}|/F(0.1) \\approx 4.0\\times10^{-4} \\), i.e. about \\( 3 \\) correct decimal places.",
      canonicalAnswer: "3.963e-4",
    },
  },
  {
    id: "am2c-030",
    topicRef: "am2c",
    topicTitle: "Optimal error bounds 30",
    difficulty: "Challenge",
    answerType: "expression",
    questionText:
      "Prove that, for the Stieltjes series with rigorous bound \\( |\\mathrm{Err}_N| \\le (N+1)!\\,x^{N+1} \\), no choice of \\( N \\) can make the error smaller than \\( c\\,x^{-1/2}e^{-1/x} \\) for some constant \\( c > 0 \\) as \\( x \\to 0^{+} \\); hence the exponentially small optimal error cannot be beaten by truncating the algebraic series, and capturing it requires going beyond all orders.",
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: ["Stieltjes integral", "beyond all orders", "exponential accuracy", "optimal truncation"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "The bound as a function of \\( N \\).", workingLatex: "B(N) = (N+1)!\\,x^{N+1}.", explanation: "We minimise this rigorous remainder bound over all integer \\(N \\ge 0\\)." },
        { stepNumber: 2, description: "Minimiser of \\( B(N) \\).", workingLatex: "\\frac{B(N+1)}{B(N)} = (N+2)x = 1 \\;\\Rightarrow\\; N+1 \\approx \\frac{1}{x}.", explanation: "The bound is smallest at \\(N+1 \\approx 1/x\\); any other \\(N\\) gives a larger bound." },
        { stepNumber: 3, description: "Value at the minimiser.", workingLatex: "\\min_N B(N) = B\\!\\left(\\tfrac1x - 1\\right) = \\left(\\tfrac1x\\right)!\\,x^{1/x}.", explanation: "Substitute the optimal \\(N\\); this is the best the algebraic bound can achieve." },
        { stepNumber: 4, description: "Stirling evaluation.", workingLatex: "\\left(\\tfrac1x\\right)!\\,x^{1/x} \\sim \\sqrt{\\frac{2\\pi}{x}}\\;e^{-1/x}.", explanation: "As established, the algebraic powers cancel, leaving the exponentially small core." },
        { stepNumber: 5, description: "Lower bound on the minimum.", workingLatex: "\\min_N B(N) \\ge c\\,x^{-1/2}e^{-1/x}, \\quad c = \\sqrt{2\\pi}\\,(1+o(1)).", explanation: "The minimum of the bound is itself of order \\(x^{-1/2}e^{-1/x}\\): no truncation drives the (bounded) error below this scale." },
        { stepNumber: 6, description: "Conclude beyond-all-orders.", workingLatex: "\\text{error}_{\\min} = \\Theta\\!\\left(x^{-1/2}e^{-1/x}\\right) = o(x^M)\\;\\forall M,", explanation: "The optimal error is exponentially small — invisible to every term of the algebraic series, so resolving it demands exponential-asymptotics (beyond-all-orders) methods." },
      ],
      finalAnswer: "\\( \\min_N (N+1)!\\,x^{N+1} \\sim \\sqrt{2\\pi}\\,x^{-1/2}e^{-1/x} \\); no truncation beats this exponentially small floor.",
    },
  },
];
