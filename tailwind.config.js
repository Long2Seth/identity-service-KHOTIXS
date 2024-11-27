/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/main/resources/templates/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'koho': ['KoHo', 'sans-serif'],
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
    colors: {
      'background-light': '#f5f5f5',
      'background-dark': '#000000',
      'primary-text': '#000000',
      'secondary-text': '#ffffff',
      'primary-color': '#480028',
      'secondary-color': '#AC1ED2',
      'border-form-color': '#CBD5E1',
    },
  },
  plugins: [],
}
