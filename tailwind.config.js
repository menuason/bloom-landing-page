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
      boxShadow: {
        'bloomBoxShadow': '0 4px 4px 0px #2324270D',
      },
    },
    screens: {
      xs: "320px",
      md: "800px",
      lg: "1080px",
    },
  },
  plugins: [],
};
