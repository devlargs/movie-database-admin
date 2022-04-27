import { Flex, Heading } from '@chakra-ui/react';
import ActorsList from '@components/ActorsList';
import Container from '@components/Container';
import { FC } from 'react';

const Actors: FC = () => (
  <Container>
    <Flex alignItems="center" justifyContent="space-between">
      <Heading>Actors</Heading>
    </Flex>
    <ActorsList />
  </Container>
);

export default Actors;
