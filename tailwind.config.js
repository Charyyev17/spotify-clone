/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        'topbar-grid-bg': 'rgba(255, 255, 255, .1)',
        'topbar-grid-bg-hover': 'rgba(255, 255, 255, .2)',
        'footer-bg': 'rgba(24, 24, 24)',
        'footer-bg-hover': 'rgba(244, 244, 244, .1)',
        'footer-social': '#292929'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

