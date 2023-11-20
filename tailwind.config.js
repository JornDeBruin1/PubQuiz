module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pubquiz-primary": "#0097c0",
        "pubquiz-secondary": "#0d607d",
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
  },
}