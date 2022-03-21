import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const Card: FC = ({ children }) => <Box boxShadow="lightgray 0px 0px 4px 0px">{children}</Box>;

export default Card;
