/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '1000px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      chivo: ['Chivo', 'sans-serif'],
    },
    extend: {
      keyframes: {},
      animation: {},
      colors: {
        'pricing-blue': '#5243C2',
      },
      backgroundImage: {
        footer: "url('/assets/footer-bg.svg')",
        blue: "url('/assets/blue-bg.svg')",
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      margin: {},
    },
  },
  plugins: [],
};
