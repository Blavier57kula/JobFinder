/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px'
    },
    container:{
      center:true,
      padding:'2rem'
    },
    extend: {
      fontFamily:{
        poppins:"'poppins','sans serif'",
        roboto:"'Roboto','sans serif'",
      },
      colors:{
        'colorprimary':'#fd3d57',
        'greyIsh':'#f1f4f8',
        'cardShadaw':'#f7f8f9',
        'textColor':'#252b36',
        'blueColor':'#2a68ff',
      },
      display:['group-hover'],
      visibility:['group-hover']
 
    },
  },
  plugins: [],
}
