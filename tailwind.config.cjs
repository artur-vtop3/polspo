/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.css', './dist/**/*.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-7': 'span 7 / span 7',
      },
      colors: {
        bg: '#031926',
        bg40: 'rgba(3, 25, 38, 0.4)',
        bg80: 'rgba(3, 25, 38, 1)',
        light40: 'rgba(255, 255, 232, 0.4)',
        light: '#FFFFE8',
        dark: '#031926',
        primary: '#6567B2',
        darken: '#4F529E',
        dark80: 'rgba(0, 0, 0, 0.8)',
        lighten: '#8C8DC5',
      },

      fontSize: {
        fz10: '10px',
        fz12: '12px',
        fz14: '14px',
        fz16: '16px',
        fz24: '24px',
        fz32: '32px',
        fz36: '36px',
        fz48: '48px',
        fz56: '56px',
        fz64: '64px',
        fz80: '80px',
        fz96: '96px',
        fz128: '128px',
      },
      spacing: {
        m5: '5px',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {
        'arrow-r': 'url(../img/arrow-right.svg)',
      },
    },
  },
  plugins: [],
}
