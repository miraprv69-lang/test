// frontend/src/pages/Orders.jsx
import React, { useState } from 'react';
import { Heading, Button, useDisclosure } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, // 1. Import TableContainer
} from '@chakra-ui/table';
import { Tag } from '@chakra-ui/tag';
import OrderDetailsModal from '../components/OrderDetailsModal';

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

const ordersData = [
  {
    id: 1,
    name: 'محمد علي حسن',
    total: '27,000',
    products: 12,
    status: 'واصل',
    lastUpdate: '2023-10-02',
  },
  {
    id: 2,
    name: 'سارة عليها',
    total: '227,000',
    products: 23,
    status: 'راجع',
    lastUpdate: '2023-10-02',
  },
  {
    id: 3,
    name: 'محمد خالد',
    total: '247,000',
    products: 44,
    status: 'قيد المعالجة',
    lastUpdate: '2023-10-02',
  },
];

const Orders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg">الطلبات</Heading>
        </Flex>

        {/* 2. Use TableContainer */}
        <TableContainer bg="white" borderRadius="lg" shadow="sm">
          <Table variant="simple">
            <TableCaption>قائمة بجميع الطلبات</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>الأسم</Th>
                <Th>المجموع</Th>
                <Th>المنتجات</Th>
                <Th>الحالة</Th>
                <Th>اخر تحديث</Th>
                <Th>خيارات</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ordersData.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.name}</Td>
                  <Td>{order.total}</Td>
                  <Td>{order.products}</Td>
                  <Td>
                    <Tag colorScheme={getStatusColorScheme(order.status)}>
                      {order.status}
                    </Tag>
                  </Td>
                  <Td>{order.lastUpdate}</Td>
                  <Td>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleOpenModal(order)}
                    >
                      ...
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer> {/* 3. Close TableContainer */}
      </Box>

      <OrderDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        order={selectedOrder}
      />
    </>
  );
};

export default Orders;