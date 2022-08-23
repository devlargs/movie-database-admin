import { Alert, AlertIcon, Box, Grid, Tag, Text } from '@chakra-ui/react';
import useMovie from '@store/useMovie';
import getFontColor from '@utils/getFontColor';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const templateColumns = {
  base: 'repeat(1, 1fr)',
  sm: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
  xl: 'repeat(5, 1fr)',
};

const MovieList: FC = () => {
  const movies = useMovie((e) => e.movies);
  const router = useRouter();

  return (
    <Box mt="10" pb="10" transition="1s ease">
      {movies.length ? (
        <Grid gridTemplateColumns={templateColumns} gap={5}>
          {movies.map((movie) => {
            return (
              <Box
                key={movie._id}
                data-testid="movie"
                onClick={(): void => {
                  if (localStorage.NEXT) {
                    void router.push(`/movie/${movie._id}`);
                  }
                }}
              >
                <Grid
                  gridRowGap="1rem"
                  height="100%"
                  gridTemplateRows="max-content 1fr"
                  bg="blue.900"
                  _hover={{
                    border: `2px solid white`,
                  }}
                  cursor="pointer"
                  transition="0.25s ease-in-out"
                >
                  <Image
                    src={movie.imageUrl}
                    blurDataURL={`${movie.imageHashUrl}`}
                    height={350}
                    width={200}
                    alt={`${movie.title} Poster`}
                    placeholder="blur"
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
  );
};

export default MovieList;
