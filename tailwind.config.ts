import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Portfolio palette from DESIGN.md
        parchment: "#faf9f7",
        "parchment-soft": "#f4f3f1",
        "parchment-muted": "#efeeec",
        ink: "#1a1c1b",
        "ink-soft": "#444748",
        "ink-muted": "#747878",
        terracotta: "#9a452c",
        "terracotta-soft": "#b85a3e",
        rule: "#c4c7c7",
        "rule-soft": "#e3e2e0",
        "inverse-surface": "#2f3130",
        "inverse-on-surface": "#f1f1ef",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Newsreader", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // From DESIGN.md typography scale
        "headline-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-md": ["2rem", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      spacing: {
        // 8px unit-based scale from DESIGN.md
        "stack-sm": "1rem",      // 16px
        "stack-md": "2.5rem",    // 40px
        "stack-lg": "5rem",      // 80px
        "section": "7.5rem",     // 120px
        "gutter": "2rem",        // 32px
        "margin-safe": "4rem",   // 64px
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
