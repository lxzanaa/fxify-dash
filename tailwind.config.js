/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      borderImage: {
        "gradient-custom":
          "linear-gradient(349.74deg, rgba(72, 82, 245, 0.2) 45.39%, #4852F5 90.66%)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(91.95deg, rgba(172, 215, 255, 0.88) 1.64%, #4852F5 82.48%)',
      },
      colors: {
        net: {
          "grey-400": "#333",
          "black-400": "#121212",
        },
      },
      fontSize: {
        22: "22px",
      },
    },
  },
  plugins: [],
};
