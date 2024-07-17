import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "white-clr": "var(--white-clr)",
      "light-pink-clr": "var(--light-pink-clr)",
      "grayish-purple-clr": "var(--grayish-purple-clr)",
      "dark-purple-clr": "var(--dark-purple-clr)",
    },
    fontWeight: {
      "fw-semi-bold": "var(--fw-semi-bold)",
      "fw-bold": "var(--fw-bold)",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
