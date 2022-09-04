/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        fira: ["FiraCode"]
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
