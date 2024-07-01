/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '350px',
      },
      colors: {
        'custom-blue': '#152344', 
        'custome-grey':"#53586F",
        'custom-black':"#333333"
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
  
}

