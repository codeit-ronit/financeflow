/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      'encode-sans-expanded': ['"Encode Sans Expanded"', 'sans-serif'],
    }},
  },
  plugins: [],
}

