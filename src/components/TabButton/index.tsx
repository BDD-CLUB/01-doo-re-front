import { Flex, Button, Text } from '@chakra-ui/react';

import { TabButtonProps } from './type';

const TabButton = ({ currentTab, changeTab, categoryInfos }: TabButtonProps) => {
  return (
    <Flex>
      {categoryInfos.map((data) => {
        return (
          <Button key={data.id}>
            <Text>{data.name}</Text>
          </Button>
        );
      })}
    </Flex>
  );
};

export default TabButton;
