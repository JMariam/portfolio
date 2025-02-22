// filepath: /c:/Users/USER/Desktop/mi-portfolio/tailwind.config.ts
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
        primary: "#D6D6D6",
        background3: "#F5F5F5",
        text: "#505050",
        background: "#F9FAFB",
        "light-gray": "#E5E7EB",
        text1: "#6B7280",
        text2: "#374151",
        background2: "#D1CBC1",
        "soft-taupe": "#A8A29E",
        accent: "#1F2937",
      },
    },
  },
  plugins: [],
} satisfies Config;