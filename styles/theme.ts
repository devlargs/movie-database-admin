import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import components from './components';
import styles from './global';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components });

export default theme;
