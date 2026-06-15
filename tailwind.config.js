/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5A623',
        secondary: '#1a1a2e',
        dark: '#0f0f1a',
        darkCard: '#1e1e30',
        accent: '#e8952e',
      },
    },
  },
  plugins: [],
}