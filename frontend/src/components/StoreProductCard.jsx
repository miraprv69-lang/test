// frontend/src/components/StoreProductCard.jsx
import React from 'react';
import { Heading, Text, Image, Badge, Link } from '@chakra-ui/react';
// 1. Import HStack from @chakra-ui/layout
import { Box, VStack, HStack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

const StoreProductCard = ({ product }) => {
  return (
    <Link as={RouterLink} to={`/store/product/${product.id}`} _hover={{ textDecoration: 'none' }}>
      <Box 
        bg="white" 
        shadow="sm" 
        borderRadius="lg" 
        overflow="hidden" 
        _hover={{ shadow: 'md' }}
      >
        <Image src={product.img} alt={product.name} objectFit="cover" w="full" h="200px" />
        <VStack p={4} align="flex-start" spacing={1}>
          <Heading size="sm" fontWeight="medium">{product.name}</Heading>
          {/* 2. This HStack will now be defined */}
          <HStack>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">
              {product.price}
            </Text>
            {product.oldPrice && (
              <Text as="s" fontSize="sm" color="gray.500">
                {product.oldPrice}
              </Text>
            )}
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
};

export default StoreProductCard;