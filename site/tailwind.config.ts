import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // getcredify.io exact tokens (from credify.css): pure black, white text, hairline frames, mint accent
        ink: { DEFAULT: "#000000", 2: "#0E0E0E" },
        line: "#242424",
        ivory: { DEFAULT: "#FFFFFF", muted: "#8F8F8F" },
        gold: { DEFAULT: "#059669", hi: "#10B981" },
        funded: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "18px" },
      maxWidth: { content: "1200px" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
