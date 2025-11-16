// frontend/src/components/AddCouponModal.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
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

const AddCouponModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>كوبون الخصم</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="4">قم بادخال المعلومات ادناه لادراج كود الخصم</Text>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>اسم الكود</FormLabel>
              <Input placeholder="مثلا: خصم العيد" />
            </FormControl>
            <FormControl>
              <FormLabel>رمز الخصم</FormLabel>
              <Input placeholder="NEWUSER20" />
            </FormControl>
            <FormControl>
              <FormLabel>تاريخ الانتهاء</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>اقصى حد استخدام</FormLabel>
              <Input type="number" placeholder="100" />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" me="3" onClick={onClose}>
            رجوع
          </Button>
          <Button colorScheme="blue">حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCouponModal;