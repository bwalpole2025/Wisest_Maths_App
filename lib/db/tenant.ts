/**
 * Request-scoped, RLS-respecting Postgres access — the choke-point that makes
 * Row Level Security actually enforce school isolation.
 *
 * Every tenant query (classes, class_members, quiz_assignments, school_members)
 * runs through `withTenant`, which opens a transaction as the RESTRICTED
 * `wisest_app_user` role (NOT the Supabase service-role key, which bypasses RLS)
 * and sets the per-request context the policies read:
 *
 *   app.current_user_id   = claims.sub
 *   app.current_school_id = claims.schoolId
 *   app.current_role      = claims.role
 *
 * `set_config(name, value, is_local := true)` is the parameterised form of
 * `SET LOCAL` — transaction-scoped, so the context never leaks between requests
 * sharing a pooled connection. See sql/multi_tenant_schools.sql for the policies
 * and sql/zero_trust_roles.sql for the role.
 *
 * Requires DATABASE_URL to point at the `wisest_app_user` connection. When it is
 * absent, `tenantDbEnabled()` is false and callers fall back to the local store.
 */

import { Pool, type PoolClient } from "pg";
import type { SessionClaims } from "@/lib/auth/session";

// A non-existent school used when a session has no school: every school-scoped
// policy then matches zero rows (deny-by-default) instead of erroring on ''::uuid.
const NO_SCHOOL = "00000000-0000-0000-0000-000000000000";

let pool: Pool | null = null;
function getPool(): Pool {
  if (!pool) {
    const url = process.env.DATABASE_URL ?? "";
    pool = new Pool({
      connectionString: url,
      max: 10,
      // Supabase's pooler uses TLS (cert managed by Supabase). Some local
      // networks (e.g. a VPN) reset TLS on the pooler port — append
      // `?sslmode=disable` to DATABASE_URL to connect in plaintext for LOCAL dev
      // only (the request still goes over the VPN tunnel). Never disable in prod.
      ssl: url.includes("sslmode=disable")
        ? false
        : url.includes("supabase")
          ? { rejectUnauthorized: false }
          : undefined,
    });
  }
  return pool;
}

/** Whether the tenant DB connection is configured (gates school features). */
export function tenantDbEnabled(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

/**
 * Run `fn` inside a transaction whose RLS context is set from the verified
 * session. The callback gets a `pg` client to query with; RLS filters every
 * statement to the session's school (and teacher ownership / admin role).
 */
export async function withTenant<T>(
  claims: Pick<SessionClaims, "sub" | "role" | "schoolId" | "email">,
  fn: (client: PoolClient) => Promise<T>,
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT set_config('app.current_user_id', $1, true)", [claims.sub]);
    await client.query("SELECT set_config('app.current_school_id', $1, true)", [claims.schoolId || NO_SCHOOL]);
    await client.query("SELECT set_config('app.current_role', $1, true)", [claims.role]);
    // Lets a student be matched to roster rows by verified email before their
    // account is linked (class_members.student_id). Always their own email.
    await client.query("SELECT set_config('app.current_email', $1, true)", [claims.email ?? ""]);
    const result = await fn(client);
    await client.query("COMMIT");
    return result;
  } catch (err) {
    await client.query("ROLLBACK").catch(() => {});
    throw err;
  } finally {
    client.release();
  }
}
