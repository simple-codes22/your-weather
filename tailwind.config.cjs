/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tab': {'max': '1024px'},
      'inbtwn': {"max": "920px"},
      "mini": {'max': '600px'},
      'micro': {'max': '420px'},
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
}