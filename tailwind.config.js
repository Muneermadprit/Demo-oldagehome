/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        letter: {
          '0%': { width: '0%' },
          '10%': { width: '0%' },
          '70%': { width: '100%' },
          '80%': { width: '100%' },
          '90%': { width: '100%' },
          '100%': { width: '0%' },
        },
        expandWidth: {
          '0%': { width: '300px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
          '50%': { width: '800px', clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)' },
          '100%': { width: '300px', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        fadeInLeft: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        widthAnimation: {
          '0%': { clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', width: '300px' },
          '100%': { clipPath: 'polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%)', width: '1800px' },
        },
      },
      animation: {
        typing: 'typing 4s steps(30, end) forwards',
        expandWidth: 'expandWidth 8s ease-out forwards',
        fadeInOut: 'fadeInOut 8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 8s ease-out infinite',
        widthAnimation: 'widthAnimation 4s ease-out',
        letter: 'letter 2s ease-in-out'
      },
      transitionDelay: {
        '2000': '2000ms',
      },
      boxShadow: {
        'bulge': '0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 10px rgba(0, 0, 0, 0.3)',
        'deep': '0 15px 30px rgba(0, 0, 0, 0.6), 0 10px 15px rgba(0, 0, 0, 0.4)',
        'soft': '0 5px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },

  plugins: [
    require("tw-elements/plugin.cjs"),
    require("tailwindcss-animate"),
    require('tailwindcss-animated'),
    require('taos/plugin'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.internal-curve': {
          'clip-path': 'path("M 0 0 Q 50 50, 100 0 Q 150 -50, 200 0 L 200 200 L 0 200 Z")',
        },
      }

      addUtilities(newUtilities)
    },
  ],

  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
