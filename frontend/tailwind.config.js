/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F5F7",
        surface: "#FFFFFF",

        primary: {
          DEFAULT: "#0F172A",
          50: "#EEF2FF",
          100: "#E0EAFF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#1E1B4B",
        },

        text: {
          primary: "#0F172A",
          secondary: "#6B7280",
        },
      },

      borderRadius: {
        "2xl": "1.25rem",
      },

      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
