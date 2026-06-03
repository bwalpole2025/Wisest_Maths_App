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

export interface QuadraticGraphData {
  a: number;
  b: number;
  c: number;
  xMin?: number;
  xMax?: number;
  roots?: number[];
  vertex?: [number, number];
  yIntercept?: number;
  label?: string;
}

export interface CurveDiagramConfig {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  hideAxes?: boolean;
  xTicks?: number[];
  yTicks?: number[];
  /**
   * Optional LaTeX labels for the x-ticks, parallel to `xTicks`. When supplied,
   * the renderer uses these instead of stringifying the numeric tick value.
   * Useful for radian ticks where the decimal form (e.g. 0.5236) is unhelpful.
   */
  xTickLabels?: string[];
  yTickLabels?: string[];
  xLabel?: string;
  yLabel?: string;
  curves?: Array<{
    points: Array<[number, number]>;
    color?: string;
    label?: string;
    labelAt?: [number, number];
    width?: number;
  }>;
  lines?: Array<{
    from: [number, number];
    to: [number, number];
    color?: string;
    dashed?: boolean;
    arrow?: boolean;
    label?: string;
    labelAt?: [number, number];
  }>;
  points?: Array<{
    at: [number, number];
    label?: string;
    labelAnchor?: "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw" | "center";
    color?: string;
    r?: number;
  }>;
  /**
   * Filled regions — closed polygons drawn UNDER curves and lines. Use for
   * highlighting an area-under-curve (the polygon's outline traces the upper
   * boundary, drops to the x-axis at the right limit, runs back along the
   * x-axis to the left limit, and closes upward) or an area-between-curves
   * (top curve forward, bottom curve back).
   */
  regions?: Array<{
    points: Array<[number, number]>;
    color?: string;
    opacity?: number;
    label?: string;
    labelAt?: [number, number];
  }>;
  /**
   * If true, the renderer draws a thin dashed vertical line from every labelled
   * point down to the x-axis. Useful for trig-equation diagrams where the
   * solution x-values need to read off cleanly.
   */
  dropLinesForPoints?: boolean;
}

/**
 * Structured config for rendering a polynomial long-division "house" layout
 * via a React component (see components/questions/LongDivision.tsx) instead of
 * a KaTeX `\begin{array}{...}` block. Each row is encoded as an array of
 * per-column LaTeX terms (one cell per descending power of x in the dividend);
 * empty strings mean the cell is blank for that column.
 */
export interface LongDivisionConfig {
  /** LaTeX for the divisor that sits to the left of the `)` bracket, e.g. "x - 1" or "2x + 5". */
  divisor: string;
  /** One LaTeX term per column, descending powers, e.g. ["x^3", "-3x^2", "+5x", "-3"]. */
  dividend: string[];
  /**
   * One LaTeX term per column, aligned with `dividend`. Empty strings for
   * columns where the quotient has no term, so the column count always
   * matches `dividend.length`.
   */
  quotient: string[];
  /**
   * Per-step subtrahend / remainder pair. The subtrahend already has the
   * minus sign distributed through (so each cell shows what gets added). The
   * remainder is the running remainder after this subtraction.
   * All arrays have length === dividend.length; blank cells are "".
   */
  steps: Array<{
    subtrahend: string[];
    remainder: string[];
  }>;
}

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  graph?: QuadraticGraphData;
  tikz?: string;
  diagram?: CurveDiagramConfig;
  longDivision?: LongDivisionConfig;
}

export interface WorkedSolution {
  steps: SolutionStep[];
  /**
   * Human-facing final answer in LaTeX prose, e.g. `\\(6\\pi - 9\\sqrt 3\\) cm²`.
   * Good for display, but NOT reliably machine-parseable (wrappers, units).
   */
  finalAnswer: string;
  /**
   * Optional clean, machine-parseable form of the answer for the symbolic
   * grading engine, e.g. `6*pi - 9*sqrt(3)` or `(x+1)^2`. When absent, the
   * grader best-effort normalises `finalAnswer` (see lib/services/symbolicGrading).
   * For questions whose answer isn't a single expression/equation (proofs,
   * "show that", multi-part), leave this unset to fall back to manual grading.
   */
  canonicalAnswer?: string;
  commonMistakes?: string[];
}

export interface Question {
  id: string;
  topicRef: string;
  topicTitle: string;
  difficulty: QuestionDifficulty;
  questionText: string;
  /**
   * Optional figure to display on the question page next to the stem.
   * Use for problems that reference a geometric figure or labelled coordinate
   * grid the student needs to see before attempting the question.
   */
  questionDiagram?: CurveDiagramConfig;
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
