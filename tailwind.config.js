/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // background #f4f0ee
      // button #69727d text white
      // nav text #928781
      // texto grande titulo #cab8a2
      fontFamily:{
          "main-font":['"Nunito Sans"','sans-serif']
      },
      colors:{
        "bright-orang": "#FFF7F0",
        "bright-orang2": "#FCF5EE",
        "background-bro": "#f4f0ee",
        "nav-text-bro": "#928781",
        "button-bro": "#69727d",
        "title-bro": "#cab8a2",
      }
    },
    backgroundImage:{
      "close-menu": "url('../assets/close.svg')",
      "open-menu": "url('../assets/menu.svg')",
      "hero-gray":"url('../assets/hero-grayimage.jpg')",
      "wave":"url('../assets/wave.svg')",
      "wave2":"url('../assets/wave2.svg')",
      "wing":"url('../assets/wing.png')",
    },
  },
  plugins: [],
}

