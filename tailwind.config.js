/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        uxum: ["uxum", 'sans-serif'],
        uxumLight: ['uxum-light', 'sans-serif']
      }
    },
  },
  plugins: [],
}