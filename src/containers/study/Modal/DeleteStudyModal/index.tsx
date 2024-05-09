import { Text } from '@chakra-ui/react';

import ConfirmModal from '@/components/Modal/ConfirmModal';

import { DeleteStudyModalProps } from '../types';

const DeleteStudyModal = ({ studyName, isOpen, setIsOpen }: DeleteStudyModalProps) => {
  const handleClickDelete = () => {
    // TODO - API 연결
    setIsOpen(false);
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
        {`"${studyName}"을 삭제하시겠습니까?`}
      </Text>
    </ConfirmModal>
  );
};

export default DeleteStudyModal;
