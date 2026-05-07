/**
 * Express API server for Wisest Maths.
 * Handles the Socratic AI tutor endpoint that requires server-side API keys.
 *
 * Run: npx tsx server/index.ts
 * Vite proxies /api requests to this server in development.
 */

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { z } from "zod";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// ── Import shared lib code (uses tsx for path resolution) ────────────
// These are imported from the src/lib directory which is shared with the frontend
import { sanitiseStudentInput } from "../src/lib/ai/socratic/sanitise";
import { validateGeminiOutput, getGenericErrorResponse } from "../src/lib/ai/socratic/validateOutput";
import { createSession, validateSession, recordTurn } from "../src/lib/ai/socratic/sessionStore";
import { SOCRATIC_SYSTEM_INSTRUCTIONS } from "../src/lib/ai/socratic/systemInstructions";
import { checkRateLimit } from "../src/lib/rateLimit";
import type { SocraticTurn, SocraticResponse, TurnEvaluation } from "../src/lib/ai/socratic/types";

// ── LaTeX fix helper ─────────────────────────────────────────────────
function fixLaTeX(text: string): string {
  let result = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  result = result.replace(/\$([^$]+)\$/g, "\\($1\\)");
  result = result.replace(/\^(\([^)]+\))/g, (_, inner) => "^{" + inner.slice(1, -1) + "}");
  result = result.replace(/_(\([^)]+\))/g, (_, inner) => "_{" + inner.slice(1, -1) + "}");

  const latexCmds = /\\(?:frac|dfrac|tfrac|sqrt|left|right|text|begin|end|int|sum|prod|lim|sin|cos|tan|log|ln|infty|alpha|beta|theta|pi|pm|mp|times|div|cdot|leq|geq|neq|approx|equiv|implies|Rightarrow|Leftarrow|quad|qquad|binom|overline|underline|vec|hat|bar|dot|ddot)\b/;
  const mathPattern = /(?:^|= )[\d]*[a-z]\^|\\frac|\\sqrt|\\times|\\cdot|\\pm|\\int|\\sum/;

  const lines = result.split("\n");
  result = lines.map(line => {
    if (line.includes("\\(") && !latexCmds.test(line.replace(/\\[()]/g, ""))) return line;
    if (line.includes("\\(") && latexCmds.test(line)) {
      const parts: string[] = [];
      let cursor = 0;
      while (cursor < line.length) {
        const open = line.indexOf("\\(", cursor);
        if (open === -1) { parts.push(wrapBareMath(line.slice(cursor))); break; }
        if (open > cursor) parts.push(wrapBareMath(line.slice(cursor, open)));
        const close = line.indexOf("\\)", open + 2);
        if (close === -1) { parts.push(line.slice(open)); break; }
        parts.push(line.slice(open, close + 2));
        cursor = close + 2;
      }
      return parts.join("");
    }
    if (!line.includes("\\(") && (latexCmds.test(line) || mathPattern.test(line))) {
      const prefixMatch = line.match(/^((?:Step\s+)?\d+[.:]\s*(?:(?:Differentiate|Integrate|Find|Apply|Using|Simplify|Expand|Factorise|Calculate|Combine|Substitute|Rearrange|Evaluate|Recall|Write|Multiply|Divide|Identify|The|So|Therefore|Hence|Since|We)\b[^:=]*(?:[:.])\s*)?)/i);
      if (prefixMatch && prefixMatch[1].length > 0 && prefixMatch[1].length < line.length) {
        const prefix = prefixMatch[1];
        const mathPart = line.slice(prefix.length).trim();
        if (mathPart.length > 0) return prefix + "\\(" + mathPart + "\\)";
      }
      if (/^[^a-zA-Z]*\\/.test(line) || /^[^a-zA-Z]*[a-z]\s*=/.test(line)) {
        return "\\(" + line + "\\)";
      }
    }
    return line;
  }).join("\n");

  return result;
}

function wrapBareMath(text: string): string {
  const latexCmds = /\\(?:frac|dfrac|tfrac|sqrt|left|right|begin|end|int|sum|prod|lim|sin|cos|tan|log|ln|infty|alpha|beta|theta|pi|pm|mp|times|div|cdot|leq|geq|neq|approx|equiv|implies|Rightarrow|binom|overline|vec)\b/;
  if (!latexCmds.test(text)) {
    if (/[=+\-]\s*\d*[a-z]\^/.test(text) || /\d+[a-z]/.test(text)) {
      return text.replace(/((?:[=+\-]\s*)?(?:\d*[a-z](?:\^[\d{][^,.\s]*)?(?:\s*[+\-]\s*\d*[a-z](?:\^[\d{][^,.\s]*)?)*(?:\s*[=]\s*\d+)?))/g, (match) => {
        if (match.trim().length > 1) return "\\(" + match + "\\)";
        return match;
      });
    }
    return text;
  }
  return text.replace(/((?:\\(?:frac|dfrac|tfrac|sqrt|left|right|begin|end|int|sum|prod|lim|sin|cos|tan|log|ln|infty|alpha|beta|theta|pi|pm|mp|times|div|cdot|leq|geq|neq|approx|equiv|implies|Rightarrow|binom|overline|vec)\b[^,.\n]*)+)/g, "\\($1\\)");
}

function normaliseEvaluation(evaluation: {
  answerCorrect: boolean;
  reasoningSound: boolean;
  feedback: string;
  mentalModelCorrection?: string | null;
  correctWorking?: string | null;
  score: number;
}): TurnEvaluation {
  return {
    answerCorrect: evaluation.answerCorrect,
    reasoningSound: evaluation.reasoningSound,
    feedback: fixLaTeX(evaluation.feedback),
    mentalModelCorrection: evaluation.mentalModelCorrection ? fixLaTeX(evaluation.mentalModelCorrection) : null,
    correctWorking: evaluation.correctWorking ? fixLaTeX(evaluation.correctWorking) : null,
    score: evaluation.score,
  };
}

// ── Request schemas ──────────────────────────────────────────────────
const StartSchema = z.object({ action: z.literal("start"), topicRef: z.string().min(1).max(20) });
const EvaluateSchema = z.object({ action: z.literal("evaluate"), questionId: z.string().min(1).max(50), questionText: z.string().min(1).max(2000), answer: z.string().min(1).max(500), reasoning: z.string().min(1).max(500) });
const AnswerSchema = z.object({ action: z.literal("answer"), sessionId: z.string().min(1).max(100), answer: z.string().min(1).max(500), reasoning: z.string().min(1).max(500) });
const RequestSchema = z.discriminatedUnion("action", [StartSchema, AnswerSchema, EvaluateSchema]);

// ── Auth helper ──────────────────────────────────────────────────────
function getUserFromCookie(req: express.Request): { id: string; email: string } | null {
  const cookie = req.cookies?.["mathsapp-session"];
  if (!cookie) return null;
  try {
    const session = JSON.parse(decodeURIComponent(cookie));
    if (session.email) return { id: session.email, email: session.email };
  } catch { /* invalid cookie */ }
  return null;
}

// ── Gemini API ───────────────────────────────────────────────────────
async function callGemini(
  conversationHistory: Array<{ role: string; parts: Array<{ text: string }> }>,
  userMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not configured");

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SOCRATIC_SYSTEM_INSTRUCTIONS }] },
        contents: [...conversationHistory, { role: "user", parts: [{ text: userMessage }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 8192, thinkingConfig: { thinkingBudget: 0 } },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Socratic] Gemini API error:", response.status, errorText);
    throw new Error(`Gemini API returned ${response.status}`);
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts || parts.length === 0) throw new Error("Empty response from Gemini");

  let text = "";
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i].thought) continue;
    if (parts[i].text) { text = parts[i].text; break; }
  }
  if (!text) throw new Error("No text in Gemini response");

  text = text.trim();
  if (text.startsWith("```")) {
    text = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  }
  return text;
}

// ── POST /api/socratic ───────────────────────────────────────────────
app.post("/api/socratic", async (req, res) => {
  try {
    const user = getUserFromCookie(req);
    if (!user) return res.status(401).json({ error: "Authentication required." });

    const rateResult = checkRateLimit(user.id, "ai");
    if (!rateResult.allowed) return res.status(429).json({ error: "Too many requests. Please wait before trying again." });

    const parseResult = RequestSchema.safeParse(req.body);
    if (!parseResult.success) return res.status(400).json({ error: "Invalid request format.", details: parseResult.error.issues });

    const payload = parseResult.data;

    if (payload.action === "start") {
      const session = createSession(user.id, payload.topicRef);
      const prompt = `Start a Socratic tutoring session on the A-Level topic "${payload.topicRef}". Present Question 1 of 5. Set evaluation to null since the student hasn't answered yet. Respond with ONLY valid JSON, no other text.`;
      const rawResponse = await callGemini([], prompt);
      const validation = validateGeminiOutput(rawResponse, 1);
      if (!validation.valid || !validation.parsed) return res.json(getGenericErrorResponse());

      const response: SocraticResponse = {
        questionNumber: 1, totalQuestions: 5, evaluation: null,
        nextQuestion: validation.parsed.questionText ? fixLaTeX(validation.parsed.questionText) : null,
        sessionComplete: false, overallFeedback: null, overallScore: null,
      };
      return res.json({ sessionId: session.sessionId, ...response });
    }

    if (payload.action === "answer") {
      const sanitised = sanitiseStudentInput(payload.answer, payload.reasoning);
      if (!sanitised.valid) return res.status(400).json({ error: sanitised.error });

      const sessionCheck = validateSession(payload.sessionId, user.id);
      if (!sessionCheck.valid || !sessionCheck.session) return res.status(403).json({ error: sessionCheck.error });

      const session = sessionCheck.session;
      const currentQ = session.currentQuestion;

      const conversationHistory: Array<{ role: string; parts: Array<{ text: string }> }> = [];
      for (const turn of session.history) {
        conversationHistory.push({ role: "model", parts: [{ text: JSON.stringify({ questionNumber: turn.questionNumber, questionText: turn.questionText, evaluation: null, sessionComplete: false, overallFeedback: null, overallScore: null }) }] });
        conversationHistory.push({ role: "user", parts: [{ text: `[Answer]: ${turn.studentAnswer}\n[Reasoning]: ${turn.studentReasoning}` }] });
        conversationHistory.push({ role: "model", parts: [{ text: JSON.stringify({ questionNumber: turn.questionNumber, evaluation: turn.evaluation, sessionComplete: false, overallFeedback: null, overallScore: null }) }] });
      }

      const isLastQuestion = currentQ >= 5;
      const userMessage = `[Answer]: ${sanitised.sanitisedAnswer}\n[Reasoning]: ${sanitised.sanitisedReasoning}`;
      let prompt: string;
      if (isLastQuestion) {
        prompt = `${userMessage}\n\nThis is the answer to Question 5 of 5 (the final question). Evaluate the answer and reasoning, then provide the overall session summary with total score out of 50, key strengths, areas for improvement, and a study recommendation. Set sessionComplete to true. Respond with ONLY valid JSON.`;
      } else {
        prompt = `${userMessage}\n\nIMPORTANT: Your JSON response MUST include BOTH:\n1. "evaluation" object with answerCorrect, reasoningSound, feedback, correctWorking (if wrong), and score for Question ${currentQ}\n2. "questionText" containing Question ${currentQ + 1} of 5\n\nSet questionNumber to ${currentQ}. Do NOT set evaluation to null — you must evaluate the student's answer. If the answer is wrong, include full step-by-step correctWorking. Respond with raw JSON only, no markdown fences.`;
      }

      let rawResponse = await callGemini(conversationHistory, prompt);
      let validation = validateGeminiOutput(rawResponse, currentQ);

      if (validation.valid && validation.parsed && !validation.parsed.evaluation) {
        const retryPrompt = `You did not include an evaluation in your previous response. You MUST evaluate the student's answer now.\n\nThe student answered: "${sanitised.sanitisedAnswer}"\nTheir reasoning: "${sanitised.sanitisedReasoning}"\n\nProvide a JSON response with the evaluation object (answerCorrect, reasoningSound, feedback, correctWorking if wrong, score 0-10) AND the next question in questionText. Set questionNumber to ${currentQ}. Raw JSON only.`;
        rawResponse = await callGemini(conversationHistory, retryPrompt);
        validation = validateGeminiOutput(rawResponse, currentQ);
      }

      if (!validation.valid || !validation.parsed) return res.json(getGenericErrorResponse());

      const geminiData = validation.parsed;
      const evaluation: TurnEvaluation = geminiData.evaluation
        ? normaliseEvaluation(geminiData.evaluation)
        : { answerCorrect: false, reasoningSound: false, feedback: "Unable to evaluate your answer at this time. Please review the topic and try the next question.", mentalModelCorrection: null, correctWorking: null, score: 0 };

      const turn: SocraticTurn = { questionNumber: currentQ, questionText: `Question ${currentQ}`, studentAnswer: sanitised.sanitisedAnswer!, studentReasoning: sanitised.sanitisedReasoning!, evaluation };
      recordTurn(payload.sessionId, turn);

      if (geminiData.questionText) geminiData.questionText = fixLaTeX(geminiData.questionText);

      const response: SocraticResponse = { questionNumber: currentQ, totalQuestions: 5, evaluation, nextQuestion: geminiData.questionText ?? null, sessionComplete: geminiData.sessionComplete, overallFeedback: geminiData.overallFeedback ?? null, overallScore: geminiData.overallScore ?? null };
      return res.json(response);
    }

    if (payload.action === "evaluate") {
      const sanitised = sanitiseStudentInput(payload.answer, payload.reasoning);
      if (!sanitised.valid) return res.status(400).json({ error: sanitised.error });

      const prompt = `The student was asked the following A-Level Mathematics question:\n\n"${payload.questionText}"\n\nThe student answered: "${sanitised.sanitisedAnswer}"\nTheir reasoning: "${sanitised.sanitisedReasoning}"\n\nEvaluate their answer and reasoning. Your JSON response MUST include the evaluation object with answerCorrect, reasoningSound, feedback, correctWorking (if the answer is wrong, show the full step-by-step correct method), and score (0-10).\n\nSet questionNumber to 1, questionText to null, sessionComplete to false. Respond with raw JSON only, no markdown fences.`;
      const rawResponse = await callGemini([], prompt);
      const validation = validateGeminiOutput(rawResponse, 1);

      if (!validation.valid || !validation.parsed || !validation.parsed.evaluation) {
        return res.json({ evaluation: { answerCorrect: false, reasoningSound: false, feedback: "Unable to evaluate your answer at this time. Please try again.", mentalModelCorrection: null, correctWorking: null, score: 0 } });
      }

      return res.json({ evaluation: normaliseEvaluation(validation.parsed.evaluation) });
    }
  } catch (error) {
    console.error("[Socratic] Internal error:", error);
    return res.status(500).json({ error: "An error occurred. Please try again." });
  }
});

// ── POST /api/assess (placeholder) ───────────────────────────────────
app.post("/api/assess", (req, res) => {
  const { studentAnswer } = req.body || {};
  const hasContent = studentAnswer && studentAnswer.trim().length > 0;
  res.json({
    score: hasContent ? 7 : 2,
    feedback: hasContent
      ? "Good attempt! You correctly identified the method but made an arithmetic error in the final step."
      : "You did not provide an answer. Try to show your working even if you are unsure.",
    improvements: [
      "Check your arithmetic carefully in the final step",
      "Remember to include the constant of integration where applicable",
    ],
  });
});

app.listen(PORT, () => {
  console.log(`[API Server] Running on http://localhost:${PORT}`);
});
