// frontend/src/pages/Categories.jsx
import React from 'react';
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
import { RiAddLine } from 'react-icons/ri';
import AddCategoryModal from '../components/AddCategoryModal';

const categoriesData = [
  {
    id: 1,
    name: 'اجهزة ذكية',
    productsCount: 123,
    orders: 1234,
    created: '2023-10-02',
  },
  {
    id: 2,
    name: 'اجهزة ذكية',
    productsCount: 22,
    orders: 557,
    created: '2023-10-02',
  },
];

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg">الفئات</Heading>
          <Button colorScheme="blue" leftIcon={<RiAddLine />} onClick={onOpen}>
            أضافة فئة جديدة
          </Button>
        </Flex>

        {/* 2. Use TableContainer */}
        <TableContainer bg="white" borderRadius="lg" shadow="sm">
          <Table variant="simple">
            <TableCaption>قائمة بجميع فئات المنتجات</TableCaption>
            <Thead>
              <Tr>
                <Th>الأسم</Th>
                <Th>عدد المنتجات</Th>
                <Th>الطلبات</Th>
                <Th>انشأ في</Th>
                <Th>خيارات</Th>
              </Tr>
            </Thead>
            <Tbody>
              {categoriesData.map((category) => (
                <Tr key={category.id}>
                  <Td>{category.name}</Td>
                  <Td>{category.productsCount}</Td>
                  <Td>{category.orders}</Td>
                  <Td>{category.created}</Td>
                  <Td>
                    <Button size="sm" variant="ghost">
                      ...
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer> {/* 3. Close TableContainer */}
      </Box>

      <AddCategoryModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Categories;