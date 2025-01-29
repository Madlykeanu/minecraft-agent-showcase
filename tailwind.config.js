/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          400: 'rgb(161 161 170)',
          500: 'rgb(113 113 122)',
          900: 'rgb(24 24 27)',
          950: 'rgb(9 9 11)',
        },
        red: {
          400: 'rgb(248 113 113)',
          500: 'rgb(239 68 68)',
          600: 'rgb(220 38 38)',
        }
      }
    },
  },
  plugins: [],
} 