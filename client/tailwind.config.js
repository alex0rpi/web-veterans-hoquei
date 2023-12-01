/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"],
      },

      backgroundImage: {
        "hero-pattern": "url('./src/assets/backgrounds/bg01.jpg')",
      },

      colors: {
        primary: {...colors.sky, DEFAULT: colors.sky[950]},
      },

      gridTemplateColumns: {
        layoutMd: "7.5% 17.5% 67.5% 7.5%",
        layoutLg: "12.5% 15% 60% 12.5%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
