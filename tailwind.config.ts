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
        wine: {
          950: "#2B0008",
          900: "#32000A",
          800: "#49000E", // primary brand color from SVG
          700: "#6B111F",
          600: "#8B182B",
          100: "#FFDADA",
          50: "#FFF5F5",
        },
        gold: {
          500: "#C8A35C", // exact gold from SVG
          600: "#B38F46",
          400: "#D9B875",
        },
        cream: {
          50: "#FCF9F4", // exact light cream from SVG
          100: "#F6F3EE",
          200: "#F0EDE9",
          300: "#EDE8E0",
          400: "#EBE8E3",
        },
        charcoal: {
          900: "#181A29",
          800: "#1C1C19",
          700: "#333333",
          500: "#564242",
          400: "#767676",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
