'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { useMemo, useState } from 'react';

import { myTeamAtom } from '@/atom';
import StudyModal from '@/containers/study/Modal/StudyModal';
import StudyGallery from '@/containers/study-gallery/StudyGallery';
import useGetUser from '@/hooks/useGetUser';

const Page = ({ params }: { params: { teamId: number } }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const user = useGetUser();
  const myTeam = useAtomValue(myTeamAtom);

  const auth = useMemo(() => {
    if (!user || !user.isLogin) return false;
    return myTeam.some((teamId) => teamId === +params.teamId);
  }, [user, myTeam, params.teamId]);

  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Flex direction="row" gap="2">
          <Text textStyle="bold_2xl">스터디 갤러리</Text>
        </Flex>
        {auth && (
          <Button color="white" bg="orange_dark" onClick={() => setIsOpenModal(true)} rounded="full">
            스터디 추가
          </Button>
        )}
      </Flex>
      <StudyGallery teamId={params.teamId} refetchTrigger={isOpenModal} />
      <StudyModal teamId={params.teamId} isOpen={isOpenModal} setIsModalOpen={setIsOpenModal} studyInfo={null} />
    </Flex>
  );
};

export default Page;
