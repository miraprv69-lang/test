/** @type {import('tailwindcss').Config} */
export default {
  // 1. Enable dark mode (matches your Header.jsx toggle)
  darkMode: 'class',
  
  // 2. Tell Tailwind where to find your class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans App.jsx, pages/, and components/
  ],
  
  // 3. This is your high-fidelity Design System from your Figma screenshots
  theme: {
    extend: {
      colors: {
        // From your "Semantic Tokens_light" screenshot
        'canvas': '#FFFFFF',
        'surface': '#F9FAFB',
        'primary': {
          DEFAULT: '#2563EB', // Blue-600
          '50': '#EFF6FF',
          '100': '#DBEAFE',
          '200': '#BFDBFE',
          '300': '#93C5FD',
          '400': '#60A5FA',
          '500': '#3B82F6',
          '600': '#2563EB',
          '700': '#1D4ED8',
          '800': '#1E40AF',
          '900': '#1E3A8A',
        },
        'text-primary': '#111827',   // Gray-900
        'text-secondary': '#6B7280', // Gray-500
        'text-tertiary': '#9CA3AF',  // Gray-400
        'border-color': '#E5E7EB',   // Gray-200
      },
      // From your "Effect" screenshot (Shadows)
      boxShadow: {
        'sm': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        'md': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}