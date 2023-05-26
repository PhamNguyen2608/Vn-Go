/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGreen: "#2D9045",
      },
      borderColor: (theme) => ({
        myGreen: theme("colors.myGreen"),
      }),
    },
  },
  plugins: [],
};
