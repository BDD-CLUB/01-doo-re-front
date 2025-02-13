import { Card, CardHeader, CardBody, CardFooter, Text, Image, Progress, Link, Flex, Badge } from '@chakra-ui/react';
import dayjs from 'dayjs';

import CROP from '@/constants/crop';

import { StudyCardProps } from './types';

const StudyCard = ({
  name,
  id,
  teamId,
  description,
  startDate,
  endDate,
  cropId,
  studyProgressRatio,
  rank,
}: StudyCardProps) => {
  const currentDate = dayjs().format('YYYY-MM-DD');
  const isOngoing =
    currentDate >= dayjs(startDate).format('YYYY-MM-DD') &&
    (currentDate <= dayjs(endDate).format('YYYY-MM-DD') || !endDate);
  const isNotStarted = currentDate < dayjs(startDate).format('YYYY-MM-DD');

  const getColorScheme = () => {
    if (isNotStarted) return 'gray';
    if (isOngoing) return 'purple';
    return 'red';
  };

  const getBadgeText = () => {
    if (isNotStarted) return '진행 전';
    if (isOngoing) return '진행 중';
    return '종료';
  };

  return (
    <Card
      alignItems="center"
      justifyContent="center"
      display="flex"
      w="100%"
      h="100%"
      p="24px 16px"
      shadow="lg"
      _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}
      boxSizing="border-box"
      rounded="2xl"
    >
      <Badge pos="absolute" top="3" right="3" colorScheme={getColorScheme()} rounded="2xl">
        {getBadgeText()}
      </Badge>
      <Link w="100%" href={`/team/${teamId}/study/${id}`}>
        <CardHeader py="2">
          <Text textStyle="bold_md" overflow="hidden" textAlign="center" whiteSpace="nowrap" textOverflow="ellipsis">
            {name}
            <Text as="span" ml="2" color="orange_dark">
              스터디
            </Text>
          </Text>
        </CardHeader>
        <CardBody py="0" textAlign="center" id={cropId.toString()}>
          {CROP.filter((crop) => crop.id === cropId).map((crop) => (
            <Image key={crop.id} w="16" mx="auto" py="4" alt="crops" src={crop.imageUrl} />
          ))}
          <Text textStyle="sm">{description}</Text>
          <Flex textStyle="sm" justify="center" wrap="wrap" columnGap="2">
            <Text>{startDate}</Text>~<Text>{endDate}</Text>
          </Flex>
        </CardBody>
        <CardFooter alignItems="center" justifyContent="center" gap="4" display="flex" w="100%" py="0">
          <Card textStyle="bold_md" alignItems="center" w="8" h="8" textAlign="center" shadow="md">
            {rank}
          </Card>
          <Progress flex="1" h="1.5" colorScheme="blackAlpha" rounded="md" value={studyProgressRatio} />
          <Text textStyle="sm">{studyProgressRatio}%</Text>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default StudyCard;
