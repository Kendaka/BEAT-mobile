/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        project: ["Orbitron-Bold", "sans-serif"],
        heading: ["Poppins-SemiBold", "sans-serif"],
        subheading: ["Exo2-Medium", "sans-serif"],
        body: ["Inter-Regular", "sans-serif"],
      },
      colors: {
        primary: "#1565C0",
        secondary: "#00ACC1",
        accent: "#FF6F00",
        text: "#ECEFF1",
        background: "#121212",
      },
    },
  },
  plugins: [],
};
