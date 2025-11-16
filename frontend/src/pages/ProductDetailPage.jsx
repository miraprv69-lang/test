// frontend/src/pages/ProductDetailPage.jsx
import React from 'react';
import {
  Heading,
  Text,
  Button,
  Image,
  Badge,
} from '@chakra-ui/react';
import { Box, Flex, VStack, HStack, SimpleGrid, Grid, GridItem } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';

// Placeholder data for a single product
const product = {
  id: 1,
  name: 'جهاز ايفون 15 برو ماكس',
  price: '25,000 د.ع',
  oldPrice: '30,000 د.ع',
  img: 'https://via.placeholder.com/400x400.png?text=iPhone+15', // Placeholder
  description: 'هذا وصف افتراضي للمنتج. يمكنك استبداله بوصف حقيقي لاحقًا. هذا الوصف يوضح ميزات المنتج وفوائده.',
  options: ['أحمر', 'أزرق', 'أسود'],
};

const ProductDetailPage = () => {
  // We would get the product ID from react-router-dom's useParams hook
  
  return (
    <Box maxW="1200px" mx="auto" p={8}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10}>
        
        {/* Column 1: Product Image */}
        <GridItem>
          <Image src={product.img} alt={product.name} borderRadius="lg" shadow="sm" />
          {/* We can add thumbnails here later */}
        </GridItem>

        {/* Column 2: Product Details */}
        <GridItem>
          <VStack align="flex-start" spacing={5}>
            <Heading size="xl">{product.name}</Heading>
            
            <HStack>
              <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                {product.price}
              </Text>
              {product.oldPrice && (
                <Text as="s" fontSize="xl" color="gray.500">
                  {product.oldPrice}
                </Text>
              )}
            </HStack>

            <Text fontSize="md" color="gray.600">
              {product.description}
            </Text>

            {/* Product Options (e.g., Color) */}
            <VStack align="flex-start">
              <Text fontWeight="bold">اللون:</Text>
              <RadioGroup>
                <HStack spacing={4}>
                  {product.options.map((option) => (
                    <Radio key={option} value={option}>
                      {option}
                    </Radio>
                  ))}
                </HStack>
              </RadioGroup>
            </VStack>
            
            <Button colorScheme="blue" size="lg" w="full">
              أضف الى السلة
            </Button>
          </VStack>
        </GridItem>
        
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;