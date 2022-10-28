/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Share\-Tech\-Mono','monospace']
      },
      spacing: {
        '84': '21rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '176': '44rem',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(closest-side, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}