/**
 * Socratic Mathematics Tutor — Type Definitions
 */

export interface SocraticSession {
  sessionId: string;
  userId: string;
  topicRef: string;
  currentQuestion: number;       // 1–5
  totalQuestions: 5;
  history: SocraticTurn[];
  startedAt: string;
  completedAt: string | null;
  overallScore: number | null;
}

export interface SocraticTurn {
  questionNumber: number;
  questionText: string;
  studentAnswer: string;
  studentReasoning: string;
  evaluation: TurnEvaluation;
}

/** Single-question evaluation mode for the "evaluate" action. */
export type TutorMode = "guided" | "solution";

export interface TurnEvaluation {
  answerCorrect: boolean;
  reasoningSound: boolean;
  feedback: string;
  guidingQuestion: string | null;         // Guided mode: the leading question that makes the student re-think the slip
  mentalModelCorrection: string | null;   // non-null when answer is right but logic is wrong
  correctWorking: string | null;          // full step-by-step method (Worked Solution always when wrong; Guided only on success recap or reveal)
  score: number;                          // 0–10
}

/** One prior attempt at a single question, replayed to the API in Guided mode. */
export interface GuidedAttempt {
  answer: string;
  reasoning: string;
  feedback: string;
  guidingQuestion: string | null;
}

export interface SocraticRequest {
  sessionId: string;
  studentAnswer: string;
  studentReasoning: string;
}

export interface SocraticResponse {
  questionNumber: number;
  totalQuestions: number;
  evaluation: TurnEvaluation | null;      // null for the first question prompt
  nextQuestion: string | null;            // null when session is complete
  sessionComplete: boolean;
  overallFeedback: string | null;         // only on completion
  overallScore: number | null;            // only on completion
}
