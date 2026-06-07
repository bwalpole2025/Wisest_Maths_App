/**
 * Client for the optional SymPy symbolic sidecar (services/symbolic).
 *
 * Every method returns `null` whenever the sidecar can't give an answer — not
 * configured, unreachable, timed out, rejected the input, or returned junk — so
 * callers transparently fall back to the sampling/math.js path. It NEVER throws
 * and logs a one-line downgrade on failure. Short timeout + exactly one retry.
 */
import { symbolicSidecarConfig } from "@/lib/env";

export type EquivMode = "simplify" | "derivative" | "antiderivative";

export interface FormInfo {
  isExact: boolean;
  hasSurd: boolean;
  hasFraction: boolean;
  isBareDecimal: boolean;
}

export interface SymbolicOracle {
  /** mode "simplify" → a≡b; "derivative" → a≡d/dx(b); "antiderivative" → a,b equal up to a constant. */
  equivalent(a: string, b: string, mode: EquivMode): Promise<boolean | null>;
  classifyForm(expr: string): Promise<FormInfo | null>;
}

const MAX_LEN = 256;

interface SymbolicClientOpts {
  baseUrl: string;
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
  logger?: Pick<Console, "warn">;
}

export class SymbolicClient implements SymbolicOracle {
  private readonly baseUrl: string;
  private readonly timeoutMs: number;
  private readonly fetchImpl: typeof fetch;
  private readonly logger: Pick<Console, "warn">;

  constructor(opts: SymbolicClientOpts) {
    this.baseUrl = opts.baseUrl.replace(/\/+$/, "");
    this.timeoutMs = opts.timeoutMs ?? 1500;
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.logger = opts.logger ?? console;
  }

  async equivalent(a: string, b: string, mode: EquivMode): Promise<boolean | null> {
    if (a.length > MAX_LEN || b.length > MAX_LEN) return null;
    const body = await this.post("/equivalent", { a, b, mode });
    return body && typeof body.equivalent === "boolean" ? body.equivalent : null;
  }

  async classifyForm(expr: string): Promise<FormInfo | null> {
    if (expr.length > MAX_LEN) return null;
    const body = await this.post("/classify-form", { expr });
    if (!body || typeof body.isExact !== "boolean") return null;
    return {
      isExact: body.isExact,
      hasSurd: Boolean(body.hasSurd),
      hasFraction: Boolean(body.hasFraction),
      isBareDecimal: Boolean(body.isBareDecimal),
    };
  }

  /** POST with an AbortController timeout and ONE retry. Returns null + logs a
   *  downgrade on any failure; never throws. */
  private async post(path: string, payload: unknown): Promise<Record<string, unknown> | null> {
    for (let attempt = 0; attempt < 2; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), this.timeoutMs);
      try {
        const res = await this.fetchImpl(`${this.baseUrl}${path}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        clearTimeout(timer);
        if (!res.ok) {
          // 4xx (rejected/over-long input) is deterministic — don't retry.
          if (res.status >= 400 && res.status < 500) {
            this.downgrade(path, `http ${res.status}`);
            return null;
          }
          throw new Error(`http ${res.status}`);
        }
        return (await res.json()) as Record<string, unknown>;
      } catch (err) {
        clearTimeout(timer);
        if (attempt === 0) continue; // one retry on transient failure / timeout / abort
        this.downgrade(path, err instanceof Error ? err.message : "error");
        return null;
      }
    }
    return null;
  }

  private downgrade(path: string, reason: string): void {
    this.logger.warn(`[symbolic] downgrade-to-sampling (${path}: ${reason})`);
  }
}

let resolved = false;
let singleton: SymbolicClient | null = null;

/** The configured symbolic oracle, or null when the sidecar isn't enabled. */
export function getSymbolicOracle(): SymbolicOracle | null {
  if (!resolved) {
    const cfg = symbolicSidecarConfig();
    singleton = cfg ? new SymbolicClient({ baseUrl: cfg.baseUrl, timeoutMs: cfg.timeoutMs }) : null;
    resolved = true;
  }
  return singleton;
}
