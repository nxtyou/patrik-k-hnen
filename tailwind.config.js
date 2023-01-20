/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'aktiv-groresk': ['Aktiv Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        black: '#040617',
        white: '#F5F5F5'
      },
      screens: {
        'small-phones': { raw: '(max-height: 715px) and (max-width: 640px)' }
      }
    }
  },
  plugins: []
};
