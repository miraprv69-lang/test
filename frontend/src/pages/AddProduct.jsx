// frontend/src/pages/AddProduct.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
import {
  Box,
  VStack,
  HStack,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { Select } from '@chakra-ui/select';
import { Checkbox } from '@chakra-ui/checkbox';

const AddProduct = () => {
  return (
    <Box>
      <VStack align="flex-start" mb="8">
        <Heading size="lg">معلومات المنتج</Heading>
        <Text color="gray.500">تحرير كافة معلومات منتجك بشكل كامل</Text>
      </VStack>

      {/* Main form grid */}
      <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={6}>
        
        {/* Column 1: Main Details */}
        <GridItem as="form">
          <VStack spacing={6} bg="white" p={6} borderRadius="lg" shadow="sm">
            <FormControl>
              <FormLabel>الاسم</FormLabel>
              <Input placeholder="اسم المنتج" />
            </FormControl>

            <FormControl>
              <FormLabel>النوع او الفئة</FormLabel>
              <Select placeholder="أختر فئة">
                <option value="cat1">اجهزة ذكية</option>
                <option value="cat2">اجهزة محولة</option>
              </Select>
            </FormControl>

            {/* Price and Discount */}
            <SimpleGrid columns={2} spacing={4} w="full">
              <FormControl>
                <FormLabel>السعر</FormLabel>
                <Input placeholder="السعر" type="number" />
              </FormControl>
              <FormControl>
                <FormLabel>الخصم ان وجد</FormLabel>
                <Input placeholder="الخصم" type="number" />
              </FormControl>
            </SimpleGrid>

            <FormControl>
              <FormLabel>وصف المنتج</FormLabel>
              <Textarea placeholder="وصف قصير للمنتج" />
            </FormControl>

            <FormControl>
              <FormLabel>مميزات المنتج</FormLabel>
              <VStack align="flex-start">
                <Checkbox>الميزة الاولى</Checkbox>
                <Checkbox>الميزة الثانية</Checkbox>
                <Checkbox>الميزة الثالثة</Checkbox>
              </VStack>
            </FormControl>
          </VStack>
        </GridItem>

        {/* Column 2: Stock and Images */}
        <GridItem>
          <VStack spacing={6}>
            <VStack w="full" bg="white" p={6} borderRadius="lg" shadow="sm">
              <FormControl>
                <FormLabel>العدد في المخزن</FormLabel>
                <Input placeholder="0" type="number" />
              </FormControl>
            </VStack>

            <VStack w="full" bg="white" p={6} borderRadius="lg" shadow="sm">
              <FormLabel>صور المنتج</FormLabel>
              <Box
                border="2px dashed"
                borderColor="gray.300"
                borderRadius="md"
                p={10}
                textAlign="center"
                w="full"
              >
                <Text>اسحب و افلت الصور هنا, او اضغط للرفع</Text>
              </Box>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>

      {/* Save/Cancel Buttons */}
      <HStack mt={8} justify="flex-start">
        <Button colorScheme="blue">حفظ</Button>
        <Button variant="ghost">الغاء</Button>
      </HStack>
    </Box>
  );
};

export default AddProduct;