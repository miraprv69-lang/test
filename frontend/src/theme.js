// src/theme.js
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  brand: {
    50: '#f0f7ff',
    100: '#d6e4ff',
    200: '#adc8ff',
    300: '#84a9ff',
    400: '#6690ff',
    500: '#3366ff', // main
    600: '#254eda',
    700: '#1939b7',
    800: '#102693',
    900: '#091a7a',
  },
  accent: {
    500: '#ffb020',
  },
};

const styles = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      direction: 'rtl',
    },
    body: {
      bg: mode('#f5f7fb', '#050816')(props),
      color: mode('#111827', 'whiteAlpha.900')(props),
    },
  }),
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: 'full',
      fontWeight: '600',
    },
    variants: {
      solid: (props) => ({
        bg: mode('brand.500', 'brand.400')(props),
        color: 'white',
        _hover: {
          bg: mode('brand.600', 'brand.300')(props),
          boxShadow: 'md',
        },
      }),
      outline: (props) => ({
        borderColor: mode('brand.500', 'brand.300')(props),
        color: mode('brand.600', 'brand.200')(props),
        _hover: {
          bg: mode('brand.50', 'whiteAlpha.100')(props),
        },
      }),
    },
  },
  Card: {
    baseStyle: {
      borderRadius: 'lg',
      boxShadow: 'sm',
    },
  },
};

const theme = extendTheme({
  direction: 'rtl',
  config,
  colors,
  styles,
  components,
});

export default theme;
