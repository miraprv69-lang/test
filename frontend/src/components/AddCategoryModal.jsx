import React from 'react';
// Core components
import { Button, Text, VStack } from '@chakra-ui/react';
// Modal components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';
// Form control components
import { FormControl, FormLabel } from '@chakra-ui/form-control';
// Input component
import { Input } from '@chakra-ui/input';
// Textarea component
import { Textarea } from '@chakra-ui/textarea';

// We pass isOpen, onClose from the useDisclosure hook
const AddCategoryModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {/* Header from Page 37 */}
        <ModalHeader>أنشاء فئة</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="4">قم بادخال المعلومات ادناه لاضافة فئة جديدة</Text>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>الأسم</FormLabel>
              <Input placeholder="الأسم" />
            </FormControl>
            <FormControl>
              <FormLabel>الوصف</FormLabel>
              <Textarea placeholder="الوصف" />
            </FormControl>
          </VStack>
        </ModalBody>

        {/* Footer buttons from Page 37 */}
        <ModalFooter>
          <Button variant="ghost" me="3" onClick={onClose}>
            رجوع
          </Button>
          <Button colorScheme="blue">اضافة</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCategoryModal;