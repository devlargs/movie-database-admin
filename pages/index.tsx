import { Box, Grid, Heading, Image, Tag, Text, useColorMode } from '@chakra-ui/react';
import Container from '@components/Container';
import DUMMY_DATA from '@constants/dummyData';
import { FC } from 'react';

const Home: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Container>
      <Heading>Movies</Heading>

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
          {DUMMY_DATA.movies.map((movie, idx) => {
            return (
              <Box key={idx}>
                <Grid
                  gridRowGap="1rem"
                  height="100%"
                  gridTemplateRows="max-content 1fr"
                  bg={colorMode === 'light' ? 'blue.100' : 'blue.900'}
                  _hover={{
                    border: `2px solid ${colorMode === 'light' ? '#1A202C' : 'white'}`,
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
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                  />
                  <Box p={2}>
                    <Text fontSize="lg">{movie.title}</Text>
                    {movie.genre.length && (
                      <Text fontSize="sm">
                        {movie.genre.map((genre) => (
                          <Tag key={genre} mr={2}>
                            {genre}
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
    </Container>
  );
};

export default Home;
