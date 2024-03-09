/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        bloomBlack: "#191A1C"
      },
    },
    screens: {
      xs: "320px",
      md: "481px",
      lg: "769px",
    },
  },
  plugins: [],
};
