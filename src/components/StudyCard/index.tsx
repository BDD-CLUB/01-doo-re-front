import { studyCardProps } from '@/types';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Image, Progress } from '@chakra-ui/react';

const StudyCard = ({ name, description, startDate, endDate, cropId, percent }: studyCardProps) => {
  return (
    <div>
      <Card
        w="64"
        h="64"
        display="flex"
        justifyContent="center"
        alignItems="center"
        shadow="xl"
        pt="6"
        rounded="3xl"
        _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      >
        <CardHeader py="2">
          <Heading size="md" fontWeight="bold">
            {name}
          </Heading>
        </CardHeader>
        <CardBody textAlign="center" py="0">
          <Image src="\png\circle.png" alt="crops" w="16" mx="auto" py="4" id="cropId" />
          <Text fontSize="xs">{description}</Text>
          <Text fontSize="xs">
            {startDate} ~ {endDate}
          </Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center" gap="4" pt="0">
          <Card w="8" h="8" textAlign="center" alignItems="center" shadow="md" fontWeight="bold">
            1
          </Card>
          <Progress value={80} w="32" h="1.5" rounded="md" colorScheme="gray" />
          <Text fontSize="sm">{percent}%</Text>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StudyCard;
