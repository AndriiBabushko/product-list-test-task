'use client';

import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { ProductItem } from './ProductItem';

interface ProductsListProps {
  products: IProduct[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Count</Th>
            <Th>Size</Th>
            <Th>Weight</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
