/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest-revolution': ['Protest Revolution', 'sans-serif'],
        'fredoka': ['Fredoka One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

