/**
 * POST /api/assess
 *
 * Placeholder API route for AI-powered assessment scoring.
 *
 * Body: { questionText, studentAnswer, studentExplanation, correctAnswer }
 * Returns: { score, feedback, improvements }
 *
 * TODO: Replace the placeholder response with an actual Claude API call:
 *
 *   import Anthropic from '@anthropic-ai/sdk';
 *
 *   const client = new Anthropic();
 *
 *   const message = await client.messages.create({
 *     model: 'claude-sonnet-4-20250514',
 *     max_tokens: 1024,
 *     messages: [
 *       {
 *         role: 'user',
 *         content: `You are an A-Level Maths examiner. A student was asked:
 *           "${questionText}"
 *           The correct answer is: ${correctAnswer}
 *           The student answered: ${studentAnswer}
 *           Their explanation: ${studentExplanation}
 *
 *           Please respond with JSON:
 *           {
 *             "score": <0-10>,
 *             "feedback": "<what the student did well>",
 *             "improvements": ["<specific improvement 1>", ...]
 *           }`,
 *       },
 *     ],
 *   });
 *
 *   return Response.json(JSON.parse(message.content[0].text));
 */
export async function POST(request: Request) {
  const body = await request.json();

  // Placeholder: return static feedback
  const { studentAnswer } = body as {
    questionText: string;
    studentAnswer: string;
    studentExplanation: string;
    correctAnswer: string;
  };

  const hasContent = studentAnswer && studentAnswer.trim().length > 0;

  return Response.json({
    score: hasContent ? 7 : 2,
    feedback: hasContent
      ? "Good attempt! You correctly identified the method but made an arithmetic error in the final step."
      : "You did not provide an answer. Try to show your working even if you are unsure.",
    improvements: [
      "Check your arithmetic carefully in the final step",
      "Remember to include the constant of integration where applicable",
    ],
  });
}
