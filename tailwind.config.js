const defaultTheme = require('tailwindcss/defaultTheme');
const token = "YXVndXN0b3l1dWRpQGdtYWlsLmNvbQ=="

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
