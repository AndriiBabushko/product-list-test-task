'use client';

import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const NoProducts: FC = () => {
  return (
    <Box textAlign='center' p={4}>
      <Text fontSize='xl'>No products available</Text>
      <Text>Please add some products to view them here.</Text>
    </Box>
  );
};
