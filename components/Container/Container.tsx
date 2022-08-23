import { Box, BoxProps } from '@chakra-ui/react';
import DEFAULTS from '@styles/defaults';
import { FC } from 'react';

const Container: FC<BoxProps> = ({ children, ...restProps }) => {
  return (
    <Box
      h={`calc(100vh - ${DEFAULTS.headerHeight})`}
      maxW={DEFAULTS.containerMaxWidth}
      px={DEFAULTS.containerPaddingX}
      m="auto"
      pt={10}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Container;
