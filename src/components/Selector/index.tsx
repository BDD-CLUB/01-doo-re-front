'use client';

import { Menu, MenuButton, MenuItem, MenuList, Button, Text } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

import { SelectorProps } from './types';

const Selector = ({ selected, label, handleSelector }: SelectorProps) => {
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
        rightIcon={<BiChevronDown size="28px" />}
      >
        <Text textStyle="bold_md">{selected}</Text>
      </MenuButton>
      <MenuList
        overflow="hidden"
        minW={menuWidth}
        p="0"
        bg="orange_light"
        borderColor="orange_light"
        borderRadius="3xl"
      >
        {label.map((item, index) => (
          <MenuItem
            key={item}
            pl="15"
            color="white"
            bg="orange_light"
            _hover={{ bg: 'orange_dark' }}
            onClick={() => handleSelector(item)}
            value={index}
          >
            <Text textStyle="bold_md">{item}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Selector;
