/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "430px",
      },
      colors: {
        brand: {
          50: "#f6f4ff",
          100: "#ece8ff",
          500: "#6d5dfc",
          600: "#5b45f2",
          700: "#4a35d2",
        },
      },
    },
  },
  plugins: [],
};
