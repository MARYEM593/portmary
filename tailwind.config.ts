/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      width: {
        defaultwidth: "90%",
      },

      maxWidth: {
        mwidth1: "1600px",
        mediumwidth: "1300px",
        width1000: "1000px",
        mwidth2: "1920px",
        widthCard450: "450px",
        widthCard: "600px",
        widthCard1: "700px",
        widthtitle: "750px",
      },
      maxHeight: {
        h750: "750px",
      },
      colors: {
       
        lightGray: "#e9e9e9",
        darkGray: "#707070",
        yellow: "#dcca03",
        
        lightyellow: "#D5D4C2",
      },
      flexBasis: {
        "30": "32%",
        "2/7": "52%",
        "3/7": "35%",
        "10": "10%",
        "45": "45%",
        "70": "70%",
        "60": "60%",
        "35": "35%",
      },
    },
  },
  plugins: [],
};