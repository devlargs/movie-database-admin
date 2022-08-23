import { useQuery } from '@apollo/react-hooks';
import { Box, chakra, Flex } from '@chakra-ui/react';
import { GET_MOVIE_BY_ID } from '@graphql/queries/movie.query';
import { useRouter } from 'next/router';
import { FC } from 'react';

const MovieById: FC = () => {
  const router = useRouter();
  const { data } = useQuery(GET_MOVIE_BY_ID, {
    variables: {
      id: router.query.id,
    },
  });

  return (
    <Box p={20}>
      <chakra.h1 mb={3}>{data?.movie.title}</chakra.h1>
      <input type="file" />
      <br />
      <br />
      <Flex>
        <img src={data?.movie.imageUrl} alt="poster" width={400} height={200} />
        <Box w={10} />
        {data?.movie?.imageHashUrl && <img src={data.movie.imageHashUrl} width={400} height={200} />}
      </Flex>
    </Box>
  );
};

export default MovieById;
