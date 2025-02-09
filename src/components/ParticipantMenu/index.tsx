/* eslint-disable react/jsx-props-no-spreading */
import { Divider, Flex, Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import ParticipantItem from '@/components/ParticipantMenu/ParticipantItem';
import { ParticipantMenuProps } from '@/components/ParticipantMenu/types';
import useGetUser from '@/hooks/useGetUser';
import { Member } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultFunction = (member: Member) => {};

const ParticipantMenu = ({
  leader,
  includeMembers = [],
  excludeMembers = [],
  children,
  isOpen,
  isTeamLeader,
  category,
  setIsOpen,
  onRemove = defaultFunction,
  onAdd = defaultFunction,
  onMandateLeader = defaultFunction,
  ...flexProps
}: ParticipantMenuProps) => {
  const [search, setSearch] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const user = useGetUser();

  const searchedLeader = leader?.name.includes(search) ? leader : null;
  const searchedIncludeMember = includeMembers.filter((member) => member.name.includes(search));
  const searchedExcludeMember = excludeMembers.filter((member) => member.name.includes(search));
  const isLeader = user?.memberId === leader?.id;

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isOpen && !menuRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen, setIsOpen]);

  return (
    <Flex pos="relative">
      <Flex
        {...flexProps}
        pos="relative"
        cursor="pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {children}
      </Flex>
      <Flex pos="absolute" zIndex="25" top="9" right="0" hidden={!isOpen}>
        <Flex
          ref={menuRef}
          direction="column"
          gap="2"
          w="230px"
          maxH="30vh"
          p="4"
          bg="white"
          borderRadius="16"
          shadow="md"
        >
          <Flex alignContent="center" justify="center" borderWidth="1px" borderColor="#6c6c6c" borderRadius="full">
            <Input
              color="black"
              fontSize="16px"
              bg="transparent"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Flex as={BiSearch} my="auto" mr="1" color="#6c6c6c" size="26px" />
          </Flex>
          <Flex className="scroll" direction="column" gap="2" overflowY="scroll" h="full" m="2">
            {searchedLeader && (
              <ParticipantItem
                key={searchedLeader.id}
                member={searchedLeader}
                type="LEADER"
                isLeader={isLeader}
                isTeamLeader={isTeamLeader}
                category={category}
                onRemove={onRemove}
                onAdd={onAdd}
                onMandateLeader={onMandateLeader}
              />
            )}
            {searchedIncludeMember.map((member: Member) => (
              <ParticipantItem
                key={member.id}
                member={member}
                type="INCLUDE"
                isLeader={isLeader}
                isTeamLeader={isTeamLeader}
                category={category}
                onRemove={onRemove}
                onAdd={onAdd}
                onMandateLeader={onMandateLeader}
              />
            ))}
            {(isLeader || !isTeamLeader) && searchedExcludeMember?.length > 0 && (
              <>
                <Divider />
                {searchedExcludeMember.map((member: Member) => (
                  <ParticipantItem
                    key={member.id}
                    member={member}
                    type="EXCLUDE"
                    isLeader={isLeader}
                    category={category}
                    onRemove={onRemove}
                    onAdd={onAdd}
                    onMandateLeader={onMandateLeader}
                  />
                ))}
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ParticipantMenu;
