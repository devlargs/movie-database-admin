import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { templateColumns } from '@components/MovieList/MovieList';
import { FC } from 'react';

type Props = {
  _id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

const Directors: FC = () => {
  const data: Props[] = [
    {
      _id: '62387f5422f6f09f50376de0',
      firstName: 'Martin',
      lastName: 'Scorsese',
      imageUrl: 'https://cdn.britannica.com/76/156176-050-90A36E79/Martin-Scorsese-2008.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
    {
      _id: '6238812622f6f09f50376dfd',
      firstName: 'Christopher',
      lastName: 'Nolan',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg',
    },
  ];

  return (
    <Box mt="10" transition="1s ease">
      <Grid gridTemplateColumns={templateColumns} gap={5} w="100%">
        {data.length &&
          data.map((director, i: number) => (
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
    </Box>
  );
};

export default Directors;
