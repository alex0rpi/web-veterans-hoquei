/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
      },

      gridTemplateColumns: {
        layoutMd: '7.5% 17.5% 67.5% 7.5%',
        layoutLg: '12.5% 15% 60% 12.5%',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
