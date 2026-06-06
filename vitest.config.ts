import { defineConfig } from "vitest/config";
import path from "path";

// Minimal vitest setup. Tests run in the Node environment (the marking/grading
// logic is server-side). The "@/..." path alias mirrors tsconfig so imports
// resolve the same way they do in the app.
export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    exclude: ["node_modules/**", ".next/**"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      // `server-only` throws on import outside an RSC; stub it for node tests.
      "server-only": path.resolve(__dirname, "lib/test/serverOnlyStub.ts"),
    },
  },
});
