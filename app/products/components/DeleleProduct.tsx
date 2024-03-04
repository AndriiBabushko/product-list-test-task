import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useAppDispatch } from '@redux/hooks';
import { deleteProduct } from '@redux/reducers/productSlice';

interface DeleteProductProps {
  productID: number;
  onCancel: () => void;
}

export const DeleteProduct: FC<DeleteProductProps> = ({
  productID,
  onCancel,
}) => {
  const dispatch = useAppDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDeleteProduct = () => {
    setIsSubmitting(true);
    dispatch(deleteProduct(productID));
    setIsSubmitting(false);
  };

  return (
    <VStack spacing={4} align='center'>
      <Text>Are you sure you want to delete this product?</Text>
      <Flex width={'100%'} justifyContent={'space-evenly'}>
        <Button colorScheme='red' onClick={onDeleteProduct}>
          Delete
        </Button>
        <Button
          colorScheme='gray'
          onClick={onCancel}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </Flex>
    </VStack>
  );
};
