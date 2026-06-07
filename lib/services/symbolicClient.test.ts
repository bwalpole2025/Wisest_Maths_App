import { describe, it, expect, vi } from "vitest";
import { SymbolicClient } from "./symbolicClient";

function res(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const base = "http://sidecar.internal";

describe("SymbolicClient", () => {
  it("parses a 200 /equivalent response and sends the right body", async () => {
    const fetchImpl = vi.fn(async () => res({ equivalent: true }));
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn: vi.fn() } });
    expect(await c.equivalent("x", "x", "simplify")).toBe(true);
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const call = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(call[0]).toBe(`${base}/equivalent`);
    expect(JSON.parse(String(call[1].body))).toEqual({ a: "x", b: "x", mode: "simplify" });
  });

  it("parses /classify-form", async () => {
    const fetchImpl = vi.fn(async () =>
      res({ isExact: true, hasSurd: true, hasFraction: false, isBareDecimal: false }),
    );
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn: vi.fn() } });
    expect(await c.classifyForm("sqrt(2)")).toEqual({
      isExact: true,
      hasSurd: true,
      hasFraction: false,
      isBareDecimal: false,
    });
  });

  it("returns null + logs a downgrade on a 4xx WITHOUT retrying", async () => {
    const warn = vi.fn();
    const fetchImpl = vi.fn(async () => res({ error: "unparseable" }, 400));
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn } });
    expect(await c.equivalent("@@@", "x", "simplify")).toBeNull();
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("retries once then downgrades on a 5xx", async () => {
    const warn = vi.fn();
    const fetchImpl = vi.fn(async () => res({}, 500));
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn } });
    expect(await c.equivalent("x", "x", "simplify")).toBeNull();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("retries once then downgrades on a connection failure (sidecar killed)", async () => {
    const warn = vi.fn();
    const fetchImpl = vi.fn(async () => {
      throw new Error("ECONNREFUSED");
    });
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn } });
    expect(await c.classifyForm("x")).toBeNull();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("times out (aborts), retries, then downgrades", async () => {
    const warn = vi.fn();
    const fetchImpl = vi.fn(
      (_url: string, init?: RequestInit) =>
        new Promise<Response>((_, reject) => {
          init?.signal?.addEventListener("abort", () => reject(new Error("aborted")));
        }),
    );
    const c = new SymbolicClient({
      baseUrl: base,
      timeoutMs: 10,
      fetchImpl: fetchImpl as unknown as typeof fetch,
      logger: { warn },
    });
    expect(await c.equivalent("x", "x", "simplify")).toBeNull();
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("never sends over-length input to the sidecar", async () => {
    const fetchImpl = vi.fn(async () => res({ equivalent: true }));
    const c = new SymbolicClient({ baseUrl: base, fetchImpl, logger: { warn: vi.fn() } });
    expect(await c.equivalent("x".repeat(300), "y", "simplify")).toBeNull();
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
