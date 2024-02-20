import { Flex, Card, CardBody, CardFooter, Image, Button, Text } from '@chakra-ui/react';
import { BiBookmark } from 'react-icons/bi';

import { StudyAssetCardProps } from './types';

const StudyAssetCard = ({ title, content, date, bookmark }: StudyAssetCardProps) => {
  return (
    <Card w="56" p="2" shadow="md" _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }} rounded="xl">
      <Image
        objectFit="cover"
        alt="Chakra UI"
        rounded="sm"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <CardBody px="2">
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="xs">{content}</Text>
      </CardBody>
      <CardFooter alignItems="center" justify="space-between" px="2" py="0">
        <Text color="gray.200" fontSize="xs">
          {date}
        </Text>
        <Flex align="center">
          <Button w="fit-content" minW="2" px="0" variant="ghost">
            <BiBookmark />
          </Button>
          <Text fontSize="xs">{bookmark}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default StudyAssetCard;
