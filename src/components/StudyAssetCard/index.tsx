import { studyAssetCardProps } from '@/components/StudyAssetCard/types';
import { Flex, Card, CardBody, CardFooter, Image, Button, Text } from '@chakra-ui/react';
import { BiBookmark } from 'react-icons/bi';

const StudyAssetCard = ({ title, content, date, bookmark }: studyAssetCardProps) => {
  return (
    <Card w="56" p="2" rounded="xl" shadow="md" _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
        rounded="sm"
      />
      <CardBody px="2">
        <Text fontSize="md" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="xs">{content}</Text>
      </CardBody>
      <CardFooter justify="space-between" alignItems="center" px="2" py="0">
        <Text fontSize="xs" color="gray.400">
          {date}
        </Text>
        <Flex alignItems="center">
          <Button variant="ghost" px="0" minW="2" w="fit-content">
            <BiBookmark />
          </Button>
          <Text fontSize="xs">{bookmark}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default StudyAssetCard;
