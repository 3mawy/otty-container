/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#FFE5D9',
        'light-pink':'#FFCAD4',
        'light-red':'#e7919f',
        'dark-red':'#85676f',
        'dark-red-200':'#72555d',
        'light-green':'#a2ccb4',
        'main-orange':'#f8b261',
        'main-orange-200':'#f1a955',
        'light-orange':'#f8c07e',
        // 'light-orange':'#fff8f8',
      }
    }
  },
  plugins: [],
}


