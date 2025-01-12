import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { deleteTeam as deleteTeamApi, leaveTeam as leaveTeamApi } from '@/app/api/team';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { TeamActionModalProps } from '../type';

const TeamActionModal = ({ id, name, isOpen, onClose, actionType }: TeamActionModalProps) => {
  const deleteTeam = useMutateWithToken(deleteTeamApi);
  const leaveTeam = useMutateWithToken(leaveTeamApi);
  const refetchSidebar = useRefetchSideBar();
  const router = useRouter();

  const action = actionType === 'delete' ? deleteTeam : leaveTeam;

  const handleActionButtonClick = () => {
    action(id).then(() => {
      refetchSidebar();
      onClose();
      router.replace('/');
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title={actionType === 'delete' ? '팀 삭제' : '팀 탈퇴'}
      confirmButtonText={actionType === 'delete' ? '삭제' : '탈퇴'}
      onConfirmButtonClick={() => handleActionButtonClick()}
    >
      <Text align="center">
        {actionType === 'delete' ? `삭제된 팀은 되돌릴 수 없습니다.` : `팀에서 탈퇴하면 다시 되돌릴 수 없습니다.`}
        <br />
        {name} 팀을 {actionType === 'delete' ? '삭제' : '탈퇴'}하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default TeamActionModal;
