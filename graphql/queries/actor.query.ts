import { gql } from '@apollo/react-hooks';

export const GET_ACTOR = gql`
  {
    actors {
      _id
      firstName
      lastName
      imageUrl
    }
  }
`;
