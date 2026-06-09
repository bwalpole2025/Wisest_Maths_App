export type QuestionDifficulty = "Foundation" | "Standard" | "Challenge";
// "school_admin" manages all teachers/students/classes within one school;
// "wisest_staff" is a Wisest employee who onboards/suspends schools but CANNOT
// see student PII; "wisest_admin" is the Wisest super-admin (full/break-glass).
export type UserRole =
  | "student"
  | "teacher"
  | "school_admin"
  | "wisest_staff"
  | "wisest_admin";
export type Course =
  | "a-level-maths"
  | "a-level-further-maths"
  | "gcse-maths"
  | "undergrad-maths";

/* ── GCSE taxonomy metadata ─────────────────────────────
 * GCSE topics reuse the A-Level Topic shape (course → category → subcategory →
 * topic/ref). A GCSE Strand maps to `category`, a GCSE Topic to `subcategory`,
 * and a GCSE Subtopic to a Topic leaf. The fields below are additive and
 * optional, carried only by GCSE rows; A-Level rows omit them. */
export type Strand =
  | "Number"
  | "Algebra"
  | "Ratio, Proportion & Rates of Change"
  | "Geometry & Measures"
  | "Probability"
  | "Statistics";

/** "Both" = appears in Foundation and Higher (DfE F/H); "Higher" = Higher-only (DfE H). */
export type Tier = "Foundation" | "Higher" | "Both";

export type Board = "AQA" | "Edexcel" | "OCR" | "Eduqas" | "WJEC";

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
  /** GCSE only — exam tier the subtopic appears in. */
  tier?: Tier;
  /** GCSE only — DfE subject-content reference codes, e.g. ["N4"]. */
  dfeRef?: string[];
  /** GCSE only — awarding bodies offering this subtopic (defaults to all five). */
  boards?: Board[];
  /** GCSE only — board caveats / cross-references. */
  notes?: string;
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
  /**
   * Mafs JSX source as a string (a single `<Mafs>…</Mafs>` element), rendered
   * at runtime by components/questions/MafsDiagram.tsx. Authored content only
   * (not user input). Distinct from `diagram` (CurveDiagramConfig); use this for
   * banks generated against the Mafs diagram convention (see .claude/mafs.md).
   */
  mafs?: string;
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

/**
 * How a question's answer should be compared (drives the future diagnosis/
 * comparison logic). `expression` is the safe default (numeric sampling, the
 * current grading behaviour); `exactValue` means value AND form must match
 * (e.g. surds: 1.414 is wrong, √2 is right).
 */
export type AnswerType =
  | "expression" // compare by numeric sampling
  | "exactValue" // value AND form must match (e.g. surds)
  | "set" // unordered set of values, compare as a set
  | "interval" // inequality / interval, compare endpoints + openness
  | "equationRoots" // solution set of an equation
  | "numeric"; // single number with tolerance / required dp or sf

/** Runtime list of the answer types (kept in sync with AnswerType). */
export const ANSWER_TYPES = [
  "expression",
  "exactValue",
  "set",
  "interval",
  "equationRoots",
  "numeric",
] as const;

/** A generic, anticipated error pattern used to recognise a wrong answer (Layer 1). */
export type ErrorTransform =
  | "negate"
  | "reciprocal"
  | "scaleByTwo"
  | "scaleByHalf"
  | "derivativeInsteadOfIntegral"
  | "integralInsteadOfDerivative"
  | "missingConstantOfIntegration"
  | "missingChainFactor"
  | "expandedSquareOfSum" // (a+b)^2 -> a^2+b^2
  | "degreesRadiansSwap"
  | "singleRootOnly"
  | "droppedNegativeRoot";

/** A feedback rule: a recognised wrong answer → a misconception tag + a student-facing hint. */
export interface FeedbackRule {
  /** Layer 1: a generic transform of the correct answer. */
  transform?: ErrorTransform;
  /** Layer 2: a specific anticipated wrong answer (LaTeX/expression). */
  matchAnswer?: string;
  /** Internal misconception tag, e.g. "sign-error". */
  misconception: string;
  /** Student-facing nudge — MUST NOT contain the final answer. */
  hint: string;
  /** Optional: jump the student to this solutionStep index. */
  revealStep?: number;
}

/**
 * A machine-checkable checkpoint laid OVER a question's existing solutionSteps
 * (augments, never rewrites them). Lets the future step-feedback runtime verify
 * a student's intermediate result step-by-step using the diagnosis equivalence
 * engine. `checkpoints` is an ordered subset of solutionSteps.
 */
export interface Checkpoint {
  /** Index into `workedSolution.steps` this checkpoint augments. */
  stepIndex: number;
  /** Short step name, e.g. "Differentiate", "Apply limits". */
  label: string;
  /** The canonical RESULT of this step, parseable by the equivalence engine. */
  expected: string;
  /** How `expected` is compared (reuses the diagnosis AnswerType enum). */
  answerType: AnswerType;
  /** false for non-numeric steps ("sketch the graph", "state the domain"). */
  checkable: boolean;
  /** Step-specific nudge — MUST NOT contain `expected` or the final answer. */
  hint: string;
  /** Optional: restrict which Layer-1 misconception checks apply at this step. */
  allowTransforms?: ErrorTransform[];
  /**
   * Optional "correct step transform": this step's expected value as a function of
   * the PREVIOUS checkpoint's value, using the token `PREV` (e.g. "2*(PREV)",
   * "-(PREV)", "(PREV)+1"). Lets the step-feedback runtime CONFIRM error-carried-
   * forward (the student applied the right operation to their own wrong value).
   * When absent, ECF is inferred heuristically and reported as "likely".
   */
  stepOp?: string;
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
  /** Optional Mafs JSX figure shown with the stem (see SolutionStep.mafs). */
  questionMafs?: string;
  marks: number;
  workedSolution: WorkedSolution;
  examStyle: boolean;
  yearCreated: number;
  tags: string[];
  /** How the student's answer should be compared (see AnswerType). */
  answerType: AnswerType;
  /**
   * Comparison metadata; `exactForm` is required when answerType is "exactValue".
   * `allowTransforms`/`denyTransforms` restrict which Layer-1 generic misconception
   * transforms apply (default: all). See lib/services/diagnosis.ts `diagnoseGeneric`.
   */
  answerMeta?: {
    requiredDp?: number;
    requiredSf?: number;
    exactForm?: boolean;
    allowTransforms?: ErrorTransform[];
    denyTransforms?: ErrorTransform[];
  };
  /**
   * Per-question (Layer 2) feedback rules. Layer 1 (generic ErrorTransform)
   * rules are global defaults applied to all questions by the future runtime.
   */
  feedbackRules?: FeedbackRule[];
  /**
   * Ordered subset of `workedSolution.steps` that are machine-checkable
   * (step-level disclosure/feedback). Augments solutionSteps; never replaces
   * them. `stepIndex` must be strictly increasing; the last checkpoint's
   * `expected` must equal the stored final answer (see lib/services/feedbackValidation).
   */
  checkpoints?: Checkpoint[];
}

/**
 * A question without its (heavy) worked solution — the payload for browse/list
 * views, which only render the stem + difficulty/marks/examStyle. The full
 * question (with workedSolution) is fetched per-id on the attempt page.
 */
export type QuestionSummary = Omit<Question, "workedSolution">;

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

/**
 * Result of marking a photo of a student's handwritten working.
 * The image is processed in-memory and never persisted. The recognised answer
 * is marked by symbolic equivalence against the question's canonical solution
 * (the same engine used by /api/quiz/grade), never by string matching.
 */
export interface HandwritingMarkingResult {
  /** The final answer the vision model read from the photo, or null if illegible. */
  recognised: string | null;
  /** Vision model's self-reported legibility/confidence in the reading. */
  legible: boolean;
  /** true = equivalent to the canonical answer, false = not, null = needs manual grade. */
  equivalent: boolean | null;
  /** true when the engine could not auto-grade (illegible, proof, unparseable). */
  needsManualGrade: boolean;
  /** How the verdict was reached: the grading method, or "recognition" when stopped early. */
  method: "symbolic" | "numeric" | "constant" | "manual" | "sympy" | "recognition";
  /** Short human-readable reason, useful for logging / teacher review. */
  detail: string;
}

/* ── Handwriting-marking persisted data model ─────────────────────────────
 * TypeScript mirror of the tables in sql/handwriting_marking.sql (snake_case
 * columns → camelCase fields). Timestamps are ISO strings as returned by `pg`.
 * studentId = Supabase auth user id (session.sub); questionId = static-TS
 * question id (e.g. "gn12-001"); neither is a DB foreign key. */

/* ── A-Level mark schemes + marking output ───────────────────────────────── */

/** A-Level mark types: M = method, A = accuracy (dependent), B = independent. */
export type MarkType = "M" | "A" | "B";

/** One mark in an official mark scheme. */
export interface MarkSchemeMark {
  id: string;
  type: MarkType;
  description: string;
  /** markIds this mark depends on (e.g. an A mark depends on its M mark). */
  dependsOn?: string[];
  maxMarks: number;
}

/** An ordered mark scheme for a question. */
export interface MarkScheme {
  id: string;
  questionId: string;
  marks: MarkSchemeMark[];
}

/** One model-produced mark allocation (advisory). Matches the marker JSON schema. */
export interface MarkAllocation {
  markId: string;
  type: MarkType;
  awarded: boolean;
  /** true when this mark was earned via error-carried-forward. */
  ecfApplied: boolean;
  /** Model's confidence in THIS allocation, 0..1. */
  confidence: number;
  justification: string;
  studentLineRef: string | null;
}

/** The verbatim marker output, stored on MarkingResult.markBreakdown. */
export interface MarkBreakdown {
  finalAnswerCorrect: boolean | null;
  totalMarksAvailable: number;
  totalMarksAwarded: number;
  marks: MarkAllocation[];
  uncertainNotes: string[];
}

/** Lifecycle of a handwriting submission (Postgres enum `submission_status`). */
export type SubmissionStatus =
  | "UPLOADED"
  | "RECOGNISING"
  | "AWAITING_CONFIRMATION"
  | "CONFIRMED"
  | "MARKING"
  | "MARKED"
  | "FAILED";

/** A student's uploaded photo of handwritten working (image bytes are NOT stored). */
export interface Submission {
  id: string;
  studentId: string;
  questionId: string | null;
  status: SubmissionStatus;
  /** Object-storage key for the uploaded image — never the bytes. */
  imageStorageKey: string;
  imageMimeType: string;
  imageSizeBytes: number;
  /** When the stored image must be deleted (retention). */
  retentionExpiresAt: string;
  /** Short, non-secret reason set when status is FAILED. */
  failureReason?: string | null;
  createdAt: string;
  updatedAt: string;
}

/** The current OCR transcription for a submission (one per submission). */
export interface Recognition {
  id: string;
  submissionId: string;
  provider: string;
  rawLatex: string;
  renderedMarkdown: string | null;
  overallConfidence: number | null;
  /** Per-line text + confidence as returned by the OCR provider. */
  lineData: unknown | null;
  /** True when overallConfidence is below the configured threshold. */
  lowConfidence: boolean;
  createdAt: string;
}

/** The student-approved transcription (one per submission). */
export interface TranscriptionConfirmation {
  id: string;
  submissionId: string;
  confirmedLatex: string;
  /** true if the student corrected the OCR before confirming. */
  editedByStudent: boolean;
  confirmedAt: string;
}

/** The (advisory) marks for a submission (one per submission). */
export interface MarkingResult {
  id: string;
  submissionId: string;
  markSchemeId: string;
  totalMarksAvailable: number;
  totalMarksAwarded: number;
  finalAnswerCorrect: boolean | null;
  /** The verbatim marker output (stored as jsonb). */
  markBreakdown: MarkBreakdown;
  /** Method-mark allocation is advisory. */
  advisory: boolean;
  markerModel: string;
  createdAt: string;
}
