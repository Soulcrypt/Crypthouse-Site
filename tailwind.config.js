/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  extend: {
    fontFamily: {
      gothic: ['"Cinzel Decorative"', 'serif'],
    },
    colors: {
      fog: '#1a1a1a',
      grave: '#2b2b2b',
    },
  },
},
plugins: [],

}

