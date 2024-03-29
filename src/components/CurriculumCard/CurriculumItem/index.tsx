'use client';

import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { CurriculumItemProps } from '../types';

const CurriculumItem = ({ id, name, itemOrder, isCompleted }: CurriculumItemProps) => {
  const [checked, setChecked] = useState(isCompleted);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <Flex key={id.toString()} align="center" gap="4" px="4">
      <Text textStyle="bold_xl" color={checked ? 'orange' : 'orange_light'}>
        {itemOrder.toString().padStart(2, '0')}
      </Text>

      <Box textStyle="lg" w="100%" px="3" py="1.5" color="white" bg={checked ? 'orange' : 'orange_light'} rounded="3xl">
        <Text textStyle="bold_xl" pr="10">
          {name}
        </Text>
      </Box>
      <Checkbox
        borderColor={checked ? 'orange' : 'orange_light'}
        bgColor="white"
        colorScheme="white"
        defaultChecked={checked}
        iconColor="orange"
        onChange={handleCheckboxChange}
        size="lg"
      />
    </Flex>
  );
};

export default CurriculumItem;
