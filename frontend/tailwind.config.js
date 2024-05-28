/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#0067ff",
        yellowColor:"#FEB60D",
        purpleColor:"#9771ff",
        irisBlueColor:"#01B5C5",
        headingCoolor:"#181A1E",
        textColor:"#4E545F",
      },
      boxShadow: {
        panelShadow:"rgba(17,12,46,0,15) 0 48px 100px 0px"
      }
    },
  },
  plugins: [],
}

