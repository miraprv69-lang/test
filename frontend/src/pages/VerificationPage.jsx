// frontend/src/pages/VerificationPage.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
import { Box, VStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Link as RouterLink } from 'react-router-dom';

const VerificationPage = () => {
  return (
    <Box
      w={{ base: '90%', md: '400px' }}
      bg="white"
      p={8}
      borderRadius="lg"
      shadow="sm"
    >
      <VStack spacing={6} align="flex-start">
        <VStack align="flex-start" w="full">
          <Heading size="lg">خطوة واحدة بعد....</Heading>
          <Text color="gray.500">
            {/* We'll make this email dynamic later */}
            ارسلا رمز تحقق الى ايميلك sjdj**@gmail.com
          </Text>
        </VStack>

        <FormControl>
          <FormLabel>رمز التحقق</FormLabel>
          <Input placeholder="123456" />
        </FormControl>

        <Button
          as={RouterLink}
          to="/personal-info" // Navigate to the next step
          colorScheme="blue"
          w="full"
        >
          تحقق
        </Button>

        <Button as={RouterLink} to="/login" w="full" variant="ghost">
          رجوع
        </Button>

        <Text fontSize="xs" color="gray.500" w="full" textAlign="center">
          مقدم من شركة داخل الصندوق
        </Text>
      </VStack>
    </Box>
  );
};

export default VerificationPage;