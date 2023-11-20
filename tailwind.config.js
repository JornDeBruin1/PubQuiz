module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pubquiz-primary": "#00668A",
        "pubquiz-secondary": "#004E71",
        "pubquiz-tertiary": "#037ba3",
      },
    },
  fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens:{
      sm: "640px",
      md: "768px",
    },
  },
}