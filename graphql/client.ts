import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4200/graphql',
});

export default client;
