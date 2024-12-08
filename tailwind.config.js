/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "	#0D1117", // 1e2124
        "secondary-dark": "#161B22", // 282b30
        "card-bg": "#1C222A",
        "orange": "#FF6500",
        "orange-hover": "#D35400",
        "primary-text": "#E6E8EB",
        "secondary-text": "#AAB4C0",
        "accent-red": "#FF3B30",
        "border-color": "#31363F"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}