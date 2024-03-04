'use server';

import { Center, Box, Heading, Text } from '@chakra-ui/react';

export default async function Home() {
  return (
    <Center h='100vh'>
      <Box p={4} textAlign='center'>
        <Heading as='h1' mb={4}>
          Welcome to Product list!
        </Heading>
        <Text>
          This is a project created using Next.js, Redux Toolkit and Chakra UI.
        </Text>
      </Box>
    </Center>
  );
}
