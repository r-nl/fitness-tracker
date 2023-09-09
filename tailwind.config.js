// eslint-disable-next-line @typescript-eslint/no-var-requires
const konstaConfig = require('konsta/config');

/** @type {import('tailwindcss').Config} */
export default konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  konsta: {
    colors: {
      primary: '#286d5d'
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
});