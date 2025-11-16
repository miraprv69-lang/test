// frontend/src/pages/Products.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, Button } from '@chakra-ui/react';
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
import { RiAddLine } from 'react-icons/ri';

const productsData = [
  {
    id: 1,
    name: 'جهاز ايفون 11',
    category: 'اجهزة ذكية',
    price: '2500',
    discountPrice: 'لا يوجد',
    lastUpdate: '2023-10-02',
  },
  {
    id: 2,
    name: 'جهاز ايفون 13',
    category: 'اجهزة ذكية',
    price: '66,000',
    discountPrice: '23,000',
    discountPercent: '-50%',
    lastUpdate: '2023-10-02',
  },
  {
    id: 3,
    name: 'جهاز ايفون 12',
    category: 'اجهزة ذكية',
    price: '2500',
    discountPrice: 'لا يوجد',
    lastUpdate: '2023-10-02',
  },
];

const Products = () => {
  const navigate = useNavigate();
  const handleAddProductClick = () => {
    navigate('/dashboard/products/add');
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb="8">
        <Heading size="lg">المنتجات</Heading>
        <Button
          colorScheme="blue"
          leftIcon={<RiAddLine />}
          onClick={handleAddProductClick}
        >
          أضافة منتج
        </Button>
      </Flex>

      {/* 2. Use TableContainer (NOT Table.Container) */}
      <TableContainer bg="white" borderRadius="lg" shadow="sm">
        <Table variant="simple">
          <TableCaption>قائمة بجميع المنتجات في متجرك</TableCaption>
          <Thead>
            <Tr>
              <Th>الأسم</Th>
              <Th>السعر</Th>
              <Th>الفئة</Th>
              <Th>بعد الخصم</Th>
              <Th>اخر تحديث</Th>
              <Th>خيارات</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productsData.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>{product.category}</Td>
                <Td>
                  {product.discountPercent ? (
                    <Tag colorScheme="red" me="2">
                      {product.discountPercent}
                    </Tag>
                  ) : null}
                  {product.discountPrice}
                </Td>
                <Td>{product.lastUpdate}</Td>
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
  );
};

export default Products;