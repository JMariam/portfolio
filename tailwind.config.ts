import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1240px",
        xl: "1440px",
      },
      colors: {
        primary: '#D6D6D6', // Warm Grey for buttons, highlights
        background: '#F5F5F5', // Light Grey for background
        text: '#505050', // Charcoal Grey for main text
        accent: '#2E2E2E', // Blackish Grey for headings, borders, or call-to-action
      },
    },
  },
  plugins: [],
} satisfies Config;
