import { Text, Flex, Avatar, Box } from '@chakra-ui/react';

import { TitleProps } from './types';

const Title = ({ isTeam = false, teamImg, name, description }: TitleProps) => {
  return (
    <Flex pos="relative" align="center">
      {isTeam && teamImg && <Avatar mr="3" borderWidth="3px" borderColor="gray.100" size="md" src={teamImg} />}
      {isTeam && !teamImg && <Avatar mr="3" bg="white" borderWidth="3px" borderColor="gray.100" size="md" />}
      {!isTeam && <Box boxSize="9" mr="3" bg="gray.100" borderRadius="full" />}
      <Text mr="5" fontSize="3xl" fontWeight="bold">
        {name}
      </Text>
      <Box pos="relative" maxW="96" h="12px">
        <Box
          pos="absolute"
          zIndex="1"
          top="50%"
          left="-2"
          w="4"
          h="4"
          bg="white"
          transform="translate(0%, -50%) rotate(45deg)"
        />
        <Box
          pos="absolute"
          top="50%"
          left="0"
          overflow="hidden"
          w="96"
          minH="6"
          maxH="12"
          px="3"
          bg="white"
          borderRadius="base"
          shadow="md"
          transform="translate(0%, -50%)"
        >
          <Text>{description}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Title;
