/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,svelte}',
  ],
  theme: {
    extend: {
      colors:{
        background: {
          100: "#FDFDFD",
        },
        primary: {
          300: "#F5CCAB",
          500: "#E09370",
        },
      }
    },
  },
  plugins: [],
}