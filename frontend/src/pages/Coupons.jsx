// frontend/src/pages/Coupons.jsx
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
  TableContainer,
} from '@chakra-ui/table';
import { Tag } from '@chakra-ui/tag';
import { RiAddLine } from 'react-icons/ri';
import AddCouponModal from '../components/AddCouponModal.jsx';

// Placeholder data from Page 61
const couponsData = [
  {
    id: 1,
    name: 'خصم خاص للمستخدمين الجدد',
    code: 'NEW',
    value: '1000 دينار',
    used: '124 مرة',
    created: '2023-10-02',
    expires: '3 ايام',
  },
  {
    id: 2,
    name: 'خصم خاص للمستخدمين الجدد',
    code: 'GG50',
    value: '20%',
    used: '124 مرة',
    created: '2023-10-02',
    expires: '5 ايام',
  },
  {
    id: 3,
    name: 'خصم خاص',
    code: 'LOL10',
    value: 'توصيل مجاني',
    used: '124 مرة',
    created: '2023-10-02',
    expires: '7 ايام',
  },
];

const Coupons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg">كوبونات الخصم</Heading>
          <Button colorScheme="blue" leftIcon={<RiAddLine />} onClick={onOpen}>
            أضافة خصم
          </Button>
        </Flex>

        <TableContainer bg="white" borderRadius="lg" shadow="sm">
          <Table variant="simple">
            <TableCaption>قائمة بجميع كوبونات الخصم</TableCaption>
            <Thead>
              <Tr>
                <Th>الأسم</Th>
                <Th>رمز الخصم</Th>
                <Th>قيمة الخصم</Th>
                <Th>أستخدم</Th>
                <Th>انشأ في</Th>
                <Th>ينتهي</Th>
              </Tr>
            </Thead>
            <Tbody>
              {couponsData.map((coupon) => (
                <Tr key={coupon.id}>
                  <Td>{coupon.name}</Td>
                  <Td>
                    <Tag colorScheme="blue" size="lg">{coupon.code}</Tag>
                  </Td>
                  <Td>{coupon.value}</Td>
                  <Td>{coupon.used}</Td>
                  <Td>{coupon.created}</Td>
                  <Td>{coupon.expires}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Render the modal */}
      <AddCouponModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Coupons;