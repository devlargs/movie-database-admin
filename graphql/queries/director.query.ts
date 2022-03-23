import { gql } from '@apollo/react-hooks';

export const GET_DIRECTORS = gql`
  {
    directors {
      _id
      firstName
      lastName
      imageUrl
    }
  }
`;
