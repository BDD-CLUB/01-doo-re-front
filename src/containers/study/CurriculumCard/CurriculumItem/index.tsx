'use client';

import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { patchCurriculumCompleted } from '@/app/api/study';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import { Curriculum } from '@/types';

const CurriculumItem = ({
  id,
  name,
  itemOrder,
  isChecked: isCheckedProps,
  participantId,
  isStudyLeader = false,
}: Curriculum) => {
  const [isChecked, setIsChecked] = useState(isCheckedProps);
  const completeCurriculum = useMutateWithToken(patchCurriculumCompleted);

  const handleCheckboxChange = () => {
    if (participantId) {
      setIsChecked((prev) => !prev);
      completeCurriculum(id, participantId);
    }
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
      {isStudyLeader && (
        <Checkbox
          borderColor={isChecked ? 'orange' : 'orange_light'}
          bgColor="white"
          colorScheme="white"
          defaultChecked={isChecked}
          iconColor="orange"
          onChange={handleCheckboxChange}
          size="lg"
        />
      )}
    </Flex>
  );
};

export default CurriculumItem;
