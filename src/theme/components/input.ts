import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const Input = defineMultiStyleConfig({
  defaultProps: {
    variant: 'default',
  },

  variants: {
    default: definePartsStyle({
      field: {
        bg: 'orange_light',
        color: 'white',
        rounded: '2xl',
        _groupFocusWithin: {
          borderColor: 'orange',
          bg: 'orange',
        },
      },
      element: {
        h: '40px',
        w: { base: '34px', lg: '36px', '2xl': '38px' },
      },
    }),
  },
});

export default Input;
