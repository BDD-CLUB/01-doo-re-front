'use client';

import { Button, Flex, Text } from '@chakra-ui/react';

import Documents from '@/containers/document/Documents';

const Page = () => {
  return (
    <Flex align="center" direction="column" gap="9" w="100%" p="8">
      <Flex justify="space-between" w="100%">
        <Flex direction="row" gap="2">
          <Text textStyle="bold_2xl">학습자료 갤러리</Text>
        </Flex>
        <Button color="white" bg="orange_dark" rounded="full">
          자료 등록
        </Button>
      </Flex>
      <Documents />
    </Flex>
  );
};

export default Page;
