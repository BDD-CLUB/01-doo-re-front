import { Flex, Box } from '@chakra-ui/react';

import Sidebar from '@/components/Sidebar';

import fonts from './fonts';
import Providers from './providers';

import '@/style.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Flex w="100vw" maxW="100vw" minH="100vh">
            <Sidebar />
            <Box flex="1">{children}</Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
