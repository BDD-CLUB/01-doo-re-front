import { Flex, Image, Card } from '@chakra-ui/react';

import CurriculumCardData from '@/mocks/curriculum';

import CurriculumItem from './CurriculumItem';

import '@/style.css';

const CurriculumCard = () => {
  return (
    <Flex w="100%" h="20vw">
      <Image
        w="20vw"
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
        borderTopLeftRadius="0"
        borderBottomLeftRadius="0"
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
  );
};

export default CurriculumCard;
