import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // The question bank is actively maintained in the root ./lib/ tree;
      // src/lib/data/questions is a stale May-2025 snapshot. Redirect the
      // app's question imports to the live tree. Must precede the "@" alias
      // (rollup alias uses the first matching entry).
      "@/lib/data/questions": path.resolve(__dirname, "./lib/data/questions"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
