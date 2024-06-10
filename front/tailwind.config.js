/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontSize: {
    //   title: "20px",
    //   subtitle: "17.5px",
    //   description: "14px",

    // },
    // colors: {
    //   'primary': "#00B1A4",
    //   "seconday": "#272727",
    //   'white': '#ffffff',
    //   'gradfrom':"#00B1A4",
    //   'gradto':"#57CDD9",
    //   'onhov':"#c5fffb",

    // },
    fontFamily: {
      Inter: ['Inter', "sans-serif"],
      Raleway: ['Raleway', "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],

    }
  },
  plugins: [],
}
