import { Flex, Text } from '@chakra-ui/react';

import color from '@/constants/color';

const SuggestionCreate = ({ category }: { category: string }) => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w="full"
      mt="2"
      p="10"
      bg="white"
      shadow="lg"
      rounded="2xl"
    >
      <Text textStyle="bold_xl">
        아직 생성된 <span style={{ color: color.orange_dark }}>{category}</span>가 없습니다.
      </Text>
      <Text textStyle="bold_xl">
        <span style={{ color: color.orange_dark }}>{category}</span>를 생성해주세요.
      </Text>
    </Flex>
  );
};

export default SuggestionCreate;
