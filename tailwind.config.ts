import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(220 18% 22%)",
        background: "hsl(222 24% 8%)",
        foreground: "hsl(210 30% 95%)",
        panel: "hsl(220 22% 12%)",
        accent: "hsl(228 96% 66%)"
      }
    }
  },
  plugins: []
};

export default config;
