import { Box, Card, CardHeader, Text } from '@chakra-ui/react';

import './style.css';

const TeamCard = () => {
  return (
    <Card overflow="hidden" w={650} h={350} bg="none" borderRadius={30} backdropFilter="blur(30px)">
      <Box pos="relative" zIndex={60} w="100%" h="100%" bg="rgba(255, 255, 255, 0.1)">
        <CardHeader
          alignItems="center"
          justifyContent="left"
          gap="10"
          display="flex"
          w="100%"
          h="120"
          px="0"
          pt="5"
          pb="0"
          bg="none"
        >
          <Box
            pos="relative"
            w="18%"
            h="100%"
            pr="2"
            borderBottom="1px"
            borderBottomStyle="solid"
            borderBottomColor="white"
          >
            <Text color="white" fontFamily="Inter" fontSize={80} fontWeight={700} textAlign="right" fontStyle="normal">
              11
            </Text>
            <Box
              className="circle"
              pos="absolute"
              top="100%"
              left="100%"
              w="2"
              h="2"
              bg="white"
              borderRadius="100%"
              transform="translate(-50%, -50%)"
            />
          </Box>
          <Box>
            <Text color="white" fontFamily="Inter" fontSize={36} fontWeight={700} textAlign="left" fontStyle="normal">
              열사모
            </Text>
            <Text
              className="team_description"
              zIndex="20"
              color="white"
              fontFamily="Inter"
              fontSize="16"
              fontWeight="400"
              textAlign="left"
              fontStyle="normal"
            >
              안녕하세요 열정을 사랑하는 사람들의 모임에 오신 것을 환영합니다. 저희 팀에서는 무엇을 할거냐 이말이다~~
            </Text>
          </Box>
        </CardHeader>
      </Box>
    </Card>
  );
};

export default TeamCard;
