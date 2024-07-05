'use client';

import { Divider, Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { getStudyMembers } from '@/app/api/study';
import { getTeamMembers } from '@/app/api/team';
import ParticipantItem from '@/containers/study/ParticipantMenu/ParticipantItem';
import { ParticipantMenuProps } from '@/containers/study/ParticipantMenu/type';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import participantData from '@/mocks/participant';

const ParticipantMenu = ({ studyId, teamId }: ParticipantMenuProps) => {
  const user = useGetUser();
  const studyMembersa = useGetFetchWithToken(getStudyMembers, [studyId], user);
  const teamMembersa = useGetFetchWithToken(getTeamMembers, [teamId], user);

  const members = participantData;
  const leader = members.find((member) => member.status === '스터디장')!;
  const studyMembers = members.filter((member) => member.status !== '스터디장' && member.status !== '');
  const nonStudyMembers = members.filter((member) => member.status === '');

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isOpen && !menuRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen]);

  return (
    <Flex pos="relative">
      <Flex
        pos="relative"
        gap="3"
        w="fit-content"
        ml="auto"
        cursor="pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <IconButton
          fontSize="16px"
          transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
          transition="all 0.2s"
          aria-label=""
          icon={<MdOutlineArrowForwardIos />}
          isRound
          onClick={onClose}
          size="icon_sm"
          variant="icon_orange"
        />
        <Text>관리</Text>
      </Flex>
      <Flex pos="absolute" zIndex="10" top="9" right="0" hidden={!isOpen}>
        <Flex ref={menuRef} direction="column" gap="2" maxH="30vh" p="4" bg="white" borderRadius="16" shadow="md">
          <Flex
            alignContent="center"
            justify="center"
            w="full"
            borderWidth="1px"
            borderColor="#6c6c6c"
            borderRadius="full"
          >
            <Input color="black" fontSize="16px" bg="transparent" />
            <Flex as={BiSearch} my="auto" mr="1" color="#6c6c6c" size="26px" />
          </Flex>
          <Flex direction="column" gap="2" overflowY="scroll" h="full">
            <ParticipantItem key={leader.id} member={leader} studyId={studyId} />
            {studyMembers.map((member) => (
              <ParticipantItem key={member.id} member={member} studyId={studyId} />
            ))}
            <Divider />
            {nonStudyMembers.map((member) => (
              <ParticipantItem key={member.id} member={member} studyId={studyId} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ParticipantMenu;
