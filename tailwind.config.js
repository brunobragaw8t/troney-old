/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          400: "#06c6cf",
          500: "#00adb5",
        },
        secondary: {
          300: "#111720",
          400: "#222831",
        },
      },
    },
  },
  plugins: [],
};
