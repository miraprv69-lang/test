// frontend/src/pages/SignupPage.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
import { Box, VStack, HStack, Divider } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Link as RouterLink } from 'react-router-dom';
import { RiGoogleFill, RiFacebookFill } from 'react-icons/ri';

const SignupPage = () => {
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
          <FormLabel>كلمة سر جديدة</FormLabel>
          <Input type="password" placeholder="********" />
        </FormControl>

        {/* This button now links to the verify page */}
        <Button
          as={RouterLink}
          to="/verify"
          colorScheme="blue"
          w="full"
        >
          أنشاء حساب
        </Button>

        <Button as={RouterLink} to="/login" w="full" variant="ghost">
          لدي حساب بالفعل
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

export default SignupPage;