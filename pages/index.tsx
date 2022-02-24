import { Box, Grid, Heading, Image, Text, useColorMode } from '@chakra-ui/react';
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
                <Image src={movie.poster} alt={`${movie.title} poster`} />
                <Box bg={colorMode === 'light' ? 'blue.100' : 'blue.900'} p={2}>
                  <Text>{movie.title}</Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
