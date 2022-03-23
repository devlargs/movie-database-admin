import { gql } from '@apollo/react-hooks';

export const CREATE_GENRE = gql`
  mutation createGenre($input: CreateGenreInput!) {
    createGenre(input: $input) {
      _id
    }
  }
`;
