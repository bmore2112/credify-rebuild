import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gotham night: cold blue-black canvas, steel-cyan accent (replaces gold)
        ink: { DEFAULT: "#070A12", 2: "#10141F" },
        line: "#202736",
        ivory: { DEFAULT: "#EAF1F6", muted: "#8A93A6" },
        gold: { DEFAULT: "#5C9DC4", hi: "#8AC4E4" },
        funded: "#34D399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "14px" },
      maxWidth: { content: "1200px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.6s ease both" },
    },
  },
  plugins: [],
};
export default config;
