/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./assets/src/assets/img/home-hero.png')",
      },
    },
  },
  plugins: [],
}
