/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },

      backgroundImage: {
        'hero-pattern': "url('/assets/backgrounds/bg02.jpg')",
      },

      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[950] },
      },

      gridTemplateColumns: {
        layoutBook: '5% 90% 5%',
        layoutMd: '7.5% 85% 7.5%',
        layoutLg: '12.5% 75% 12.5%',
        layoutNav: '20% 80%',
        layoutBookNav: '15% 85%',
      },
    },
  },
  plugins: [],
};
