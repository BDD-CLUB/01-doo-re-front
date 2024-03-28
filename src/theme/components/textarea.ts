import { defineStyleConfig } from '@chakra-ui/react';

const Textarea = defineStyleConfig({
  defaultProps: {
    variant: 'default',
  },

  variants: {
    default: {
      bg: 'orange_light',
      color: 'white',
      rounded: '3xl',
      _focus: {
        borderColor: 'orange',
        bg: 'orange',
      },
    },
  },
});

export default Textarea;
