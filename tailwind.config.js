/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#f3e500',
        'gbDark': '#2b2a5c',
        'gbLight': '#dad0c0',
        'social': '#145e98'
      },
      backgroundImage: {
        'gradient-cover':
          'linear-gradient(to right, #2b2a5c, #dad0c0)',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    plugins: [],
  }
}