/** @type {import('tailwindcss').Config} */
module.exports = {
  future: { removeDeprecatedGapUtilities: true },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      mb1: "870px",
      formsm: "360px",
      formele: "250px"
    },
  },
};
