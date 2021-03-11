const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Recursive', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bg-gray-blue': '#333e4f',
        'text-gray-blue': '#334e5f',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
