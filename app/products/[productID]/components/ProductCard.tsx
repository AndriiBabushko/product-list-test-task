'use client';

import { FC } from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useAppSelector } from '@redux/hooks';
import { selectProductById } from '@redux/selectors';
import { NoProductFound } from './NoProductFound';
import { isURL } from 'validator';

interface ProductCardProps {
  productID: number;
}

export const ProductCard: FC<ProductCardProps> = ({ productID }) => {
  const product = useAppSelector(selectProductById(productID));
  const mainBoxBG = useColorModeValue('white', 'gray.800');
  const commentBoxBG = useColorModeValue('gray.100', 'gray.700');
  const commentBoxColor = useColorModeValue('gray.800', 'white');

  if (!product) {
    return <NoProductFound />;
  }

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={mainBoxBG}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.imageUrl})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={
              isURL(product.imageUrl)
                ? product.imageUrl
                : 'https://via.placeholder.com/150?text=No+Image+Available'
            }
            alt={product.name}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {product.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {product.count}
            </Text>
            <Text fontWeight={800} fontSize={'xl'}>
              x{product.size.width}x{product.size.height}
            </Text>
            <Text fontWeight={800} fontSize={'xl'}>
              {product.weight}
            </Text>
          </Stack>
          <VStack align='start' mt='4'>
            {product.comments.length > 0 ? (
              <>
                {' '}
                <Text fontSize='lg' fontWeight='bold'>
                  Comments:
                </Text>
                {product.comments.map((comment) => (
                  <Box
                    key={comment.id}
                    p='2'
                    borderWidth='1px'
                    borderRadius='md'
                    width='100%'
                    bg={commentBoxBG}
                    color={commentBoxColor}
                    fontWeight='bold'
                    mt='2'
                  >
                    <Text>{comment.description}</Text>
                  </Box>
                ))}
              </>
            ) : (
              <Text fontSize='lg' fontWeight='bold'>
                No comments
              </Text>
            )}
          </VStack>
        </Stack>
      </Box>
    </Center>
  );
};
