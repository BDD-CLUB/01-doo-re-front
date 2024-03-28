'use client';

import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Text } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { SelectorProps } from './types';

const Selector = ({ placeholder, label }: SelectorProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState('0px');

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidth(`${boxRef.current.offsetWidth}px`);
    }
  }, []);

  return (
    <Box ref={boxRef} w="100%">
      <Menu>
        <MenuButton
          as={Button}
          w="100%"
          color="white"
          textAlign="left"
          bg="orange_light"
          _hover={{ bg: 'orange_light' }}
          _active={{ bg: 'orange_light' }}
          _focus={{ bg: 'orange_light' }}
          rightIcon={<BiChevronDown />}
        >
          <Text textStyle="bold_md">{placeholder}</Text>
        </MenuButton>
        <MenuList minW={boxWidth} bg="orange_light" borderColor="orange_light" borderRadius="xl">
          {label.map((item) => (
            <MenuItem key={item} color="white" bg="orange_light" _hover={{ bg: 'orange_dark' }}>
              <Text textStyle="bold_md">{item}</Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Selector;
