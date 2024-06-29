'use client';

import { Avatar, AvatarGroup, Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiCrown, BiUserX } from 'react-icons/bi';

import { teamMember } from '@/mocks/teamMember';
import { Member } from '@/types';

import FiredMemberModal from './FiredMemberModal';
import MandateMemberModal from './MandateMemberModal';

const TeamMember = ({ teamId }: { teamId: number }) => {
  const [mandateModalOpen, setMandateModalOpen] = useState<boolean>(false);
  const [firedModalOpen, setFiredModalOpen] = useState<boolean>(false);
  const [modalMember, setModalMember] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleFiredButtonClick = (member: Member) => {
    setModalMember(member);
    setFiredModalOpen(true);
  };

  const handleMandateButtonClick = (member: Member) => {
    setModalMember(member);
    setMandateModalOpen(true);
  };

  const handleModalCloseClick = () => {
    setMandateModalOpen(false);
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
        <Box pos="absolute" zIndex="40" right="0" w="220px" h="400px">
          <Box w="100%" h="100%" mt="2" p="4" pr="1" bg="white" borderRadius="xl" shadow="md">
            <Box overflow="scroll" w="100%" h="100%">
              {teamMember.map((member) => {
                return (
                  <Flex align="center" justify="space-between" gap="2" p="2">
                    <Box>
                      <Avatar key={member.id} mr="2" name={member.name} size="sm" src={member.imageUrl} />
                      {member.name}
                    </Box>
                    {/* TODO: 팀장만 버튼 보이게 수정 */}
                    <Box>
                      <IconButton
                        fontSize="20px"
                        aria-label=""
                        icon={<BiCrown />}
                        isRound
                        onClick={() => {
                          handleMandateButtonClick(member);
                        }}
                        size="icon_md"
                        variant="icon_orange"
                      />
                      <IconButton
                        fontSize="20px"
                        aria-label=""
                        icon={<BiUserX />}
                        isRound
                        onClick={() => {
                          handleFiredButtonClick(member);
                        }}
                        size="icon_md"
                        variant="icon_white"
                      />
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      <FiredMemberModal member={modalMember} isOpen={firedModalOpen} onClose={handleModalCloseClick} />
      <MandateMemberModal member={modalMember} isOpen={mandateModalOpen} onClose={handleModalCloseClick} />
    </Box>
  );
};
export default TeamMember;
