import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        // All colours are driven by CSS variables (HSL triples) defined in
        // globals.css, so the app can switch between the light (cream) theme and
        // the dark-navy `.theme-dark` theme used for the signed-in student app.
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          light: "hsl(var(--accent-light) / <alpha-value>)",
          glow: "hsl(var(--accent-glow) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          alt: "hsl(var(--surface-alt) / <alpha-value>)",
          raised: "hsl(var(--surface-raised) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          primary: "hsl(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "hsl(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
        },
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Poppins", "Inter", "system-ui", "sans-serif"],
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
        sm: "0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        md: "0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        lg: "0 10px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
        glow: "0 0 40px rgba(13,148,136,0.18), 0 0 80px rgba(15,118,110,0.08)",
        "glow-sm": "0 0 20px rgba(13,148,136,0.12)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.8)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "aurora": "linear-gradient(125deg, #0d9488 0%, #0f766e 40%, #d4775c 100%)",
        "subtle-gradient": "linear-gradient(180deg, rgba(13,148,136,0.06) 0%, transparent 60%)",
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
  plugins: [tailwindcssAnimate],
};

export default config;
