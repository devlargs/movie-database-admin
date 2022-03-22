import { useQuery } from '@apollo/react-hooks';
import { Box, Button, Flex, Grid, Heading, Image, Spinner, Tag, Text } from '@chakra-ui/react';
import AddMovieModal from '@components/AddMovieModal';
import Container from '@components/Container';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import useMovieModal from '@store/useMovieModal';
import getFontColor from '@utils/getFontColor';
import { FC } from 'react';

const Home: FC = () => {
  const onOpen = useMovieModal((modal) => modal.onOpen);
  const { data, loading } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Movies</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add movie
        </Button>
      </Flex>

      {loading ? (
        <Box d="grid" placeContent="center" h="2xl">
          <Spinner size="lg" />
        </Box>
      ) : (
        <>
          <Box mt="10">
            <Grid
              gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(5, 1fr)',
              }}
              gridAutoRows="1fr"
              gap={5}
            >
              {data?.movies?.length &&
                data.movies.map((movie, idx) => {
                  return (
                    <Box key={idx}>
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
                          alt={`${movie.title} poster`}
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
          </Box>
        </>
      )}

      <AddMovieModal />
    </Container>
  );
};

export default Home;
