const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        green: "#2AA96D",
        lightgreen: "rgba(42, 169, 109, 0.21)",
        "green-rgba": "rgba(42, 169, 109, 0.38)",
        "light-gray": "#7E7B7B",
        purple: "rgba(136, 105, 230, 0.37)",
        dPurple: "#452C92",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
