import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Flex, IconButton, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import useGenre from '@store/useGenre';
import { FC } from 'react';

const GenresTable: FC = () => {
  const { genres } = useGenre();

  return genres.length ? (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Color</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {genres.map((genre) => (
          <Tr key={genre._id}>
            <Td>
              <b>{genre.name}</b>
            </Td>
            <Td>
              <Tag bg={genre.color}>{genre.color}</Tag>
            </Td>
            <Td>
              <Flex>
                <IconButton aria-label="edit-genre" colorScheme="blue" icon={<EditIcon />} mr={2} />
                <IconButton aria-label="delete-genre" colorScheme="red" icon={<DeleteIcon />} />
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <Alert status="error">
      <AlertIcon />
      No genres found
    </Alert>
  );
};

export default GenresTable;
