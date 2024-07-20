import { Text } from '@chakra-ui/react';

import { mandateTeamLeader } from '@/app/api/team';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';

import { MemberModalProps } from '../types';

const MandateTeamLeaderModal = ({ member, isOpen, teamId, teamName, onClose }: MemberModalProps) => {
  const mandateLeader = useMutateWithToken(mandateTeamLeader);

  const handleMandateLeaderClick = () => {
    mandateLeader(teamId, member.id).then((res) => {
      if (!res.ok) {
        alert('팀장을 위임하는데 실패했습니다.');
      }
    });
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀장 위임"
      confirmButtonText="위임"
      onConfirmButtonClick={handleMandateLeaderClick}
    >
      <Text textStyle="bold_md" textAlign="center">
        {`"${member.name}"를 "${teamName}" 팀의 팀장으로`}
        <br />
        <Text display="inline" color="orange_dark">
          위임
        </Text>
        하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default MandateTeamLeaderModal;
