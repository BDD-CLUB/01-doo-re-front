'use client';

import { Flex, Image, Card, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import CurriculumModal from '@/containers/study/CurriculumModal';
import CurriculumCardData from '@/mocks/curriculum';

import CurriculumItem from './CurriculumItem';
import ActionModal from '../Modal/ActionModal';

const CurriculumCard = () => {
  const { isOpen: isActionModalOpen, onOpen: onActionModalOpen, onClose: onActionModalClose } = useDisclosure();

  return (
    <Flex direction="column" gap="2" w="100%">
      <Flex as="button" align="center" justify="right" gap="2" onClick={onActionModalOpen}>
        <IconButton as="div" aria-label="" icon={<MdOutlineArrowForwardIos />} size="icon_sm" variant="orange" />
        <Text>편집 모드</Text>
      </Flex>
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
            {CurriculumCardData.map((data) => {
              return (
                <CurriculumItem
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  itemOrder={data.itemOrder}
                  isCompleted={data.isCompleted}
                />
              );
            })}
          </Flex>
        </Card>
      </Flex>
      <ActionModal
        isOpen={isActionModalOpen}
        onClose={onActionModalClose}
        title="커리큘럼"
        subButtonText="이전"
        onSubButtonClick={() => {
          onActionModalClose();
        }}
        mainButtonText="다음"
        onMainButtonClick={() => {
          onActionModalClose();
        }}
      >
        <CurriculumModal />
      </ActionModal>
    </Flex>
  );
};

export default CurriculumCard;
