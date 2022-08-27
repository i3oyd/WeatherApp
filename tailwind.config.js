/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'weather-primary': 'rgb(20 184 166)',
      'weather-secondary': 'rgb(15 118 110)'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    },
    container: {
      padding: '2rem',
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: [],
}
