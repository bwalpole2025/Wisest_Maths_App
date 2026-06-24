/**
 * Guided Learning — lesson content types.
 *
 * A Lesson is a short, Brilliant-style interactive walkthrough of one subtopic.
 * It is a sequence of teaching "cards"; each card explains a concept and ends in
 * a mini-question the student must answer. The AI tutor (see /api/lessons) judges
 * the answer against the card's stored `expectedAnswer` and, when wrong, replies
 * with a guiding question instead of the answer — iterating until the student
 * reaches the insight.
 *
 * Lesson content is small and pre-authored, so (unlike the question bank) lesson
 * files are imported directly in lib/data/lessons/index.ts — no generated JSON.
 */

import type { AnswerType, CurveDiagramConfig } from "@/lib/types";

export interface LessonMiniQuestion {
  /** The question posed at the end of the card, in LaTeX-compatible notation. */
  prompt: string;
  /**
   * The correct answer (LaTeX/plain). Sent to the client and forwarded to the AI
   * so it judges against a known answer rather than guessing — this is low-stakes
   * learning, not an exam, so client exposure is acceptable.
   */
  expectedAnswer: string;
  /** How the answer should be read (informs the AI). Optional. */
  answerType?: AnswerType;
  /**
   * The "why" — the core insight, revealed once the student answers correctly.
   * This is the Eureka the lesson is driving towards.
   */
  insight: string;
  /**
   * Multiple-choice options (Brilliant-style tappable cards). When present, the
   * card renders as MCQ: exactly one option (at `correctIndex`) is correct, the
   * rest are pedagogically-chosen distractors (common slips). When absent, the
   * card falls back to a free-text answer box judged by the AI.
   */
  options?: string[];
  /** Index into `options` of the correct choice. Required when `options` is set. */
  correctIndex?: number;
  /**
   * Optional static nudge ladder, used as a graceful fallback when the AI is
   * unavailable (no GEMINI_API_KEY). Ordered from gentle to specific.
   */
  hints?: string[];
}

export interface LessonCard {
  id: string;
  title: string;
  /** Teaching prose for the card, with inline LaTeX in \( \) delimiters. */
  concept: string;
  /** Optional diagram (reuses the question bank's curve-diagram renderer). */
  diagram?: CurveDiagramConfig;
  /** Optional Mafs JSX source string (reuses the existing Mafs renderer). */
  mafs?: string;
  miniQuestion: LessonMiniQuestion;
}

export interface Lesson {
  /** Subtopic ref, e.g. "a1" — the key questions are also stored under. */
  topicRef: string;
  /** Human-readable subtopic title. */
  title: string;
  /** One- or two-sentence framing shown before the first card. */
  intro: string;
  /** Ordered teaching cards (typically 4–6). */
  cards: LessonCard[];
}
