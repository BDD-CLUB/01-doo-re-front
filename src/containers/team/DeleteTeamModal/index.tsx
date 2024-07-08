import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { deleteTeam as deleteTeamApi } from '@/app/api/team';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';

import { DeleteTeamModalProps } from './type';

const DeleteTeamModal = ({ id, name, isOpen, onClose }: DeleteTeamModalProps) => {
  const deleteTeam = useMutateWithToken(deleteTeamApi);
  const router = useRouter();

  const handleDeleteTeamButtonClick = () => {
    deleteTeam(id).then(() => {
      onClose();
      router.replace('/');
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="팀 삭제"
      confirmButtonText="삭제"
      onConfirmButtonClick={() => handleDeleteTeamButtonClick()}
    >
      <Text align="center">
        삭제된 팀은 되돌릴 수 없습니다.
        <br />
        {name} 팀을 삭제하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default DeleteTeamModal;
