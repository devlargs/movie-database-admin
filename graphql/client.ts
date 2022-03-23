import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql-movies-api.herokuapp.com/graphql',
});

export default client;
