/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}' // in case you're using the app directory
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-6px)' }
        }
      },
      animation: {
        'bounce-x': 'bounce-x 0.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
