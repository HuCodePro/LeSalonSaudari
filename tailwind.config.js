/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ],
        caveat: ['Caveat'],
        opens: ['Open+Sans'],
        syncopate: ['Syncopate'],
        cormorant: ['Cormorant+Garamond'],
        
      },
    },
  },
  plugins: [],
}