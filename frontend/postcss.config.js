import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Call it as a function
    autoprefixer(), // Call it as a function
  ],
};