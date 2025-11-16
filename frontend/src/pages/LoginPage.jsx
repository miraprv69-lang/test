// frontend/src/pages/LoginPage.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
// 1. Import Divider from @chakra-ui/layout
import { Box, VStack, HStack, Divider } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Link as RouterLink } from 'react-router-dom';
import { RiGoogleFill, RiFacebookFill } from 'react-icons/ri';

const LoginPage = () => {
  return (
    <Box
      w={{ base: '90%', md: '400px' }}
      bg="white"
      p={8}
      borderRadius="lg"
      shadow="sm"
    >
      <VStack spacing={6}>
        <VStack align="center">
          <Heading size="lg">أهلاً و سهلاً</Heading>
          <Text color="gray.500">
            اسهل و اسرع متجر الكتروني تفاعلي في العراق
          </Text>
        </VStack>

        <FormControl>
          <FormLabel>البريد الألكتروني</FormLabel>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>

        <FormControl>
          <FormLabel>كلمة السر</FormLabel>
          <Input type="password" placeholder="********" />
        </FormControl>

        <Button colorScheme="blue" w="full">
          تسجيل الدخول
        </Button>

        <Button as={RouterLink} to="/signup" w="full" variant="ghost">
          أنشاء حساب
        </Button>

        <HStack w="full" align="center">
          <Divider />
          <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
            أو يمكنك استخدام
          </Text>
          <Divider />
        </HStack>

        <HStack w="full" spacing={4}>
          <Button w="full" variant="outline" leftIcon={<RiGoogleFill />}>
            Google
          </Button>
          <Button w="full" variant="outline" leftIcon={<RiFacebookFill />}>
            Facebook
          </Button>
        </HStack>

        <Text fontSize="xs" color="gray.500">
          مقدم من شركة داخل الصندوق
        </Text>
      </VStack>
    </Box>
  );
};

export default LoginPage;