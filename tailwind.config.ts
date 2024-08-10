const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
