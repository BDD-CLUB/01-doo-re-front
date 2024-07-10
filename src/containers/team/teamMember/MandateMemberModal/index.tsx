import ConfirmModal from '@/components/Modal/ConfirmModal';

import { MemberModalProps } from '../types';

const MandateMemberModal = ({ member, isOpen, onClose }: MemberModalProps) => {
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
      {member.name}에게 팀장을 위임하겠습니까?
    </ConfirmModal>
  );
};

export default MandateMemberModal;
