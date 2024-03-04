'use client';

import { Button, Container, Flex, Heading } from '@chakra-ui/react';
import { NoProducts } from './NoProducts';
import { ProductsList } from './ProductsList';
import { MyModal } from '@components/common';
import { useState } from 'react';
import { useAppSelector } from '@redux/hooks';
import { sortedProductsSelector } from '@redux/selectors';
import { ProductForm } from '@components/ui';

export const ProductsContent = () => {
  const products = useAppSelector(sortedProductsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW='container.md' p={4}>
      <Flex justify='space-between' align='center' mb={4}>
        <Heading as='h1' size='lg'>
          Products
        </Heading>
        <Button colorScheme='blue' onClick={openModal}>
          Add Product
        </Button>
      </Flex>
      {products.length === 0 ? (
        <NoProducts />
      ) : (
        <ProductsList products={products} />
      )}
      <MyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalTitle={'Create product'}
      >
        <ProductForm type={'add'} onCloseModal={closeModal} />
      </MyModal>
    </Container>
  );
};
