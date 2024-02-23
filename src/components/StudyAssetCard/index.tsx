import { Flex, Card, CardBody, CardFooter, Image, Text, IconButton } from '@chakra-ui/react';
import { BiBookmark } from 'react-icons/bi';

import { StudyAssetCardProps } from './types';

const StudyAssetCard = ({ title, content, date, bookmark, img }: StudyAssetCardProps) => {
  return (
    <Card w="100%" maxW="60" p="2" shadow="md" _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }} rounded="xl">
      <Image objectFit="cover" alt="study card" rounded="sm" src={img} />
      <CardBody px="2">
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm">{content}</Text>
      </CardBody>
      <CardFooter alignItems="center" justify="space-between" px="2" py="0">
        <Text color="gray.200" fontSize="sm">
          {date}
        </Text>
        <Flex align="center">
          <IconButton
            color="black"
            fontSize="md"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            aria-label="bookmark"
            icon={<BiBookmark />}
          />
          <Text fontSize="sm">{bookmark}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default StudyAssetCard;
