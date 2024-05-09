import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
  },

  variants: {
    white: {
      bg: 'white',
      color: 'black',
      _hover: { bg: 'gray.75' },
      minW: '24',
    },
    orange: {
      bg: 'orange',
      color: 'white',
      _hover: { bg: 'orange_dark' },
      minW: '24',
    },
    orange_light: {
      bg: 'orange_light',
      color: 'white',
      _hover: { bg: 'orange' },
      minW: '24',
    },
    orange_dark: {
      bg: 'orange_dark',
      color: 'white',
      _hover: { bg: '#FF6347' },
      minW: '24',
    },
    transparent: {
      bg: 'transparent',
      color: 'white',
      _hover: { bg: 'transparent' },
    },
    icon_white: {
      bg: 'white',
      color: 'black',
      _hover: { bg: 'orange_light' },
    },
    icon_orange_dark: {
      bg: 'orange_dark',
      color: 'white',
      _hover: { bg: 'orange_light' },
    },
  },

  sizes: {
    icon_sm: {
      fontSize: { base: '16px', lg: '18px', '2xl': '20px' },
      h: { base: '20px', lg: '22px', '2xl': '24px' },
      w: { base: '20px', lg: '22px', '2xl': '24px' },
      borderRadius: 'full',
    },
    icon_md: {
      fontSize: { base: '20px', lg: '22px', '2xl': '24px' },
      h: { base: '34px', lg: '36px', '2xl': '38px' },
      w: { base: '34px', lg: '36px', '2xl': '38px' },
      borderRadius: 'full',
    },
    icon_lg: {
      fontSize: { base: '32px', lg: '36px', '2xl': '40px' },
      h: { base: '60px', lg: '64px', '2xl': '68px' },
      w: { base: '60px', lg: '64px', '2xl': '68px' },
      borderRadius: 'full',
    },
  },
});

export default Button;
