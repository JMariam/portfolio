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
        primary: "#D6D6D6", // Warm Grey for buttons, highlights
        // background: "#F5F5F5", // Light Grey for background
        text: "#505050", // Charcoal Grey for main text
        // accent: "#2E2E2E", // Blackish Grey for headings, borders, or call-to-action
        background: "#F9FAFB", // Use for light backgrounds
        "light-gray": "#E5E7EB", // Use for borders, dividers, or subtle accents
        text1: "#6B7280", // Use for secondary text or subtle accents
        text2: "#374151", // Use for primary text or headings
        background2: "#D1CBC1", // Use for background highlights or accents
        "soft-taupe": "#A8A29E", // Use for secondary backgrounds or muted accents
        accent: "#1F2937", // Use for dark backgrounds or contrast text
      },
    },
  },
  plugins: [],
} satisfies Config;
