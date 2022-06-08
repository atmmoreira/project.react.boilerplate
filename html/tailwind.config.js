const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./dist/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: { default: "#046CA9", light: "#2D81B2", dark: "#03598B" },
      white: "#ffffff",
      black: "#000000",
      orange: "#FFa500",
      green: "#16a085",
      red: "#FF0000",
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#CCCCCC",
        400: "#999999",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
