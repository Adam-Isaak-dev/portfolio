/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Share\\Tech\\Mono','monospace']
      },
      animation: {
        'scroll-loop-left': 'loop-left 30s linear infinite',
        'scroll-loop-right': 'loop-left 30s linear infinite',
      },
      keyframes: {
        'loop-left': {
          '100%': {transform: 'translateX(-100%)' },
        },
        'loop-right': {
          '100%': {transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}