'use client';

import { Flex, Image, Card, useDisclosure, Text, IconButton } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { getCurriculum } from '@/app/api/study';
import { useGetFetchWithToken } from '@/hooks/useFetchWithToken';
import { Curriculum } from '@/types';

import CurriculumItem from './CurriculumItem';
import CurriculumModal from '../CurriculumModal';

const CurriculumCard = () => {
  const [isStudyLeader] = useState<boolean>(true); // NOTE 추후 스터디장 여부 props로 받아올 예정
  const { studyId } = useParams<{ studyId: string }>();

  const curriculumItems = useGetFetchWithToken(getCurriculum, [Number(studyId)]);

  const { isOpen: isCurriculumModalOpen, onOpen: onActionModalOpen, onClose: onCurriculumModalClose } = useDisclosure();

  return (
    <Flex direction="column" gap="3" w="100%">
      {isStudyLeader && (
        <Flex gap="3" display="flex" w="fit-content" ml="auto" cursor="pointer" onClick={onActionModalOpen}>
          <IconButton aria-label="" icon={<MdOutlineArrowForwardIos />} size="icon_sm" variant="icon_orange" />
          <Text>편집 모드</Text>
        </Flex>
      )}

      <Flex h={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}>
        <Image
          display={{ base: 'none', md: 'block' }}
          w={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}
          borderTopRightRadius="0"
          borderTopLeftRadius="2xl"
          borderBottomLeftRadius="2xl"
          borderBottomRightRadius="0"
          alt="curriculum card"
          src="/images/curriculumCrops/carrot_5.png"
        />
        <Card
          direction="row"
          w="100%"
          py="4"
          pr="1"
          borderTopRightRadius="2xl"
          borderTopLeftRadius={{ base: '2xl', md: '0' }}
          borderBottomLeftRadius={{ base: '2xl', md: '0' }}
          borderBottomRightRadius="2xl"
        >
          <Flex className="scroll" direction="column" gap="3" overflowY="auto" w="100%">
            {curriculumItems?.length ? (
              curriculumItems?.map((curriculum: Curriculum) => {
                return (
                  <CurriculumItem
                    key={curriculum.id}
                    id={curriculum.id}
                    participantId={curriculum.participantId}
                    name={curriculum.name}
                    itemOrder={curriculum.itemOrder}
                    isChecked={curriculum.isChecked}
                  />
                );
              })
            ) : (
              <Flex h="100%" justify="center" alignItems="center">
                <Text textStyle="lg">커리큘럼이 존재하지 않습니다.</Text>
              </Flex>
            )}
          </Flex>
        </Card>
      </Flex>

      <CurriculumModal
        isOpen={isCurriculumModalOpen}
        onClose={onCurriculumModalClose}
        originCurriculums={curriculumItems}
      />
    </Flex>
  );
};

export default CurriculumCard;
