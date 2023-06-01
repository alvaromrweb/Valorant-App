/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        redV: 'rgb(var(--color-redV) / <alpha-value>)',
        greenV: 'rgb(var(--color-greenV) / <alpha-value>)',
      },
      backgroundImage: {
        'main': "linear-gradient(to right, rgba(15, 25, 35, 0.2), rgba(15, 25, 35, 0.2)), url(/valorant-bg.jpg);",
      }
    },
  },
  plugins: [],
}

