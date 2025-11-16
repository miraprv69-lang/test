// frontend/src/components/CustomerDetailsModal.jsx
import React from 'react';
import { Heading, Text, Button } from '@chakra-ui/react';
import { Box, VStack, HStack, Divider } from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';

// We'll pass in the 'customer' object as a prop
const CustomerDetailsModal = ({ isOpen, onClose, customer }) => {
  // Handle case where customer data might not be ready
  if (!customer) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>معلومات الزبون</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="flex-start" spacing={4}>
            <Heading size="md">{customer.name}</Heading>
            
            <Text fontSize="sm" color="gray.500">
              انضم: {customer.joined} | اخر طلب: {customer.lastOrder}
            </Text>

            <VStack align="flex-start" spacing={1} w="full">
              <HStack justify="space-between" w="full">
                <Text>اجمالي:</Text>
                <Text fontWeight="bold">{customer.total} د.ع</Text>
              </HStack>
              <HStack justify="space-between" w="full">
                <Text>طلبات نشطة:</Text>
                <Text fontWeight="bold">{customer.activeOrders}</Text>
              </HStack>
            </VStack>

            <Divider />

            <VStack align="flex-start" spacing={1}>
              <Text>
                <Text as="span" fontWeight="bold">الهاتف:</Text> {customer.phone}
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">المحافظة:</Text> بغداد
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">العنوان:</Text> شارع فلسطين قرب المحطة
              </Text>
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter as={HStack} justify="flex-start">
          <Button colorScheme="blue">أتصال</Button>
          <Button variant="ghost" onClick={onClose}>حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomerDetailsModal;