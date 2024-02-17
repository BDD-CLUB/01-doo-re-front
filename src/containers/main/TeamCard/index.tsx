import { Box, Card, CardHeader, Text } from '@chakra-ui/react';

import Garden3D from '@/components/Garden3D';

import { TeamCardProps } from './types';

import './style.css';

const TeamCard = ({ rank, name, description, gardenInfos }: TeamCardProps) => {
  return (
    <Card overflow="hidden" w="650px" h="350px" bg="none" borderRadius="30" backdropFilter="blur(30px)">
      <Box pos="relative" zIndex="60" w="100%" h="100%" bg="rgba(255, 255, 255, 0.1)">
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
            <Text color="white" fontFamily="Inter" fontSize="80" fontWeight="700" textAlign="right" fontStyle="normal">
              {rank}
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
            <Text color="white" fontFamily="Inter" fontSize="36" fontWeight="700" textAlign="left" fontStyle="normal">
              {name}
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
              {description === '' ? '팀 소개글이 아직 없습니다.' : description}
            </Text>
          </Box>
        </CardHeader>
        <Box
          pos="absolute"
          zIndex="-1"
          top="20%"
          left="100%"
          w="fit-content"
          h="fit-content"
          transform="translate(-80%, 0%)"
        >
          <Garden3D cubeSize={24} cubeGap={4} rotateY={55} gardenInfos={gardenInfos} />
        </Box>
      </Box>
    </Card>
  );
};

export default TeamCard;
