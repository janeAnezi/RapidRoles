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
      },
      backgroundPosition: {
        'center': 'center',
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

