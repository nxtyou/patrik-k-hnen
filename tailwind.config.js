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
        'prussian-blue': '#002347',
        'international-orange': '#FF5003',
        'regal-blue': '#003F7D',
        iron: '#DCDCDE'
      },
      screens: {
        'mini-screen': { raw: '(max-height: 715px) and (max-width: 640px)' },
        'small-height': { raw: '(max-height: 813px) and (min-width: 640px)' },
        '2xl': '1440px'
      },
      fontSize: {
        '9xl': ['7.5rem', '1']
      }
    }
  },
  plugins: []
};
