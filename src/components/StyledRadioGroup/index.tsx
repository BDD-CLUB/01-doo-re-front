/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { Flex, HStack, useRadioGroup, Text } from '@chakra-ui/react';

import { StyledRadioGroupProps } from '@/components/StyledRadioGroup/types';
import textStyles from '@/theme/foundations/textStyles';

const StyledRadioGroup = ({ title, name, defaultValue, value, onChange, children, w }: StyledRadioGroupProps) => {
  if (defaultValue && children.find((child) => child.props.value === defaultValue) === undefined) {
    throw new Error('기본값이 선택지에 없습니다.');
  }

  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    value,
    onChange,
  });

  const group = getRootProps();

  return (
    <Flex direction="column" rowGap="3" w={w} m="20">
      <Text {...textStyles.bold_xl}>{title}</Text>
      <HStack {...group}>
        {children.map((child) => (
          <child.type key={child.props.value} {...getRadioProps({ value: child.props.value })}>
            {child.props.children}
          </child.type>
        ))}
      </HStack>
    </Flex>
  );
};

export default StyledRadioGroup;
