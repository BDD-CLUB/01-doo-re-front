'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider, createStore } from 'jotai';

import theme from '@/theme';

const store = createStore();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
};

export default Providers;
