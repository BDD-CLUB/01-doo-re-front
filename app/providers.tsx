"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  );
}
