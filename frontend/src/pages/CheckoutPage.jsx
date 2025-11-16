// frontend/src/pages/CheckoutPage.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
// 1. Import Divider from @chakra-ui/layout
import { Box, Flex, VStack, HStack, SimpleGrid, Divider } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { Link as RouterLink } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <Heading size="xl" mb={8}>الدفع</Heading>
      
      <Flex direction={{ base: 'column-reverse', md: 'row' }} gap={10}>
        
        {/* Column 1: Shipping Information Form */}
        <VStack flex={2} spacing={6} align="stretch" bg="white" p={8} borderRadius="lg" shadow="sm">
          <Heading size="lg">معلومات التوصيل</Heading>
          
          <FormControl isRequired>
            <FormLabel>الأسم الكامل</FormLabel>
            <Input placeholder="علي حسن محمد" />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>رقم الهاتف</FormLabel>
            <Input type="tel" placeholder="077..." />
          </FormControl>

          <SimpleGrid columns={2} spacing={4}>
            <FormControl isRequired>
              <FormLabel>المحافظة</FormLabel>
              <Select placeholder="أختر محافظة">
                <option value="baghdad">بغداد</option>
                <option value="basra">البصرة</option>
                <option value="mosul">الموصل</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>المدينة / المنطقة</FormLabel>
              <Input placeholder="المنصور" />
            </FormControl>
          </SimpleGrid>

          <FormControl isRequired>
            <FormLabel>العنوان التفصيلي</FormLabel>
            <Input placeholder="شارع فلسطين قرب المحطة" />
          </FormControl>
        </VStack>

        {/* Column 2: Order Summary */}
        <Box flex={1}>
          <VStack bg="white" p={6} borderRadius="lg" shadow="sm" align="stretch" spacing={4} pos="sticky" top="120px">
            <Heading size="lg">ملخص الطلب</Heading>
            <HStack justify="space-between">
              <Text color="gray.600">المجموع الفرعي</Text>
              <Text fontWeight="bold">25,000 د.ع</Text>
            </HStack>
            <HStack justify="space-between">
              <Text color="gray.600">التوصيل</Text>
              <Text fontWeight="bold">5,000 د.ع</Text>
            </HStack>
            <Divider />
            <HStack justify="space-between">
              <Text fontSize="xl" fontWeight="bold">المجموع الكلي</Text>
              <Text fontSize="xl" fontWeight="bold">30,000 د.ع</Text>
            </HStack>
            <Button colorScheme="blue" size="lg">
              تأكيد الطلب
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheckoutPage;