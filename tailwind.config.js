module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne',],
        'damion': ['Montserrat'],
      }
    },
  },
  plugins: [  require('@themesberg/flowbite/plugin')],
}
