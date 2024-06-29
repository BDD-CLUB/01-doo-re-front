import ConfirmModal from '@/components/Modal/ConfirmModal';

import { MemberModalProps } from '../types';

const FiredMemberModal = ({ member, isOpen, onClose }: MemberModalProps) => {
  const handleFiredMemberClick = () => {
    // TODO: 멤버 퇴출 api 연결
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀원 퇴출"
      confirmButtonText="퇴출"
      onConfirmButtonClick={handleFiredMemberClick}
    >
      {member.name}을 퇴출하시겠습니까?
    </ConfirmModal>
  );
};

export default FiredMemberModal;
