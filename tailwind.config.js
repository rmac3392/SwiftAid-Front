/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        primary:"#2B2D56",
        secondary:"#DDD3DD",
        ternary:"#94A3B8",
      }
    },
  },
  plugins: [],
};
