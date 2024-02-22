/* eslint-disable react/jsx-props-no-spreading */
import { Textarea, forwardRef } from '@chakra-ui/react';
import React from 'react';
import ResizeTextarea from 'react-textarea-autosize';

import { AutoResizeTextareaProps } from './type';

const AutoResizeTextarea = forwardRef(({ ref, ...props }: AutoResizeTextareaProps) => (
  <Textarea ref={ref} as={ResizeTextarea} overflow="hidden" w="100%" minH="unset" resize="none" {...props} />
));

export default AutoResizeTextarea;
