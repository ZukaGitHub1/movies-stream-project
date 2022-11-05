/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-white": "#2AD2AA",
        "navbar-dark": "#000000"
      },
      backgroundImage: {
        craftsman: "url('../src/images/craftsmanwork.jpg')",
      },
      fontFamily: {
        'raleway' : ['Raleway'],
        'adventpro': ['Advent Pro'],
        'quicksand' : ['Quicksand'],
        'cinzel' : ['Cinzel'],
        'barlow' : ['Barlow Condensed']
      }
    },
  },
  plugins: [],
};
