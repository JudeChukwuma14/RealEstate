/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home:"url('./src/assets/image/Real estate.jpg')",
        property:"url('./src//assets/image/addProperty.jpg')",
        partner:"url('./src//assets/image/becomePartner.jpg')",
        about:"url('./src/assets/image/aboutUs.png')"
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}