import { Flex, Text } from '@chakra-ui/react';

const TeamRankDescription = () => {
  return (
    <Flex justify={{ base: 'center', md: 'start' }} w="100%" border="10px solid purple">
      <Flex direction="column" my="2%" ml={{ base: '0%', md: '10%' }} color="white">
        <Text textStyle="title_lg" display="inline">
          Check
        </Text>
        <Text textStyle="title_lg" display="inline" whiteSpace="nowrap">
          TEAM RANKING !
        </Text>
      </Flex>
    </Flex>
  );
};

export default TeamRankDescription;
