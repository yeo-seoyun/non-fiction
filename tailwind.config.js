/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1079px" },
      lg: { min: "1080px" },
    },
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
        "nfh-logo": "url('/src/assets/components/half-logo.svg')",
        "search-icon": "url('/src/assets/components/nf-search.svg')",
        "account-icon": "url('/src/assets/components/nf-account.svg')",
        "cart-icon": "url('/src/assets/components/nf-cart.svg')",
        "bar-icon": "url('/src/assets/components/nf-bar.svg')",
        "gift-wrapping": "url('/src/assets/components/nf-gift1.jpg')",
        "message-card": "url('/src/assets/components/nf-gift2.jpg')",
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
  // plugins: [require("@tailwindcss/aspect-ratio")],
};
