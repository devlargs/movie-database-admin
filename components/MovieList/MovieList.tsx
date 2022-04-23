import { useQuery } from '@apollo/react-hooks';
import { Alert, AlertIcon, Box, Grid, Image, Spinner, Tag, Text } from '@chakra-ui/react';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import { Movie } from '@graphql/types';
import getFontColor from '@utils/getFontColor';
import { FC } from 'react';

export const templateColumns = {
  base: 'repeat(1, 1fr)',
  sm: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
  xl: 'repeat(5, 1fr)',
};

const MovieList: FC = () => {
  const { data, loading, error } = useQuery<{
    movies: Movie[];
  }>(GET_MOVIES);

  if (error) {
    return (
      <Alert status="error" mt="8">
        <AlertIcon />
        Error
      </Alert>
    );
  }

  return (
    <>
      {loading ? (
        <Box d="grid" placeContent="center" h="2xl">
          <Spinner size="lg" />
        </Box>
      ) : (
        <Box mt="10" pb="10" transition="1s ease">
          {data?.movies.length ? (
            <Grid gridTemplateColumns={templateColumns} gap={5}>
              {data.movies.map((movie, idx) => {
                return (
                  <Box key={idx} data-testid="movie">
                    <Grid
                      gridRowGap="1rem"
                      height="100%"
                      gridTemplateRows="max-content 1fr"
                      bg="blue.900"
                      _hover={{
                        border: `2px solid white`,
                      }}
                      borderTopRightRadius="12px"
                      borderTopLeftRadius="12px"
                      cursor="pointer"
                      transition="0.25s ease-in-out"
                    >
                      <Image
                        borderTopRightRadius="12px"
                        borderTopLeftRadius="12px"
                        transition="0.2s ease"
                        src={movie.imageUrl}
                        alt={`${movie.title} Poster`}
                        minH="350px"
                      />
                      <Box p={2}>
                        <Text fontSize="lg">{movie.title}</Text>
                        {movie.genres.length && (
                          <Text fontSize="sm">
                            {movie.genres.map((genre) => (
                              <Tag key={genre._id} mr={2} mt="6px" bg={genre.color} color={getFontColor(genre.color)}>
                                {genre.name}
                              </Tag>
                            ))}
                          </Text>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                );
              })}
            </Grid>
          ) : (
            <Alert status="error">
              <AlertIcon />
              No movies found
            </Alert>
          )}
        </Box>
      )}
    </>
  );
};

export default MovieList;
