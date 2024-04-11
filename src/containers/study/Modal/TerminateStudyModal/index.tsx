import { Text } from '@chakra-ui/react';

import ConfirmModal from '@/components/Modal/ConfirmModal';

import { TerminateStudyModalProps } from '../types';

const TerminateStudyModal = ({ studyName, isOpen, setIsOpen }: TerminateStudyModalProps) => {
  const handleClickTerminate = () => {
    // TODO - API 연결
    setIsOpen(false);
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="스터디 종료"
      confirmButtonText="종료"
      onConfirmButtonClick={handleClickTerminate}
    >
      <Text align="center">
        스터디 종료시 수료증이 발급되며
        <br />
        스터디 정보 수정 및 삭제가 불가능합니다.
        <br />
        &quot;{studyName}&quot;을 종료하시겠습니까?
      </Text>
    </ConfirmModal>
  );
};

export default TerminateStudyModal;
