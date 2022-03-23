import { Box, Flex, Heading } from '@chakra-ui/react';
import Container from '@components/Container';
import GenresTable from '@components/GenresTable';
import DEFAULTS from '@styles/defaults';
import { FC } from 'react';

const Genres: FC = () => (
  <Container>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>Genres</Heading>
    </Flex>

    <Flex w={DEFAULTS.containerMaxWidth} mt={8}>
      <Box flex={1} mr={8}>
        <GenresTable />
      </Box>
      <Box flex={1}>hehe</Box>
    </Flex>
  </Container>
);

export default Genres;
