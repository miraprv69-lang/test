// frontend/src/components/PublicFooter.jsx
import React from 'react';
import { Text, Link, VStack, SimpleGrid } from '@chakra-ui/react';
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <Box bg="gray.800" color="white" p={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {/* Column 1: About */}
        <VStack align="flex-start">
          <Text fontSize="lg" fontWeight="bold">عن شركتنا</Text>
          <Text fontSize="sm" color="gray.400">
            [cite_start]شركة داخل الصندوق تقدم افضل الخدمات التقنية في العراق و بامتياز. [cite: 245]
          </Text>
          <Text fontSize="sm" color="gray.400">
            [cite_start]ايميل: InboxHelloCompany@gmail.com [cite: 229]
          </Text>
          <Text fontSize="sm" color="gray.400">
            [cite_start]هاتف: +964 778 100 9283 [cite: 230]
          </Text>
        </VStack>

        {/* Column 2: Quick Links */}
        <VStack align="flex-start">
          <Text fontSize="lg" fontWeight="bold">روابط سريعة</Text>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">المنتجات [cite: 256]</Link>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">اتصل بالدعم [cite: 255]</Link>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">كن شريكاً [cite: 258]</Link>
        </VStack>

        {/* Column 3: Site Destinations */}
        <VStack align="flex-start">
          <Text fontSize="lg" fontWeight="bold">وجهات الموقع</Text>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">تواصل معنا [cite: 257]</Link>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">معرض النجاح [cite: 260]</Link>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">سياسة الخصوصية [cite: 259]</Link>
          [cite_start]<Link as={RouterLink} to="#" color="gray.300">سياسة الاستخدام [cite: 261]</Link>
        </VStack>
      </SimpleGrid>

      <Flex my={8}>
        <Spacer />
      </Flex>

      <Text fontSize="sm" color="gray.500" textAlign="center">
        [cite_start]2025 شركة داخل الصندوق، جميع الحقوق محفوظة. [cite: 262]
      </Text>
    </Box>
  );
};

export default PublicFooter;