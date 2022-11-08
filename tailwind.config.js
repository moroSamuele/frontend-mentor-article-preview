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
        lightBlue: "#ECF2F8",
        mediumBlue: "#48556A",
        lightGray: "#6E8098",
        veryLightGray: "#9DAEC2"
      },
      screens: {
        'xs': '375',
        // => @media (max-width: 375px) { ... }
      },
      boxShadow: {
        '3xl': "0px 40px 40px -10px rgba(201, 213, 225, 0.503415)",
        '4xl': "0px 10px 10px rgba(201, 213, 225, 0.503415)"
      }
    },
  },
  plugins: [],
}
