import { gql } from '@apollo/react-hooks';

export const GET_GENRES = gql`
  {
    genres {
      _id
      name
      color
    }
  }
`;
