import { Text, Flex, Avatar, Box } from '@chakra-ui/react';

import colors from '@/theme/foundations/colors';

import { TitleProps } from './types';

const Title = ({ isTeam, teamImg, name, description }: TitleProps) => {
  return (
    <Flex pos="relative" align="center" maxW="100%" maxH="100%">
      {isTeam && teamImg && <Avatar mr="3" borderWidth="3px" borderColor={colors.gray[100]} size="md" src={teamImg} />}
      {isTeam && !teamImg && <Avatar mr="3" bg="white" borderWidth="3px" borderColor={colors.gray[100]} size="md" />}
      {!isTeam && <Box boxSize="9" mr="3" bg={colors.gray[100]} borderRadius="full" />}
      <Text mr="5" fontSize="3xl" fontWeight="bold">
        {name}
      </Text>
      <Flex pos="relative" p="3" bg="white" borderRadius="base" shadow="md">
        <Flex pos="absolute" left="-2" w="4" h="4" bg="white" transform="rotate(45deg)" />
        <Text fontSize="sm">{description}</Text>
      </Flex>
    </Flex>
  );
};

export default Title;
