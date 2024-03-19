import { Box, Flex, Text } from '@chakra-ui/react';

import { StudyProgressProps } from '@/containers/study/StudyInfoCard/types';

const StudyProgress = ({ progress }: StudyProgressProps) => {
  const fillCount = Math.floor(progress / 20);
  const partPercent = (progress % 20) * 5;
  const boxArray = Array.from({ length: 5 }, (_, i) => ({ fill: i + 1 <= fillCount, key: i }));

  return (
    <Flex align="center" px="2">
      {boxArray.map((box, index) =>
        index === fillCount ? (
          <Box key={box.key} pos="relative" overflow="hidden" w="4" h="4" mr="1" bg="orange_dark" borderRadius="sm">
            <Box pos="absolute" left={`${partPercent}%`} w="4" h="4" bg="gray.100" />
          </Box>
        ) : (
          <Box key={box.key} w="4" h="4" mr="1" bg={box.fill ? 'orange_dark' : 'gray.100'} borderRadius="sm" />
        ),
      )}
      <Text display={{ base: 'none', md: 'block' }} ml="2" color="orange_dark" fontSize="sm" fontWeight="bold">
        {progress}%
      </Text>
    </Flex>
  );
};

export default StudyProgress;
