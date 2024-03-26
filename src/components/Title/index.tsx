import { Text, Flex, Avatar, Box } from '@chakra-ui/react';

import { TitleProps } from './types';

const Title = ({ isTeam = false, teamImg, name, description }: TitleProps) => {
  return (
    <Flex pos="relative" align="center" gap="3">
      {isTeam && teamImg && <Avatar borderWidth="3px" borderColor="gray.100" size="md" src={teamImg} />}
      {isTeam && !teamImg && <Avatar bg="white" borderWidth="3px" borderColor="gray.100" size="md" />}
      {!isTeam && <Box boxSize="9" bg="gray.100" borderRadius="full" />}
      <Text textStyle="bold_3xl">{name}</Text>
      <Box pos="relative" display={{ base: 'none', lg: 'block' }} w="10" h="12" px="2">
        <Box pos="absolute" zIndex="1" top="50%" w="5" h="5" bg="white" transform="translate(0%, -50%) rotate(45deg)" />
        <Flex
          pos="absolute"
          left="4"
          align="center"
          w={{ base: '72', '2xl': '96' }}
          h="100%"
          px="3"
          bg="white"
          borderRadius="base"
          shadow="md"
        >
          <Text zIndex="2" w="100%" h="6">
            {description}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Title;
