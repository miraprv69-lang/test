// frontend/src/pages/StoreLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import StoreHeader from '../components/StoreHeader.jsx';
// We'll use the same PublicFooter for the store
import PublicFooter from '../components/PublicFooter.jsx'; 

const StoreLayout = () => {
  return (
    <Box bg="gray.50">
      <StoreHeader />
      {/* Outlet will render the store's pages */}
      <Box minH="70vh">
        <Outlet />
      </Box>
      <PublicFooter />
    </Box>
  );
};

export default StoreLayout;