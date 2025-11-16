// frontend/src/pages/StoreSettings.jsx
import React from 'react';
import { Heading, Button, Text } from '@chakra-ui/react';
import { Box, VStack, SimpleGrid, HStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/tabs';

const StoreSettings = () => {
  return (
    <Box>
      <Heading size="lg" mb="8">أعدادات المتجر</Heading>

      <Tabs variant="enclosed-colored" colorScheme="blue">
        <TabList>
          <Tab>المعلومات الأساسية</Tab>
          <Tab>تفاصيل التوصيل</Tab>
        </TabList>
        <TabPanels>
          
          {/* Panel 1: Basic Info (from Page 53) */}
          <TabPanel>
            <VStack as="form" spacing={4} bg="white" p={6} borderRadius="lg" shadow="sm">
              <FormControl>
                <FormLabel>أسم المتجر</FormLabel>
                <Input placeholder="مثلا: متجر بوكسي" />
              </FormControl>
              
              <FormControl>
                <FormLabel>العنوان</FormLabel>
                <Input placeholder="البصرة حي الفلاح..." />
              </FormControl>

              <SimpleGrid columns={2} spacing={4} w="full">
                <FormControl>
                  <FormLabel>رقم التواصل</FormLabel>
                  <Input placeholder="077..." />
                </FormControl>
                <FormControl>
                  <FormLabel>رقم التواصل 2 (اختياري)</FormLabel>
                  <Input placeholder="077..." />
                </FormControl>
              </SimpleGrid>

              <FormControl>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input placeholder="example@gmail.com" />
              </FormControl>

              <FormControl>
                <FormLabel>اقل مبلغ للطلب</FormLabel>
                <Input placeholder="5000" />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  أقل سعر لانشاء طلب (مثال: 5,000 دينار عراقي)
                </Text>
              </FormControl>

              <Heading size="md" pt={4} w="full">روابط التواصل الاجتماعي</Heading>

              <SimpleGrid columns={2} spacing={4} w="full">
                <FormControl>
                  <FormLabel>رابط صفحة انستا</FormLabel>
                  <Input placeholder="https://instagram.com/..." />
                </FormControl>
                <FormControl>
                  <FormLabel>رابط تليكرام</FormLabel>
                  <Input placeholder="https://t.me/..." />
                </FormControl>
                <FormControl>
                  <FormLabel>رابط فيسبوك</FormLabel>
                  <Input placeholder="https://facebook.com/..." />
                </FormControl>
                <FormControl>
                  <FormLabel>رابط سناب جات</FormLabel>
                  <Input placeholder="https://snapchat.com/..." />
                </FormControl>
              </SimpleGrid>
            </VStack>
          </TabPanel>

          {/* Panel 2: Delivery Details (from Page 53) */}
          <TabPanel>
            <VStack as="form" spacing={4} bg="white" p={6} borderRadius="lg" shadow="sm">
              <Heading size="md" w="full">أعدادات توصيل المحافظات</Heading>
              
              <FormControl>
                <FormLabel>أختر محافظة</FormLabel>
                <Select placeholder="أختر محافظة للتعديل">
                  <option value="baghdad">بغداد</option>
                  <option value="mosul">الموصل</option>
                  <option value="basra">البصرة</option>
                </Select>
              </FormControl>
              
              <FormControl>
                <FormLabel>سعر التوصيل للمحافظة المختارة</FormLabel>
                <Input placeholder="5000" />
              </FormControl>
              
              <FormControl>
                <FormLabel>التوصيل متوفر؟</FormLabel>
                <Select>
                  <option value="yes">نعم</option>
                  <option value="no">لا</option>
                </Select>
              </FormControl>
            </VStack>
          </TabPanel>

        </TabPanels>
      </Tabs>

      <HStack mt={8} justify="flex-start">
        <Button colorScheme="blue">حفظ التغييرات</Button>
        <Button variant="ghost">الغاء التعديلات</Button>
      </HStack>
    </Box>
  );
};

export default StoreSettings;