import { Text } from '@chakra-ui/react';

import ConfirmModal from '@/components/Modal/ConfirmModal';

import { MemberModalProps } from '../types';

const RemoveTeamMemberModal = ({ member, isOpen, teamId, teamName, onClose }: MemberModalProps) => {
  const handleFiredMemberClick = () => {
    // TODO: 멤버 퇴출 api 연결
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀원 삭제"
      confirmButtonText="삭제"
      onConfirmButtonClick={handleFiredMemberClick}
    >
      <Text textStyle="bold_md" textAlign="center">
        {`"${member.name}"를 "${teamName}" 팀에서`}
        <br />
        <Text display="inline" color="orange_dark">
          삭제
        </Text>
        하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default RemoveTeamMemberModal;
