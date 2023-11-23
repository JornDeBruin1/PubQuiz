module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "pubquiz-background": "#FBFCF8",
        "pubquiz-primary": "#00a0cc",
        "pubquiz-secondary": "#0097c0",
        "pubquiz-tertiary": "#0387b7",
      },
      boxShadow:{
        'Custom' :'10px 5px 10px rgb(0,0,0,0.1)',
      }
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