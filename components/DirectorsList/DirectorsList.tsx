import { Alert, AlertIcon, Box, Grid, Image, Spinner, Text } from '@chakra-ui/react';
import { templateColumns } from '@components/MovieList/MovieList';
import useDirector from '@store/useDirector';
import { FC, useEffect } from 'react';

const Directors: FC = () => {
  const { setDirector: load, loading, directors } = useDirector();

  useEffect(() => load(), [load]);

  return (
    <Box mt="10" pb="10" transition="1s ease">
      {loading ? (
        <Spinner />
      ) : directors.length ? (
        <Grid gridTemplateColumns={templateColumns} gap={5} w="100%">
          {directors.map((director, i: number) => (
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
                  src={director.imageUrl}
                  alt={`${director.firstName} Poster`}
                />
                <Box p={2}>
                  <Text fontSize="lg" align="center">
                    {director.firstName} {director.lastName}
                  </Text>
                </Box>
              </Grid>
            </Box>
          ))}
        </Grid>
      ) : (
        <Alert status="error">
          <AlertIcon />
          No directors found
        </Alert>
      )}
    </Box>
  );
};

export default Directors;
