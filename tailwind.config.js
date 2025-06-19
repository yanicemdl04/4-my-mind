/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      fontFamily: {
        'alice': ['Alice', 'serif'],
        'libre-franklin': ['"Libre Franklin"', 'sans-serif'],
        'hind-madurai': ['"Hind Madurai"', 'sans-serif'],
      },
      colors: {
        'primary': '#DAA520',
        'primary-dark': '#B8860B',
        'secondary': '#1E40AF',
      }
    },
>>>>>>> e6506250cbf9858bbba40b58b01a9174722a5a59
  },
  plugins: [],
}