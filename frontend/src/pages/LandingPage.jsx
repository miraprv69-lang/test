// frontend/src/pages/LandingPage.jsx
import React from 'react';
import {
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Link,
  VStack as ChakraVStack,
} from '@chakra-ui/react';
import { Box, Flex, VStack, HStack, SimpleGrid, Grid, GridItem } from '@chakra-ui/layout';
import {
  RiWindowLine,
  RiPhoneLine,
  RiServerLine,
  RiDatabase2Line,
  RiBriefcase4Line,
  RiCloudLine,
} from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

// Helper component for a service card
const ServiceCard = ({ icon, title, children }) => {
  return (
    <VStack bg="white" p={6} borderRadius="lg" shadow="sm" align="flex-start" spacing={3}>
      <Icon as={icon} w={8} h={8} color="blue.500" />
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm" color="gray.600">{children}</Text>
    </VStack>
  );
};

// Helper component for a product card
const ProductCard = ({ title, description, price }) => {
  return (
    <VStack bg="white" p={6} borderRadius="lg" shadow="sm" align="flex-start" spacing={3}>
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm" color="gray.600">{description}</Text>
      <Text fontSize="sm" color="blue.500" fontWeight="bold">{price}</Text>
    </VStack>
  );
};

// Helper component for a pricing card
const PricingCard = ({ title, price, features }) => {
  return (
    <VStack bg="white" p={6} borderRadius="lg" shadow="md" align="flex-start" spacing={4} borderTop="4px" borderColor="blue.500">
      <Heading size="lg">{title}</Heading>
      <Text fontSize="2xl" fontWeight="bold">{price}</Text>
      <ChakraVStack align="flex-start" spacing={2}>
        {features.map((feature, index) => (
          <Text key={index} fontSize="sm" color="gray.600">{feature}</Text>
        ))}
      </ChakraVStack>
      <Button colorScheme="blue" variant="outline" w="full">
        أشترك الان
      </Button>
    </VStack>
  );
};

const LandingPage = () => {
  return (
    <Box>
      {/* 1. Hero Section */}
      <Flex
        align="center"
        justify="center"
        bg="gray.100"
        py={20}
        px={8}
        textAlign="center"
      >
        <VStack spacing={6}>
          <Heading size="2xl" maxW="600px">
            تسوق معنا أينما كنت
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="500px">
            من أي مكان وفي أي زمان منتجاتك توصلك بسرعة لعدة دول ومناطق
          </Text>
          <HStack spacing={4}>
            <Button as={RouterLink} to="#" colorScheme="blue" size="lg">
              جرب المنوم الآن
            </Button>
            <Button as={RouterLink} to="#" variant="ghost" size="lg">
              تواصل معنا
            </Button>
          </HStack>
        </VStack>
      </Flex>

      {/* 2. Services Section */}
      <Box py={20} px={8}>
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading size="xl">خدماتنا</Heading>
          <Text fontSize="lg" color="gray.600">
            ابرز خدمات شركتنا المميزة
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
          <ServiceCard icon={RiPhoneLine} title="أنشاء التطبيقات">
            من الفكرة على النشر على السلام ناقة فكرتك و انشا تطبيقك
          </ServiceCard>
          <ServiceCard icon={RiWindowLine} title="المواقع الألكترونية">
            انشاء مواقع الكترونية تدومين مخصص. لدي شركة أو نشاط تجاري
          </ServiceCard>
          <ServiceCard icon={RiDatabase2Line} title="الأنظمة الداخلية">
            كافة نظم الالحنة والرقمنة لشركتك بشكل مخصص لبنها من الصفر
          </ServiceCard>
          <ServiceCard icon={RiServerLine} title="خدمات VPS">
            نساعدك في الجهيز web host خاص بك و بشركتك في العراق و فريق مختص
          </ServiceCard>
          <ServiceCard icon={RiBriefcase4Line} title="انظمة الادارة">
            تزودك والحرب على أحدث انظمة الإدارة العالمية
          </ServiceCard>
          <ServiceCard icon={RiCloudLine} title="هوستينك INBOX">
            خدمات هوست متنوعة Cloud and Shared hosting
          </ServiceCard>
        </SimpleGrid>
      </Box>
      
      {/* 3. Products Section */}
      <Box py={20} px={8} bg="gray.100">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading size="xl">منتجاتنا و حلولنا</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
          <ProductCard
            title="نظام بان"
            description="الأفضل في ادارة مندوبي و شركات التوصيل"
            price="يبدأ من $569"
          />
          <ProductCard
            title="نظام الفا 7"
            description="ادارة جميع انواع الشركات والمؤسسات من عام 1999"
            price="يبدأ من $900"
          />
          <ProductCard
            title="متجر بوكس الألكتروني 7"
            description="الافضل في ادارة مندوبي و شركات التوصيل منذ 2010"
            price="اضغط للمزيد من التفاصيل"
          />
        </SimpleGrid>
      </Box>

      {/* 4. Pricing Section */}
      <Box py={20} px={8}>
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading size="xl">خطط مناسبة للجميع</Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
          <PricingCard
            title="مشروع صغير"
            price="$89 الشهرية"
            features={['كل ما هو في تأسيس', '.هوست متكامل', 'دعم علي', 'خصومات خاصة']}
          />
          <PricingCard
            title="خطة التأسيس"
            price="$199 الشهرياً"
            features={['كل ما هو في خطة السيس', 'كل ما هو في البيس', 'كل ما هو في الخطط', 'كل ما هو في']}
          />
          <PricingCard
            title="خطة الأعمال"
            price="$399 شهرياً"
            features={['كل ما هو في تأسيس.', '.دوست متكامل', 'دعم علي.', 'خصومات خاصة']}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default LandingPage;