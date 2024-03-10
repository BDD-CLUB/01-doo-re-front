import { Box } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box w="100%" bg="gray.50">
      {children}
    </Box>
  );
};

export default Layout;
