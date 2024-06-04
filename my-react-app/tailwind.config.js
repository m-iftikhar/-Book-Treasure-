/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '410px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'dark-blue': '#003366',
        'lightgray': '#D3D3D3',
        'light-blue': '#ADD8E6',
        'white': '#FFFFFF',
        'purple-700': '#6B21A8',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
