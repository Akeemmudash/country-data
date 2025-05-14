/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        "mona-sans": ["Mona Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],

      },
    },
  },
  plugins: [],
};
