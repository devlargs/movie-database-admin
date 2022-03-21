import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tag,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Container from '@components/Container';
import DUMMY_DATA from '@constants/dummyData';
import { FC } from 'react';

const Home: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Movies</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add movie
        </Button>
      </Flex>

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
                  bg="blue.900"
                  _hover={{
                    border: `2px solid '#1A202C'`,
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

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Input placeholder="Title" mb={3} />
              <Select placeholder="Select Director" mb={3}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select placeholder="Select Genre" mb={3}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input placeholder="Rating" type="number" mb={3} />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
