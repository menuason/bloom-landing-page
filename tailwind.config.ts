/** @type {import("tailwindcss").Config} */

import * as tanimation from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      ss: ['36px', '48px'],
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        bloomBlack: "#191a1c",
        bloomTitle: "#232427",
        bloomBody: "#323232",
      },
      boxShadow: {
        bloomBoxShadow: "0 4px 4px 0px #2324270D",
      },
      animation: { bounce: "bounce 0.7s infinite" },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-20%)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-out",
          },
        },
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
