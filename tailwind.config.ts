import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-page": "var(--color-page)",
        "color-bg": "var(--color-bg)",
        "color-inverse": "var(--color-inverse)",
        "color-text": "var(--color-text)",
        "color-border": "var(--color-border)",
        "color-muted": "var(--color-muted)",
        "color-primary": "var(--color-primary)",
        "color-success": "var(--color-success)",
        "color-danger": "var(--color-danger)",
      },
      screens: {},
      fontSize: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
          sm: "32px",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
}
export default config
