import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout'; // <-- Corrected import

const MainDashboard = () => {
  return (
    <Box>
      <Heading mb="4">الصفحة الرئيسية</Heading>
      <Text>
        أهلاً بك في لوحة التحكم. من هنا يمكنك إدارة متجرك.
      </Text>
    </Box>
  );
};

export default MainDashboard;