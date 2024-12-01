/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#f8e8d6",
          200: "#e6c9a8",
          800: "#6f4e37",
          900: "#4b2e26",
        },
      },
    },
  },
  plugins: [],
};

