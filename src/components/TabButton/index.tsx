import { Flex, Button, Text } from '@chakra-ui/react';

import { TabButtonProps } from './type';

const TabButton = ({ currentTab, changeTab, categoryInfos }: TabButtonProps) => {
  return (
    <Flex gap="30px">
      {categoryInfos.map((data) => {
        return (
          <Button key={data.id} w="120px" bg="white" borderRadius="30px" shadow="md">
            <Text color="black" fontSize="md" fontWeight="bold">
              {data.name}
            </Text>
          </Button>
        );
      })}
    </Flex>
  );
};

export default TabButton;
