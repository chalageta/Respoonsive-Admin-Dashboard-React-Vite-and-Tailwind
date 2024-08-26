export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["focus-within"],
    },
  },
  plugins: [],
  darkMode: "class",
};
