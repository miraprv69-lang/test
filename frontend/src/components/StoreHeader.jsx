// frontend/src/components/StoreHeader.jsx
import React from 'react';
import { Heading, Button, Link, IconButton } from '@chakra-ui/react';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

const StoreHeader = () => {
  return (
    <Box bg="white" shadow="sm" py={4} px={8} pos="sticky" top={0} zIndex={10}>
      <Flex align="center">
        {/* Logo */}
        <HStack as={RouterLink} to="/store">
          <Heading size="md" color="blue.600">
            متجر بوكسي
          </Heading>
        </HStack>

        <Spacer />

        {/* Navigation Links */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/store">الرئيسية</Link>
          <Link as={RouterLink} to="/store/products">المنتجات</Link>
          <Link as={RouterLink} to="/store/categories">الفئات</Link>
        </HStack>

        <Spacer />

        {/* This IconButton now links to the cart page */}
        <IconButton
          as={RouterLink}
          to="/store/cart"
          icon={<RiShoppingCartLine />}
          variant="ghost"
          aria-label="Cart"
          fontSize="20px"
        />
      </Flex>
    </Box>
  );
};

export default StoreHeader;