'use client';

import { Avatar, AvatarGroup, Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getTeamMembers } from '@/app/api/team';
import ParticipantMenu from '@/components/ParticipantMenu';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import { teamMember } from '@/mocks/teamMember';
import { Member } from '@/types';

import MandateTeamLeaderModal from './MandateTeamLeaderModal';
import RemoveTeamMemberModal from './RemoveTeamMemberModal';

const TeamMember = ({ teamId, teamName }: { teamId: number; teamName: string }) => {
  const [teamLeader, setTeamLeader] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
  const [mandateModalOpen, setMandateModalOpen] = useState<boolean>(false);
  const [firedModalOpen, setFiredModalOpen] = useState<boolean>(false);
  const [modalMember, setModalMember] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    setIsOpen(false);
  };

  const members: Member[] = useGetFetchWithToken(getTeamMembers, [teamId]);

  useEffect(() => {
    if (members && members.length !== 0) {
      setTeamLeader(members[0]);
    }
    if (members && members.length > 1) {
      setTeamMembers(members.slice(1));
    }
    /* TODO: mocks data 삭제 */
    setTeamLeader(teamMember[0]);
    setTeamMembers(teamMember);
  }, [members]);

  return (
    <Box
      onMouseOut={() => {
        setIsOpen(false);
      }}
      onMouseOver={() => {
        setIsOpen(true);
      }}
    >
      <ParticipantMenu
        gap="3"
        w="fit-content"
        ml="auto"
        leader={teamLeader}
        includeMembers={teamMembers}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={handleRemoveButtonClick}
        onMandateLeader={handleMandateLeaderButtonClick}
      >
        <AvatarGroup max={useBreakpointValue({ base: 3, lg: 4 })} size="md">
          {teamMembers?.map((member) => {
            return <Avatar key={member.id} name={member.name} src={member.imageUrl} />;
          })}
        </AvatarGroup>
      </ParticipantMenu>
      <RemoveTeamMemberModal
        member={modalMember}
        isOpen={firedModalOpen}
        teamId={teamId}
        teamName={teamName}
        onClose={handleModalCloseClick}
      />
      <MandateTeamLeaderModal
        member={modalMember}
        isOpen={mandateModalOpen}
        teamId={teamId}
        teamName={teamName}
        onClose={handleModalCloseClick}
      />
    </Box>
  );
};
export default TeamMember;
