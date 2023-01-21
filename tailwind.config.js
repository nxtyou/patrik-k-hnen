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
        white: '#F5F5F5',
        'prussian-blue': '#002347'
      },
      screens: {
        'small-phones': { raw: '(max-height: 715px) and (max-width: 640px)' },
        '2xl': '1440px'
      }
    }
  },
  plugins: []
};
