import { Flex } from '@chakra-ui/react';

import Sidebar from '@/components/Sidebar';

import fonts from './fonts';
import Providers from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Flex minH="100vh">
            <Sidebar />
            <Flex flex="1">{children}</Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
