import { Box, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

const Card: FC = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      boxShadow={
        colorMode === 'light'
          ? 'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px'
          : 'lightgray 0px 0px 4px 0px'
      }
      //   borderRadius="0.75rem"
    >
      {children}
    </Box>
  );
};

export default Card;
