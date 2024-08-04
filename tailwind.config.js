/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-bg": "#171717",
        "image-bg": "#FCEBD0",
        "card-bg": "#FCEBD0",
        "card-two-bg": "#FCD8D8",
        "card-three-bg": "#6AC7B5",
        "text-bg": "#FFB800",
        "text-two-bg": "#525257",
        "text-four-bg": "#6C6C72",
        "text-three-bg": "#04849C",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
