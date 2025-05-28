import { Text } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import { deleteUser } from '@/app/api/member';
import { defaultUserAtom, userAtom } from '@/atom';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { DeleteUserModalProps } from '../type';

const DeleteUserModal = ({ isOpen, onClose }: DeleteUserModalProps) => {
  const deleteUserInfo = useMutateWithToken(deleteUser);
  const refetchSidebar = useRefetchSideBar();
  const setUser = useSetAtom(userAtom);
  const router = useRouter();

  const handleDeleteUserButtonClick = () => {
    deleteUserInfo().then((res) => {
      if (!res.ok) {
        alert(res.body?.message || '회원 탈퇴에 실패했습니다.');
        onClose();
        return;
      }
      setUser(defaultUserAtom);
      refetchSidebar();
      onClose();
      router.replace('/');
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={onClose}
      title="회원 탈퇴"
      confirmButtonText="확인"
      onConfirmButtonClick={() => handleDeleteUserButtonClick()}
    >
      <Text align="center">
        삭제된 회원 정보는 되돌릴 수 없습니다.
        <br />
        회원 탈퇴를 진행하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default DeleteUserModal;
