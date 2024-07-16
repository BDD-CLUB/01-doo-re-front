import { Text } from '@chakra-ui/react';

import ConfirmModal from '@/components/Modal/ConfirmModal';

import { MemberModalProps } from '../types';

const MandateTeamLeaderModal = ({ member, isOpen, teamId, teamName, onClose }: MemberModalProps) => {
  const handleMandateMemberClick = () => {
    // TODO: 팀장 권한 위임 api 연결
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀장 위임"
      confirmButtonText="위임"
      onConfirmButtonClick={handleMandateMemberClick}
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
