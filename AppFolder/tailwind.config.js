/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to all your component files
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Example custom color
        secondary: "#10B981",
      },
    },
  },
  plugins: [],
};
