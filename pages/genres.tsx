import { Box, Flex, Heading } from '@chakra-ui/react';
import AddGenreForm from '@components/AddGenreForm';
import Container from '@components/Container';
import GenresTable from '@components/GenresTable';
import client from '@graphql/client';
import { GET_GENRES } from '@graphql/queries/genre.query';
import { Genre } from '@graphql/types';
import useGenre from '@store/useGenre';
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';

const Genres: FC<{ data: Genre[] }> = ({ data }) => {
  const setGenres = useGenre((e) => e.setGenresV2);

  useEffect(() => {
    setGenres(data);
  }, [data, setGenres]);

  return (
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
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query<{
    genres: Genre[];
  }>({
    fetchPolicy: 'network-only',
    query: GET_GENRES,
  });

  return {
    props: {
      data: data.genres,
    },
  };
};

export default Genres;
