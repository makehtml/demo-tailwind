/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fcec4a",
          "100": "#b1ad33",
          "200": "#a09c2b",
          "700": "#7a7a7a",
          "900": "#333333"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}