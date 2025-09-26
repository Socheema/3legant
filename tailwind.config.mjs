/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router (if you use it)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
