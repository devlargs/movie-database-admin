import { Box } from '@chakra-ui/react';
import DEFAULTS from '@styles/defaults';
import { FC } from 'react';

const Container: FC = ({ children }) => {
  return (
    <Box h={`calc(100vh - ${DEFAULTS.headerHeight})`} maxW={DEFAULTS.containerMaxWidth} m="auto" pt={10}>
      {children}
    </Box>
  );
};

export default Container;
