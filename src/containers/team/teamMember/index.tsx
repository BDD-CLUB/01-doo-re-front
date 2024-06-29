'use client';

import { Avatar, AvatarGroup, Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiUserX } from 'react-icons/bi';

import ConfirmModal from '@/components/Modal/ConfirmModal';
import { teamMember } from '@/mocks/teamMember';
import { Member } from '@/types';

const TeamMember = ({ teamId }: { teamId: number }) => {
  const [firedModalOpen, setFiredModalOpen] = useState<boolean>(false);
  const [firedMember, setFiredMember] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleFiredButtonClick = (member: Member) => {
    setFiredMember(member);
    setFiredModalOpen(true);
  };

  const handleFiredMemberClick = () => {
    // TODO: 팀원 퇴출 api 연결
    setFiredModalOpen(false);
    setIsHovering(false);
  };

  const handleModalCloseClick = () => {
    setFiredModalOpen(false);
    setIsHovering(false);
  };

  useEffect(() => {
    // TODO: 팀원 목록 불러오기
  }, [teamId]);

  return (
    <Box pos="relative" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
      <AvatarGroup max={useBreakpointValue({ base: 3, lg: 4 })} size="md">
        {teamMember.map((member) => {
          return <Avatar key={member.id} name={member.name} src={member.imageUrl} />;
        })}
      </AvatarGroup>
      {isHovering && (
        <Box pos="absolute" zIndex="40" right="0" w="200px" h="400px">
          <Box w="100%" h="400px" mt="2" p="4" pr="1" bg="white" borderRadius="xl" shadow="md">
            <Box overflow="scroll" w="100%" h="100%">
              {teamMember.map((member) => {
                return (
                  <Flex align="center" justify="space-between" gap="2" p="2" pr="6">
                    <Box>
                      <Avatar key={member.id} mr="2" name={member.name} size="sm" src={member.imageUrl} />
                      {member.name}
                    </Box>
                    {/* TODO: 팀장만 버튼 보이게 수정 */}
                    <IconButton
                      w="fit-content"
                      fontSize="16px"
                      aria-label=""
                      icon={<BiUserX />}
                      isRound
                      onClick={() => {
                        handleFiredButtonClick(member);
                      }}
                      size="icon_md"
                      variant="icon_white"
                    />
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      <ConfirmModal
        isOpen={firedModalOpen}
        onClose={handleModalCloseClick}
        title="팀원 퇴출"
        confirmButtonText="퇴출"
        onConfirmButtonClick={handleFiredMemberClick}
      >
        정말 {firedMember.name}을 퇴출하시겠습니까?
      </ConfirmModal>
    </Box>
  );
};
export default TeamMember;
