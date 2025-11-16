// frontend/src/components/AddBannerModal.jsx
import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { VStack, Box } from '@chakra-ui/layout'; // Layout components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';

const AddBannerModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>أنشاء بنر</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="4">قم بادخال المعلومات ادناه لادراج بنر جديد</Text>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>اسم البنر</FormLabel>
              <Input placeholder="مثلا: بنر اعلان 1" />
            </FormControl>
            <FormControl>
              <FormLabel>الاجراء (عند الضغط)</FormLabel>
              <Select placeholder="أختر نوع الاجراء">
                <option value="category">فئة</option>
                <option value="product">منتج</option>
                <option value="link">رابط</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>رفع صورة</FormLabel>
              <Box
                border="2px dashed"
                borderColor="gray.300"
                borderRadius="md"
                p={6}
                textAlign="center"
                w="full"
              >
                <Text>اضغط هنا لرفع الصورة</Text>
              </Box>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" me="3" onClick={onClose}>
            الغاء
          </Button>
          <Button colorScheme="blue">حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddBannerModal;