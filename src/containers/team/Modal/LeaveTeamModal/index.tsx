import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { leaveTeam as leaveTeamApi } from '@/app/api/team';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { LeaveTeamModalProps } from '../type';

const LeaveTeamModal = ({ id, name, isOpen, onClose }: LeaveTeamModalProps) => {
  const leaveTeam = useMutateWithToken(leaveTeamApi);
  const refetchSidebar = useRefetchSideBar();
  const router = useRouter();

  const handleLeaveTeamButtonClick = () => {
    leaveTeam(id).then((res) => {
      if (!res.ok) {
        alert(res.body.message || '팀에서 탈퇴하는데 실패했습니다.');
        onClose();
        return;
      }
      refetchSidebar();
      onClose();
      router.replace('/');
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀 탈퇴"
      confirmButtonText="탈퇴"
      onConfirmButtonClick={() => handleLeaveTeamButtonClick()}
    >
      <Text align="center">
        팀에서 탈퇴하면 다시 되돌릴 수 없습니다.
        <br />
        {name} 팀에서 탈퇴하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default LeaveTeamModal;
