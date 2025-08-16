/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zemba: {
          pink: "#D63C96",     // Brand magenta
          pinkDark: "#B22F7A", // Hover/darker shade
          coal: "#0F0F12",     // Dark background
        },
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
