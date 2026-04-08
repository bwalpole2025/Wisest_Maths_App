export type QuestionDifficulty = "Foundation" | "Standard" | "Challenge";
export type UserRole = "student" | "teacher";
export type Course = "a-level-maths" | "a-level-further-maths";

export interface Topic {
  id: string;
  ref: string;
  title: string;
  category: string;
  subcategory: string;
  module: 1 | 2;
  videoUrl: string;
  videoTitle: string;
  duration: number;
  learningOutcome: string;
  course: Course;
}

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
}

export interface WorkedSolution {
  steps: SolutionStep[];
  finalAnswer: string;
  commonMistakes?: string[];
}

export interface Question {
  id: string;
  topicRef: string;
  topicTitle: string;
  difficulty: QuestionDifficulty;
  questionText: string;
  marks: number;
  workedSolution: WorkedSolution;
  examStyle: boolean;
  yearCreated: number;
  tags: string[];
}

export interface Video {
  id: string;
  topicId: string;
  title: string;
  url: string;
  durationMinutes: number;
  thumbnail?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface TopicProgress {
  topicId: string;
  videosWatched: number;
  assessmentCompleted: boolean;
  assessmentScore?: number;
  lastAccessed: string;
}

/* ── Assessment ─────────────────────────────────────── */

export interface AssessmentProblem {
  id: string;
  questionText: string;
  correctAnswer: string;
  studentAnswer: string;
  studentExplanation: string;
  aiScore: number;
  aiFeedback: string;
  isCorrect: boolean;
  hintsUsed: number;
}

export interface AssessmentSession {
  id: string;
  studentId: string;
  topicRef: string;
  topicTitle: string;
  status: "active" | "completed" | "abandoned";
  startedAt: string;
  completedAt?: string;
  problems: AssessmentProblem[];
  overallScore?: number;
  aiFeedback?: string;
}

/** @deprecated kept for backward compat with useAssessment hook */
export interface AssessmentQuestion {
  questionId: string;
  studentAnswer: string;
  explanation: string;
  isCorrect?: boolean;
  feedback?: string;
  timeSpentSeconds: number;
}
