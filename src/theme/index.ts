import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';
import styles from './styles';

const breakpoints = {
  base: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1300px',
  '2xl': '1536px',
};

const theme = extendTheme({
  breakpoints,
  styles,
  ...foundations,
  components,
});

export default theme;
