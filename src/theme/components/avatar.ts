import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const Avatar = defineMultiStyleConfig({
  sizes: {
    sm: definePartsStyle({
      container: {
        h: '24px',
        w: '24px',
        shadow: 'base',
      },
    }),
    md: definePartsStyle({
      container: {
        h: '38px',
        w: '38px',
        shadow: 'lg',
      },
    }),
    lg: definePartsStyle({
      container: {
        h: '96px',
        w: '96px',
        shadow: 'lg',
      },
    }),
  },
});

export default Avatar;
