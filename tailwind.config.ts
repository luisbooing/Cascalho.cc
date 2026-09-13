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
        cascalho: {
          ink: "#231926",
          paper: "#FFF1D6",
          coral: "#F04D2E",
          orange: "#FA7F29",
          sun: "#F5C77A",
          lime: "#7CD87B",
          green: "#55A888",
          teal: "#209C8A",
          pink: "#F46E51",
          magenta: "#BA0046",
          olive: "#C09C41",
          surface: "#FFF9ED",
          muted: "#665A61",
        },
      },
      backgroundImage: {
        "gradient-sunrise": "linear-gradient(135deg, #F5C77A 0%, #F46E51 48%, #F04D2E 100%)",
        "gradient-mint": "linear-gradient(135deg, #D3E86B 0%, #7CD87B 45%, #209C8A 100%)",
        "gradient-orbit": "linear-gradient(135deg, #BA0046 0%, #F04D2E 45%, #FA7F29 100%)",
        "gradient-paper": "linear-gradient(135deg, #FFF1D6 0%, #F5C77A 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
