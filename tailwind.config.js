/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kapeng-barako': '#2D1E17', // Text color
        'narra-warm': '#8B4513',    // Secondary / Accents
        'dahon-green': '#2D5A27',   // Main Brand Color
        'patis-gold': '#D4AF37',    // Call to Action
        'cream-haze': '#FDFBF7',    // Page Background
      },
    },
  },
  plugins: [],
}