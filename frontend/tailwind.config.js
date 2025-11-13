/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to scan all your .jsx and .html files for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // THIS IS THE UPDATE: We enable dark mode
  darkMode: 'class',
  theme: {
    extend: {
      // We add the 'Inter' font to Tailwind's default font list
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}