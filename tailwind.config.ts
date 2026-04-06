import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#be123c",
          foreground: "#ffffff",
          light: "#fecdd3",
        },
        secondary: {
          DEFAULT: "#334155",
          foreground: "#f8fafc",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#f8fafc",
        },
        border: "#e2e8f0",
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: "#be123c",
        input: "#e2e8f0",
        background: "#ffffff",
        foreground: "#0f172a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        sidebar: {
          DEFAULT: "#334155",
          foreground: "#f8fafc",
          primary: "#be123c",
          "primary-foreground": "#ffffff",
          accent: "#475569",
          "accent-foreground": "#f8fafc",
          border: "#475569",
          ring: "#be123c",
        },
        chart: {
          "1": "#be123c",
          "2": "#0f172a",
          "3": "#334155",
          "4": "#64748b",
          "5": "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        math: ["KaTeX_Main", "Times New Roman", "serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(15,23,42,.07), 0 1px 2px rgba(15,23,42,.04)",
        md: "0 4px 12px rgba(15,23,42,.10), 0 2px 4px rgba(15,23,42,.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
