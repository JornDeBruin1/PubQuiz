module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pubquiz-primary": "#00a0cc",
        "pubquiz-secondary": "#0097c0",
        "pubquiz-tertiary": "#0387b7",
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