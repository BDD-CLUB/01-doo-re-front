'use client';

import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BiBell, BiUser } from 'react-icons/bi';
import { BsPlus, BsGrid } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';

import { getSidebarInfo } from '@/app/api/member';
import { myTeamAtom } from '@/atom';
import TeamModal from '@/containers/team/TeamModal';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';

import SidebarIconButton from '../Button/SidebarIconButton';
import Category from '../Category';
import { SidebarContentProps, SidebarTeam } from '../type';

const SidebarContent = ({ isOpen, setIsOpen }: SidebarContentProps) => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const user = useGetUser();
  const sidebarInfo = useGetFetchWithToken(getSidebarInfo, [user?.memberId], user);
  const setMyTeam = useSetAtom(myTeamAtom);

  useEffect(() => {
    const teams = sidebarInfo?.myTeamsAndStudies.map((team: SidebarTeam) => team.teamId);
    setMyTeam({ teams });
  }, [sidebarInfo, setMyTeam]);

  return (
    <>
      <Flex pos="sticky" top="0" left="0" direction="column" h="100vh" px={isOpen ? '4' : '2'} py="4" bg="green">
        <Flex justify={isOpen ? 'space-between' : 'center'} mb="16">
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
        <Flex align="center" direction="column" gap="4" mb="16">
          <Avatar size={isOpen ? 'lg' : 'md'} src={sidebarInfo?.imageUrl} />
          {isOpen && (
            <Text textStyle="bold_2xl" px="10" py="1" color="white" bg="green_dark" rounded="full">
              {user?.isLogin ? sidebarInfo?.name : '비회원'}
            </Text>
          )}
          <Flex direction={isOpen ? 'row' : 'column'} gap="4">
            <SidebarIconButton icon={<BiBell />} onClick={() => {}} />
            <SidebarIconButton icon={<BiUser />} onClick={() => {}} />
            <SidebarIconButton icon={<MdOutlineLogout />} onClick={() => {}} />
          </Flex>
        </Flex>
        {isOpen && user?.isLogin && (
          <>
            <Flex direction="column" p="4" bg="green_dark" roundedTop="2xl">
              <Flex align="center" justify="space-between" gap="2">
                <Text textStyle="bold_xl" color="white" whiteSpace="nowrap">
                  TEAM & STUDY
                </Text>
                <IconButton
                  color="black"
                  bg="white"
                  aria-label=""
                  icon={<BsPlus />}
                  onClick={() => setIsTeamModalOpen(true)}
                  size="icon_sm"
                />
              </Flex>
            </Flex>
            <Flex
              className="scroll_hide"
              direction="column"
              gap="4"
              overflowY="scroll"
              h="100%"
              p="4"
              bg="green_dark"
              roundedBottom="2xl"
            >
              {sidebarInfo?.myTeamsAndStudies?.map((team: SidebarTeam) => (
                <Category
                  key={`team-${team.teamId}`}
                  id={team.teamId}
                  name={team.teamName}
                  subCategory={team.teamStudies}
                />
              ))}
            </Flex>
          </>
        )}
      </Flex>
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
    </>
  );
};
export default SidebarContent;
