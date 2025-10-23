/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E88E5",
        secondary: "#43A047",
        accent: "#F44336", 
        text: "#212121", 
        background: "#",
      }
    },
  },
  plugins: [],
};
