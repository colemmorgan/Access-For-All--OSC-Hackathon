/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ['"Wix Madefor Text"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
