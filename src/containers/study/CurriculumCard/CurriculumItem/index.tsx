'use client';

import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { patchCurriculumCompleted } from '@/app/api/study';
import { Curriculum } from '@/types';

const CurriculumItem = ({
  id,
  name,
  itemOrder,
  isCompleted,
  participantId,
}: Curriculum & { participantId: number }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    patchCurriculumCompleted(id, participantId);
  };

  return (
    <Flex key={id.toString()} align="center" gap="4" px="4">
      <Text textStyle="bold_xl" color={isChecked ? 'orange' : 'orange_light'}>
        {itemOrder.toString().padStart(2, '0')}
      </Text>

      <Box textStyle="lg" w="100%" px="3" py="1.5" bg={isChecked ? 'orange' : 'orange_light'} rounded="3xl">
        <Text textStyle="bold_xl" pr="10" color="white">
          {name}
        </Text>
      </Box>
      <Checkbox
        borderColor={isChecked ? 'orange' : 'orange_light'}
        bgColor="white"
        colorScheme="white"
        defaultChecked={isChecked}
        iconColor="orange"
        onChange={handleCheckboxChange}
        size="lg"
      />
    </Flex>
  );
};

export default CurriculumItem;
