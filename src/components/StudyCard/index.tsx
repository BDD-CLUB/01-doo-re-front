import { Card, CardBody, CardFooter, Text, Image, Button, Flex } from '@chakra-ui/react';

const StudyCard = () => {
  return (
    <Card w="52" p="3" rounded="xl" shadow="md" _hover={{ bg: 'gray.100', transition: '0.5s ease-in-out' }}>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
        rounded="sm"
      />
      <CardBody px="2">
        <Text fontSize="md" fontWeight="bold">
          자료이름
        </Text>
        <Text fontSize="xs">이번 포스팅은 [스터디목적]에 관한것 입니다. 먼저 [목차]는 이렇습니다.</Text>
      </CardBody>
      <CardFooter justify="space-between" alignItems="center" px="2" py="0">
        <Text fontSize="xs" color="gray.400">
          2024/01/01
        </Text>
        <Flex alignItems="center">
          <Button variant="ghost" px="1" minW="3" w="fit-content">
            <Image src="\png\bookmark.png" alt="bookmark" w="3" />
          </Button>
          <Text fontSize="xs">1,208</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default StudyCard;
