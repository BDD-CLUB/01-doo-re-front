import { Card, CardHeader, CardBody, CardFooter, Text, Image, Progress, Flex } from '@chakra-ui/react';

import { StudyCardProps } from '@/components/StudyCard/types';

const StudyCard = ({ name, description, startDate, endDate, cropId, percent, rank }: StudyCardProps) => {
  return (
    <Flex justify="center">
      <Card
        alignItems="center"
        justifyContent="center"
        display="flex"
        w="100%"
        maxW="60"
        h="80"
        pt="6"
        shadow="lg"
        _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
        rounded="2xl"
      >
        <CardHeader py="2">
          <Text fontWeight="bold" size="xl">
            {name}
          </Text>
        </CardHeader>
        <CardBody py="0" textAlign="center" id={cropId.toString()}>
          <Image w="16" mx="auto" py="4" alt="crops" id="cropId" src="\png\circle.png" />
          <Text fontSize="sm">{description}</Text>
          <Text fontSize="sm">
            {startDate} ~ {endDate}
          </Text>
        </CardBody>
        <CardFooter alignItems="center" justifyContent="center" gap="4" display="flex" pt="0">
          <Card alignItems="center" w="8" h="8" fontWeight="bold" textAlign="center" shadow="md">
            {rank}
          </Card>
          <Progress w="32" h="1.5" colorScheme="blackAlpha" rounded="md" value={percent} />
          <Text fontSize="sm">{percent}%</Text>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default StudyCard;
