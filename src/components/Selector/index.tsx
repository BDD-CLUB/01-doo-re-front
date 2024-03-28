'use client';

import { Menu, MenuButton, MenuItem, MenuList, Button, Text } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { SelectorProps } from './types';

const Selector = ({ placeholder, label }: SelectorProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState('0px');

  useEffect(() => {
    if (menuRef.current) {
      setMenuWidth(`${menuRef.current.offsetWidth}px`);
    }
  }, []);

  return (
    <Menu>
      <MenuButton
        ref={menuRef}
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
      <MenuList overflow="hidden" minW={menuWidth} bg="orange_light" borderColor="orange_light" borderRadius="3xl">
        {label.map((item) => (
          <MenuItem key={item} color="white" bg="orange_light" _hover={{ bg: 'orange_dark' }}>
            <Text textStyle="bold_md">{item}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Selector;
