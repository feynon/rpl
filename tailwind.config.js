module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#39ff14',
          dark: '#1b8a00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}