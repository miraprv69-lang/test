// frontend/src/components/Sidebar.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Heading, Link, Text, Box, VStack } from '@chakra-ui/react'; // <-- CORRECT
import {
  RiHome2Line,
  RiShoppingCartLine,
  RiLayoutGridLine,
  RiFileList2Line,
  RiSettings3Line,
  RiGroupLine,
  RiCoupon3Line,
  RiFolderLine,
  RiArrowGoBackLine,
} from 'react-icons/ri';

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      w="full"
    >
      <Box
        display="flex"
        alignItems="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'blue.500',
          color: 'white',
        }}
        {...rest}
      >
        {icon && <Box as={icon} ml="4" fontSize="16" />}
        {children}
      </Box>
    </Link>
  );
};

const Sidebar = ({ ...rest }) => {
  return (
    <Box
      bg="white"
      borderStart="1px"
      borderColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      right="0"
      {...rest}
    >
      <VStack h="20" alignItems="flex-start" justify="center" mx="8">
        <Heading size="md" color="blue.600">
          بوكس ستور
        </Heading>
        <Text fontSize="sm">متجر بوكسي</Text>
      </VStack>

      <VStack as="nav" spacing={1} align="stretch" mt={5}>
        <NavItem icon={RiHome2Line} to="/dashboard/home">
          صفحة الرئيسية
        </NavItem>
        <NavItem icon={RiLayoutGridLine} to="/dashboard/products">
          المنتجات
        </NavItem>
        <NavItem icon={RiFolderLine} to="/dashboard/categories">
          ادارة الفئات
        </NavItem>
        <NavItem icon={RiShoppingCartLine} to="/dashboard/orders">
          الطلبات
        </NavItem>
        <NavItem icon={RiGroupLine} to="/dashboard/customers">
          الزبائن
        </NavItem>
        <NavItem icon={RiCoupon3Line} to="/dashboard/coupons">
          كوبونات الخصم
        </NavItem>
        <NavItem icon={RiFileList2Line} to="/dashboard/banners">
          ادارة البنرات
        </NavItem>
        
        {/* This is the new link for Settings */}
        <NavItem icon={RiSettings3Line} to="/dashboard/settings">
          اعدادات المتجر
        </NavItem>
        
        <NavItem icon={RiArrowGoBackLine} to="#">
          أنتقل الى المتجر
        </NavItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;