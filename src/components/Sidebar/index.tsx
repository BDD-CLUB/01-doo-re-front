'use client';

import { Box, useMediaQuery, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return isDesktop || !isOpen ? (
    <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
  ) : (
    <>
      <Box pos="fixed" zIndex="99" w="100%" h="100%" bg="rgba(0,0,0,0.5)">
        <Box pos="absolute" top="0" left="0">
          <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
      <Flex pos="sticky" top="0" left="0">
        <Box w="50px" />
      </Flex>
    </>
  );
};
export default Sidebar;
