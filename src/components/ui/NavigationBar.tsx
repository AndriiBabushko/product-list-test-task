'use client';

import { Box, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ROUTES } from '@utils/routes';
import { usePathname } from 'next/navigation';

export const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <Flex
      bg='blue.500'
      p={4}
      justifyContent='space-between'
      alignItems='center'
    >
      <Box>
        <NextLink href={ROUTES.HOME} passHref>
          <Link color={pathname === ROUTES.HOME ? 'white' : 'gray.400'} mr={4}>
            Home
          </Link>
        </NextLink>
        <NextLink href={ROUTES.PRODUCTS} passHref>
          <Link color={pathname === ROUTES.PRODUCTS ? 'white' : 'gray.400'}>
            Products
          </Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
