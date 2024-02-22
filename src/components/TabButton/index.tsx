import { Flex, Button, Text } from '@chakra-ui/react';

import { TabButtonProps } from './type';

const TabButton = ({ currentTab, changeTab, categoryInfos }: TabButtonProps) => {
  return (
    <Flex gap="30px">
      {categoryInfos.map((data) => {
        return (
          <Button
            key={data.id}
            w="28"
            bg={data.name === currentTab ? 'orange_dark' : 'white'}
            borderRadius="30px"
            shadow="md"
            _hover={{ bg: 'orange_light' }}
            onClick={() => changeTab(data.name)}
          >
            <Text color={data.name === currentTab ? 'white' : 'black'} fontSize="md" fontWeight="bold">
              {data.name}
            </Text>
          </Button>
        );
      })}
    </Flex>
  );
};

export default TabButton;
