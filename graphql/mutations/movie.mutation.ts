import { gql } from '@apollo/react-hooks';

export const CREATE_MOVIE = gql`
  mutation createMovie($input: CreateMovieInput!) {
    createMovie(input: $input) {
      _id
    }
  }
`;
