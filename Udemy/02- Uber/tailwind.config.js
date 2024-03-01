/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'uber': 'url("/assets/img/bg-uber.png")',
        'city': 'url("/assets/img/bg-city.png")'
      }
    },
    container:{
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
}

