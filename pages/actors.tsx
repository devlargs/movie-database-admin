import { Button, Flex, Heading } from '@chakra-ui/react';
import ActorsList from '@components/ActorsList';
import AddActorModal from '@components/AddActorModal';
import Container from '@components/Container';
import useActorModal from '@store/useActorModal';
import { FC } from 'react';

const Actors: FC = () => {
  const onOpen = useActorModal((modal) => modal.onOpen);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>Actors</Heading>
        <Button colorScheme="teal" onClick={(): void => onOpen()}>
          Add Actors
        </Button>
      </Flex>

      <ActorsList />
      <AddActorModal />
    </Container>
  );
};

export default Actors;
