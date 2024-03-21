import { Box, Card, CardHeader, Text, Flex, CardBody, useBreakpointValue } from '@chakra-ui/react';

import Garden3D from '@/components/Garden3D';

import { TeamCardProps } from './types';

const TeamCard = ({ rank, name, description, gardenInfos }: TeamCardProps) => {
  return (
    <Card overflow="hidden" w="100%" h="100%" bg="none" backdropFilter="blur(30px)">
      <CardHeader
        gap={{ base: '6', lg: '8', '2xl': '10' }}
        display="flex"
        w="100%"
        h={{ base: '110px', lg: '150px', '2xl': '170px' }}
        p="0"
        color="white"
      >
        <Box pos="relative" w={{ base: '100px', lg: '120px', '2xl': '170px' }}>
          <Text textStyle="title_bold_xl" textAlign="right">
            {rank}
          </Text>
          <Box pos="absolute" top={{ base: '110px', lg: '150px', '2xl': '170px' }} w="100%">
            <Box className="bar" w="100%" h="2px" bg="white" />
            <Box
              className="circle"
              pos="absolute"
              top="0%"
              left="100%"
              w="2"
              h="2"
              bg="white"
              borderRadius="100%"
              transform="translate(-50%, -50%)"
            />
          </Box>
        </Box>
        <Flex direction="column" w="full" pt={{ base: '6', lg: '7', '2xl': '10' }}>
          <Text textStyle="bold_4xl">{name}</Text>
          <Text
            textStyle="md"
            overflow="hidden"
            w={{ base: '250px', lg: '300px', '2xl': '350px' }}
            maxH={{ base: '44px', xl: '48px' }}
            whiteSpace="wrap"
          >
            {description === '' ? '팀 소개글이 아직 없습니다.' : description}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody
        pos="absolute"
        zIndex="-1"
        top={{ base: '0%', lg: '10%' }}
        left={{ base: '28%', lg: '30%' }}
        w="80%"
        h={{ base: '95%', lg: '90%' }}
        p="0"
      >
        <Garden3D
          cubeSize={useBreakpointValue({ base: 18, lg: 24, '2xl': 32 }) || 18}
          cubeGap={4}
          rotateY={55}
          gardenInfos={gardenInfos}
        />
      </CardBody>
    </Card>
  );
};

export default TeamCard;
