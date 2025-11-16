// frontend/src/pages/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import PublicHeader from '../components/PublicHeader.jsx';
import PublicFooter from '../components/PublicFooter.jsx';

const PublicLayout = () => {
  return (
    <Box>
      <PublicHeader />
      {/* Outlet will render the different public pages */}
      <Outlet />
      <PublicFooter />
    </Box>
  );
};

export default PublicLayout;