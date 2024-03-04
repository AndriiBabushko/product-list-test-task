'use client';

import { FC, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {
  getProductSchema,
  PRODUCT_IDS,
  TProductSchema,
} from '@schemas/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { addProduct, editProduct } from '@redux/reducers/productSlice';
import { selectProducts } from '@redux/selectors';

interface EditProductFormProps {
  product?: IProduct;
  type: 'add' | 'edit';
  onCloseModal: () => void;
}

export const ProductForm: FC<EditProductFormProps> = ({
  product,
  type,
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  const { register, handleSubmit, formState, setError } =
    useForm<TProductSchema>({
      mode: 'onBlur',
      resolver: zodResolver(getProductSchema()),
      defaultValues: type === 'edit' ? product : undefined,
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: TProductSchema) => {
    setIsSubmitting(true);

    const isOrderIdExist = products.some(
      (prod) => prod.id === data.id && prod.id !== product?.id
    );

    if (isOrderIdExist) {
      setError(PRODUCT_IDS.PRODUCT_ID, {
        type: 'manual',
        message: 'Product ID already exists',
      });

      setIsSubmitting(false);

      return;
    }

    if (type === 'edit' && product)
      dispatch(
        editProduct({
          updatedProduct: { ...data, comments: [] },
          productId: product.id,
        })
      );
    if (type === 'add') dispatch(addProduct({ ...data, comments: [] }));

    setIsSubmitting(false);
    onCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_ID]}>
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_ID}>Product ID</FormLabel>
          <Input
            {...register(PRODUCT_IDS.PRODUCT_ID, { valueAsNumber: true })}
            id={PRODUCT_IDS.PRODUCT_ID}
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_IMAGE_ID]}
        >
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_IMAGE_ID}>
            Product Image URL
          </FormLabel>
          <Input
            {...register(PRODUCT_IDS.PRODUCT_IMAGE_ID)}
            id={PRODUCT_IDS.PRODUCT_IMAGE_ID}
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_IMAGE_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_NAME_ID]}
        >
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_NAME_ID}>
            Product Name
          </FormLabel>
          <Input
            {...register(PRODUCT_IDS.PRODUCT_NAME_ID)}
            id={PRODUCT_IDS.PRODUCT_NAME_ID}
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_NAME_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_COUNT_ID]}
        >
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_COUNT_ID}>
            Product Count
          </FormLabel>
          <Input
            type='number'
            {...register(PRODUCT_IDS.PRODUCT_COUNT_ID, { valueAsNumber: true })}
            id={PRODUCT_IDS.PRODUCT_COUNT_ID}
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_COUNT_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_SIZE_ID]}
        >
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_SIZE_ID}>
            Product Size
          </FormLabel>
          <Input
            type='number'
            {...register(`${PRODUCT_IDS.PRODUCT_SIZE_ID}.width`, {
              valueAsNumber: true,
            })}
            placeholder='Width'
          />
          <Input
            type='number'
            {...register(`${PRODUCT_IDS.PRODUCT_SIZE_ID}.height`, {
              valueAsNumber: true,
            })}
            placeholder='Height'
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_SIZE_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!formState.errors[PRODUCT_IDS.PRODUCT_WEIGHT_ID]}
        >
          <FormLabel htmlFor={PRODUCT_IDS.PRODUCT_WEIGHT_ID}>
            Product Weight
          </FormLabel>
          <Input
            {...register(PRODUCT_IDS.PRODUCT_WEIGHT_ID)}
            id={PRODUCT_IDS.PRODUCT_WEIGHT_ID}
          />
          <FormErrorMessage>
            {formState.errors[PRODUCT_IDS.PRODUCT_WEIGHT_ID]?.message}
          </FormErrorMessage>
        </FormControl>

        <Flex width={'100%'} justifyContent={'space-evenly'}>
          <Button
            type='submit'
            colorScheme='blue'
            isLoading={isSubmitting}
            disabled={Object.keys(formState.errors).length > 0 || isSubmitting}
          >
            Submit
          </Button>
          <Button colorScheme='gray' mr={3} onClick={onCloseModal}>
            Cancel
          </Button>
        </Flex>
      </VStack>
    </form>
  );
};
