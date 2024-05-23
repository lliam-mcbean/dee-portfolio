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
      typography: {
        DEFAULT: {
          css: {
            'h3': {
              fontSize: '1.5rem', // Adjust as needed
              fontWeight: '700',
              color: '#1F2937', // Adjust as needed (e.g., gray-800)
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}