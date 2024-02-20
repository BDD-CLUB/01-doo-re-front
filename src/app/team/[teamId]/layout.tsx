import { Flex } from '@chakra-ui/react';

import size from '@/constants/size';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex justify="center" w="100%" bg="gray.50">
      <Flex w={`calc(100vw - ${size.sidebarWidth})`}>{children}</Flex>
    </Flex>
  );
};

export default Layout;
