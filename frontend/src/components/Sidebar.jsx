import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
//
// THIS IMPORT WAS MISSING. IT INCLUDES BOX, VSTACK, ETC.
//
import { Box, VStack, Heading, Link, Text } from '@chakra-ui/react';
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

// Helper component for navigation links
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

// The main Sidebar component
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
      {/* Logo Area */}
      <VStack h="20" alignItems="flex-start" justify="center" mx="8">
        <Heading size="md" color="blue.600">
          بوكس ستور
        </Heading>
        <Text fontSize="sm">متجر بوكسي</Text>
      </VStack>

      {/* Navigation Links */}
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
        <NavItem icon={RiGroupLine} to="#">
          الزبائن
        </NavItem>
        <NavItem icon={RiCoupon3Line} to="#">
          كوبونات الخصم
        </NavItem>
        <NavItem icon={RiFileList2Line} to="#">
          ادارة البنرات
        </NavItem>
        <NavItem icon={RiSettings3Line} to="#">
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