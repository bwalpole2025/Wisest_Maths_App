import { defineConfig } from "vitest/config";
import path from "path";

// Dedicated config for the bank self-classification audit. Mirrors
// vitest.config.ts (the "@/" alias + the server-only stub) but runs ONLY the
// audit spec, so it stays out of the default `npm test` run.
export default defineConfig({
  test: {
    environment: "node",
    include: ["scripts/audit-banks.audit.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      "server-only": path.resolve(__dirname, "lib/test/serverOnlyStub.ts"),
    },
  },
});
