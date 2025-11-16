// frontend/src/components/OrderDetailsModal.jsx
import React from 'react';
// Core components
import { Button, Text, Heading } from '@chakra-ui/react';
// Layout components
import {
  Box,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/layout';
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
// Tag component
import { Tag } from '@chakra-ui/tag';

// Helper function to get status color
const getStatusColorScheme = (status) => {
  switch (status) {
    case 'واصل':
      return 'green';
    case 'راجع':
      return 'red';
    case 'قيد المعالجة':
      return 'yellow';
    default:
      return 'gray';
  }
};

// We'll pass in the 'order' object as a prop
const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!order) {
    return null;
  }

  const mockProduct = {
    name: 'جهاز ايفون برو',
    quantity: 4,
    price: '40,000 د.ع',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ادارة الطلب</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="flex-start" spacing={4}>
            <Heading size="md">{order.name}</Heading>
            <Text fontSize="sm" color="gray.500">
              {order.products} منتجات - طلب قبل 3 ايام
            </Text>
            
            <VStack align="flex-start" spacing={1}>
              <Text>
                <Text as="span" fontWeight="bold">الكلي:</Text> {order.total} د.ع
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">الهاتف:</Text> 0776100293
              </Text>
              <Text>
                <Text as="span" fontWeight="bold">العنوان:</Text> بغداد - شارع فلسطين قرب المحطة
              </Text>
            </VStack>

            <Tag colorScheme={getStatusColorScheme(order.status)} size="lg">
              حالة الطلب : {order.status}
            </Tag>

            <Divider />

            <Heading size="sm">المنتجات في الطلب</Heading>
            <HStack justify="space-between" w="full">
              <Text>{mockProduct.quantity} x {mockProduct.name}</Text>
              <Text fontWeight="bold">{mockProduct.price}</Text>
            </HStack>
            
          </VStack>
        </ModalBody>

        <ModalFooter as={HStack} justify="flex-start">
          <Button colorScheme="blue">طباعة وصل</Button>
          <Button>أتصال</Button>
          <Button variant="ghost" onClick={onClose}>حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailsModal;