import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { leaveStudy as leaveStudyApi } from '@/app/api/study';
import ConfirmModal from '@/components/Modal/ConfirmModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { LeaveStudyModalProps } from '../types';

const LeaveStudyModal = ({ id, name, teamId, isOpen, setIsOpen }: LeaveStudyModalProps) => {
  const leaveStudy = useMutateWithToken(leaveStudyApi);
  const refetchSidebar = useRefetchSideBar();
  const router = useRouter();

  const handleClickLeave = () => {
    leaveStudy(id).then((res) => {
      if (res.ok) {
        refetchSidebar();
        setIsOpen(false);
        router.replace(`/team/${teamId}`);
      }
    });
  };

  return (
    <ConfirmModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="스터디 탈퇴"
      confirmButtonText="탈퇴"
      onConfirmButtonClick={handleClickLeave}
    >
      <Text align="center">
        스터디에서 탈퇴하면 다시 되돌릴 수 없습니다.
        <br />
        {`"${name}"에서 탈퇴하시겠습니까?`}
      </Text>
    </ConfirmModal>
  );
};

export default LeaveStudyModal;
