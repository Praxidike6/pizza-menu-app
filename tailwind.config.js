/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        pizza: "#71C7E2",
        //pizza:  ,
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [require("daisyui")],
};
