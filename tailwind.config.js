module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    screens: {
      "sm": {"max": "767px"},
      "md": {"min": "768px", "max": "1023px"},
      "lg": {"min": "1024px"}
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      error: "#ce3737"
    }
  }
}
