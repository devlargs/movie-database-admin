import { Button, Flex, Heading } from '@chakra-ui/react';
import AddMovieModal from '@components/AddMovieModal';
import Container from '@components/Container';
import MovieList from '@components/MovieList';
import useMovieModal from '@store/useMovieModal';
import { FC } from 'react';

const Home: FC = () => {
  const onOpen = useMovieModal((modal) => modal.onOpen);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Movies</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add movie
        </Button>
      </Flex>

      <MovieList />
      <AddMovieModal />
    </Container>
  );
};

export default Home;
