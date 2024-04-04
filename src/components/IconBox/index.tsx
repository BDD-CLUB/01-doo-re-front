import { Flex, IconButton, Text } from '@chakra-ui/react';

import { IconBoxProps } from './type';

const IconBox = ({ leftIcon, content, rightIcon, handleClick }: IconBoxProps) => {
  return (
    <Flex align="center" gap="2" w="100%" px="3" py="1" color="white" bg="orange_light" borderRadius="2xl">
      <IconButton
        as="div"
        flexShrink="0"
        fontSize="28px"
        aria-label=""
        icon={leftIcon}
        size="icon_md"
        variant="transparent"
      />
      <Text textStyle="bold_xl" flex="auto" isTruncated>
        {content}
      </Text>
      {rightIcon && (
        <IconButton
          flexShrink="0"
          fontSize="28px"
          aria-label=""
          icon={rightIcon}
          onClick={handleClick}
          size="icon_md"
          variant="transparent"
        />
      )}
    </Flex>
  );
};

export default IconBox;
