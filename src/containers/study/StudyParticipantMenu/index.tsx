import { IconButton, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { patchStudyMandate } from '@/app/api/member';
import { deleteStudyMember, getStudyMembers, postStudyMember } from '@/app/api/study';
import { getTeamMembers } from '@/app/api/team';
import ParticipantMenu from '@/components/ParticipantMenu';
import { StudyParticipantMenuProps } from '@/containers/study/StudyParticipantMenu/types';
import { useGetFetchWithToken, useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import { Member } from '@/types';

const StudyParticipantMenu = ({ studyId, teamId, leaderId }: StudyParticipantMenuProps) => {
  const user = useGetUser();
  const [isOpen, setIsOpen] = useState(false);

  const studyMembersData = useGetFetchWithToken(getStudyMembers, [studyId], user);
  const teamMembersData = useGetFetchWithToken(getTeamMembers, [teamId], user);

  const studyMembers = studyMembersData?.data;
  const leader = studyMembers?.find((member: Member) => member.id === leaderId);
  const includeMembers = studyMembers?.filter((member: Member) => member.id !== leaderId);
  const excludeMembers = teamMembersData?.data?.filter(
    (member: Member) => !studyMembers?.find((m: Member) => m.id === member.id),
  );

  const addMember = useMutateWithToken(postStudyMember, user);
  const deleteMember = useMutateWithToken(deleteStudyMember, user);
  const mandateLeader = useMutateWithToken(patchStudyMandate, user);

  const handleAddMember = (member: Member) => {
    addMember(studyId, member.id);
  };

  const handleDeleteMember = (member: Member) => {
    deleteMember(studyId, member.id);
  };

  const handleMandateLeader = (member: Member) => {
    mandateLeader(studyId, member.id);
  };

  return (
    <ParticipantMenu
      gap="3"
      w="fit-content"
      ml="auto"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      leader={leader}
      includeMembers={includeMembers}
      excludeMembers={excludeMembers}
      onAdd={handleAddMember}
      onRemove={handleDeleteMember}
      onMandateLeader={handleMandateLeader}
    >
      <IconButton
        fontSize="16px"
        transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
        transition="all 0.2s"
        aria-label=""
        icon={<MdOutlineArrowForwardIos />}
        isRound
        size="icon_sm"
        variant="icon_orange"
      />
      <Text>관리</Text>
    </ParticipantMenu>
  );
};

export default StudyParticipantMenu;
