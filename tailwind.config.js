/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        'service-box': '0px 13px 36px 7px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
