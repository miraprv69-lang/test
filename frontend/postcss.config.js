import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // <-- This () is the fix
    autoprefixer(), // <-- This () is the fix
  ],
};