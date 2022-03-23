import { Button, Flex, Heading } from '@chakra-ui/react';
import AddDirectorModal from '@components/AddDirectorModal';
import Container from '@components/Container';
import DirectorsList from '@components/DirectorsList';
import useDirectorModal from '@store/useDirectorModal';
import { FC } from 'react';

const Directors: FC = () => {
  const onOpen = useDirectorModal((modal) => modal.onOpen);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Directors</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add Directors
        </Button>
      </Flex>

      <DirectorsList />
      <AddDirectorModal />
    </Container>
  );
};

export default Directors;
