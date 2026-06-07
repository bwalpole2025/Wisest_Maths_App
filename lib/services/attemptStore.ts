/**
 * Per-student / per-question attempt state for Layer-3 progressive disclosure.
 *
 * `AttemptStore` is injectable: `pgAttemptStore` persists to the RLS-protected
 * `student_attempts` table via `withTenant` (real cross-request persistence);
 * `InMemoryAttemptStore` is used in tests and as a dev fallback when no
 * `DATABASE_URL` is configured. `getAttemptStore()` picks the right one.
 */
import { withTenant, tenantDbEnabled } from "@/lib/db/tenant";
import type { SessionClaims } from "@/lib/auth/session";

export type AttemptClaims = Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">;

export interface AttemptState {
  studentId: string;
  questionId: string;
  wrongAttempts: number;
  revealedStepCount: number;
  lastAttemptAt: Date;
}

export interface AttemptStore {
  load(claims: AttemptClaims, questionId: string): Promise<AttemptState | null>;
  save(
    claims: AttemptClaims,
    state: { questionId: string; wrongAttempts: number; revealedStepCount: number },
  ): Promise<void>;
  reset(claims: AttemptClaims, questionId: string): Promise<void>;
}

/** In-memory store (tests / no-DB dev). Not shared across serverless instances. */
export class InMemoryAttemptStore implements AttemptStore {
  private readonly map = new Map<string, AttemptState>();
  private key(sub: string, questionId: string): string {
    return `${sub}:${questionId}`;
  }
  async load(claims: AttemptClaims, questionId: string): Promise<AttemptState | null> {
    return this.map.get(this.key(claims.sub, questionId)) ?? null;
  }
  async save(
    claims: AttemptClaims,
    state: { questionId: string; wrongAttempts: number; revealedStepCount: number },
  ): Promise<void> {
    this.map.set(this.key(claims.sub, state.questionId), {
      studentId: claims.sub,
      questionId: state.questionId,
      wrongAttempts: state.wrongAttempts,
      revealedStepCount: state.revealedStepCount,
      lastAttemptAt: new Date(),
    });
  }
  async reset(claims: AttemptClaims, questionId: string): Promise<void> {
    this.map.delete(this.key(claims.sub, questionId));
  }
}

/** Postgres-backed store. RLS scopes every row to the current student (the
 *  `app.current_user_id` GUC set by `withTenant`), so queries filter on
 *  question_id only. */
export const pgAttemptStore: AttemptStore = {
  async load(claims, questionId) {
    return withTenant(claims, async (c) => {
      const { rows } = await c.query(
        `SELECT student_id, question_id, wrong_attempts, revealed_step_count, last_attempt_at
           FROM public.student_attempts
          WHERE question_id = $1
          LIMIT 1`,
        [questionId],
      );
      if (rows.length === 0) return null;
      const r = rows[0];
      return {
        studentId: r.student_id as string,
        questionId: r.question_id as string,
        wrongAttempts: Number(r.wrong_attempts),
        revealedStepCount: Number(r.revealed_step_count),
        lastAttemptAt: new Date(r.last_attempt_at as string),
      };
    });
  },
  async save(claims, state) {
    await withTenant(claims, async (c) => {
      await c.query(
        `INSERT INTO public.student_attempts
           (student_id, question_id, wrong_attempts, revealed_step_count, last_attempt_at)
         VALUES ($1, $2, $3, $4, now())
         ON CONFLICT (student_id, question_id)
         DO UPDATE SET wrong_attempts      = EXCLUDED.wrong_attempts,
                       revealed_step_count = EXCLUDED.revealed_step_count,
                       last_attempt_at     = now()`,
        [claims.sub, state.questionId, state.wrongAttempts, state.revealedStepCount],
      );
    });
  },
  async reset(claims, questionId) {
    await withTenant(claims, async (c) => {
      await c.query(`DELETE FROM public.student_attempts WHERE question_id = $1`, [questionId]);
    });
  },
};

let memSingleton: InMemoryAttemptStore | null = null;

/** The configured store: Postgres when a DATABASE_URL is set, else in-memory. */
export function getAttemptStore(): AttemptStore {
  if (tenantDbEnabled()) return pgAttemptStore;
  if (!memSingleton) memSingleton = new InMemoryAttemptStore();
  return memSingleton;
}
