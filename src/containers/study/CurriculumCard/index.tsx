'use client';

import { Flex, Image, Card, IconButton, useDisclosure, Text } from '@chakra-ui/react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import CurriculumCardData from '@/mocks/curriculum';

import CurriculumItem from './CurriculumItem';
import ActionModal from '../../../components/Modal/ActionModal';
import CurriculumModal from '../CurriculumModal';

const CurriculumCard = () => {
  const { isOpen: isActionModalOpen, onOpen: onActionModalOpen, onClose: onActionModalClose } = useDisclosure();

  return (
    <Flex direction="column" gap="3" w="100%">
      <Flex gap="3" display="flex" w="fit-content" ml="auto" cursor="pointer" onClick={onActionModalOpen}>
        <IconButton aria-label="" icon={<MdOutlineArrowForwardIos />} size="icon_sm" variant="icon_orange" />
        <Text>전체 보기</Text>
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
