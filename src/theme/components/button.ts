import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  sizes: {
    icon_sm: {
      fontSize: 'xl',
      h: '24px',
      w: '24px',
      borderRadius: 'full',
    },
    icon_md: {
      fontSize: '2xl',
      h: '38px',
      w: '38px',
      borderRadius: 'full',
    },
    icon_lg: {
      fontSize: '3xl',
      h: '68px',
      w: '68px',
      borderRadius: 'full',
    },
  },
});

export default Button;
