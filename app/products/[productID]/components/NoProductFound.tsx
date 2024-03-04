import { FC } from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

export const NoProductFound: FC = () => {
  return (
    <Center height='100vh'>
      <Box
        p='4'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='md'
      >
        <Text
          fontSize='xl'
          fontWeight='bold'
          textAlign='center'
          color='gray.600'
        >
          No product found
        </Text>
      </Box>
    </Center>
  );
};
