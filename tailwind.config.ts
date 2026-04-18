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
        // Core surfaces — near-black with subtle tonal shifts
        background: "#05060a",
        foreground: "#f4f4f5",
        primary: {
          DEFAULT: "#0a0b12",
          foreground: "#f4f4f5",
        },
        // Signature accent: electric indigo-violet with cyan counter
        accent: {
          DEFAULT: "#818cf8",
          foreground: "#0a0b12",
          light: "#c7d2fe",
          glow: "#6366f1",
        },
        secondary: {
          DEFAULT: "#22d3ee",
          foreground: "#0a0b12",
        },
        // Glassy elevated surfaces
        surface: {
          DEFAULT: "#0d0e17",
          alt: "#12131d",
          raised: "#1a1b27",
        },
        border: "#22232f",
        muted: {
          DEFAULT: "#1a1b27",
          foreground: "#a1a1aa",
        },
        destructive: {
          DEFAULT: "#f87171",
          foreground: "#0a0b12",
        },
        ring: "#818cf8",
        input: "#22232f",
        card: {
          DEFAULT: "#0d0e17",
          foreground: "#f4f4f5",
        },
        popover: {
          DEFAULT: "#0d0e17",
          foreground: "#f4f4f5",
        },
        sidebar: {
          DEFAULT: "#0a0b12",
          foreground: "#e4e4e7",
          primary: "#818cf8",
          "primary-foreground": "#0a0b12",
          accent: "#1a1b27",
          "accent-foreground": "#f4f4f5",
          border: "#22232f",
          ring: "#818cf8",
        },
        chart: {
          "1": "#818cf8",
          "2": "#22d3ee",
          "3": "#a78bfa",
          "4": "#34d399",
          "5": "#f472b6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        math: ["KaTeX_Main", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03)",
        md: "0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        lg: "0 10px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        glow: "0 0 40px rgba(129,140,248,0.25), 0 0 80px rgba(99,102,241,0.15)",
        "glow-sm": "0 0 20px rgba(129,140,248,0.2)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "aurora": "linear-gradient(125deg, #818cf8 0%, #a78bfa 40%, #22d3ee 100%)",
        "subtle-gradient": "linear-gradient(180deg, rgba(129,140,248,0.08) 0%, transparent 60%)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translate(-10%, 5%) rotate(4deg)", opacity: "0.8" },
        },
        "aurora-shift-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)", opacity: "0.5" },
          "50%": { transform: "translate(8%, -6%) rotate(-4deg)", opacity: "0.7" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        "aurora-shift-2": "aurora-shift-2 22s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
