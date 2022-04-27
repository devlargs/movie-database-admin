import { Alert, AlertIcon, Box, Grid, Image, Spinner, Text } from '@chakra-ui/react';
import { templateColumns } from '@components/MovieList/MovieList';
import useActor from '@store/useActor';
import { FC, useEffect } from 'react';

const Actors: FC = () => {
  const { setActor: load, loading, actors } = useActor();

  useEffect(() => load(), [load]);

  return (
    <Box mt="10" pb="10" transition="1s ease">
      {loading ? (
        <Spinner />
      ) : actors.length ? (
        <Grid gridTemplateColumns={templateColumns} gap={5} w="100%">
          {actors.map((actor, i: number) => (
            <Box key={i}>
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
                  h="320px"
                  w="100%"
                  src={actor.imageUrl}
                  alt={`${actor.firstName} Poster`}
                />
                <Box p={2}>
                  <Text fontSize="lg" align="center">
                    {actor.firstName} {actor.lastName}
                  </Text>
                </Box>
              </Grid>
            </Box>
          ))}
        </Grid>
      ) : (
        <Alert status="error">
          <AlertIcon />
          No actors found
        </Alert>
      )}
    </Box>
  );
};

export default Actors;
