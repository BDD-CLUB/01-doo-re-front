import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import components from './components';
import foundations from './foundations';
import styles from './styles';

const theme = extendTheme({
  breakpoints,
  styles,
  ...foundations,
  components,
});

export default theme;
