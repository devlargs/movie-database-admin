import { Button, Flex, Heading } from '@chakra-ui/react';
import ActorsList from '@components/ActorsList';
import AddActorModal from '@components/AddActorModal';
import Container from '@components/Container';
import client from '@graphql/client';
import { GET_ACTOR } from '@graphql/queries/actor.query';
import { Actor } from '@graphql/types';
import useActor from '@store/useActor';
import useActorModal from '@store/useActorModal';
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';

const Actors: FC<{ data: Actor[] }> = ({ data }) => {
  const onOpen = useActorModal((modal) => modal.onOpen);
  const setActors = useActor((e) => e.setActors);

  useEffect(() => {
    setActors(data);
  }, [data, setActors]);

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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ACTOR,
  });

  return {
    props: {
      data: data.actors,
      revalidate: 30,
    },
  };
};

export default Actors;
