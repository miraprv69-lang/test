// frontend/src/pages/Customers.jsx
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
  TableContainer,
} from '@chakra-ui/table';
import CustomerDetailsModal from '../components/CustomerDetailsModal.jsx';

// Placeholder data from Page 54
const customersData = [
  {
    id: 1,
    name: 'محمد علي حسن',
    phone: '07741002834',
    orders: 12,
    total: '27,000',
    lastOrder: '2023-10-02',
    joined: '2023-10-01',
    activeOrders: 3,
  },
  {
    id: 2,
    name: 'سارة عليها',
    phone: '07741002834',
    orders: 23,
    total: '227,000',
    lastOrder: '2023-10-02',
    joined: '2023-09-15',
    activeOrders: 1,
  },
];

const Customers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleOpenModal = (customer) => {
    setSelectedCustomer(customer);
    onOpen();
  };

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg">قائمة الزبائن</Heading>
          {/* We can add a search bar here later */}
        </Flex>

        <TableContainer bg="white" borderRadius="lg" shadow="sm">
          <Table variant="simple">
            <TableCaption>قائمة بجميع الزبائن</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>الأسم</Th>
                <Th>رقم الهاتف</Th>
                <Th>عدد الطلبات</Th>
                <Th>اخر طلب</Th>
                <Th>خيارات</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customersData.map((customer) => (
                <Tr key={customer.id}>
                  <Td>{customer.id}</Td>
                  <Td>{customer.name}</Td>
                  <Td>{customer.phone}</Td>
                  <Td>{customer.orders}</Td>
                  <Td>{customer.lastOrder}</Td>
                  <Td>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleOpenModal(customer)}
                    >
                      معلومات اخرى
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Render the modal */}
      <CustomerDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        customer={selectedCustomer}
      />
    </>
  );
};

export default Customers;