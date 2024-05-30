import { IconButton, Flex } from '@chakra-ui/react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

import { NavigationButtonProps } from './types';

const NavigationButton = ({ handlePrevClick, handleNextClick, handlePlusClick }: NavigationButtonProps) => {
  return (
    <Flex align="center" justify="flex-end" gap="4" w="100%">
      <IconButton
        shadow="base"
        aria-label=""
        icon={<BiChevronLeft />}
        onClick={handlePrevClick}
        size="icon_sm"
        variant="icon_white"
      />
      <IconButton
        shadow="base"
        aria-label=""
        icon={<BiChevronRight />}
        onClick={handleNextClick}
        size="icon_sm"
        variant="icon_white"
      />
      <IconButton
        shadow="base"
        aria-label=""
        icon={<BsPlus />}
        onClick={handlePlusClick}
        size="icon_md"
        variant="icon_orange_dark"
      />
    </Flex>
  );
};

export default NavigationButton;
