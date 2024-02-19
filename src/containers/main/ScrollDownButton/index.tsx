import { IconButton, Text, Flex } from '@chakra-ui/react';
import { RiArrowDownLine } from 'react-icons/ri';

import { ScrollDownButtonProps } from '@/containers/main/ScrollDownButton/types';

const ScrollDownButton = ({ onClick }: ScrollDownButtonProps) => {
  return (
    <Flex pos="absolute" bottom="14" align="center" direction="column">
      <IconButton
        mb="9"
        _hover={{ transform: 'translateY(20%);' }}
        _active={{ opacity: '0.8' }}
        aria-label="scroll down"
        bgColor="green"
        icon={<RiArrowDownLine color="white" size="30px" />}
        isRound
        onClick={onClick}
        size="lg"
        variant="solid"
      />
      <Text textColor="white" fontSize="2xl" fontWeight="bold">
        Scroll down
      </Text>
    </Flex>
  );
};

export default ScrollDownButton;
