/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['SF Pro Display', 'sans-serif'],
    },
    extend: {
      height: {
        header: '100px',
      },
      width: {
        sidebar: '300px',
        'sidebar-collapsed': '80px',
      },
    },
  },
  plugins: [],
}
