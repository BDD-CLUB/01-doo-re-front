import { Box, Card } from '@chakra-ui/react';

const TeamCard = () => {
  return (
    <Card overflow="hidden" w={700} h={350} bg="none" borderRadius={30} backdropFilter="blur(30px)">
      <Box w="100%" h="100%" bg="rgba(255, 255, 255, 0.1)" />
    </Card>
  );
};

export default TeamCard;
