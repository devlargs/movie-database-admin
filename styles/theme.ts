import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import styles from './global';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

export default theme;
