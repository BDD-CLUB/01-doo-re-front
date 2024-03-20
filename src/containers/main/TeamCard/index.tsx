import { Box, Card, CardHeader, Text, Flex, CardBody, useMediaQuery } from '@chakra-ui/react';
import { useEffect } from 'react';

import Garden3D from '@/components/Garden3D';

import { TeamCardProps } from './types';

const TeamCard = ({ rank, name, description, gardenInfos }: TeamCardProps) => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const [isLargerThan1536] = useMediaQuery('(min-width: 1536px)');

  useEffect(() => {
    console.log(isLargerThan992, isLargerThan1536);
  }, [isLargerThan992, isLargerThan1536]);

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
          <Text textStyle="title_bold_xl" fontFamily="Inter" textAlign="right">
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
            maxH={{ base: '11', xl: '12' }}
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
        left={{ base: '28%', lg: '30%', '2xl': '35%' }}
        w={{ base: '80%', lg: '80%', '2xl': '70%' }}
        h={{ base: '95%', lg: '90%' }}
        p="0"
      >
        {isLargerThan1536 && <Garden3D cubeSize={32} cubeGap={4} rotateY={55} gardenInfos={gardenInfos} />}
        {!isLargerThan1536 &&
          (isLargerThan992 ? (
            <Garden3D cubeSize={24} cubeGap={4} rotateY={55} gardenInfos={gardenInfos} />
          ) : (
            <Garden3D cubeSize={18} cubeGap={4} rotateY={55} gardenInfos={gardenInfos} />
          ))}
      </CardBody>
    </Card>
  );
};

export default TeamCard;
