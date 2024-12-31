/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1e1e2f',
          text: '#e4e4e7',
        },
        light: {
          background: '#f9f9f9',
          text: '#1f2937',
        },
      },
    },
  },
  plugins: [],
};
