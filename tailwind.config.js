/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['myFont', 'sans-serif'],
        workFont: ['workFont', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        geist: ['geist', 'sans-serif'],
        NoeDisplayBold: ['NoeDisplayBold', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        bgOne : 'var(--bgOne)',
        bgTwo : 'var(--bgTwo)',
        colorOne : 'var(--colorOne)',
        colorTwo : 'var(--colorTwo)',
        colorThree : 'var(--colorThree)',
        colorFour : 'var(--colorFour)',
        
        myColorOne:'var(--myColorOne)',
        myColorTwo:'var(--myColorTwo)',
        myColorThree:'var(--myColorThree)',
        textDark:'var(--textDark)',
        textLight:'var(--textLight)',
      }
    },
    
    container: {
      center: true,
      padding: {
        DEFAULT: "0px",
        // sm: '1rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
