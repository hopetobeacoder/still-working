/*  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './src/scss/app.scss',
    './src/js/app.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
