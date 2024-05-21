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
      },
      boxShadow: {
        'custom-blur': '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
      },
      colors: {
        customBlue: '#e9f1fa',
      },
    },
  },
  plugins: [],
}