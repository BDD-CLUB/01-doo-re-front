'use client';

import { Avatar, AvatarGroup, Box, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getTeamMembers } from '@/app/api/team';
import ParticipantMenu from '@/components/ParticipantMenu';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import { Member, TeamMemberDetail } from '@/types';

import MandateTeamLeaderModal from './MandateTeamLeaderModal';
import RemoveTeamMemberModal from './RemoveTeamMemberModal';

const TeamMember = ({ teamId, teamName }: { teamId: number; teamName: string }) => {
  const [teamLeader, setTeamLeader] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
  const [mandateModalOpen, setMandateModalOpen] = useState<boolean>(false);
  const [firedModalOpen, setFiredModalOpen] = useState<boolean>(false);
  const [modalMember, setModalMember] = useState<Member>({ id: -1, name: '', imageUrl: '' });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    result: members,
    refetch: memberRefetch,
  }: {
    result: TeamMemberDetail[];
    refetch: () => void;
  } = useGetFetchWithToken(getTeamMembers, [teamId]);

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
    memberRefetch();
  };

  useEffect(() => {
    const filteredLeader = members?.filter((member) => member.teamRole === 'ROLE_팀장')[0] ?? null;
    setTeamLeader(filteredLeader);

    const filteredTeamMembers = members?.filter((member) => member.teamRole === 'ROLE_팀원');
    setTeamMembers(filteredTeamMembers);
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
          {members?.map((member) => {
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
