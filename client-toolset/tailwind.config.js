/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-red": "#F11B25",
      "primary-dark": "#4682A9",
      "primary-light": "#749BC2",
      "primary-lighter": "#91C8E4",
      "primary-content": "#F6F4EB",
      "primary-text-dark": "#071952",
      "primary-text-light": "#088395",
      "primary-text-lighter": "#35A29F",
      "primary": {
        100: "#CDF5FD",
        200: "#A0E9FF",
        300: "#89CFF3",
        400: "#00A9FF"
      }
    }
  },
  plugins: [],
}