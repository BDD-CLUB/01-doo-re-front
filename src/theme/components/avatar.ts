import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const Avatar = defineMultiStyleConfig({
  sizes: {
    sm: definePartsStyle({
      container: {
        h: { base: '20px', lg: '22px', '2xl': '24px' },
        w: { base: '20px', lg: '22px', '2xl': '24px' },
        shadow: 'base',
      },
    }),
    md: definePartsStyle({
      container: {
        h: { base: '34px', lg: '36px', '2xl': '38px' },
        w: { base: '34px', lg: '36px', '2xl': '38px' },
        shadow: 'lg',
      },
      excessLabel: {
        bg: 'none',
        color: 'black',
        h: { base: '34px', lg: '36px', '2xl': '38px' },
        w: { base: '34px', lg: '36px', '2xl': '38px' },
        marginLeft: '4px',
      },
    }),
    lg: definePartsStyle({
      container: {
        h: { base: '88px', lg: '92px', '2xl': '96px' },
        w: { base: '88px', lg: '92px', '2xl': '96px' },
        shadow: 'lg',
      },
    }),
  },
});

export default Avatar;
