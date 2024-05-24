/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        big: "../client/src/assets/Poppins-Bold.ttf",
        semib: "/src//assets/Poppins-SemiBold.ttf",
        Poppins: '/src/assets/Poppins-Regular.ttf',
      },
    },
  },
  plugins: [],
}