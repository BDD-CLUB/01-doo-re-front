import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Progress } from '@chakra-ui/react';

import { StudyCardProps } from '@/components/StudyCard/types';

const StudyCard = ({ name, description, startDate, endDate, cropId, percent }: StudyCardProps) => {
  return (
    <div>
      <Card
        alignItems="center"
        justifyContent="center"
        display="flex"
        w="64"
        h="64"
        pt="6"
        shadow="xl"
        _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
        rounded="3xl"
      >
        <CardHeader py="2">
          <Heading fontWeight="bold" size="md">
            {name}
          </Heading>
        </CardHeader>
        <CardBody py="0" textAlign="center" id={cropId.toString()}>
          <Image w="16" mx="auto" py="4" alt="crops" id="cropId" src="\png\circle.png" />
          <Text fontSize="xs">{description}</Text>
          <Text fontSize="xs">
            {startDate} ~ {endDate}
          </Text>
        </CardBody>
        <CardFooter alignItems="center" justifyContent="center" gap="4" display="flex" pt="0">
          <Card alignItems="center" w="8" h="8" fontWeight="bold" textAlign="center" shadow="md">
            1
          </Card>
          <Progress w="32" h="1.5" colorScheme="gray" rounded="md" value={80} />
          <Text fontSize="sm">{percent}%</Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StudyCard;
