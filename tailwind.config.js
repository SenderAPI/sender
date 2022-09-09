const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1d3557",
        secondary: "#edf2f4",
        dark: "#1a2e4b",
        danger: "#e63946",
        success: "#06d6a0",
        light: "#233d62"
      }
    },

  },
}