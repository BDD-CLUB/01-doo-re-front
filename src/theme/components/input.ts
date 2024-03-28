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
        rounded: '3xl',
        _focus: {
          borderColor: 'orange',
          bg: 'orange',
        },
      },
    }),
  },
});

export default Input;
