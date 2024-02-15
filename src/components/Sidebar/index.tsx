'use client';

import { Avatar, Button, Card, Flex, IconButton, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiBell, BiUser } from 'react-icons/bi';
import { BsPlus, BsGrid } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';

import sidebarData from '@/app/mocks/sidebar';

import SidebarIconButton from './Button/SidebarIconButton';
import Category from './Category';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex
      direction="column"
      gap="16"
      w={isOpen ? '72' : '20'}
      h="100vh"
      p="4"
      bg="green"
      transition="width 0.15s ease-in-out"
    >
      <Flex justify={isOpen ? 'space-between' : 'center'}>
        {isOpen && (
          // TODO - 추후 로고 대체
          <Button as="a" p="0" bg="transparent" _hover={{ bg: 'transparent' }} href="/">
            <Text color="white" fontSize="3xl" fontWeight="bold">
              DOO RE
            </Text>
          </Button>
        )}
        <IconButton
          color="white"
          fontSize="3xl"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          aria-label=""
          icon={<BsGrid />}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </Flex>
      <Flex align="center" direction="column" gap="4">
        <Avatar size={isOpen ? 'lg' : 'md'} src="" />
        {isOpen && (
          <Text px="10" py="2" color="white" fontSize="2xl" fontWeight="bold" bg="green_dark" rounded="full">
            두레
          </Text>
        )}
        <Flex direction={isOpen ? 'row' : 'column'} gap="4">
          <SidebarIconButton icon={<BiBell />} onClick={() => {}} />
          <SidebarIconButton icon={<BiUser />} onClick={() => {}} />
          <SidebarIconButton icon={<MdOutlineLogout />} onClick={() => {}} />
        </Flex>
      </Flex>

      {isOpen && (
        <Card direction="column" gap="4" h="100vh" p="4" bg="green_dark" rounded="2xl">
          <Flex align="center" justify="space-between">
            <Text color="white" fontSize="xl" fontWeight="bold">
              TEAM & STUDY
            </Text>
            <IconButton color="black" bg="white" aria-label="" icon={<BsPlus />} size="icon_sm" />
          </Flex>
          {sidebarData.map((item) => (
            <Category key={item.id} id={item.id} name={item.name} subCategory={item.studyList} />
          ))}
        </Card>
      )}
    </Flex>
  );
};
export default Sidebar;
