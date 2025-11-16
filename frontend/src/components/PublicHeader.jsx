// frontend/src/components/PublicHeader.jsx
import React from 'react';
import { Heading, Button, Link, Image } from '@chakra-ui/react';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <Box bg="white" shadow="sm" py={4} px={8}>
      <Flex align="center">
        {/* Logo */}
        <HStack as={RouterLink} to="/landing">
          {/* Using a placeholder for the "INBOX COMPANY" logo */}
          <Image src="https://via.placeholder.com/32" alt="Inbox Company" />
          <Heading size="md" color="blue.600">
            INBOX COMPANY
          </Heading>
        </HStack>

        <Spacer />

        {/* Navigation Links from Page 20 */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/landing/services">الخدمات</Link>
          <Link as={RouterLink} to="/landing/products">المنتجات</Link>
          <Link as={RouterLink} to="/landing/pricing">الأسعار</Link>
          <Link as={RouterLink} to="/landing/branches">أفرعنا</Link>
          <Link as={RouterLink} to="/login">تسجيل الدخول</Link>
        </HStack>

        <Spacer />

        <Button colorScheme="blue">تواصل معنا</Button>
      </Flex>
    </Box>
  );
};

export default PublicHeader;