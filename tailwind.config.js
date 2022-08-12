module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '.6rem',
        'xxs': '.68rem',
        'description': '22px',
      },
      width: {
        'c-xl': '1199px',
      },
      height: {
        'c-xl': '357.92px',
      },
      color: {
        'purple': 'purple',
        'grad-gray': '#babebf',
      },
      backgroundImage: {
        'vector': "url('./src/assets/images/vector.svg')",
        'hero': "url('./src/assets/images/bns-h-bg.png')",
        'home': "url('./src/assets/images/bns-h-bg.png')",
      },
      colors: {
        'lavendar': '#CFBEFF', // Button background
        'persian-indigo': '#3C1A9B', // Button color
        'gray-dim': '#606060', // Font color,
        'nobel' : '#9B9B9B', //Secondary font color
        'red' : '#FF0000', //danger color
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
