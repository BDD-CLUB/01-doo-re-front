'use client';

import { Avatar, Button, Card, Flex, IconButton, Text } from '@chakra-ui/react';
import { BiBell, BiUser } from 'react-icons/bi';
import { BsPlus, BsGrid } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';

import sidebarData from '@/mocks/sidebar';

import SidebarIconButton from '../Button/SidebarIconButton';
import Category from '../Category';
import { SidebarContentProps } from '../type';

const SidebarContent = ({ isOpen, setIsOpen }: SidebarContentProps) => {
  return (
    <Flex pos="sticky" top="0" left="0" direction="column" gap="16" h="100vh" px={isOpen ? '4' : '2'} py="4" bg="green">
      <Flex justify={isOpen ? 'space-between' : 'center'}>
        {isOpen && (
          // TODO - 추후 로고 대체
          <Button as="a" p="0" bg="transparent" _hover={{ bg: 'transparent' }} href="/">
            <Text textStyle="bold_3xl" color="white">
              DOO RE
            </Text>
          </Button>
        )}
        <IconButton
          minW="0"
          color="white"
          fontSize={{
            base: '28px',
            lg: '32px',
            '2xl': '36px',
          }}
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          aria-label=""
          icon={<BsGrid />}
          onClick={() => setIsOpen((prev: boolean) => !prev)}
        />
      </Flex>
      <Flex align="center" direction="column" gap="4">
        <Avatar size={isOpen ? 'lg' : 'md'} src="" />
        {isOpen && (
          <Text textStyle="bold_2xl" px="10" py="1" color="white" bg="green_dark" rounded="full">
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
        <Card direction="column" gap="4" h="100%" p="4" bg="green_dark" rounded="2xl">
          <Flex align="center" justify="space-between" gap="2">
            <Text textStyle="bold_xl" color="white" whiteSpace="nowrap">
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
export default SidebarContent;
