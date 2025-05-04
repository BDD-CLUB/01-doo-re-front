import { Flex } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex w="100%" h="100%" bg="gray.50">
      {children}
    </Flex>
  );
};

export default Layout;
