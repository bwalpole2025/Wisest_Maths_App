/**
 * Placeholder assessment scoring — runs client-side.
 * TODO: Replace with a real API call to Claude when backend is deployed.
 */
export function assessAnswer(body: {
  questionText: string;
  studentAnswer: string;
  studentExplanation: string;
  correctAnswer: string;
}) {
  const hasContent = body.studentAnswer && body.studentAnswer.trim().length > 0;

  return {
    score: hasContent ? 7 : 2,
    feedback: hasContent
      ? "Good attempt! You correctly identified the method but made an arithmetic error in the final step."
      : "You did not provide an answer. Try to show your working even if you are unsure.",
    improvements: [
      "Check your arithmetic carefully in the final step",
      "Remember to include the constant of integration where applicable",
    ],
  };
}
