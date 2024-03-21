'use client';

import { Box, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import size from '@/constants/size';

import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const [isDesktop] = useMediaQuery(`(min-width: ${size.lg})`);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      <Box
        pos="fixed"
        zIndex="99"
        w={!isDesktop && isOpen ? '100%' : '0'}
        h="100%"
        bg={!isDesktop && isOpen ? 'rgba(0,0,0,0.5)' : ''}
      >
        <Box pos="absolute" w={isOpen ? { base: '215px', lg: '230px', '2xl': '240px' } : '52px'}>
          <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
      <Box pos="sticky" top="0" left="0">
        <Box w={isDesktop && isOpen ? { base: '215px', lg: '230px', '2xl': '240px' } : '52px'} />
      </Box>
    </>
  );
};

export default Sidebar;
