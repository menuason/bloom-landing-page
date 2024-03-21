/** @type {import('tailwindcss').Config} */

import * as tanimation from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        bloomBlack: "#191a1c",
      },
      boxShadow: {
        bloomBoxShadow: "0 4px 4px 0px #2324270D",
      },
    },
    screens: {
      xs: "320px",
      md: "800px",
      lg: "1080px",
    },
  },
  plugins: [tanimation],
};
