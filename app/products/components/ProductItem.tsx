'use client';

import { Button, Td, Tr } from '@chakra-ui/react';
import { FC } from 'react';
import Image from 'next/image';

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const handleEditOrder = () => {
    // Handle edit order logic here
  };

  const handleDeleteOrder = () => {
    // Handle delete order logic here
  };

  return (
    <Tr>
      <Td>
        <Image
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '50px', height: '50px' }}
        />
      </Td>
      <Td>{product.name}</Td>
      <Td>{product.count}</Td>
      <Td>
        {product.size.width}x{product.size.height}
      </Td>
      <Td>{product.weight}</Td>
      <Td>
        <Button colorScheme='blue' mr={2} onClick={handleEditOrder}>
          Edit Order
        </Button>
        <Button colorScheme='red' onClick={handleDeleteOrder}>
          Delete Order
        </Button>
      </Td>
    </Tr>
  );
};
