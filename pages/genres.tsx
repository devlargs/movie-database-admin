import { Box, Flex, Heading } from '@chakra-ui/react';
import AddGenreForm from '@components/AddGenreForm';
import Container from '@components/Container';
import GenresTable from '@components/GenresTable';
import { FC } from 'react';

const Genres: FC = () => (
  <Container>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>Genres</Heading>
    </Flex>

    <Flex mt={8} w="100%">
      <Box w="50%" mr={8}>
        <GenresTable />
      </Box>
      <Box w="50%">
        <AddGenreForm />
      </Box>
    </Flex>
  </Container>
);

export default Genres;
