/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/images/hero02.png')",
        'aboutbg': "url('../src/assets/images/skybluebg.png')",
      },
      backgroundPosition: {
        'center': 'center',
        'left' : 'left,'
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundRepeat: {
        'none': 'no-repeat',
      },
    },
  },
  plugins: [],
}

