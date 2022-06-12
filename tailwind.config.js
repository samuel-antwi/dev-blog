/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#C5E2F4",
        "dark-primary": "#0E141B",
        "text-primary": "#5773ff",
        "text-secondary": "#ff0876",
      },
      fontFamily: {
        sans: ["Wotfard", "sans-serif"],
      },
    },
  },
  plugins: [],
}
