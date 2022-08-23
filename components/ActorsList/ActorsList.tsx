import { Alert, AlertIcon, Box, Grid, Spinner, Text } from '@chakra-ui/react';
import { templateColumns } from '@components/MovieList/MovieList';
import useActor from '@store/useActor';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Actors: FC = () => {
  const { loading, actors } = useActor();
  const router = useRouter();

  return (
    <Box mt="10" pb="10" transition="1s ease">
      {loading ? (
        <Spinner />
      ) : actors.length ? (
        <Grid gridTemplateColumns={templateColumns} gap={5} w="100%">
          {actors.map((actor, i: number) => (
            <Box
              key={i}
              onClick={(): void => {
                if (localStorage.NEXT) {
                  void router.push(`/actors/${actor._id}`);
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
                  src={actor.imageUrl}
                  blurDataURL={`${actor.imageHashUrl}`}
                  height={350}
                  width={200}
                  alt={`${actor.firstName} ${actor.lastName} Poster`}
                  placeholder="blur"
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
