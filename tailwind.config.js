/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './config/src/config/index.html',
    './desktop/src/config/index.html',
    './config/src/**/*.{vue,js,ts,jsx,tsx}',
    './desktop/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
