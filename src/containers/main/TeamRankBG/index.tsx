import { Box } from '@chakra-ui/react';

const TeamRankBG = () => {
  return (
    <>
      <Box
        pos="absolute"
        zIndex="-2"
        top="8%"
        left="10%"
        w="80vh"
        h="80vh"
        bg="#304030"
        borderRadius="100%"
        transform="translate(-50%, -50%)"
      />
      <Box
        pos="absolute"
        zIndex="-3"
        top="50%"
        left="50%"
        w="105vh"
        h="105vh"
        bg="#415940"
        borderRadius="100%"
        transform="translate(-50%, -50%)"
      />
      <Box
        pos="absolute"
        zIndex="-4"
        top="90%"
        left="90%"
        w="110vh"
        h="110vh"
        bg="#6B8969"
        borderRadius="100%"
        transform="translate(-50%, -50%)"
      />
    </>
  );
};

export default TeamRankBG;
