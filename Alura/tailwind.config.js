/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        azul:{
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0'
        },
      },
      fontFamily:{
        inter: ['Inter','sans-serif']
      },
      keyframes:{
        sino_kf:{
          '0%, 100%':{
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          }
        }
      },
      animation:{
        sino: 'sino_kf 0.31s infinite ease-in-out'
      }
    },
  },
  plugins: [],
}

