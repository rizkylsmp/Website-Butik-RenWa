/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["'Lexend'", "sans-serif"],
        readex: ["'Readex Pro'"],
        palanquin: ["Palanquin"],
        nunito: ["Nunito Sans"],
        opensans: ["Open Sans"],
        lato: ["Lato"],
        montserrat: ["Montserrat"],
        raleway: ["Raleway"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
