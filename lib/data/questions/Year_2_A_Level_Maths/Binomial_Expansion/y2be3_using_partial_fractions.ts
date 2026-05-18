import { Question } from "@/lib/types";

/**
 * Year 2 — Binomial Expansion § 4.3  Using Partial Fractions
 * Ref: y2be3
 * 71 questions. Decompose rational expressions with linear denominators of
 * binomial form \((1\pm ax)(1\pm bx)\), then (where asked) expand each part
 * using the binomial theorem and combine. Answers precomputed.
 */
export const questions: Question[] = [
  {
    id: "y2be3-001",
    topicRef: "y2be3",
    topicTitle: "Using Partial Fractions 01",
    difficulty: "Challenge",
    questionText: "Express \\( \\dfrac{3x + 5}{(1 - x)(1 + 2x)} \\) in partial fractions, then use the binomial theorem to find the expansion up to the term in \\( x^2 \\), stating the range of validity.",
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: ["partial fractions", "binomial"],
    workedSolution: {
      steps: [
        { stepNumber: 1, description: "Set up the partial-fraction identity.", workingLatex: "\\dfrac{3x+5}{(1-x)(1+2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}", explanation: "Two distinct linear factors give two simple partial fractions with constant numerators \\(A,B\\). Treat as an identity true for every \\(x\\)." },
        { stepNumber: 2, description: "Clear denominators.", workingLatex: "3x + 5 \\equiv A(1+2x) + B(1-x)", explanation: "Multiplying through by \\((1-x)(1+2x)\\) leaves a polynomial identity, ready for cover-up." },
        { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "8 = 3A \\;\\Rightarrow\\; A = \\tfrac{8}{3}", explanation: "Choosing \\(x = 1\\) kills the \\(B\\) term because \\(1-x = 0\\). LHS \\(3(1)+5 = 8\\); RHS coefficient \\(1+2(1)=3\\)." },
        { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{2}\\).", workingLatex: "\\tfrac{7}{2} = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = \\tfrac{7}{3}", explanation: "Setting \\(1+2x = 0\\) kills the \\(A\\) term. LHS \\(3(-\\tfrac12)+5 = \\tfrac72\\); RHS coefficient \\(1-(-\\tfrac12) = \\tfrac32\\). Watch the sign — the \\(B\\) here is positive." },
        { stepNumber: 5, description: "Write the decomposition.", workingLatex: "\\dfrac{3x+5}{(1-x)(1+2x)} = \\dfrac{8}{3(1-x)} + \\dfrac{7}{3(1+2x)}", explanation: "Check at \\(x=0\\): \\(\\tfrac{5}{1\\cdot 1}=5\\), and RHS \\(\\tfrac{8}{3}+\\tfrac{7}{3}=5\\) ✓." },
        { stepNumber: 6, description: "Rewrite each fraction in \\((1+u)^n\\) form.", workingLatex: "\\tfrac{8}{3}(1-x)^{-1} + \\tfrac{7}{3}(1+2x)^{-1}", explanation: "We need each bracket in the shape \\((1+u)^n\\) so the binomial series \\((1+u)^n = 1+nu+\\tfrac{n(n-1)}{2!}u^2+\\cdots\\) applies. Here \\(n = -1\\) for both, with \\(u = -x\\) and \\(u = 2x\\)." },
        { stepNumber: 7, description: "Expand \\((1-x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1-x)^{-1} = 1 + x + x^2 + \\cdots", explanation: "For \\(n=-1\\) the descending-factor coefficients reduce to alternating signs; substituting \\(u=-x\\) flips them all positive." },
        { stepNumber: 8, description: "Expand \\((1+2x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1+2x)^{-1} = 1 - 2x + 4x^2 - \\cdots", explanation: "Substituting \\(u=2x\\) keeps the alternating sign and contributes powers of \\(2\\) at each level." },
        { stepNumber: 9, description: "Distribute the constants.", workingLatex: "\\tfrac{8}{3}(1+x+x^2) + \\tfrac{7}{3}(1-2x+4x^2)", explanation: "Multiply each expansion by its partial-fraction numerator." },
        { stepNumber: 10, description: "Constant: \\(\\tfrac{8}{3}+\\tfrac{7}{3}=5\\).", workingLatex: "[x^0]:\\; 5", explanation: "Matches \\(f(0)=5\\) ✓." },
        { stepNumber: 11, description: "Linear: \\(\\tfrac{8}{3} - \\tfrac{14}{3} = -2\\).", workingLatex: "[x^1]:\\; -2", explanation: "Second contribution is \\(\\tfrac73 \\cdot (-2) = -\\tfrac{14}{3}\\); sum to \\(-2\\)." },
        { stepNumber: 12, description: "Quadratic: \\(\\tfrac{8}{3} + \\tfrac{28}{3} = 12\\).", workingLatex: "[x^2]:\\; 12", explanation: "Both positive: \\(\\tfrac{8+28}{3}=12\\)." },
        { stepNumber: 13, description: "Assemble and state validity.", workingLatex: "5 - 2x + 12x^2 + \\cdots,\\quad |x| < \\tfrac{1}{2}", explanation: "Each binomial series converges where its \\(|u|<1\\), giving \\(|x|<1\\) and \\(|x|<\\tfrac12\\); the tighter bound wins." },
      ],
      finalAnswer: "\\( 5 - 2x + 12x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\).",
    },
  },
  // ── Pure decomposition (binomial-form denominators) ────
  { id: "y2be3-002", topicRef: "y2be3", topicTitle: "Using Partial Fractions 02", difficulty: "Standard", questionText: "Express \\( \\dfrac{4x - 1}{(1-x)(1-2x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up the identity.", workingLatex: "\\dfrac{4x-1}{(1-x)(1-2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1-2x}", explanation: "Two distinct linear factors give two constants \\(A,B\\)." },
    { stepNumber: 2, description: "Clear denominators.", workingLatex: "4x - 1 \\equiv A(1-2x) + B(1-x)", explanation: "Multiplying through removes the fractions and gives a polynomial identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "3 = -A \\;\\Rightarrow\\; A = -3", explanation: "Setting \\(1-x = 0\\) kills the \\(B\\) term; \\(1-2(1) = -1\\), so the RHS is \\(-A\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = \\tfrac{1}{2}\\).", workingLatex: "1 = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = 2", explanation: "Setting \\(1-2x=0\\) kills \\(A\\). LHS \\(4(\\tfrac12)-1 = 1\\); RHS coefficient \\(1-\\tfrac12 = \\tfrac12\\)." },
    { stepNumber: 5, description: "Assemble the decomposition.", workingLatex: "\\dfrac{4x-1}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x}", explanation: "Substitute the values back. A quick \\(x=0\\) check gives \\(-1 = -3 + 2 = -1\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x} \\)." } },

  { id: "y2be3-003", topicRef: "y2be3", topicTitle: "Using Partial Fractions 03", difficulty: "Standard", questionText: "Express \\( \\dfrac{5x + 1}{(1-x)(1+3x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Write the identity.", workingLatex: "\\dfrac{5x+1}{(1-x)(1+3x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+3x}", explanation: "Two linear factors, two unknowns." },
    { stepNumber: 2, description: "Multiply out.", workingLatex: "5x + 1 \\equiv A(1+3x) + B(1-x)", explanation: "A polynomial identity, ready for substitution." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "6 = 4A \\;\\Rightarrow\\; A = \\tfrac{3}{2}", explanation: "Sets \\(1-x = 0\\); \\(1 + 3(1) = 4\\); LHS \\(5+1=6\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{3}\\).", workingLatex: "-\\tfrac{2}{3} = \\tfrac{4}{3}B \\;\\Rightarrow\\; B = -\\tfrac{1}{2}", explanation: "Sets \\(1+3x=0\\); LHS \\(5(-\\tfrac13)+1 = -\\tfrac23\\); RHS coefficient \\(1-(-\\tfrac13) = \\tfrac43\\)." },
    { stepNumber: 5, description: "Write the decomposition.", workingLatex: "\\dfrac{5x+1}{(1-x)(1+3x)} = \\dfrac{3}{2(1-x)} - \\dfrac{1}{2(1+3x)}", explanation: "Check at \\(x=0\\): \\(1 = \\tfrac32 - \\tfrac12 = 1\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{3}{2(1-x)} - \\dfrac{1}{2(1+3x)} \\)." } },

  { id: "y2be3-004", topicRef: "y2be3", topicTitle: "Using Partial Fractions 04", difficulty: "Standard", questionText: "Express \\( \\dfrac{7x+2}{(1+x)(1+2x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{7x+2}{(1+x)(1+2x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1+2x}", explanation: "Standard two-factor split." },
    { stepNumber: 2, description: "Clear denominators.", workingLatex: "7x + 2 \\equiv A(1+2x) + B(1+x)", explanation: "Polynomial identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x = -1\\).", workingLatex: "-5 = -A \\;\\Rightarrow\\; A = 5", explanation: "Kills \\(B\\); LHS \\(7(-1)+2 = -5\\), and \\(1+2(-1) = -1\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{2}\\).", workingLatex: "-\\tfrac{3}{2} = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = -3", explanation: "Kills \\(A\\); LHS \\(7(-\\tfrac12)+2 = -\\tfrac32\\); RHS coefficient \\(1-\\tfrac12 = \\tfrac12\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{7x+2}{(1+x)(1+2x)} = \\dfrac{5}{1+x} - \\dfrac{3}{1+2x}", explanation: "At \\(x=0\\): \\(2 = 5 - 3\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{5}{1+x} - \\dfrac{3}{1+2x} \\)." } },

  { id: "y2be3-005", topicRef: "y2be3", topicTitle: "Using Partial Fractions 05", difficulty: "Standard", questionText: "Express \\( \\dfrac{2x+3}{(1-x)(1+x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{2x+3}{(1-x)(1+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+x}", explanation: "Two linear factors, two constants." },
    { stepNumber: 2, description: "Multiply out.", workingLatex: "2x + 3 \\equiv A(1+x) + B(1-x)", explanation: "Clears the denominator and gives an identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "5 = 2A \\;\\Rightarrow\\; A = \\tfrac{5}{2}", explanation: "Removes \\(B\\); LHS \\(2+3=5\\), and \\(1+1 = 2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -1\\).", workingLatex: "1 = 2B \\;\\Rightarrow\\; B = \\tfrac{1}{2}", explanation: "Removes \\(A\\); LHS \\(-2+3 = 1\\); coefficient \\(1-(-1)=2\\). Watch the sign: \\(B\\) comes out positive here." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{2x+3}{(1-x)(1+x)} = \\dfrac{5}{2(1-x)} + \\dfrac{1}{2(1+x)}", explanation: "At \\(x=0\\): \\(3 = \\tfrac52 + \\tfrac12 = 3\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{5}{2(1-x)} + \\dfrac{1}{2(1+x)} \\)." } },

  { id: "y2be3-006", topicRef: "y2be3", topicTitle: "Using Partial Fractions 06", difficulty: "Standard", questionText: "Express \\( \\dfrac{3}{(1-x)(1-2x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3}{(1-x)(1-2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1-2x}", explanation: "Two distinct linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3 \\equiv A(1-2x) + B(1-x)", explanation: "Polynomial identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "3 = -A \\;\\Rightarrow\\; A = -3", explanation: "\\(1-2(1) = -1\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = \\tfrac{1}{2}\\).", workingLatex: "3 = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = 6", explanation: "Coefficient \\(1-\\tfrac12=\\tfrac12\\)." },
    { stepNumber: 5, description: "Write the result.", workingLatex: "\\dfrac{3}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{6}{1-2x}", explanation: "At \\(x=0\\): \\(3 = -3 + 6 = 3\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{3}{1-x} + \\dfrac{6}{1-2x} \\)." } },

  { id: "y2be3-007", topicRef: "y2be3", topicTitle: "Using Partial Fractions 07", difficulty: "Standard", questionText: "Express \\( \\dfrac{4}{(1-x)(1+3x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{4}{(1-x)(1+3x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+3x}", explanation: "Two linear factors, two constants." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "4 \\equiv A(1+3x) + B(1-x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "4 = 4A \\;\\Rightarrow\\; A = 1", explanation: "\\(1+3(1) = 4\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{3}\\).", workingLatex: "4 = \\tfrac{4}{3}B \\;\\Rightarrow\\; B = 3", explanation: "Coefficient \\(1-(-\\tfrac13) = \\tfrac43\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{4}{(1-x)(1+3x)} = \\dfrac{1}{1-x} + \\dfrac{3}{1+3x}", explanation: "At \\(x=0\\): \\(4 = 1 + 3\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{1}{1-x} + \\dfrac{3}{1+3x} \\)." } },

  { id: "y2be3-008", topicRef: "y2be3", topicTitle: "Using Partial Fractions 08", difficulty: "Standard", questionText: "Express \\( \\dfrac{x-5}{(1+x)(1-2x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x-5}{(1+x)(1-2x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1-2x}", explanation: "Two linear factors, two constants." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x - 5 \\equiv A(1-2x) + B(1+x)", explanation: "Polynomial identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x = -1\\).", workingLatex: "-6 = 3A \\;\\Rightarrow\\; A = -2", explanation: "Kills \\(B\\); LHS \\(-1-5=-6\\); coefficient \\(1-2(-1)=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = \\tfrac{1}{2}\\).", workingLatex: "-\\tfrac{9}{2} = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = -3", explanation: "Kills \\(A\\); LHS \\(\\tfrac12-5=-\\tfrac92\\); coefficient \\(1+\\tfrac12=\\tfrac32\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x-5}{(1+x)(1-2x)} = -\\dfrac{2}{1+x} - \\dfrac{3}{1-2x}", explanation: "At \\(x=0\\): \\(-5 = -2 - 3 = -5\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{2}{1+x} - \\dfrac{3}{1-2x} \\)." } },

  { id: "y2be3-009", topicRef: "y2be3", topicTitle: "Using Partial Fractions 09", difficulty: "Standard", questionText: "Express \\( \\dfrac{6x+7}{(1+x)(1+3x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{6x+7}{(1+x)(1+3x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1+3x}", explanation: "Two distinct linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "6x + 7 \\equiv A(1+3x) + B(1+x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = -1\\).", workingLatex: "1 = -2A \\;\\Rightarrow\\; A = -\\tfrac{1}{2}", explanation: "Kills \\(B\\); LHS \\(-6+7=1\\); coefficient \\(1+3(-1) = -2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{3}\\).", workingLatex: "5 = \\tfrac{2}{3}B \\;\\Rightarrow\\; B = \\tfrac{15}{2}", explanation: "Kills \\(A\\); LHS \\(-2+7=5\\); coefficient \\(1-\\tfrac13 = \\tfrac23\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{6x+7}{(1+x)(1+3x)} = -\\dfrac{1}{2(1+x)} + \\dfrac{15}{2(1+3x)}", explanation: "At \\(x=0\\): \\(7 = -\\tfrac12 + \\tfrac{15}{2} = 7\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{1}{2(1+x)} + \\dfrac{15}{2(1+3x)} \\)." } },

  { id: "y2be3-010", topicRef: "y2be3", topicTitle: "Using Partial Fractions 10", difficulty: "Standard", questionText: "Express \\( \\dfrac{8}{(1-x)(1+x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{8}{(1-x)(1+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+x}", explanation: "Classic \\(1-x^2\\) decomposition." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "8 \\equiv A(1+x) + B(1-x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "8 = 2A \\;\\Rightarrow\\; A = 4", explanation: "\\(1+1=2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -1\\).", workingLatex: "8 = 2B \\;\\Rightarrow\\; B = 4", explanation: "\\(1-(-1)=2\\). Symmetry confirms \\(A=B\\) for a symmetric numerator." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{8}{(1-x)(1+x)} = \\dfrac{4}{1-x} + \\dfrac{4}{1+x}", explanation: "At \\(x=0\\): \\(8 = 4+4\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{4}{1-x} + \\dfrac{4}{1+x} \\)." } },

  { id: "y2be3-011", topicRef: "y2be3", topicTitle: "Using Partial Fractions 11", difficulty: "Standard", questionText: "Express \\( \\dfrac{10}{(1+x)(1-3x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{10}{(1+x)(1-3x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1-3x}", explanation: "Two linear factors, two constants." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "10 \\equiv A(1-3x) + B(1+x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = -1\\).", workingLatex: "10 = 4A \\;\\Rightarrow\\; A = \\tfrac{5}{2}", explanation: "\\(1-3(-1) = 4\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = \\tfrac{1}{3}\\).", workingLatex: "10 = \\tfrac{4}{3}B \\;\\Rightarrow\\; B = \\tfrac{15}{2}", explanation: "\\(1+\\tfrac13 = \\tfrac43\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{10}{(1+x)(1-3x)} = \\dfrac{5}{2(1+x)} + \\dfrac{15}{2(1-3x)}", explanation: "At \\(x=0\\): \\(10 = \\tfrac52 + \\tfrac{15}{2}\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{5}{2(1+x)} + \\dfrac{15}{2(1-3x)} \\)." } },

  { id: "y2be3-012", topicRef: "y2be3", topicTitle: "Using Partial Fractions 12", difficulty: "Standard", questionText: "Express \\( \\dfrac{3x-1}{(1-x)(1+4x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3x-1}{(1-x)(1+4x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+4x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3x - 1 \\equiv A(1+4x) + B(1-x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "2 = 5A \\;\\Rightarrow\\; A = \\tfrac{2}{5}", explanation: "\\(1+4(1)=5\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -\\tfrac{1}{4}\\).", workingLatex: "-\\tfrac{7}{4} = \\tfrac{5}{4}B \\;\\Rightarrow\\; B = -\\tfrac{7}{5}", explanation: "LHS \\(3(-\\tfrac14)-1 = -\\tfrac74\\); coefficient \\(1+\\tfrac14=\\tfrac54\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3x-1}{(1-x)(1+4x)} = \\dfrac{2}{5(1-x)} - \\dfrac{7}{5(1+4x)}", explanation: "At \\(x=0\\): \\(-1 = \\tfrac25 - \\tfrac75 = -1\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{2}{5(1-x)} - \\dfrac{7}{5(1+4x)} \\)." } },

  { id: "y2be3-013", topicRef: "y2be3", topicTitle: "Using Partial Fractions 13", difficulty: "Standard", questionText: "Express \\( \\dfrac{2x-3}{(1+2x)(1-3x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{2x-3}{(1+2x)(1-3x)} \\equiv \\dfrac{A}{1+2x} + \\dfrac{B}{1-3x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "2x - 3 \\equiv A(1-3x) + B(1+2x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = -\\tfrac{1}{2}\\).", workingLatex: "-4 = \\tfrac{5}{2}A \\;\\Rightarrow\\; A = -\\tfrac{8}{5}", explanation: "LHS \\(2(-\\tfrac12)-3=-4\\); coefficient \\(1-3(-\\tfrac12) = \\tfrac52\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = \\tfrac{1}{3}\\).", workingLatex: "-\\tfrac{7}{3} = \\tfrac{5}{3}B \\;\\Rightarrow\\; B = -\\tfrac{7}{5}", explanation: "LHS \\(\\tfrac23-3=-\\tfrac73\\); coefficient \\(1+\\tfrac23=\\tfrac53\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{2x-3}{(1+2x)(1-3x)} = -\\dfrac{8}{5(1+2x)} - \\dfrac{7}{5(1-3x)}", explanation: "At \\(x=0\\): \\(-3 = -\\tfrac85 - \\tfrac75 = -3\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{8}{5(1+2x)} - \\dfrac{7}{5(1-3x)} \\)." } },

  { id: "y2be3-014", topicRef: "y2be3", topicTitle: "Using Partial Fractions 14", difficulty: "Standard", questionText: "Express \\( \\dfrac{11}{(2+x)(1-x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{11}{(2+x)(1-x)} \\equiv \\dfrac{A}{2+x} + \\dfrac{B}{1-x}", explanation: "Linear factors aren't of the form \\((1 \\pm ax)\\), but cover-up still works directly on the original factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "11 \\equiv A(1-x) + B(2+x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = -2\\).", workingLatex: "11 = 3A \\;\\Rightarrow\\; A = \\tfrac{11}{3}", explanation: "Kills \\(B\\); coefficient \\(1-(-2)=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = 1\\).", workingLatex: "11 = 3B \\;\\Rightarrow\\; B = \\tfrac{11}{3}", explanation: "Kills \\(A\\); coefficient \\(2+1=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{11}{(2+x)(1-x)} = \\dfrac{11}{3(2+x)} + \\dfrac{11}{3(1-x)}", explanation: "At \\(x=0\\): \\(\\tfrac{11}{2} = \\tfrac{11}{6} + \\tfrac{11}{3} = \\tfrac{11}{6}+\\tfrac{22}{6} = \\tfrac{33}{6} = \\tfrac{11}{2}\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{11}{3(2+x)} + \\dfrac{11}{3(1-x)} \\)." } },

  { id: "y2be3-015", topicRef: "y2be3", topicTitle: "Using Partial Fractions 15", difficulty: "Standard", questionText: "Express \\( \\dfrac{3x}{(1-x)(1+x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3x}{(1-x)(1+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+x}", explanation: "Numerator vanishes at \\(x=0\\), so the two contributions cancel there." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3x \\equiv A(1+x) + B(1-x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x = 1\\).", workingLatex: "3 = 2A \\;\\Rightarrow\\; A = \\tfrac{3}{2}", explanation: "Kills \\(B\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x = -1\\).", workingLatex: "-3 = 2B \\;\\Rightarrow\\; B = -\\tfrac{3}{2}", explanation: "Kills \\(A\\). LHS \\(-3\\); coefficient \\(1-(-1)=2\\). So \\(B\\) is negative, not \\(+\\tfrac{3}{2}\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3x}{(1-x)(1+x)} = \\dfrac{3}{2(1-x)} - \\dfrac{3}{2(1+x)}", explanation: "At \\(x=0\\): \\(0 = \\tfrac32 - \\tfrac32\\) ✓, as required since the original vanishes at \\(x=0\\)." },
  ], finalAnswer: "\\( \\dfrac{3}{2(1-x)} - \\dfrac{3}{2(1+x)} \\)." } },

  // ── Decompose + hence expand up to x² ────
  { id: "y2be3-016", topicRef: "y2be3", topicTitle: "Using Partial Fractions 16", difficulty: "Challenge", questionText: "Express \\( \\dfrac{4x-1}{(1-x)(1-2x)} \\) in partial fractions, then expand as a series in powers of \\( x \\) up to and including the term in \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (see q-002).", workingLatex: "\\dfrac{4x-1}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x}", explanation: "Two linear factors give two simple partial fractions, found by cover-up at \\(x=1\\) and \\(x=\\tfrac12\\)." },
    { stepNumber: 2, description: "State the binomial template.", workingLatex: "(1+u)^{-1} = 1 - u + u^2 - u^3 + \\cdots", explanation: "For \\(n=-1\\) the descending-factor coefficients collapse to alternating signs of \\(1\\)." },
    { stepNumber: 3, description: "Expand \\((1-x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1-x)^{-1} = 1 + x + x^2 + \\cdots", explanation: "Substituting \\(u = -x\\) flips every other sign back to positive, so all terms are \\(+\\)." },
    { stepNumber: 4, description: "Expand \\((1-2x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1-2x)^{-1} = 1 + 2x + 4x^2 + \\cdots", explanation: "Substituting \\(u = -2x\\) again gives all-positive signs and powers of \\(2\\)." },
    { stepNumber: 5, description: "Multiply by the leading constants.", workingLatex: "-3(1+x+x^2) + 2(1+2x+4x^2)", explanation: "Distribute \\(-3\\) and \\(+2\\) across the truncated series." },
    { stepNumber: 6, description: "Constant: \\(-3 + 2 = -1\\).", workingLatex: "[x^0]:\\; -1", explanation: "Quick \\(x=0\\) sanity: original equals \\(\\tfrac{-1}{1\\cdot 1} = -1\\) ✓." },
    { stepNumber: 7, description: "Linear: \\(-3(1)+2(2) = 1\\).", workingLatex: "[x^1]:\\; 1", explanation: "Coefficient of \\(x\\)." },
    { stepNumber: 8, description: "Quadratic: \\(-3(1)+2(4) = 5\\).", workingLatex: "[x^2]:\\; 5", explanation: "Coefficient of \\(x^2\\)." },
    { stepNumber: 9, description: "Assemble the series.", workingLatex: "-1 + x + 5x^2 + \\cdots", explanation: "Final truncated expansion." },
    { stepNumber: 10, description: "State validity range.", workingLatex: "|x|<1 \\text{ and } |2x|<1 \\;\\Rightarrow\\; |x|<\\tfrac{1}{2}", explanation: "The tighter of the two bounds rules; \\((1-2x)^{-1}\\) is the binding constraint." },
  ], finalAnswer: "\\( -1 + x + 5x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-017", topicRef: "y2be3", topicTitle: "Using Partial Fractions 17", difficulty: "Challenge", questionText: "Express \\( \\dfrac{5x+1}{(1-x)(1+3x)} \\) in partial fractions and hence expand up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-003).", workingLatex: "\\dfrac{5x+1}{(1-x)(1+3x)} = \\dfrac{3}{2(1-x)} - \\dfrac{1}{2(1+3x)}", explanation: "Cover-up at \\(x=1\\) and \\(x=-\\tfrac13\\) gives \\(A=\\tfrac32,\\; B=-\\tfrac12\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1-x)^{-1} = 1 + x + x^2 + \\cdots", explanation: "Standard \\(n=-1,\\;u=-x\\) expansion." },
    { stepNumber: 3, description: "Expand \\((1+3x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1+3x)^{-1} = 1 - 3x + 9x^2 - \\cdots", explanation: "Now \\(u=3x\\) so the signs alternate." },
    { stepNumber: 4, description: "Distribute the constants.", workingLatex: "\\tfrac{3}{2}(1+x+x^2) - \\tfrac{1}{2}(1-3x+9x^2)", explanation: "Multiply each expansion by its partial-fraction coefficient." },
    { stepNumber: 5, description: "Constant: \\(\\tfrac{3}{2}-\\tfrac{1}{2}=1\\).", workingLatex: "[x^0]:\\; 1", explanation: "Check vs original at \\(x=0\\): \\(\\tfrac{1}{1} = 1\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(\\tfrac{3}{2}+\\tfrac{3}{2}=3\\).", workingLatex: "[x^1]:\\; 3", explanation: "Note the second contribution is \\(-\\tfrac12 \\cdot (-3) = +\\tfrac32\\)." },
    { stepNumber: 7, description: "Quadratic: \\(\\tfrac{3}{2}-\\tfrac{9}{2}=-3\\).", workingLatex: "[x^2]:\\; -3", explanation: "The \\(9x^2\\) term dominates with the minus sign in front." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "1 + 3x - 3x^2 + \\cdots", explanation: "Truncated power series." },
    { stepNumber: 9, description: "Validity range.", workingLatex: "|x|<1 \\text{ and } |3x|<1 \\;\\Rightarrow\\; |x|<\\tfrac{1}{3}", explanation: "Tighter bound from the \\((1+3x)^{-1}\\) factor." },
  ], finalAnswer: "\\( 1 + 3x - 3x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{3} \\)." } },

  { id: "y2be3-018", topicRef: "y2be3", topicTitle: "Using Partial Fractions 18", difficulty: "Challenge", questionText: "Express \\( \\dfrac{7x+2}{(1+x)(1+2x)} \\) in partial fractions and hence expand up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-004).", workingLatex: "\\dfrac{7x+2}{(1+x)(1+2x)} = \\dfrac{5}{1+x} - \\dfrac{3}{1+2x}", explanation: "From cover-up at \\(x=-1,\\;x=-\\tfrac12\\)." },
    { stepNumber: 2, description: "Expand \\((1+x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1+x)^{-1} = 1 - x + x^2 - \\cdots", explanation: "Alternating signs because \\(u=+x\\)." },
    { stepNumber: 3, description: "Expand \\((1+2x)^{-1}\\) to \\(x^2\\).", workingLatex: "(1+2x)^{-1} = 1 - 2x + 4x^2 - \\cdots", explanation: "Same pattern, with powers of \\(2\\) and alternating signs." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "5(1-x+x^2) - 3(1-2x+4x^2)", explanation: "Multiply each expansion by its constant." },
    { stepNumber: 5, description: "Constant: \\(5-3=2\\).", workingLatex: "[x^0]:\\; 2", explanation: "Matches \\(f(0) = \\tfrac{2}{1\\cdot 1}=2\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(-5+6=1\\).", workingLatex: "[x^1]:\\; 1", explanation: "Both contributions are negative from the expansions, but the \\(-3 \\cdot (-2) = +6\\) dominates." },
    { stepNumber: 7, description: "Quadratic: \\(5-12=-7\\).", workingLatex: "[x^2]:\\; -7", explanation: "Second expansion's \\(4x^2\\) is the bigger contributor." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "2 + x - 7x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity range.", workingLatex: "|x|<1 \\text{ and } |2x|<1 \\;\\Rightarrow\\; |x|<\\tfrac{1}{2}", explanation: "Tighter of the two bounds." },
  ], finalAnswer: "\\( 2 + x - 7x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-019", topicRef: "y2be3", topicTitle: "Using Partial Fractions 19", difficulty: "Challenge", questionText: "Express \\( \\dfrac{3}{(1-x)(1-2x)} \\) in partial fractions and expand up to \\( x^2 \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-006).", workingLatex: "\\dfrac{3}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{6}{1-2x}", explanation: "Cover-up at \\(x=1\\) gives \\(A=-3\\); at \\(x=\\tfrac12\\), \\(B=6\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "Standard \\(n=-1,\\;u=-x\\)." },
    { stepNumber: 3, description: "Expand \\((1-2x)^{-1}\\).", workingLatex: "1 + 2x + 4x^2 + \\cdots", explanation: "All-positive signs from \\(u=-2x\\)." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "-3(1+x+x^2) + 6(1+2x+4x^2)", explanation: "Apply the constants from the decomposition." },
    { stepNumber: 5, description: "Constant: \\(-3+6=3\\).", workingLatex: "[x^0]:\\; 3", explanation: "Matches \\(f(0)=3\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(-3+12=9\\).", workingLatex: "[x^1]:\\; 9", explanation: "Coefficient." },
    { stepNumber: 7, description: "Quadratic: \\(-3+24=21\\).", workingLatex: "[x^2]:\\; 21", explanation: "Dominated by the second expansion's \\(4x^2\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "3 + 9x + 21x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{2}", explanation: "Tighter of \\(|x|<1\\) and \\(|2x|<1\\)." },
  ], finalAnswer: "\\( 3 + 9x + 21x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-020", topicRef: "y2be3", topicTitle: "Using Partial Fractions 20", difficulty: "Challenge", questionText: "Express \\( \\dfrac{4}{(1-x)(1+3x)} \\) in partial fractions and expand up to \\( x^2 \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-007).", workingLatex: "\\dfrac{4}{(1-x)(1+3x)} = \\dfrac{1}{1-x} + \\dfrac{3}{1+3x}", explanation: "Cover-up at \\(x=1\\) and \\(x=-\\tfrac13\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "All-positive series." },
    { stepNumber: 3, description: "Expand \\((1+3x)^{-1}\\).", workingLatex: "1 - 3x + 9x^2 - \\cdots", explanation: "Alternating with powers of \\(3\\)." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "(1+x+x^2) + 3(1-3x+9x^2)", explanation: "Multiply each expansion by its constant." },
    { stepNumber: 5, description: "Constant: \\(1+3=4\\).", workingLatex: "[x^0]:\\; 4", explanation: "Matches \\(f(0)=4\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(1-9=-8\\).", workingLatex: "[x^1]:\\; -8", explanation: "The \\(3\\cdot(-3)\\) contribution dominates." },
    { stepNumber: 7, description: "Quadratic: \\(1+27=28\\).", workingLatex: "[x^2]:\\; 28", explanation: "From \\(1 + 3\\cdot 9\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "4 - 8x + 28x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{3}", explanation: "Tighter of \\(|x|<1,\\;|3x|<1\\)." },
  ], finalAnswer: "\\( 4 - 8x + 28x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{3} \\)." } },

  { id: "y2be3-021", topicRef: "y2be3", topicTitle: "Using Partial Fractions 21", difficulty: "Challenge", questionText: "Expand \\( \\dfrac{8}{(1-x)(1+x)} \\) as a series in \\( x \\) up to \\( x^2 \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-010).", workingLatex: "\\dfrac{8}{(1-x)(1+x)} = \\dfrac{4}{1-x} + \\dfrac{4}{1+x}", explanation: "Symmetric numerator gives \\(A=B=4\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "Standard." },
    { stepNumber: 3, description: "Expand \\((1+x)^{-1}\\).", workingLatex: "1 - x + x^2 - \\cdots", explanation: "Alternating." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "4(1+x+x^2) + 4(1-x+x^2)", explanation: "Multiply through by \\(4\\) twice." },
    { stepNumber: 5, description: "Linear terms cancel.", workingLatex: "4x - 4x = 0", explanation: "By symmetry, odd powers vanish — the original function is even." },
    { stepNumber: 6, description: "Even terms add.", workingLatex: "8 + 8x^2 + \\cdots", explanation: "Constants \\(4+4=8\\); quadratics \\(4+4=8\\)." },
    { stepNumber: 7, description: "Validity.", workingLatex: "|x| < 1", explanation: "Both factors share the bound \\(|x|<1\\)." },
  ], finalAnswer: "\\( 8 + 8x^2 + \\cdots \\), valid for \\( |x| < 1 \\)." } },

  // ── More decompositions, varied coefficients ────
  { id: "y2be3-022", topicRef: "y2be3", topicTitle: "Using Partial Fractions 22", difficulty: "Standard", questionText: "Express \\( \\dfrac{x+11}{(1+x)(2-x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x+11}{(1+x)(2-x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{2-x}", explanation: "Two linear factors, two constants." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x + 11 \\equiv A(2-x) + B(1+x)", explanation: "Polynomial identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "10 = 3A \\;\\Rightarrow\\; A = \\tfrac{10}{3}", explanation: "Coefficient \\(2-(-1)=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=2\\).", workingLatex: "13 = 3B \\;\\Rightarrow\\; B = \\tfrac{13}{3}", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x+11}{(1+x)(2-x)} = \\dfrac{10}{3(1+x)} + \\dfrac{13}{3(2-x)}", explanation: "At \\(x=0\\): \\(\\tfrac{11}{2} = \\tfrac{10}{3} + \\tfrac{13}{6} = \\tfrac{20+13}{6} = \\tfrac{33}{6}\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{10}{3(1+x)} + \\dfrac{13}{3(2-x)} \\)." } },

  { id: "y2be3-023", topicRef: "y2be3", topicTitle: "Using Partial Fractions 23", difficulty: "Standard", questionText: "Express \\( \\dfrac{9}{(2-x)(3+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{9}{(2-x)(3+x)} \\equiv \\dfrac{A}{2-x} + \\dfrac{B}{3+x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "9 \\equiv A(3+x) + B(2-x)", explanation: "Identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=2\\).", workingLatex: "9 = 5A \\;\\Rightarrow\\; A = \\tfrac{9}{5}", explanation: "Coefficient \\(3+2=5\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-3\\).", workingLatex: "9 = 5B \\;\\Rightarrow\\; B = \\tfrac{9}{5}", explanation: "Coefficient \\(2-(-3)=5\\). Same as \\(A\\) because the numerator is constant." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{9}{(2-x)(3+x)} = \\dfrac{9}{5(2-x)} + \\dfrac{9}{5(3+x)}", explanation: "Check at \\(x=0\\): \\(\\tfrac{9}{6} = \\tfrac{3}{2}\\); RHS \\(\\tfrac{9}{10}+\\tfrac{9}{15} = \\tfrac{27+18}{30} = \\tfrac{45}{30} = \\tfrac{3}{2}\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{9}{5(2-x)} + \\dfrac{9}{5(3+x)} \\)." } },

  { id: "y2be3-024", topicRef: "y2be3", topicTitle: "Using Partial Fractions 24", difficulty: "Standard", questionText: "Express \\( \\dfrac{5}{(1+2x)(2-x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{5}{(1+2x)(2-x)} \\equiv \\dfrac{A}{1+2x} + \\dfrac{B}{2-x}", explanation: "Two factors, two constants." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "5 \\equiv A(2-x) + B(1+2x)", explanation: "Identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "5 = \\tfrac{5}{2}A \\;\\Rightarrow\\; A = 2", explanation: "Coefficient \\(2-(-\\tfrac12) = \\tfrac52\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=2\\).", workingLatex: "5 = 5B \\;\\Rightarrow\\; B = 1", explanation: "Coefficient \\(1+2(2)=5\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{5}{(1+2x)(2-x)} = \\dfrac{2}{1+2x} + \\dfrac{1}{2-x}", explanation: "At \\(x=0\\): \\(\\tfrac{5}{2} = 2 + \\tfrac12 = \\tfrac52\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{2}{1+2x} + \\dfrac{1}{2-x} \\)." } },

  { id: "y2be3-025", topicRef: "y2be3", topicTitle: "Using Partial Fractions 25", difficulty: "Standard", questionText: "Express \\( \\dfrac{x-4}{(1+x)(1+4x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x-4}{(1+x)(1+4x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1+4x}", explanation: "Two distinct linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x - 4 \\equiv A(1+4x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "-5 = -3A \\;\\Rightarrow\\; A = \\tfrac{5}{3}", explanation: "Coefficient \\(1+4(-1)=-3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{4}\\).", workingLatex: "-\\tfrac{17}{4} = \\tfrac{3}{4}B \\;\\Rightarrow\\; B = -\\tfrac{17}{3}", explanation: "LHS \\(-\\tfrac14 - 4 = -\\tfrac{17}{4}\\); coefficient \\(1-\\tfrac14 = \\tfrac34\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x-4}{(1+x)(1+4x)} = \\dfrac{5}{3(1+x)} - \\dfrac{17}{3(1+4x)}", explanation: "At \\(x=0\\): \\(-4 = \\tfrac53 - \\tfrac{17}{3} = -\\tfrac{12}{3} = -4\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{5}{3(1+x)} - \\dfrac{17}{3(1+4x)} \\)." } },

  { id: "y2be3-026", topicRef: "y2be3", topicTitle: "Using Partial Fractions 26", difficulty: "Standard", questionText: "Express \\( \\dfrac{3x+8}{(1-x)(2+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3x+8}{(1-x)(2+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{2+x}", explanation: "Standard two-factor split." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3x + 8 \\equiv A(2+x) + B(1-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "11 = 3A \\;\\Rightarrow\\; A = \\tfrac{11}{3}", explanation: "Coefficient \\(2+1=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-2\\).", workingLatex: "2 = 3B \\;\\Rightarrow\\; B = \\tfrac{2}{3}", explanation: "LHS \\(-6+8=2\\); coefficient \\(1-(-2)=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3x+8}{(1-x)(2+x)} = \\dfrac{11}{3(1-x)} + \\dfrac{2}{3(2+x)}", explanation: "At \\(x=0\\): \\(4 = \\tfrac{11}{3} + \\tfrac{2}{6} = \\tfrac{11}{3}+\\tfrac13 = 4\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{11}{3(1-x)} + \\dfrac{2}{3(2+x)} \\)." } },

  { id: "y2be3-027", topicRef: "y2be3", topicTitle: "Using Partial Fractions 27", difficulty: "Standard", questionText: "Express \\( \\dfrac{6}{(1-2x)(1+3x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{6}{(1-2x)(1+3x)} \\equiv \\dfrac{A}{1-2x} + \\dfrac{B}{1+3x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "6 \\equiv A(1+3x) + B(1-2x)", explanation: "Identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=\\tfrac{1}{2}\\).", workingLatex: "6 = \\tfrac{5}{2}A \\;\\Rightarrow\\; A = \\tfrac{12}{5}", explanation: "Coefficient \\(1+3(\\tfrac12) = \\tfrac52\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{3}\\).", workingLatex: "6 = \\tfrac{5}{3}B \\;\\Rightarrow\\; B = \\tfrac{18}{5}", explanation: "Coefficient \\(1-2(-\\tfrac13) = \\tfrac53\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{6}{(1-2x)(1+3x)} = \\dfrac{12}{5(1-2x)} + \\dfrac{18}{5(1+3x)}", explanation: "At \\(x=0\\): \\(6 = \\tfrac{12+18}{5} = \\tfrac{30}{5} = 6\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{12}{5(1-2x)} + \\dfrac{18}{5(1+3x)} \\)." } },

  { id: "y2be3-028", topicRef: "y2be3", topicTitle: "Using Partial Fractions 28", difficulty: "Standard", questionText: "Express \\( \\dfrac{2x+7}{(1+2x)(1-x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{2x+7}{(1+2x)(1-x)} \\equiv \\dfrac{A}{1+2x} + \\dfrac{B}{1-x}", explanation: "Two distinct linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "2x + 7 \\equiv A(1-x) + B(1+2x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "6 = \\tfrac{3}{2}A \\;\\Rightarrow\\; A = 4", explanation: "LHS \\(-1+7=6\\); coefficient \\(1-(-\\tfrac12)=\\tfrac32\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=1\\).", workingLatex: "9 = 3B \\;\\Rightarrow\\; B = 3", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{2x+7}{(1+2x)(1-x)} = \\dfrac{4}{1+2x} + \\dfrac{3}{1-x}", explanation: "At \\(x=0\\): \\(7 = 4+3\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{4}{1+2x} + \\dfrac{3}{1-x} \\)." } },

  { id: "y2be3-029", topicRef: "y2be3", topicTitle: "Using Partial Fractions 29", difficulty: "Standard", questionText: "Express \\( \\dfrac{x}{(1+x)(1-2x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x}{(1+x)(1-2x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1-2x}", explanation: "Numerator is just \\(x\\), so \\(f(0)=0\\) and the constants must cancel." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x \\equiv A(1-2x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "-1 = 3A \\;\\Rightarrow\\; A = -\\tfrac{1}{3}", explanation: "Coefficient \\(1-2(-1)=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=\\tfrac{1}{2}\\).", workingLatex: "\\tfrac{1}{2} = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = \\tfrac{1}{3}", explanation: "Coefficient \\(1+\\tfrac12 = \\tfrac32\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x}{(1+x)(1-2x)} = -\\dfrac{1}{3(1+x)} + \\dfrac{1}{3(1-2x)}", explanation: "At \\(x=0\\): \\(0 = -\\tfrac13+\\tfrac13\\) ✓ — constants cancel as expected." },
  ], finalAnswer: "\\( -\\dfrac{1}{3(1+x)} + \\dfrac{1}{3(1-2x)} \\)." } },

  { id: "y2be3-030", topicRef: "y2be3", topicTitle: "Using Partial Fractions 30", difficulty: "Standard", questionText: "Express \\( \\dfrac{x+5}{(1-3x)(1+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x+5}{(1-3x)(1+x)} \\equiv \\dfrac{A}{1-3x} + \\dfrac{B}{1+x}", explanation: "Two distinct linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x + 5 \\equiv A(1+x) + B(1-3x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=\\tfrac{1}{3}\\).", workingLatex: "\\tfrac{16}{3} = \\tfrac{4}{3}A \\;\\Rightarrow\\; A = 4", explanation: "LHS \\(\\tfrac13+5=\\tfrac{16}{3}\\); coefficient \\(1+\\tfrac13=\\tfrac43\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-1\\).", workingLatex: "4 = 4B \\;\\Rightarrow\\; B = 1", explanation: "Coefficient \\(1-3(-1)=4\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x+5}{(1-3x)(1+x)} = \\dfrac{4}{1-3x} + \\dfrac{1}{1+x}", explanation: "At \\(x=0\\): \\(5 = 4+1\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{4}{1-3x} + \\dfrac{1}{1+x} \\)." } },

  { id: "y2be3-031", topicRef: "y2be3", topicTitle: "Using Partial Fractions 31", difficulty: "Standard", questionText: "Express \\( \\dfrac{2}{(1+x)(1-x)} \\) in partial fractions.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{2}{(1+x)(1-x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1-x}", explanation: "Symmetric denominator, constant numerator." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "2 \\equiv A(1-x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up.", workingLatex: "x=-1\\!:\\;2=2A\\Rightarrow A=1;\\quad x=1\\!:\\;2=2B\\Rightarrow B=1", explanation: "Both come out equal to \\(1\\) by symmetry." },
    { stepNumber: 4, description: "Assemble.", workingLatex: "\\dfrac{2}{(1+x)(1-x)} = \\dfrac{1}{1+x} + \\dfrac{1}{1-x}", explanation: "At \\(x=0\\): \\(2 = 1+1\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{1}{1+x} + \\dfrac{1}{1-x} \\)." } },

  { id: "y2be3-032", topicRef: "y2be3", topicTitle: "Using Partial Fractions 32", difficulty: "Standard", questionText: "Express \\( \\dfrac{x+4}{(1-x)(1+2x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x+4}{(1-x)(1+2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}", explanation: "Standard split." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x + 4 \\equiv A(1+2x) + B(1-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "5 = 3A \\;\\Rightarrow\\; A = \\tfrac{5}{3}", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "\\tfrac{7}{2} = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = \\tfrac{7}{3}", explanation: "LHS \\(-\\tfrac12+4=\\tfrac72\\); coefficient \\(1-(-\\tfrac12)=\\tfrac32\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x+4}{(1-x)(1+2x)} = \\dfrac{5}{3(1-x)} + \\dfrac{7}{3(1+2x)}", explanation: "At \\(x=0\\): \\(4 = \\tfrac{5}{3}+\\tfrac{7}{3} = 4\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{5}{3(1-x)} + \\dfrac{7}{3(1+2x)} \\)." } },

  { id: "y2be3-033", topicRef: "y2be3", topicTitle: "Using Partial Fractions 33", difficulty: "Standard", questionText: "Express \\( \\dfrac{5x-4}{(1+x)(1-x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{5x-4}{(1+x)(1-x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1-x}", explanation: "Symmetric denominator." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "5x - 4 \\equiv A(1-x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "-9 = 2A \\;\\Rightarrow\\; A = -\\tfrac{9}{2}", explanation: "Coefficient \\(1-(-1)=2\\); LHS \\(-5-4=-9\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=1\\).", workingLatex: "1 = 2B \\;\\Rightarrow\\; B = \\tfrac{1}{2}", explanation: "Coefficient \\(1+1=2\\); LHS \\(5-4=1\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{5x-4}{(1+x)(1-x)} = -\\dfrac{9}{2(1+x)} + \\dfrac{1}{2(1-x)}", explanation: "At \\(x=0\\): \\(-4 = -\\tfrac92+\\tfrac12 = -4\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{9}{2(1+x)} + \\dfrac{1}{2(1-x)} \\)." } },

  { id: "y2be3-034", topicRef: "y2be3", topicTitle: "Using Partial Fractions 34", difficulty: "Standard", questionText: "Express \\( \\dfrac{7}{(1-x)(2+x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{7}{(1-x)(2+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{2+x}", explanation: "Two factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "7 \\equiv A(2+x) + B(1-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "7 = 3A \\;\\Rightarrow\\; A = \\tfrac{7}{3}", explanation: "Coefficient \\(2+1=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-2\\).", workingLatex: "7 = 3B \\;\\Rightarrow\\; B = \\tfrac{7}{3}", explanation: "Coefficient \\(1-(-2)=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{7}{(1-x)(2+x)} = \\dfrac{7}{3(1-x)} + \\dfrac{7}{3(2+x)}", explanation: "At \\(x=0\\): \\(\\tfrac{7}{2} = \\tfrac{7}{3}+\\tfrac{7}{6} = \\tfrac{14+7}{6} = \\tfrac{21}{6} = \\tfrac{7}{2}\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{7}{3(1-x)} + \\dfrac{7}{3(2+x)} \\)." } },

  { id: "y2be3-035", topicRef: "y2be3", topicTitle: "Using Partial Fractions 35", difficulty: "Standard", questionText: "Express \\( \\dfrac{12}{(1+2x)(1-x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{12}{(1+2x)(1-x)} \\equiv \\dfrac{A}{1+2x} + \\dfrac{B}{1-x}", explanation: "Two distinct factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "12 \\equiv A(1-x) + B(1+2x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "12 = \\tfrac{3}{2}A \\;\\Rightarrow\\; A = 8", explanation: "Coefficient \\(1-(-\\tfrac12)=\\tfrac32\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=1\\).", workingLatex: "12 = 3B \\;\\Rightarrow\\; B = 4", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{12}{(1+2x)(1-x)} = \\dfrac{8}{1+2x} + \\dfrac{4}{1-x}", explanation: "At \\(x=0\\): \\(12 = 8+4\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{8}{1+2x} + \\dfrac{4}{1-x} \\)." } },

  { id: "y2be3-036", topicRef: "y2be3", topicTitle: "Using Partial Fractions 36", difficulty: "Standard", questionText: "Express \\( \\dfrac{x+2}{(1+3x)(1-2x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x+2}{(1+3x)(1-2x)} \\equiv \\dfrac{A}{1+3x} + \\dfrac{B}{1-2x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x + 2 \\equiv A(1-2x) + B(1+3x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{3}\\).", workingLatex: "\\tfrac{5}{3} = \\tfrac{5}{3}A \\;\\Rightarrow\\; A = 1", explanation: "LHS \\(-\\tfrac13+2=\\tfrac53\\); coefficient \\(1-2(-\\tfrac13)=\\tfrac53\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=\\tfrac{1}{2}\\).", workingLatex: "\\tfrac{5}{2} = \\tfrac{5}{2}B \\;\\Rightarrow\\; B = 1", explanation: "LHS \\(\\tfrac12+2=\\tfrac52\\); coefficient \\(1+\\tfrac32=\\tfrac52\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x+2}{(1+3x)(1-2x)} = \\dfrac{1}{1+3x} + \\dfrac{1}{1-2x}", explanation: "At \\(x=0\\): \\(2 = 1+1\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{1}{1+3x} + \\dfrac{1}{1-2x} \\)." } },

  { id: "y2be3-037", topicRef: "y2be3", topicTitle: "Using Partial Fractions 37", difficulty: "Standard", questionText: "Express \\( \\dfrac{15}{(2-x)(3+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{15}{(2-x)(3+x)} \\equiv \\dfrac{A}{2-x} + \\dfrac{B}{3+x}", explanation: "Constant numerator." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "15 \\equiv A(3+x) + B(2-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=2\\).", workingLatex: "15 = 5A \\;\\Rightarrow\\; A = 3", explanation: "Coefficient \\(3+2=5\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-3\\).", workingLatex: "15 = 5B \\;\\Rightarrow\\; B = 3", explanation: "Coefficient \\(2-(-3)=5\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{15}{(2-x)(3+x)} = \\dfrac{3}{2-x} + \\dfrac{3}{3+x}", explanation: "At \\(x=0\\): \\(\\tfrac{15}{6} = \\tfrac{5}{2}\\); RHS \\(\\tfrac32+1=\\tfrac52\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{3}{2-x} + \\dfrac{3}{3+x} \\)." } },

  { id: "y2be3-038", topicRef: "y2be3", topicTitle: "Using Partial Fractions 38", difficulty: "Standard", questionText: "Express \\( \\dfrac{4x+3}{(1-x)(1+2x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{4x+3}{(1-x)(1+2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "4x + 3 \\equiv A(1+2x) + B(1-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "7 = 3A \\;\\Rightarrow\\; A = \\tfrac{7}{3}", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "1 = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = \\tfrac{2}{3}", explanation: "LHS \\(-2+3=1\\); coefficient \\(1-(-\\tfrac12)=\\tfrac32\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{4x+3}{(1-x)(1+2x)} = \\dfrac{7}{3(1-x)} + \\dfrac{2}{3(1+2x)}", explanation: "At \\(x=0\\): \\(3 = \\tfrac73+\\tfrac23 = 3\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{7}{3(1-x)} + \\dfrac{2}{3(1+2x)} \\)." } },

  { id: "y2be3-039", topicRef: "y2be3", topicTitle: "Using Partial Fractions 39", difficulty: "Standard", questionText: "Express \\( \\dfrac{x-3}{(2-x)(1+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x-3}{(2-x)(1+x)} \\equiv \\dfrac{A}{2-x} + \\dfrac{B}{1+x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x - 3 \\equiv A(1+x) + B(2-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=2\\).", workingLatex: "-1 = 3A \\;\\Rightarrow\\; A = -\\tfrac{1}{3}", explanation: "Coefficient \\(1+2=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-1\\).", workingLatex: "-4 = 3B \\;\\Rightarrow\\; B = -\\tfrac{4}{3}", explanation: "Coefficient \\(2-(-1)=3\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x-3}{(2-x)(1+x)} = -\\dfrac{1}{3(2-x)} - \\dfrac{4}{3(1+x)}", explanation: "At \\(x=0\\): \\(-\\tfrac32 = -\\tfrac16 - \\tfrac43 = -\\tfrac{1+8}{6} = -\\tfrac32\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{1}{3(2-x)} - \\dfrac{4}{3(1+x)} \\)." } },

  { id: "y2be3-040", topicRef: "y2be3", topicTitle: "Using Partial Fractions 40", difficulty: "Standard", questionText: "Express \\( \\dfrac{6x+5}{(1-x)(1+x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{6x+5}{(1-x)(1+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+x}", explanation: "Symmetric denominator, linear numerator." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "6x + 5 \\equiv A(1+x) + B(1-x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "11 = 2A \\;\\Rightarrow\\; A = \\tfrac{11}{2}", explanation: "Coefficient \\(1+1=2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-1\\).", workingLatex: "-1 = 2B \\;\\Rightarrow\\; B = -\\tfrac{1}{2}", explanation: "LHS \\(-6+5=-1\\); coefficient \\(1-(-1)=2\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{6x+5}{(1-x)(1+x)} = \\dfrac{11}{2(1-x)} - \\dfrac{1}{2(1+x)}", explanation: "At \\(x=0\\): \\(5 = \\tfrac{11}{2}-\\tfrac12 = 5\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{11}{2(1-x)} - \\dfrac{1}{2(1+x)} \\)." } },

  // ── Decompose + Expand (further examples) ────
  { id: "y2be3-041", topicRef: "y2be3", topicTitle: "Using Partial Fractions 41", difficulty: "Challenge", questionText: "Express \\( \\dfrac{x+4}{(1-x)(1+2x)} \\) in partial fractions and hence expand up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-032).", workingLatex: "\\dfrac{x+4}{(1-x)(1+2x)} = \\dfrac{5}{3(1-x)} + \\dfrac{7}{3(1+2x)}", explanation: "Cover-up gives \\(A=\\tfrac53,\\;B=\\tfrac73\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "All-positive geometric series." },
    { stepNumber: 3, description: "Expand \\((1+2x)^{-1}\\).", workingLatex: "1 - 2x + 4x^2 - \\cdots", explanation: "Alternating with powers of \\(2\\)." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "\\tfrac{5}{3}(1+x+x^2) + \\tfrac{7}{3}(1-2x+4x^2)", explanation: "Apply the constants." },
    { stepNumber: 5, description: "Constant: \\(\\tfrac{5}{3}+\\tfrac{7}{3}=4\\).", workingLatex: "[x^0]:\\; 4", explanation: "Matches \\(f(0)=4\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(\\tfrac{5}{3}-\\tfrac{14}{3}=-3\\).", workingLatex: "[x^1]:\\; -3", explanation: "Second contribution \\(\\tfrac73 \\cdot (-2)\\) dominates." },
    { stepNumber: 7, description: "Quadratic: \\(\\tfrac{5}{3}+\\tfrac{28}{3}=11\\).", workingLatex: "[x^2]:\\; 11", explanation: "Both positive: \\(\\tfrac{5+28}{3}=11\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "4 - 3x + 11x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{2}", explanation: "Tighter of \\(|x|<1,\\;|2x|<1\\)." },
  ], finalAnswer: "\\( 4 - 3x + 11x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-042", topicRef: "y2be3", topicTitle: "Using Partial Fractions 42", difficulty: "Challenge", questionText: "Express \\( \\dfrac{x}{(1+x)(1-2x)} \\) in partial fractions and expand up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-029).", workingLatex: "\\dfrac{x}{(1+x)(1-2x)} = -\\dfrac{1}{3(1+x)} + \\dfrac{1}{3(1-2x)}", explanation: "The constants must cancel since \\(f(0)=0\\)." },
    { stepNumber: 2, description: "Expand \\((1+x)^{-1}\\).", workingLatex: "1 - x + x^2 - \\cdots", explanation: "Alternating-sign series." },
    { stepNumber: 3, description: "Expand \\((1-2x)^{-1}\\).", workingLatex: "1 + 2x + 4x^2 + \\cdots", explanation: "All-positive with powers of \\(2\\)." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "-\\tfrac{1}{3}(1-x+x^2) + \\tfrac{1}{3}(1+2x+4x^2)", explanation: "Apply the constants." },
    { stepNumber: 5, description: "Constant: \\(-\\tfrac{1}{3}+\\tfrac{1}{3}=0\\).", workingLatex: "[x^0]:\\; 0", explanation: "Expected — original is \\(x\\cdot(\\ldots)\\)." },
    { stepNumber: 6, description: "Linear: \\(\\tfrac{1}{3}+\\tfrac{2}{3}=1\\).", workingLatex: "[x^1]:\\; 1", explanation: "Both contributions add: \\(-\\tfrac13(-1)+\\tfrac13(2)\\)." },
    { stepNumber: 7, description: "Quadratic: \\(-\\tfrac{1}{3}+\\tfrac{4}{3}=1\\).", workingLatex: "[x^2]:\\; 1", explanation: "Coefficient \\(1\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "x + x^2 + \\cdots", explanation: "No constant term, as expected." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{2}", explanation: "Tighter of \\(|x|<1,\\;|2x|<1\\)." },
  ], finalAnswer: "\\( x + x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-043", topicRef: "y2be3", topicTitle: "Using Partial Fractions 43", difficulty: "Challenge", questionText: "Expand \\( \\dfrac{2}{(1+x)(1-x)} \\) as a power series in \\( x \\) up to \\( x^2 \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-031).", workingLatex: "\\dfrac{2}{(1+x)(1-x)} = \\dfrac{1}{1+x} + \\dfrac{1}{1-x}", explanation: "Symmetric: \\(A=B=1\\)." },
    { stepNumber: 2, description: "Expand \\((1+x)^{-1}\\).", workingLatex: "1 - x + x^2 - \\cdots", explanation: "Alternating." },
    { stepNumber: 3, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "All-positive." },
    { stepNumber: 4, description: "Add: odd powers cancel.", workingLatex: "(1-x+x^2) + (1+x+x^2) = 2 + 2x^2 + \\cdots", explanation: "Original \\(\\tfrac{2}{1-x^2}\\) is even — only even powers survive." },
    { stepNumber: 5, description: "Validity.", workingLatex: "|x| < 1", explanation: "Both factors share the bound." },
  ], finalAnswer: "\\( 2 + 2x^2 + \\cdots \\), valid for \\( |x| < 1 \\)." } },

  { id: "y2be3-044", topicRef: "y2be3", topicTitle: "Using Partial Fractions 44", difficulty: "Challenge", questionText: "Expand \\( \\dfrac{x+5}{(1-3x)(1+x)} \\) as a power series in \\( x \\) up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-030).", workingLatex: "\\dfrac{x+5}{(1-3x)(1+x)} = \\dfrac{4}{1-3x} + \\dfrac{1}{1+x}", explanation: "Cover-up gives \\(A=4,\\;B=1\\)." },
    { stepNumber: 2, description: "Expand \\((1-3x)^{-1}\\).", workingLatex: "1 + 3x + 9x^2 + \\cdots", explanation: "All-positive with powers of \\(3\\)." },
    { stepNumber: 3, description: "Expand \\((1+x)^{-1}\\).", workingLatex: "1 - x + x^2 - \\cdots", explanation: "Alternating." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "4(1+3x+9x^2) + (1-x+x^2)", explanation: "Apply constants \\(4\\) and \\(1\\)." },
    { stepNumber: 5, description: "Constant: \\(4+1=5\\).", workingLatex: "[x^0]:\\; 5", explanation: "Matches \\(f(0)=5\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(12-1=11\\).", workingLatex: "[x^1]:\\; 11", explanation: "\\(4\\cdot 3 + 1\\cdot (-1)\\)." },
    { stepNumber: 7, description: "Quadratic: \\(36+1=37\\).", workingLatex: "[x^2]:\\; 37", explanation: "\\(4\\cdot 9 + 1\\cdot 1\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "5 + 11x + 37x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{3}", explanation: "Tighter of \\(|3x|<1\\) and \\(|x|<1\\)." },
  ], finalAnswer: "\\( 5 + 11x + 37x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{3} \\)." } },

  { id: "y2be3-045", topicRef: "y2be3", topicTitle: "Using Partial Fractions 45", difficulty: "Challenge", questionText: "Express \\( \\dfrac{2x+7}{(1+2x)(1-x)} \\) as a power series up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-028).", workingLatex: "\\dfrac{2x+7}{(1+2x)(1-x)} = \\dfrac{4}{1+2x} + \\dfrac{3}{1-x}", explanation: "From cover-up: \\(A=4,\\;B=3\\)." },
    { stepNumber: 2, description: "Expand \\((1+2x)^{-1}\\).", workingLatex: "1 - 2x + 4x^2 - \\cdots", explanation: "Alternating, powers of \\(2\\)." },
    { stepNumber: 3, description: "Expand \\((1-x)^{-1}\\).", workingLatex: "1 + x + x^2 + \\cdots", explanation: "Standard." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "4(1-2x+4x^2) + 3(1+x+x^2)", explanation: "Apply the constants \\(4\\) and \\(3\\)." },
    { stepNumber: 5, description: "Constant: \\(4+3=7\\).", workingLatex: "[x^0]:\\; 7", explanation: "Matches \\(f(0)=7\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(-8+3=-5\\).", workingLatex: "[x^1]:\\; -5", explanation: "Negative because the \\(4\\cdot(-2)\\) term dominates." },
    { stepNumber: 7, description: "Quadratic: \\(16+3=19\\).", workingLatex: "[x^2]:\\; 19", explanation: "Both positive: \\(16+3\\)." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "7 - 5x + 19x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{2}", explanation: "Tighter of \\(|2x|<1\\) and \\(|x|<1\\)." },
  ], finalAnswer: "\\( 7 - 5x + 19x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-046", topicRef: "y2be3", topicTitle: "Using Partial Fractions 46", difficulty: "Challenge", questionText: "Express \\( \\dfrac{3}{(1-x)(1+x)} \\) as a power series up to \\( x^4 \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Decompose.", workingLatex: "\\dfrac{3}{(1-x)(1+x)} = \\dfrac{3}{2(1-x)} + \\dfrac{3}{2(1+x)}", explanation: "Symmetry: cover-up at \\(x=1\\) gives \\(A=\\tfrac32\\); at \\(x=-1\\), \\(B=\\tfrac32\\)." },
    { stepNumber: 2, description: "Expand \\((1-x)^{-1}\\) to \\(x^4\\).", workingLatex: "1 + x + x^2 + x^3 + x^4 + \\cdots", explanation: "All-positive geometric series." },
    { stepNumber: 3, description: "Expand \\((1+x)^{-1}\\) to \\(x^4\\).", workingLatex: "1 - x + x^2 - x^3 + x^4 - \\cdots", explanation: "Alternating." },
    { stepNumber: 4, description: "Add.", workingLatex: "\\tfrac{3}{2}(1+x+x^2+x^3+x^4) + \\tfrac{3}{2}(1-x+x^2-x^3+x^4)", explanation: "Distribute \\(\\tfrac32\\)." },
    { stepNumber: 5, description: "Odd terms cancel.", workingLatex: "\\tfrac{3}{2}x - \\tfrac{3}{2}x = 0,\\quad \\tfrac{3}{2}x^3-\\tfrac{3}{2}x^3=0", explanation: "Original \\(\\tfrac{3}{1-x^2}\\) is an even function." },
    { stepNumber: 6, description: "Even terms double.", workingLatex: "3 + 3x^2 + 3x^4 + \\cdots", explanation: "Each pair sums to \\(2 \\cdot \\tfrac32 = 3\\)." },
    { stepNumber: 7, description: "Validity.", workingLatex: "|x| < 1", explanation: "Common bound for both factors." },
  ], finalAnswer: "\\( 3 + 3x^2 + 3x^4 + \\cdots \\), valid for \\( |x| < 1 \\)." } },

  { id: "y2be3-047", topicRef: "y2be3", topicTitle: "Using Partial Fractions 47", difficulty: "Challenge", questionText: "Express \\( \\dfrac{6}{(1-2x)(1+3x)} \\) up to \\( x^2 \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "binomial"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-027).", workingLatex: "\\dfrac{6}{(1-2x)(1+3x)} = \\dfrac{12}{5(1-2x)} + \\dfrac{18}{5(1+3x)}", explanation: "\\(A=\\tfrac{12}{5},\\;B=\\tfrac{18}{5}\\)." },
    { stepNumber: 2, description: "Expand \\((1-2x)^{-1}\\).", workingLatex: "1 + 2x + 4x^2 + \\cdots", explanation: "All-positive, powers of \\(2\\)." },
    { stepNumber: 3, description: "Expand \\((1+3x)^{-1}\\).", workingLatex: "1 - 3x + 9x^2 - \\cdots", explanation: "Alternating, powers of \\(3\\)." },
    { stepNumber: 4, description: "Distribute.", workingLatex: "\\tfrac{12}{5}(1+2x+4x^2) + \\tfrac{18}{5}(1-3x+9x^2)", explanation: "Apply the constants." },
    { stepNumber: 5, description: "Constant: \\(\\tfrac{12+18}{5}=6\\).", workingLatex: "[x^0]:\\; 6", explanation: "Matches \\(f(0)=6\\) ✓." },
    { stepNumber: 6, description: "Linear: \\(\\tfrac{24}{5}-\\tfrac{54}{5}=-6\\).", workingLatex: "[x^1]:\\; -6", explanation: "Net negative." },
    { stepNumber: 7, description: "Quadratic: \\(\\tfrac{48+162}{5}=42\\).", workingLatex: "[x^2]:\\; 42", explanation: "Both positive contributions." },
    { stepNumber: 8, description: "Assemble.", workingLatex: "6 - 6x + 42x^2 + \\cdots", explanation: "Truncated series." },
    { stepNumber: 9, description: "Validity.", workingLatex: "|x| < \\tfrac{1}{3}", explanation: "Tighter of \\(|2x|<1,\\;|3x|<1\\)." },
  ], finalAnswer: "\\( 6 - 6x + 42x^2 + \\cdots \\), valid for \\( |x| < \\tfrac{1}{3} \\)." } },

  // ── Validity-range only questions ────
  { id: "y2be3-048", topicRef: "y2be3", topicTitle: "Using Partial Fractions 48", difficulty: "Foundation", questionText: "For a series expansion of \\( \\dfrac{1}{(1-x)(1-2x)} \\), state the range of \\( x \\) for which the expansion is valid.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["validity"], workedSolution: { steps: [
    { stepNumber: 1, description: "Identify the convergence conditions.", workingLatex: "|x| < 1 \\quad\\text{and}\\quad |2x| < 1", explanation: "Each binomial series \\((1+u)^n\\) converges where \\(|u|<1\\); here the two values of \\(u\\) are \\(-x\\) and \\(-2x\\)." },
    { stepNumber: 2, description: "Solve each for \\(|x|\\).", workingLatex: "|x| < 1 \\quad\\text{and}\\quad |x| < \\tfrac{1}{2}", explanation: "Divide the second inequality through by \\(2\\)." },
    { stepNumber: 3, description: "Take the tighter (intersection).", workingLatex: "|x| < \\tfrac{1}{2}", explanation: "Both series must converge, so the binding constraint is the smaller of the two upper bounds." },
  ], finalAnswer: "\\( |x| < \\tfrac{1}{2} \\)." } },

  { id: "y2be3-049", topicRef: "y2be3", topicTitle: "Using Partial Fractions 49", difficulty: "Foundation", questionText: "State the range of \\( x \\) for which the series expansion of \\( \\dfrac{1}{(1+x)(1-3x)} \\) is valid.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["validity"], workedSolution: { steps: [
    { stepNumber: 1, description: "Read off the convergence conditions.", workingLatex: "|x| < 1 \\quad\\text{and}\\quad |3x| < 1", explanation: "From the two binomial-series factors \\((1+x)^{-1}\\) and \\((1-3x)^{-1}\\)." },
    { stepNumber: 2, description: "Solve and intersect.", workingLatex: "|x| < 1 \\;\\cap\\; |x| < \\tfrac{1}{3} \\;\\Rightarrow\\; |x| < \\tfrac{1}{3}", explanation: "The tighter bound from the \\(3x\\) factor wins." },
  ], finalAnswer: "\\( |x| < \\tfrac{1}{3} \\)." } },

  { id: "y2be3-050", topicRef: "y2be3", topicTitle: "Using Partial Fractions 50", difficulty: "Foundation", questionText: "State the range of \\( x \\) for which the series expansion of \\( \\dfrac{1}{(2-x)(1+4x)} \\) is valid.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["validity"], workedSolution: { steps: [
    { stepNumber: 1, description: "Rewrite each factor in \\(1\\pm \\ldots\\) form.", workingLatex: "(2-x)^{-1} = \\tfrac{1}{2}(1 - \\tfrac{x}{2})^{-1},\\quad (1+4x)^{-1}", explanation: "We need the constant inside each bracket to be \\(1\\) before reading off the convergence condition. The \\(\\tfrac12\\) outside doesn't affect validity." },
    { stepNumber: 2, description: "Read off convergence conditions.", workingLatex: "\\left|\\tfrac{x}{2}\\right| < 1 \\;\\Rightarrow\\; |x| < 2,\\quad |4x| < 1 \\;\\Rightarrow\\; |x| < \\tfrac{1}{4}", explanation: "Two separate constraints on \\(|x|\\)." },
    { stepNumber: 3, description: "Take the tighter.", workingLatex: "|x| < \\tfrac{1}{4}", explanation: "Far smaller than \\(2\\); the \\(4x\\) factor controls validity." },
  ], finalAnswer: "\\( |x| < \\tfrac{1}{4} \\)." } },

  // ── Constant coefficient lookups ────
  { id: "y2be3-051", topicRef: "y2be3", topicTitle: "Using Partial Fractions 51", difficulty: "Challenge", questionText: "Find the coefficient of \\( x^2 \\) in the expansion of \\( \\dfrac{3}{(1-x)(1-2x)} \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["coefficient", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Decompose.", workingLatex: "\\dfrac{3}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{6}{1-2x}", explanation: "Cover-up at \\(x=1\\) and \\(x=\\tfrac12\\)." },
    { stepNumber: 2, description: "Coefficient of \\(x^2\\) in each fraction.", workingLatex: "(1-x)^{-1}: 1,\\quad (1-2x)^{-1}: 2^2 = 4", explanation: "For \\((1-ax)^{-1}\\) the coefficient of \\(x^k\\) is \\(a^k\\)." },
    { stepNumber: 3, description: "Combine with the constants.", workingLatex: "-3 \\cdot 1 + 6 \\cdot 4 = -3 + 24 = 21", explanation: "Each partial fraction contributes its own \\(x^2\\) coefficient, scaled by the numerator constant." },
  ], finalAnswer: "\\( 21 \\)." } },

  { id: "y2be3-052", topicRef: "y2be3", topicTitle: "Using Partial Fractions 52", difficulty: "Challenge", questionText: "Find the coefficient of \\( x^2 \\) in \\( \\dfrac{4}{(1-x)(1+3x)} \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["coefficient"], workedSolution: { steps: [
    { stepNumber: 1, description: "Decompose.", workingLatex: "\\dfrac{4}{(1-x)(1+3x)} = \\dfrac{1}{1-x} + \\dfrac{3}{1+3x}", explanation: "From q-007." },
    { stepNumber: 2, description: "Coefficient of \\(x^2\\) in each fraction.", workingLatex: "(1-x)^{-1}: 1,\\quad (1+3x)^{-1}: (-3)^2 = 9", explanation: "For \\((1+3x)^{-1}\\) the \\(x^k\\) coefficient is \\((-3)^k\\)." },
    { stepNumber: 3, description: "Combine.", workingLatex: "1 \\cdot 1 + 3 \\cdot 9 = 28", explanation: "Multiply each by its numerator constant and add." },
  ], finalAnswer: "\\( 28 \\)." } },

  { id: "y2be3-053", topicRef: "y2be3", topicTitle: "Using Partial Fractions 53", difficulty: "Challenge", questionText: "Find the coefficient of \\( x \\) in the expansion of \\( \\dfrac{7x+2}{(1+x)(1+2x)} \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["coefficient"], workedSolution: { steps: [
    { stepNumber: 1, description: "Decompose (q-004).", workingLatex: "\\dfrac{7x+2}{(1+x)(1+2x)} = \\dfrac{5}{1+x} - \\dfrac{3}{1+2x}", explanation: "From cover-up." },
    { stepNumber: 2, description: "Linear coefficient in each.", workingLatex: "(1+x)^{-1}: -1,\\quad (1+2x)^{-1}: -2", explanation: "For \\((1+ax)^{-1}\\) the linear coefficient is \\(-a\\)." },
    { stepNumber: 3, description: "Combine.", workingLatex: "5(-1) - 3(-2) = -5 + 6 = 1", explanation: "Multiply through by the numerator constants and add." },
  ], finalAnswer: "\\( 1 \\)." } },

  { id: "y2be3-054", topicRef: "y2be3", topicTitle: "Using Partial Fractions 54", difficulty: "Challenge", questionText: "Find the coefficient of \\( x^2 \\) in \\( \\dfrac{5x+1}{(1-x)(1+3x)} \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["coefficient"], workedSolution: { steps: [
    { stepNumber: 1, description: "Decompose (q-003).", workingLatex: "\\dfrac{5x+1}{(1-x)(1+3x)} = \\dfrac{3}{2(1-x)} - \\dfrac{1}{2(1+3x)}", explanation: "From cover-up: \\(A=\\tfrac32,\\;B=-\\tfrac12\\)." },
    { stepNumber: 2, description: "Coefficient of \\(x^2\\) in each.", workingLatex: "(1-x)^{-1}: 1,\\quad (1+3x)^{-1}: 9", explanation: "Standard pattern." },
    { stepNumber: 3, description: "Combine.", workingLatex: "\\tfrac{3}{2}(1) - \\tfrac{1}{2}(9) = \\tfrac{3-9}{2} = -3", explanation: "Multiply each by its numerator and add." },
  ], finalAnswer: "\\( -3 \\)." } },

  // ── More decomposition practice (varied forms) ────
  { id: "y2be3-055", topicRef: "y2be3", topicTitle: "Using Partial Fractions 55", difficulty: "Standard", questionText: "Express \\( \\dfrac{x-4}{(1-3x)(1+x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x-4}{(1-3x)(1+x)} \\equiv \\dfrac{A}{1-3x} + \\dfrac{B}{1+x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x - 4 \\equiv A(1+x) + B(1-3x)", explanation: "Identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=\\tfrac{1}{3}\\).", workingLatex: "-\\tfrac{11}{3} = \\tfrac{4}{3}A \\;\\Rightarrow\\; A = -\\tfrac{11}{4}", explanation: "LHS \\(\\tfrac13-4=-\\tfrac{11}{3}\\); coefficient \\(1+\\tfrac13=\\tfrac43\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-1\\).", workingLatex: "-5 = 4B \\;\\Rightarrow\\; B = -\\tfrac{5}{4}", explanation: "Coefficient \\(1-3(-1)=4\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x-4}{(1-3x)(1+x)} = -\\dfrac{11}{4(1-3x)} - \\dfrac{5}{4(1+x)}", explanation: "At \\(x=0\\): \\(-4 = -\\tfrac{11}{4} - \\tfrac54 = -4\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{11}{4(1-3x)} - \\dfrac{5}{4(1+x)} \\)." } },

  { id: "y2be3-056", topicRef: "y2be3", topicTitle: "Using Partial Fractions 56", difficulty: "Standard", questionText: "Express \\( \\dfrac{5}{(1+3x)(1-x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{5}{(1+3x)(1-x)} \\equiv \\dfrac{A}{1+3x} + \\dfrac{B}{1-x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "5 \\equiv A(1-x) + B(1+3x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{3}\\).", workingLatex: "5 = \\tfrac{4}{3}A \\;\\Rightarrow\\; A = \\tfrac{15}{4}", explanation: "Coefficient \\(1+\\tfrac13=\\tfrac43\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=1\\).", workingLatex: "5 = 4B \\;\\Rightarrow\\; B = \\tfrac{5}{4}", explanation: "Coefficient \\(1+3=4\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{5}{(1+3x)(1-x)} = \\dfrac{15}{4(1+3x)} + \\dfrac{5}{4(1-x)}", explanation: "At \\(x=0\\): \\(5 = \\tfrac{15}{4} + \\tfrac54 = 5\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{15}{4(1+3x)} + \\dfrac{5}{4(1-x)} \\)." } },

  { id: "y2be3-057", topicRef: "y2be3", topicTitle: "Using Partial Fractions 57", difficulty: "Standard", questionText: "Express \\( \\dfrac{2x-5}{(1+2x)(2-x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{2x-5}{(1+2x)(2-x)} \\equiv \\dfrac{A}{1+2x} + \\dfrac{B}{2-x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "2x - 5 \\equiv A(2-x) + B(1+2x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "-6 = \\tfrac{5}{2}A \\;\\Rightarrow\\; A = -\\tfrac{12}{5}", explanation: "LHS \\(-1-5=-6\\); coefficient \\(2-(-\\tfrac12)=\\tfrac52\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=2\\).", workingLatex: "-1 = 5B \\;\\Rightarrow\\; B = -\\tfrac{1}{5}", explanation: "Coefficient \\(1+4=5\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{2x-5}{(1+2x)(2-x)} = -\\dfrac{12}{5(1+2x)} - \\dfrac{1}{5(2-x)}", explanation: "At \\(x=0\\): \\(-\\tfrac{5}{2} = -\\tfrac{12}{5} - \\tfrac{1}{10} = -\\tfrac{24+1}{10} = -\\tfrac{5}{2}\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{12}{5(1+2x)} - \\dfrac{1}{5(2-x)} \\)." } },

  { id: "y2be3-058", topicRef: "y2be3", topicTitle: "Using Partial Fractions 58", difficulty: "Standard", questionText: "Express \\( \\dfrac{3x+10}{(1+x)(2+x)} \\) in partial fractions.", marks: 4, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3x+10}{(1+x)(2+x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{2+x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3x + 10 \\equiv A(2+x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "7 = A \\;\\Rightarrow\\; A = 7", explanation: "Coefficient \\(2+(-1)=1\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-2\\).", workingLatex: "4 = -B \\;\\Rightarrow\\; B = -4", explanation: "Coefficient \\(1+(-2)=-1\\); LHS \\(-6+10=4\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3x+10}{(1+x)(2+x)} = \\dfrac{7}{1+x} - \\dfrac{4}{2+x}", explanation: "At \\(x=0\\): \\(5 = 7-2=5\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{7}{1+x} - \\dfrac{4}{2+x} \\)." } },

  { id: "y2be3-059", topicRef: "y2be3", topicTitle: "Using Partial Fractions 59", difficulty: "Standard", questionText: "Express \\( \\dfrac{x-2}{(1+x)(1+3x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{x-2}{(1+x)(1+3x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1+3x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "x - 2 \\equiv A(1+3x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "-3 = -2A \\;\\Rightarrow\\; A = \\tfrac{3}{2}", explanation: "Coefficient \\(1+3(-1)=-2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{3}\\).", workingLatex: "-\\tfrac{7}{3} = \\tfrac{2}{3}B \\;\\Rightarrow\\; B = -\\tfrac{7}{2}", explanation: "LHS \\(-\\tfrac13-2=-\\tfrac73\\); coefficient \\(1-\\tfrac13=\\tfrac23\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{x-2}{(1+x)(1+3x)} = \\dfrac{3}{2(1+x)} - \\dfrac{7}{2(1+3x)}", explanation: "At \\(x=0\\): \\(-2 = \\tfrac32 - \\tfrac72 = -2\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{3}{2(1+x)} - \\dfrac{7}{2(1+3x)} \\)." } },

  { id: "y2be3-060", topicRef: "y2be3", topicTitle: "Using Partial Fractions 60", difficulty: "Standard", questionText: "Express \\( \\dfrac{3}{(1+x)(1+2x)} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{3}{(1+x)(1+2x)} \\equiv \\dfrac{A}{1+x} + \\dfrac{B}{1+2x}", explanation: "Two linear factors." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "3 \\equiv A(1+2x) + B(1+x)", explanation: "Identity." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "3 = -A \\;\\Rightarrow\\; A = -3", explanation: "Coefficient \\(1+2(-1)=-1\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "3 = \\tfrac{1}{2}B \\;\\Rightarrow\\; B = 6", explanation: "Coefficient \\(1+(-\\tfrac12)=\\tfrac12\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3}{(1+x)(1+2x)} = -\\dfrac{3}{1+x} + \\dfrac{6}{1+2x}", explanation: "At \\(x=0\\): \\(3 = -3+6\\) ✓." },
  ], finalAnswer: "\\( -\\dfrac{3}{1+x} + \\dfrac{6}{1+2x} \\)." } },

  // ── Factorise denominator first ────
  { id: "y2be3-061", topicRef: "y2be3", topicTitle: "Using Partial Fractions 61", difficulty: "Challenge", questionText: "Express \\( \\dfrac{3x+5}{1+x-2x^2} \\) in partial fractions.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["factorise", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Factorise the denominator.", workingLatex: "1 + x - 2x^2 = -(2x^2 - x - 1) = -(2x+1)(x-1) = (1-x)(1+2x)", explanation: "Look for factors of \\(-2\\) summing to \\(+1\\); cross-check by expanding \\((1-x)(1+2x) = 1 + 2x - x - 2x^2 = 1 + x - 2x^2\\) ✓." },
    { stepNumber: 2, description: "Write the identity.", workingLatex: "\\dfrac{3x+5}{(1-x)(1+2x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}", explanation: "Same form as q-001." },
    { stepNumber: 3, description: "Cover-up at \\(x=1\\).", workingLatex: "8 = 3A \\;\\Rightarrow\\; A = \\tfrac{8}{3}", explanation: "LHS \\(3+5=8\\); RHS coefficient \\(1+2=3\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "\\tfrac{7}{2} = \\tfrac{3}{2}B \\;\\Rightarrow\\; B = \\tfrac{7}{3}", explanation: "LHS \\(-\\tfrac32+5=\\tfrac72\\); coefficient \\(1-(-\\tfrac12)=\\tfrac32\\). Note this matches q-001's \\(B\\) sign-checked value." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{3x+5}{1+x-2x^2} = \\dfrac{8}{3(1-x)} + \\dfrac{7}{3(1+2x)}", explanation: "At \\(x=0\\): \\(5 = \\tfrac83+\\tfrac73 = 5\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{8}{3(1-x)} + \\dfrac{7}{3(1+2x)} \\)." } },

  { id: "y2be3-062", topicRef: "y2be3", topicTitle: "Using Partial Fractions 62", difficulty: "Challenge", questionText: "Express \\( \\dfrac{4x-1}{1 - 3x + 2x^2} \\) in partial fractions.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["factorise", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Factorise the denominator.", workingLatex: "1 - 3x + 2x^2 = (1-x)(1-2x)", explanation: "Check: \\((1-x)(1-2x)=1-2x-x+2x^2=1-3x+2x^2\\) ✓." },
    { stepNumber: 2, description: "Quote the decomposition (q-002).", workingLatex: "\\dfrac{4x-1}{(1-x)(1-2x)} = -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x}", explanation: "Already done in q-002 via cover-up at \\(x=1\\) and \\(x=\\tfrac12\\)." },
    { stepNumber: 3, description: "State the result.", workingLatex: "\\dfrac{4x-1}{1-3x+2x^2} = -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x}", explanation: "Same constants \\(A=-3,\\;B=2\\); the factorisation step was the only new work." },
  ], finalAnswer: "\\( -\\dfrac{3}{1-x} + \\dfrac{2}{1-2x} \\)." } },

  { id: "y2be3-063", topicRef: "y2be3", topicTitle: "Using Partial Fractions 63", difficulty: "Challenge", questionText: "Express \\( \\dfrac{1}{1 - x^2} \\) in partial fractions.", marks: 3, examStyle: false, yearCreated: 2026, tags: ["factorise", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Factorise.", workingLatex: "1 - x^2 = (1-x)(1+x)", explanation: "Difference of two squares." },
    { stepNumber: 2, description: "Set up.", workingLatex: "\\dfrac{1}{(1-x)(1+x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+x}", explanation: "Symmetric denominator." },
    { stepNumber: 3, description: "Cover-up.", workingLatex: "x=1:\\;1=2A\\Rightarrow A=\\tfrac12;\\quad x=-1:\\;1=2B\\Rightarrow B=\\tfrac12", explanation: "Constant numerator gives equal \\(A=B\\)." },
    { stepNumber: 4, description: "Assemble.", workingLatex: "\\dfrac{1}{1-x^2} = \\dfrac{1}{2(1-x)} + \\dfrac{1}{2(1+x)}", explanation: "Check at \\(x=0\\): \\(1 = \\tfrac12+\\tfrac12\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{1}{2(1-x)} + \\dfrac{1}{2(1+x)} \\)." } },

  { id: "y2be3-064", topicRef: "y2be3", topicTitle: "Using Partial Fractions 64", difficulty: "Challenge", questionText: "Express \\( \\dfrac{2x-1}{1 + x - 6x^2} \\) in partial fractions.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["factorise", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Factorise.", workingLatex: "1 + x - 6x^2 = (1+3x)(1-2x)", explanation: "Check: \\((1+3x)(1-2x) = 1 -2x +3x -6x^2 = 1+x-6x^2\\) ✓." },
    { stepNumber: 2, description: "Set up.", workingLatex: "\\dfrac{2x-1}{(1+3x)(1-2x)} \\equiv \\dfrac{A}{1+3x} + \\dfrac{B}{1-2x}", explanation: "Two distinct linear factors." },
    { stepNumber: 3, description: "Cover-up at \\(x=-\\tfrac{1}{3}\\).", workingLatex: "-\\tfrac{5}{3} = \\tfrac{5}{3}A \\;\\Rightarrow\\; A = -1", explanation: "LHS \\(2(-\\tfrac13)-1=-\\tfrac53\\); coefficient \\(1-2(-\\tfrac13)=\\tfrac53\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=\\tfrac{1}{2}\\).", workingLatex: "0 = \\tfrac{5}{2}B \\;\\Rightarrow\\; B = 0", explanation: "LHS \\(2(\\tfrac12)-1=0\\); coefficient \\(1+\\tfrac32=\\tfrac52\\). The numerator coincidentally vanishes at \\(x=\\tfrac12\\), killing the second partial fraction entirely." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{2x-1}{1+x-6x^2} = -\\dfrac{1}{1+3x}", explanation: "The \\(B=0\\) term drops out. At \\(x=0\\): \\(-1 = -1\\) ✓. Note the factor \\(1-2x\\) actually divides \\(2x-1\\): \\(2x-1=-(1-2x)\\), so the whole expression simplifies to \\(-\\tfrac{1}{1+3x}\\) directly." },
  ], finalAnswer: "\\( -\\dfrac{1}{1+3x} \\)." } },

  // ── Identify constants (combine expansion and decomposition) ────
  { id: "y2be3-065", topicRef: "y2be3", topicTitle: "Using Partial Fractions 65", difficulty: "Standard", questionText: "Find constants \\( A \\) and \\( B \\) such that \\( \\dfrac{1 + 3x}{(1-x)(1+x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+x} \\).", marks: 3, examStyle: false, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Clear fractions.", workingLatex: "1 + 3x \\equiv A(1+x) + B(1-x)", explanation: "Multiply both sides by \\((1-x)(1+x)\\)." },
    { stepNumber: 2, description: "Cover-up at \\(x=1\\).", workingLatex: "4 = 2A \\;\\Rightarrow\\; A = 2", explanation: "Kills the \\(B\\) term." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "-2 = 2B \\;\\Rightarrow\\; B = -1", explanation: "Kills the \\(A\\) term. LHS \\(1-3=-2\\); coefficient \\(1-(-1)=2\\)." },
    { stepNumber: 4, description: "State \\(A,B\\).", workingLatex: "A = 2,\\quad B = -1", explanation: "Check at \\(x=0\\): \\(1 = 2 + (-1) = 1\\) ✓." },
  ], finalAnswer: "\\( A = 2,\\; B = -1 \\)." } },

  { id: "y2be3-066", topicRef: "y2be3", topicTitle: "Using Partial Fractions 66", difficulty: "Challenge", questionText: "Find \\( A,B,C \\) such that \\( \\dfrac{2x^2+x+3}{(1-x)(1+x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+x} + \\dfrac{C}{1+2x} \\).", marks: 6, examStyle: true, yearCreated: 2026, tags: ["three factors", "partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Clear fractions.", workingLatex: "2x^2 + x + 3 \\equiv A(1+x)(1+2x) + B(1-x)(1+2x) + C(1-x)(1+x)", explanation: "Multiply through by the three-factor denominator. Three unknowns, three substitutions." },
    { stepNumber: 2, description: "Cover-up at \\(x=1\\).", workingLatex: "6 = A \\cdot 2 \\cdot 3 \\;\\Rightarrow\\; A = 1", explanation: "LHS \\(2+1+3=6\\); RHS coefficient \\((1+1)(1+2)=6\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=-1\\).", workingLatex: "4 = B \\cdot 2 \\cdot (-1) \\;\\Rightarrow\\; B = -2", explanation: "LHS \\(2-1+3=4\\); RHS coefficient \\((1-(-1))(1+2(-1))=2\\cdot(-1)=-2\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-\\tfrac{1}{2}\\).", workingLatex: "3 = C \\cdot \\tfrac{3}{2} \\cdot \\tfrac{1}{2} \\;\\Rightarrow\\; C = 4", explanation: "LHS \\(2\\cdot\\tfrac14 - \\tfrac12+3 = \\tfrac12-\\tfrac12+3=3\\); RHS coefficient \\((1+\\tfrac12)(1-\\tfrac12)=\\tfrac32 \\cdot \\tfrac12=\\tfrac34\\)." },
    { stepNumber: 5, description: "State the constants.", workingLatex: "A=1,\\; B=-2,\\; C=4", explanation: "Sanity at \\(x=0\\): RHS = \\(1+(-2)+4=3\\); LHS \\(\\tfrac{3}{1}=3\\) ✓." },
  ], finalAnswer: "\\( A=1,\\; B=-2,\\; C=4 \\)." } },

  { id: "y2be3-067", topicRef: "y2be3", topicTitle: "Using Partial Fractions 67", difficulty: "Challenge", questionText: "Given \\( \\dfrac{4}{(1-x)(1+3x)} \\equiv \\dfrac{A}{1-x} + \\dfrac{B}{1+3x} \\), find the coefficient of \\( x^3 \\) in its power-series expansion.", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "coefficient"], workedSolution: { steps: [
    { stepNumber: 1, description: "Identify \\(A, B\\) (from q-007).", workingLatex: "A = 1,\\quad B = 3", explanation: "Cover-up at \\(x=1\\) gives \\(A=1\\); at \\(x=-\\tfrac13\\), \\(B=3\\)." },
    { stepNumber: 2, description: "Coefficient of \\(x^3\\) in \\((1-x)^{-1}\\).", workingLatex: "1", explanation: "All-positive geometric series." },
    { stepNumber: 3, description: "Coefficient of \\(x^3\\) in \\((1+3x)^{-1}\\).", workingLatex: "(-3)^3 = -27", explanation: "Alternating with powers of \\(3\\). Cubing flips the sign back negative." },
    { stepNumber: 4, description: "Combine.", workingLatex: "A \\cdot 1 + B \\cdot (-27) = 1 + 3 \\cdot (-27) = 1 - 81 = -80", explanation: "Multiply each by its constant and add." },
  ], finalAnswer: "\\( -80 \\)." } },

  { id: "y2be3-068", topicRef: "y2be3", topicTitle: "Using Partial Fractions 68", difficulty: "Challenge", questionText: "Find the coefficient of \\( x^3 \\) in the expansion of \\( \\dfrac{x}{(1+x)(1-2x)} \\).", marks: 5, examStyle: true, yearCreated: 2026, tags: ["partial fractions", "coefficient"], workedSolution: { steps: [
    { stepNumber: 1, description: "Quote the decomposition (q-029).", workingLatex: "\\dfrac{x}{(1+x)(1-2x)} = -\\dfrac{1}{3(1+x)} + \\dfrac{1}{3(1-2x)}", explanation: "Constants must cancel since \\(f(0)=0\\)." },
    { stepNumber: 2, description: "Coefficient of \\(x^3\\) in \\((1+x)^{-1}\\).", workingLatex: "(-1)^3 = -1", explanation: "Alternating series." },
    { stepNumber: 3, description: "Coefficient of \\(x^3\\) in \\((1-2x)^{-1}\\).", workingLatex: "2^3 = 8", explanation: "All-positive with powers of \\(2\\)." },
    { stepNumber: 4, description: "Combine.", workingLatex: "-\\tfrac{1}{3}(-1) + \\tfrac{1}{3}(8) = \\tfrac{1}{3} + \\tfrac{8}{3} = 3", explanation: "Both contributions positive; sum to \\(3\\)." },
  ], finalAnswer: "\\( 3 \\)." } },

  // ── Use expansion to approximate value ────
  { id: "y2be3-069", topicRef: "y2be3", topicTitle: "Using Partial Fractions 69", difficulty: "Challenge", questionText: "Use the expansion of \\( \\dfrac{3}{(1-x)(1-2x)} \\) up to the term in \\( x^2 \\) (result: \\( 3 + 9x + 21x^2 \\)) with \\( x = 0.1 \\) to estimate \\( \\dfrac{3}{0.72} \\).", marks: 4, examStyle: true, yearCreated: 2026, tags: ["approximation"], workedSolution: { steps: [
    { stepNumber: 1, description: "Verify the substitution gives the target.", workingLatex: "(1-0.1)(1-0.2) = 0.9 \\cdot 0.8 = 0.72", explanation: "Setting \\(x=0.1\\) in the original denominator produces \\(0.72\\), so \\(f(0.1) = \\dfrac{3}{0.72}\\). This justifies using \\(x=0.1\\) for the approximation." },
    { stepNumber: 2, description: "Substitute \\(x=0.1\\) into the truncated series.", workingLatex: "3 + 9(0.1) + 21(0.1)^2", explanation: "Take the three-term expansion and plug in numerically." },
    { stepNumber: 3, description: "Evaluate each term.", workingLatex: "= 3 + 0.9 + 0.21", explanation: "\\(9\\cdot 0.1 = 0.9\\); \\(21\\cdot 0.01 = 0.21\\)." },
    { stepNumber: 4, description: "Sum.", workingLatex: "3 + 0.9 + 0.21 = 4.11", explanation: "The truncated approximation to \\(\\dfrac{3}{0.72}\\)." },
    { stepNumber: 5, description: "Compare with the exact value.", workingLatex: "\\dfrac{3}{0.72} = \\dfrac{300}{72} = \\dfrac{25}{6} \\approx 4.1667", explanation: "The approximation is off by about \\(0.06\\) — the next term \\(45x^3 = 0.045\\) accounts for most of the gap." },
  ], finalAnswer: "\\( \\dfrac{3}{0.72} \\approx 4.11 \\) (3-term approximation)." } },

  { id: "y2be3-070", topicRef: "y2be3", topicTitle: "Using Partial Fractions 70", difficulty: "Standard", questionText: "A power-series expansion of \\( \\dfrac{5x+1}{(1-x)(1+3x)} \\) has been computed. Deduce for what range of \\( x \\) this expansion converges.", marks: 2, examStyle: false, yearCreated: 2026, tags: ["validity"], workedSolution: { steps: [
    { stepNumber: 1, description: "Read off the two convergence conditions.", workingLatex: "|x| < 1 \\quad\\text{and}\\quad |3x| < 1", explanation: "From the two factors \\((1-x)\\) and \\((1+3x)\\) after partial-fraction decomposition." },
    { stepNumber: 2, description: "Solve each for \\(|x|\\).", workingLatex: "|x|<1,\\quad |x|<\\tfrac{1}{3}", explanation: "Divide the second through by \\(3\\)." },
    { stepNumber: 3, description: "Take the tighter.", workingLatex: "|x| < \\tfrac{1}{3}", explanation: "Both series must converge simultaneously, so the smaller bound \\(\\tfrac13\\) wins." },
  ], finalAnswer: "\\( |x| < \\tfrac{1}{3} \\)." } },

  { id: "y2be3-071", topicRef: "y2be3", topicTitle: "Using Partial Fractions 71", difficulty: "Standard", questionText: "Express \\( \\dfrac{30}{(3-2x)(1+x)} \\) in partial fractions.", marks: 4, examStyle: true, yearCreated: 2026, tags: ["partial fractions"], workedSolution: { steps: [
    { stepNumber: 1, description: "Set up.", workingLatex: "\\dfrac{30}{(3-2x)(1+x)} \\equiv \\dfrac{A}{3-2x} + \\dfrac{B}{1+x}", explanation: "Two linear factors with non-unit leading coefficients." },
    { stepNumber: 2, description: "Clear fractions.", workingLatex: "30 \\equiv A(1+x) + B(3-2x)", explanation: "Identity in \\(x\\)." },
    { stepNumber: 3, description: "Cover-up at \\(x=\\tfrac{3}{2}\\).", workingLatex: "30 = \\tfrac{5}{2}A \\;\\Rightarrow\\; A = 12", explanation: "Setting \\(3-2x=0\\); coefficient \\(1+\\tfrac32=\\tfrac52\\)." },
    { stepNumber: 4, description: "Cover-up at \\(x=-1\\).", workingLatex: "30 = 5B \\;\\Rightarrow\\; B = 6", explanation: "Setting \\(1+x=0\\); coefficient \\(3-2(-1)=5\\)." },
    { stepNumber: 5, description: "Assemble.", workingLatex: "\\dfrac{30}{(3-2x)(1+x)} = \\dfrac{12}{3-2x} + \\dfrac{6}{1+x}", explanation: "At \\(x=0\\): \\(10 = \\tfrac{12}{3}+6 = 4+6=10\\) ✓." },
  ], finalAnswer: "\\( \\dfrac{12}{3-2x} + \\dfrac{6}{1+x} \\)." } },
];
