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
import { studyMember } from '@/mocks/studyMember';
import { teamMember } from '@/mocks/teamMember';
import { Member } from '@/types';

const ParticipantMenu = ({ studyId, teamId, leaderId }: ParticipantMenuProps) => {
  const user = useGetUser();
  const [search, setSearch] = useState('');
  // const studyMembersData = useGetFetchWithToken(getStudyMembers, [studyId], user);
  // const teamMembersData = useGetFetchWithToken(getTeamMembers, [teamId], user);
  const studyMembersData = {
    data: studyMember,
  };

  const teamMembersData = {
    data: teamMember,
  };

  const studyMembers = studyMembersData?.data?.filter((member: Member) => !search || member.name.includes(search));
  const leader = studyMembers?.find((member: Member) => member.id === leaderId);
  const nonLeaderStudyMembers = studyMembers?.filter((member: Member) => member.id !== leaderId);
  const nonStudyMembers = teamMembersData?.data
    ?.filter((member: Member) => !studyMembers?.find((m) => m.id === member.id))
    .filter((member: Member) => !search || member.name.includes(search));

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
            <Input
              color="black"
              fontSize="16px"
              bg="transparent"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Flex as={BiSearch} my="auto" mr="1" color="#6c6c6c" size="26px" />
          </Flex>
          <Flex className="scroll" direction="column" gap="2" overflowY="scroll" h="full">
            {leader && <ParticipantItem key={leader.id} member={leader} studyId={studyId} type="스터디장" />}
            {nonLeaderStudyMembers.map((member: Member) => (
              <ParticipantItem key={member.id} member={member} studyId={studyId} type="스터디원" />
            ))}
            <Divider />
            {nonStudyMembers.map((member: Member) => (
              <ParticipantItem key={member.id} member={member} studyId={studyId} type="팀원" />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ParticipantMenu;
