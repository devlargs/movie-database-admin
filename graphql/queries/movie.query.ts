import { gql } from '@apollo/react-hooks';

export const GET_MOVIES = gql`
  {
    movies {
      _id
      title
      genres {
        _id
        name
        color
      }
      imageUrl
    }
  }
`;
