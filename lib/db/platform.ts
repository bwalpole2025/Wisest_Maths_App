/**
 * Wisest-staff platform connection — the no-PII back-office choke-point.
 *
 * Wisest EMPLOYEES (`wisest_staff`) manage schools through this connection, which
 * runs as the restricted `wisest_staff` Postgres role (DATABASE_URL_WISEST). That
 * role has grants ONLY on `schools`, the PII-free views (`school_overview`,
 * `school_admins`), and INSERT on `school_members` (to seed a school admin) — it
 * physically cannot SELECT student names/emails/answers. See
 * sql/wisest_staff_and_provisioning.sql.
 *
 * `app.current_role` is set so the schools_wisest / school_members_wisest_insert
 * RLS policies admit the operation. (No school context — Wisest spans tenants.)
 */

import { Pool, type PoolClient } from "pg";
import type { SessionClaims } from "@/lib/auth/session";

let pool: Pool | null = null;
function getPool(): Pool {
  if (!pool) {
    const url = process.env.DATABASE_URL_WISEST ?? "";
    pool = new Pool({
      connectionString: url,
      max: 5,
      ssl: url.includes("sslmode=disable")
        ? false
        : url.includes("supabase")
          ? { rejectUnauthorized: false }
          : undefined,
    });
  }
  return pool;
}

/** Whether the restricted Wisest-staff connection is configured. */
export function platformDbEnabled(): boolean {
  return Boolean(process.env.DATABASE_URL_WISEST);
}

export async function withWisestStaff<T>(
  claims: Pick<SessionClaims, "sub" | "role">,
  fn: (client: PoolClient) => Promise<T>,
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    await client.query("SELECT set_config('app.current_user_id', $1, true)", [claims.sub]);
    await client.query("SELECT set_config('app.current_role', $1, true)", [claims.role]);
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
