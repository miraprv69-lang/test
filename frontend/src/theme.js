// frontend/src/theme.js
import { createSystem, defaultConfig } from '@chakra-ui/react';

// The defaultConfig is all we need.
// It will find all the installed component packages
// once we use the correct components in our files.
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#007bff' },
        },
      },
    },
  },
});

export default system;