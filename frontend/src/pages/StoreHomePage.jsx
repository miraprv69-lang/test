// frontend/src/pages/StoreHomePage.jsx
import React from 'react';
import { Heading, Text, Button, Image } from '@chakra-ui/react';
import { Box, Flex, VStack, SimpleGrid } from '@chakra-ui/layout';
import StoreProductCard from '../components/StoreProductCard.jsx';

// Placeholder data from Page 158
const productsData = [
  {
    id: 1,
    name: 'جهاز ايفون 15 برو ماكس',
    price: '25,000 د.ع',
    img: 'https://via.placeholder.com/300x300.png?text=iPhone+15', // Placeholder
  },
  {
    id: 2,
    name: 'جهاز ايفون 12 برو ماكس',
    price: '63,000 د.ع',
    oldPrice: '70,000 د.ع',
    img: 'https://via.placeholder.com/300x300.png?text=iPhone+12', // Placeholder
  },
  {
    id: 3,
    name: 'جهاز ايفون 13 برو ماكس 512GB',
    price: '28,000 د.ع',
    img: 'https://via.placeholder.com/300x300.png?text=iPhone+13', // Placeholder
  },
  {
    id: 4,
    name: 'جهاز ايفون 11 برو جديد...',
    price: '10,000 د.ع',
    oldPrice: '10,000 د.ع',
    img: 'https://via.placeholder.com/300x300.png?text=iPhone+11', // Placeholder
  },
];

const StoreHomePage = () => {
  return (
    <Box>
      [cite_start]{/* 1. Hero Banner [cite: 1147] */}
      <Flex
        bg="blue.600"
        color="white"
        p={10}
        align="center"
        justify="space-between"
        m={8}
        borderRadius="lg"
      >
        <VStack align="flex-start" spacing={3}>
          <Heading size="lg">افضل عرض</Heading>
          <Text>جهاز 30</Text>
        </VStack>
        {/* We can add an image here later */}
      </Flex>

      [cite_start]{/* 2. Products Grid [cite: 1148, 1149, 1150, 1151] */}
      <Box p={8}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          {productsData.map((product) => (
            <StoreProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StoreHomePage;