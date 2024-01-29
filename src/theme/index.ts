import { extendTheme } from '@chakra-ui/react';
import { styles } from './styles';
import { foundations } from './foundations';
import { components } from './components';

export const theme = extendTheme({
  styles,
  ...foundations,
  ...components,
});
