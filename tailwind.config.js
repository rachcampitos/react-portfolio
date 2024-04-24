/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        slab: "slab",
      },
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      "cerulean-blue": {
        50: "#f2f5fc",
        100: "#e1e8f8",
        200: "#c9d6f4",
        300: "#a4bcec",
        400: "#7999e1",
        500: "#5977d8",
        600: "#435acb",
        700: "#3b4aba",
        800: "#353e98",
        900: "#2f3779",
        950: "#21244a",
      },
      carnation: {
        50: "#fff1f2",
        100: "#ffe1e3",
        200: "#ffc7ca",
        300: "#ffa0a6",
        400: "#ff656e",
        500: "#f83b46",
        600: "#e51d29",
        700: "#c1141e",
        800: "#a0141c",
        900: "#84181e",
        950: "#48070b",
      },
      "hit-pink": {
        50: "#fff5ed",
        100: "#ffe8d4",
        200: "#ffcca9",
        300: "#ffa770",
        400: "#fe7939",
        500: "#fc5513",
        600: "#ed3a09",
        700: "#c52809",
        800: "#9c2110",
        900: "#7e1e10",
        950: "#440c06",
      },
    },
  },
  plugins: [],
};
