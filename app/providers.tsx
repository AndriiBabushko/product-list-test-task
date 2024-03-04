'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { persistor, store } from '@redux/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigationBar } from '@components/ui';
import { useRouter } from 'next/router';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <NavigationBar />
          {children}
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
