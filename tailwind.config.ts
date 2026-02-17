import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        surface: "#121821",
        primary: "#7C5CFF",
        secondary: "#19D3A2",
        muted: "#94A3B8",
        border: "#1F2937",
        success: "#34D399",
        danger: "#FF5C7C"
      },
      borderRadius: { xl: "12px" }
    }
  },
  plugins: []
};

export default config;
