'use client';

import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import StudyModal from '@/containers/study/Modal/StudyModal';
import StudyGallery from '@/containers/study-gallery/StudyGallery';

const Page = ({ params }: { params: { teamId: number } }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Flex direction="row" gap="2">
          <Text textStyle="bold_2xl">스터디 갤러리</Text>
        </Flex>
        <Button color="white" bg="orange_dark" onClick={() => setIsOpenModal(true)} rounded="full">
          스터디 추가
        </Button>
      </Flex>
      <StudyGallery teamId={params.teamId} refetchTrigger={isOpenModal} />
      <StudyModal teamId={params.teamId} isOpen={isOpenModal} setIsModalOpen={setIsOpenModal} studyInfo={null} />
    </Flex>
  );
};

export default Page;
