module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        '-20': '-20deg',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
