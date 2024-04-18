/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'display': [
          "ui-rounded", 
          "Hiragino Maru Gothic ProN", 
          "Quicksand", 
          "Comfortaa", 
          "Manjari", 
          "Arial Rounded MT", 
          "Arial Rounded MT Bold", 
          "Calibri", 
          "source-sans-pro", 
          "sans-serif"
        ]
      },
      height: {
        'screen-90': '90vh',
      },
      maxHeight: {
        'screen-90': '90vh'
      },
      width: {
        'screen-90': '90vw',
      },
      maxWidth: {
        'screen-90': '90vw'
      },
      lineHeight: {
        'zero': '0'
      },
      boxShadow: {
        top: '0 -20px 30px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}