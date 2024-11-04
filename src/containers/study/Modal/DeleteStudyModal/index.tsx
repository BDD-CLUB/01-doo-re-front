import { Text } from '@chakra-ui/react';

import { deleteStudy } from '@/app/api/study';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { DeleteStudyModalProps } from '../types';

const DeleteStudyModal = ({ id, name, isOpen, setIsOpen }: DeleteStudyModalProps) => {
  const deletedStudy = useMutateWithToken(deleteStudy);
  const refetchSidebar = useRefetchSideBar();

  const handleClickDelete = () => {
    deletedStudy(id).then((res) => {
      if (res.ok) {
        refetchSidebar();
        setIsOpen(false);
        window.history.back();
      }
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="스터디 삭제"
      confirmButtonText="삭제"
      onConfirmButtonClick={handleClickDelete}
    >
      <Text align="center">
        삭제된 스터디는 되돌릴 수 없습니다.
        <br />
        {`"${name}"을 삭제하시겠습니까?`}
      </Text>
    </ConfirmModal>
  );
};

export default DeleteStudyModal;
