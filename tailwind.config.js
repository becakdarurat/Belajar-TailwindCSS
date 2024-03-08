/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
         // ini adalah untuk mengatur customisazi pada default css tailwind nya
         spacing: {
          13: '3.25rem',
          sm: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
        },
        fontFamily: {
          inter: ['Inter'],
        },
        colors: {
          wpu: '#bada55',
          kopi: '#c0ffee',
        },
    },
  },
  plugins: [],
}

