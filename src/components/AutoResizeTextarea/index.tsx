/* eslint-disable react/jsx-props-no-spreading */
import { Box, Flex, Textarea, forwardRef } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';

import { AutoResizeTextareaProps } from './type';

const AutoResizeTextarea = forwardRef(
  (
    { value, onChange, LeftIconButton, RightIconButton, ...props }: AutoResizeTextareaProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    const rightChildCount = RightIconButton?.props.children?.length ?? 1;
    const leftChildCount = LeftIconButton?.props.children?.length ?? 1;

    const rightPadding = RightIconButton ? `${38 * rightChildCount}px` : '16px';
    const leftPadding = LeftIconButton ? `${38 * leftChildCount}px` : '16px';

    return (
      <Flex pos="relative" w="100%">
        <Box pos="absolute" zIndex="1" left="0" alignContent="center" h="40px">
          {LeftIconButton}
        </Box>
        <Box w="100%">
          <Textarea
            ref={ref}
            as={ResizeTextarea}
            w="100%"
            minH="40px"
            py="2"
            pr={rightPadding}
            pl={leftPadding}
            resize="none"
            onChange={onChange}
            value={value}
            {...props}
          />
        </Box>
        <Box pos="absolute" zIndex="1" right="0" alignContent="center" h="40px">
          {RightIconButton}
        </Box>
      </Flex>
    );
  },
);
export default AutoResizeTextarea;
