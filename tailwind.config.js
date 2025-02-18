/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Inter-Sora": '"Sora", "serif"',
      },
      backgroundImage: {
        "button-bg": "linear-gradient(260deg, #AD13FB 0%, #e43a15 100%)",
      },
      keyframes: {},
      animation: {},
    },
    plugins: [],
  },
};
