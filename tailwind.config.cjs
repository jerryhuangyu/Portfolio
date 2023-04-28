/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        // primary: "#F5EFE6",
        primary: "#fcfbf8",
        // secondary: "#aaa6c3",
        secondary: "#73839d",
        // tertiary: "#151030",
        tertiary: "#AEBDCA",
        // "black-100": "#100d25",
        "black-100": "#7895B2",
        // "black-200": "#090325",
        "black-200": "#E8DFCA",
        // "white-100": "#f3f3f3",
        "white-100": "#f5f7f9",
        "blue-100": '#e9ecf0',
        "blue-200": '#d8dfe5',
        "blue-300": '#aebdca',
        "blue-400": '#9cadbe',
        "blue-500": '#8497ad',
        "blue-600": '#73839d',
        "blue-700": '#66748f',
        "blue-800": '#576076',
        "blue-900": '#485060',
        "blue-out": '#62CDFF',
        // "blue-header": '#19A7CE',
        "dark-primary": '#1b1b1d',
        "dark-secondary": '#f9f9f5',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};