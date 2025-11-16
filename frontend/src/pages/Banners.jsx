// frontend/src/pages/Banners.jsx
import React from 'react';
import { Heading, Button, useDisclosure, Image } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout'; // Layout components
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
import AddBannerModal from '../components/AddBannerModal.jsx';

const bannersData = [
  {
    id: 1,
    name: 'جهاز ايفون 11',
    actionType: 'رابط',
    expires: '2 ايام',
    lastUpdate: '2023-10-02',
    img: 'https://picsum.photos/100/50',
  },
];

const Banners = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg">ادارة البنرات</Heading>
          <Button colorScheme="blue" leftIcon={<RiAddLine />} onClick={onOpen}>
            أضافة بنر جديد
          </Button>
        </Flex>
        <TableContainer bg="white" borderRadius="lg" shadow="sm">
          <Table variant="simple">
            <TableCaption>قائمة بجميع البنرات</TableCaption>
            <Thead>
              <Tr>
                <Th>الصورة</Th>
                <Th>الأسم</Th>
                <Th>الاجراء</Th>
                <Th>تنتهي الصلاحية</Th>
                <Th>اخر تحديث</Th>
                <Th>خيارات</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bannersData.map((banner) => (
                <Tr key={banner.id}>
                  <Td>
                    <Image src={banner.img} alt={banner.name} boxSize="50px" objectFit="cover" />
                  </Td>
                  <Td>{banner.name}</Td>
                  <Td>
                    <Tag>{banner.actionType}</Tag>
                  </Td>
                  <Td>{banner.expires}</Td>
                  <Td>{banner.lastUpdate}</Td>
                  <Td>
                    <Button size="sm" variant="ghost">
                      ...
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Render the modal */}
      <AddBannerModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Banners;