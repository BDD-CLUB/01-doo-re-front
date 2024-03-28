/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { Box, useRadio, Flex, Text } from '@chakra-ui/react';

import { StyledRadioProps } from '@/components/StyledRadio/types';
import color from '@/constants/color';
import textStyles from '@/theme/foundations/textStyles';

const StyledRadio = (props: StyledRadioProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Flex as="label" align="center" w="100%" h={12}>
      <input {...input} />
      <Flex
        {...checkbox}
        align="center"
        justify="center"
        w={6}
        h={6}
        mr={3}
        borderWidth="3px"
        borderColor={color.orange_light}
        borderRadius="full"
        _checked={{
          borderColor: color.orange,
        }}
        aspectRatio="1/1"
      >
        <Box
          {...checkbox}
          display="none"
          w={3}
          h={3}
          borderRadius="full"
          _checked={{
            display: 'block',
          }}
          bgColor={color.orange}
        />
      </Flex>
      <Flex
        {...checkbox}
        align="center"
        w="100%"
        h="100%"
        borderRadius="3xl"
        _checked={{
          bgColor: color.orange,
        }}
        bgColor={color.orange_light}
      >
        <Text p="3" textColor="white" {...textStyles.bold_xl}>
          {props.children}
        </Text>
      </Flex>
    </Flex>
  );
};

export default StyledRadio;
