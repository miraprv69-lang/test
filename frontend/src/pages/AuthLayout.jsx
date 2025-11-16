// frontend/src/pages/AuthLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
// 1. Import Flex from @chakra-ui/layout (to match your AddProduct.jsx)
import { Flex } from '@chakra-ui/layout'; 

const AuthLayout = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.100"
    >
      {/* This Outlet will render the Login or Sign Up page */}
      <Outlet />
    </Flex>
  );
};

export default AuthLayout;