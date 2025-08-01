/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['myFont', 'sans-serif'],
      },
      colors:{
        bgOne : 'var(--bgOne)',
        bgTwo : 'var(--bgTwo)',
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
