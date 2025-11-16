// frontend/src/pages/DashboardLayout.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <Sidebar />
      
      {/* Use 'mr' (margin-right) for RTL. This is correct as it offsets 
        from the sidebar which is physically on the right.
      */}
      <Box mr={{ base: 0, md: 60 }} p="8">
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;