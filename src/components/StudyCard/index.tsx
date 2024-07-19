import { Card, CardHeader, CardBody, CardFooter, Text, Image, Progress } from '@chakra-ui/react';

import CROP from '@/constants/crop';

import { StudyCardProps } from './types';

const StudyCard = ({ name, description, startDate, endDate, cropId, studyProgressRatio, rank }: StudyCardProps) => {
  return (
    <Card
      alignItems="center"
      justifyContent="center"
      display="flex"
      w="100%"
      h="100%"
      pt="6"
      shadow="lg"
      _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      rounded="2xl"
    >
      <CardHeader py="2">
        <Text textStyle="bold_md">{name}</Text>
      </CardHeader>
      <CardBody py="0" textAlign="center" id={cropId.toString()}>
        {CROP.filter((crop) => crop.id === cropId).map((crop) => (
          <Image key={crop.id} w="16" mx="auto" py="4" alt="crops" src={crop.imageUrl} />
        ))}
        <Text textStyle="sm">{description}</Text>
        <Text textStyle="sm">
          {startDate} ~ {endDate}
        </Text>
      </CardBody>
      <CardFooter alignItems="center" justifyContent="center" gap="4" display="flex" w="100%" pt="0">
        <Card textStyle="bold_md" alignItems="center" w="8" h="8" textAlign="center" shadow="md">
          {rank}
        </Card>
        <Progress flex="1" h="1.5" colorScheme="blackAlpha" rounded="md" value={studyProgressRatio} />
        <Text textStyle="sm">{studyProgressRatio}%</Text>
      </CardFooter>
    </Card>
  );
};

export default StudyCard;
