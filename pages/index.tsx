import { Button, Flex, Heading } from '@chakra-ui/react';
import AddMovieModal from '@components/AddMovieModal';
import Container from '@components/Container';
import MovieList from '@components/MovieList';
import client from '@graphql/client';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import { Movie } from '@graphql/types';
import useMovieModal from '@store/useMovieModal';
import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { FC } from 'react';

const Home: FC<{
  data: Array<
    Movie & {
      blurUrl: string;
    }
  >;
}> = ({ data }) => {
  const onOpen = useMovieModal((modal) => modal.onOpen);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Movies</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add movie
        </Button>
      </Flex>

      <MovieList data={data} />
      <AddMovieModal />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_MOVIES,
  });

  const plaiceholders = await Promise.all(
    data.movies.map(async (movie: Movie) => {
      const { base64 } = await getPlaiceholder(movie.imageUrl);

      return {
        ...movie,
        blurUrl: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      data: plaiceholders,
    },
  };
};

export default Home;
