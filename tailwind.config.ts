import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D1117",
        muted: "#5F6673",
        background: "#FFFFFF",
        warm: "#F7F5F1",
        surface: "#FFFFFF",
        border: "#E5E2DC",
        purple: {
          DEFAULT: "#6D35D3",
          dark: "#3B1A78",
          soft: "#EEE7FF",
        },
        night: "#090D14",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      maxWidth: {
        site: "1408px",
      },
      boxShadow: {
        soft: "0 24px 64px rgba(13, 17, 23, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
