/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dropOrange: '#F27E05',
        dropBlack: '#000000',
        dropWhite: '#ffffff',
        dropDeepBlue: '#2C3E50',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],  // Custom font family
        gbr: ['Gowun Batang', 'serif'],
      },
    },
  },
  plugins: [],
}

