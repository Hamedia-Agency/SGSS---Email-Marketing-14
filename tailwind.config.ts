import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#fecf31",
          hover: "#e8bb1e",
        },
        darkBlue: {
          DEFAULT: "#1d2c48",
          light: "#263659",
        },
        darkText: "#2a2829",
        mutedGray: "#929292",
        borderGray: "#c4c4c4",
        bgAlt: "#f8f9fc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(29, 44, 72, 0.08)",
        md: "0 4px 16px rgba(29, 44, 72, 0.1)",
        lg: "0 10px 40px rgba(29, 44, 72, 0.12)",
        xl: "0 24px 60px rgba(29, 44, 72, 0.15)",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
