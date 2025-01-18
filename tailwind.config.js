/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        secondry: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
      },
      fontFamily: {
        bodyfont: ["Poppins"],
      },
    },
  },
  plugins: [],
};
