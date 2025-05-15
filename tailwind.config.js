/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "stripe-pattern":
          "repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 2px, #fff 5px, #fff 5px)",
      },
      fontFamily: {
        "mona-sans": ["Mona Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
