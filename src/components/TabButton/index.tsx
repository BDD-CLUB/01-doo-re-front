import { Flex, Button, Text } from '@chakra-ui/react';

import { TabButtonProps } from './type';

const TabButton = ({ currentTab, changeTab, categoryInfos }: TabButtonProps) => {
  const currentIdx = categoryInfos.findIndex((data) => data.name === currentTab);

  return (
    <Flex pos="relative" gap="30px">
      {categoryInfos.map((data) => {
        return (
          <Button
            key={data.id}
            w="28"
            shadow="md"
            onClick={() => changeTab(data.name)}
            variant={data.name === currentTab ? 'orange_dark' : 'white'}
          >
            <Text fontSize="md" fontWeight="bold">
              {data.name}
            </Text>
          </Button>
        );
      })}
      {categoryInfos[currentIdx].wholeView && (
        <Button
          as="a"
          pos="absolute"
          top="12"
          left={`${currentIdx * (30 + 112) + 8}px`}
          shadow="md"
          href={categoryInfos[currentIdx].page}
          variant="orange_light"
        >
          전체보기
        </Button>
      )}
    </Flex>
  );
};

export default TabButton;
