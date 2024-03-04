'use client';

import { Flex, Button, Td, Tr } from '@chakra-ui/react';
import { MouseEvent, FC, useState } from 'react';
import Image from 'next/image';
import { isURL } from 'validator';
import { MyModal } from '@components/common';
import { ProductForm } from '@components/ui';
import { DeleteProduct } from './DeleleProduct';
import { useRouter } from 'next/navigation';

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const router = useRouter();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleProductClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <>
      <Tr onClick={handleProductClick}>
        <Td>
          <Image
            src={
              isURL(product.imageUrl)
                ? product.imageUrl
                : 'https://via.placeholder.com/150?text=No+Image+Available'
            }
            alt={product.name}
            width={200}
            height={200}
          />
        </Td>
        <Td>{product.name}</Td>
        <Td>{product.count}</Td>
        <Td>
          {product.size.width}x{product.size.height}
        </Td>
        <Td>{product.weight}</Td>
        <Td>
          <Flex>
            <Button colorScheme='blue' mr={2} onClick={openEditModal}>
              Edit Order
            </Button>
            <Button colorScheme='red' onClick={openDeleteModal}>
              Delete Order
            </Button>
          </Flex>
        </Td>
      </Tr>
      <MyModal
        modalTitle={'Edit product'}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      >
        <ProductForm
          type={'edit'}
          product={product}
          onCloseModal={closeEditModal}
        />
      </MyModal>
      <MyModal
        modalTitle={'Delete product'}
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
      >
        <DeleteProduct productID={product.id} onCancel={closeDeleteModal} />
      </MyModal>
    </>
  );
};
