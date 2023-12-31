/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },

      backgroundImage: {
        'hero-pattern': "url('./src/assets/backgrounds/bg01.jpg')",
      },

      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[950] },
      },

      gridTemplateColumns: {
        layoutBook: '5% 10% 80% 5%',
        layoutMd: '7.5% 17.5% 67.5% 7.5%',
        layoutLg: '12.5% 15% 60% 12.5%',
      },
    },
  },
  plugins: [],
};
