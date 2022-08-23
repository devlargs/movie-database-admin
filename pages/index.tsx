import { Button, Flex, Heading } from '@chakra-ui/react';
import AddMovieModal from '@components/AddMovieModal';
import Container from '@components/Container';
import MovieList from '@components/MovieList';
import client from '@graphql/client';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import { Movie } from '@graphql/types';
import useMovie from '@store/useMovie';
import useMovieModal from '@store/useMovieModal';
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';

const Movies: FC<{
  data: Movie[];
}> = ({ data }) => {
  const onOpen = useMovieModal((modal) => modal.onOpen);
  const setMovies = useMovie((e) => e.setMovies);

  useEffect(() => {
    setMovies(data);
  }, [data, setMovies]);

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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_MOVIES,
  });

  return {
    props: {
      data: data.movies,
      revalidate: 30,
    },
  };
};

export default Movies;
