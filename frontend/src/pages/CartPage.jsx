// frontend/src/pages/CartPage.jsx
import React from 'react';
import {
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { Box, Flex, VStack, HStack, Spacer, Divider } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

const cartItem = {
  // ... (cartItem data)
};
const hasItems = true; 

const CartPage = () => {
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <Heading size="xl" mb={8}>سلة التسوق</Heading>
      
      {hasItems ? (
        <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
          
          {/* Cart Items */}
          <VStack flex={2} spacing={4} align="stretch">
            {/* ... (cart items list) ... */}
          </VStack>

          {/* Order Summary */}
          <Box flex={1}>
            <VStack bg="white" p={6} borderRadius="lg" shadow="sm" align="stretch" spacing={4}>
              <Heading size="lg">ملخص الطلب</Heading>
              {/* ... (summary details) ... */}
              <Divider />
              <HStack justify="space-between">
                <Text fontSize="xl" fontWeight="bold">المجموع الكلي</Text>
                <Text fontSize="xl" fontWeight="bold">30,000 د.ع</Text>
              </HStack>
              {/* This button now links to the checkout page */}
              <Button
                as={RouterLink}
                to="/store/checkout"
                colorScheme="blue"
                size="lg"
              >
                المتابعة إلى الدفع
              </Button>
            </VStack>
          </Box>
        </Flex>
      ) : (
        // Empty Cart
        <Box textAlign="center" py={20}>
          {/* ... (empty cart code) ... */}
        </Box>
      )}
    </Box>
  );
};

export default CartPage;