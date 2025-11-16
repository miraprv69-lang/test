// frontend/src/pages/PersonalInfoPage.jsx
import React, { useState } from "react";
import {
  Button,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
// 1. Import Form components from their package
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/layout";
import { Link as RouterLink } from 'react-router-dom';

// This is the adapted component
export default function PersonalInfoPage() {
  const [form, setForm] = useState({ name: "", phone: "", governorate: "", city: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
  };

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/[^0-9]/g, "");
    handleChange({ target: { name: "phone", value: cleaned } });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "الاسم مطلوب";
    if (!/^[0-9]{6,12}$/.test(form.phone)) err.phone = "ادخل رقم صحيح (6-12 رقم)";
    if (!form.governorate.trim()) err.governorate = "المحافظة مطلوبة";
    if (!form.city.trim()) err.city = "المدينة مطلوبة";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // replace with API call
    alert("تم حفظ البيانات (محاكاة)");
    // We can navigate to the dashboard here
    // navigate('/dashboard');
  };

  return (
    <Box zIndex={1} w={{ base: "92%", md: "560px" }} px={6}>
      <VStack spacing={6} align="stretch" textAlign="center">
        <Box>
          <Box display="inline-flex" bg="white" p={3} borderRadius="md" boxShadow="sm" mb={4}>
            {/* cube-like icon */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 6 58 18v28L32 58 6 46V18L32 6z" fill="#06b6d4" />
              <path d="M32 6v52" stroke="#ffffff" strokeWidth="2" opacity="0.2" />
            </svg>
          </Box>

          <Heading as="h1" size="lg" fontWeight="extrabold" color="gray.800">
            المعلومات الشخصية
          </Heading>
          <Text mt={2} color="gray.600">
            ادخل المعلومات هنا لإنهاء حسابك بشكل كامل
          </Text>
        </Box>

        <Box as="form" onSubmit={handleSubmit} bg="whiteAlpha.900" p={6} borderRadius="xl" boxShadow="md" borderWidth="1px">
          <Stack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="الاسم الثلاثي الكامل"
                dir="rtl"
                size="md"
              />
              {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            </FormControl>

            <HStack spacing={3}>
              <Box w="80px">
                <Input value="+964" readOnly textAlign="center" bg="gray.50" />
              </Box>
              <FormControl isInvalid={!!errors.phone} flex={1}>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="رقم الهاتف"
                  dir="rtl"
                  size="md"
                />
                {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
              </FormControl>
            </HStack>

            <HStack spacing={3}>
              <FormControl isInvalid={!!errors.governorate} flex={1}>
                <Input
                  name="governorate"
                  value={form.governorate}
                  onChange={handleChange}
                  placeholder="المحافظة"
                  dir="rtl"
                  size="md"
                />
                {errors.governorate && <FormErrorMessage>{errors.governorate}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.city} flex={1}>
                <Input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="المدينة"
                  dir="rtl"
                  size="md"
                />
                {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
              </FormControl>
            </HStack>

            <VStack spacing={3} pt={2}>
              <Button type="submit" w="full" bg="gray.900" color="white" _hover={{ opacity: 0.95 }}>
                انهاء
              </Button>

              <Button
                variant="outline"
                w="full"
                as={RouterLink}
                to="/login" // Link to log out / go back to login
              >
                تسجيل الخروج
              </Button>

              <Text fontSize="sm" color="gray.500" textAlign="center" pt={2}>
                غير متأكد؟ تواصل مع الدعم
              </Text>
            </VStack>
          </Stack>
        </Box>

        <HStack justify="end" color="gray.400" spacing={2} fontSize="sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" stroke="#94a3b8" strokeWidth="0.8" fill="none" />
          </svg>
          <Text>مقدم من شركة داخل الصندوق</Text>
        </HStack>
      </VStack>
    </Box>
  );
}