'use client';

import { Flex, Image, Card, useDisclosure, Text, IconButton } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { useGetCurriculumInfoQuery } from '@/app/api/study';
import CROP from '@/constants/crop';
import { Curriculum } from '@/types';

import CurriculumItem from './CurriculumItem';
import { CurriculumCardProps } from './types';
import CurriculumModal from '../CurriculumModal';

const CurriculumCard = ({ cropId, studyProgressRatio, isStudyLeader }: CurriculumCardProps) => {
  const { studyId } = useParams<{ studyId: string }>();

  const { data: curriculumItems } = useGetCurriculumInfoQuery(+studyId);

  const { isOpen: isCurriculumModalOpen, onOpen: onActionModalOpen, onClose: onCurriculumModalClose } = useDisclosure();

  const getCropImage = () => {
    const engName = CROP.find((crop) => crop.id === cropId)?.engName;
    const growthLevel = studyProgressRatio === 0 ? 1 : Math.ceil(studyProgressRatio / 20);
    const cropImageURL = `/images/crops/growth/${engName}/${growthLevel}.png`;

    return cropImageURL;
  };

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
          src={getCropImage()}
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
            {curriculumItems?.body.length ? (
              curriculumItems?.body.map((curriculum: Curriculum) => {
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
              <Flex align="center" justify="center" h="100%">
                <Text textStyle="lg">커리큘럼이 존재하지 않습니다.</Text>
              </Flex>
            )}
          </Flex>
        </Card>
      </Flex>

      <CurriculumModal
        isOpen={isCurriculumModalOpen}
        onClose={onCurriculumModalClose}
        originCurriculums={curriculumItems?.body}
      />
    </Flex>
  );
};

export default CurriculumCard;
