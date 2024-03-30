/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#1E1E1E",
          200: "#231F20",
        },
        gray: {
          100: "#8D8D8D",
          200: "#EEEEEE",
          300: "#F8F8F8",
        },
      },
      backgroundImage: {
        "nf-logo": "url('/src/assets/components/logo.svg')",
        "search-icon": "url('/src/assets/components/nf-search.svg')",
        "account-icon": "url('/src/assets/components/nf-account.svg')",
        "cart-icon": "url('/src/assets/components/nf-cart.svg')",
      },
      boxShadow: {
        default: "0px 2px 15px -2px rgba(0, 0, 0, 0.09)",
      },
      fontFamily: {
        "noto-serif": ["Noto Serif", "serif"],
        suit: ['"SUIT"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
