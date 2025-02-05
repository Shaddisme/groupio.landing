/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColors: {
          primary_1_light: " #1E7B68",
          primary_1: "#145245",
          primary_2_Dark: "#0A2923",
          Secondary_Light: "#30A3BC",
          Secondary: "#268093",
          Secondary_Dark: "#1C5D6A",
          Tertiary_Light: "#4ABF9A",
        },
      },
    },
  },
  plugins: [],
};
