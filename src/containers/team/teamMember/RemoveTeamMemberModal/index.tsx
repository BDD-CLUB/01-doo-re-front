import { Text } from '@chakra-ui/react';

import { deleteTeamMember } from '@/app/api/team';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';

import { MemberModalProps } from '../types';

const RemoveTeamMemberModal = ({ member, isOpen, teamId, teamName, onClose }: MemberModalProps) => {
  const deleteMember = useMutateWithToken(deleteTeamMember);

  const handleRemoveMemberClick = () => {
    deleteMember(teamId, member.id).then((res) => {
      if (!res.ok) {
        alert('팀원을 삭제하는데 실패했습니다.');
      }
    });
    onClose();
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀원 삭제"
      confirmButtonText="삭제"
      onConfirmButtonClick={handleRemoveMemberClick}
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
