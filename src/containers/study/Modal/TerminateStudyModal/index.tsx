import { Text } from '@chakra-ui/react';

import { patchTerminateStudy } from '@/app/api/study';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';

import { TerminateStudyModalProps } from '../types';

const TerminateStudyModal = ({ id, name, isOpen, setIsOpen }: TerminateStudyModalProps) => {
  const terminatedStudy = useMutateWithToken(patchTerminateStudy);

  const handleClickTerminate = () => {
    terminatedStudy(id).then((res) => {
      if (res.ok) {
        setIsOpen(false);
      }
    });
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
        {`"${name}"을 종료하시겠습니까?`}
      </Text>
    </ConfirmModal>
  );
};

export default TerminateStudyModal;
