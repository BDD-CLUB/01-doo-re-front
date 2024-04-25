import { defineStyleConfig } from '@chakra-ui/react';

const Textarea = defineStyleConfig({
  defaultProps: {
    variant: 'default',
  },

  variants: {
    default: {
      bg: 'orange_light',
      color: 'white',
      rounded: '2xl',
      _focus: {
        borderColor: 'orange',
        bg: 'orange',
      },
    },
  },
});

export default Textarea;
