import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';
import { API_URL } from '@constants/apiUrl';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
});

export default client;
