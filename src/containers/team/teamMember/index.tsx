'use client';

import { Avatar, AvatarGroup, Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getTeamMembers } from '@/app/api/team';
import ParticipantMenu from '@/components/ParticipantMenu';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import { teamMember } from '@/mocks/teamMember';
import { Member } from '@/types';

import MandateMemberModal from './MandateMemberModal';
import RemoveTeamMemberModal from './RemoveTeamMemberModal';

const TeamMember = ({ teamId }: { teamId: number }) => {
  const [teamLeader, setTeamLeader] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
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

  const handleRemoveButtonClick = (member: Member) => {
    setModalMember(member);
    setFiredModalOpen(true);
  };

  const handleMandateLeaderButtonClick = (member: Member) => {
    setModalMember(member);
    setMandateModalOpen(true);
  };

  const handleModalCloseClick = () => {
    setMandateModalOpen(false);
    setFiredModalOpen(false);
    setIsHovering(false);
  };

  const members: Member[] = useGetFetchWithToken(getTeamMembers, [teamId]);

  useEffect(() => {
    if (members && members.length !== 0) {
      setTeamLeader(members[0]);
    }
    if (members && members.length > 1) {
      setTeamMembers(members.slice(1));
      /* TODO: mocks data 삭제 */
      setTeamMembers(teamMember);
    }
  }, [members]);

  return (
    <Box onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
      <ParticipantMenu
        gap="3"
        w="fit-content"
        ml="auto"
        leader={teamLeader}
        includeMembers={teamMembers}
        isOpen={isHovering}
        setIsOpen={setIsHovering}
        onRemove={handleRemoveButtonClick}
        onMandateLeader={handleMandateLeaderButtonClick}
      >
        <AvatarGroup max={useBreakpointValue({ base: 3, lg: 4 })} size="md">
          {teamMembers?.map((member) => {
            return <Avatar key={member.id} name={member.name} src={member.imageUrl} />;
          })}
        </AvatarGroup>
        <Box>팀원</Box>
      </ParticipantMenu>
      <RemoveTeamMemberModal
        member={modalMember}
        isOpen={firedModalOpen}
        teamId={teamId}
        onClose={handleModalCloseClick}
      />
      <MandateMemberModal
        member={modalMember}
        isOpen={mandateModalOpen}
        teamId={teamId}
        onClose={handleModalCloseClick}
      />
    </Box>
  );
};
export default TeamMember;
