import { gql } from '@apollo/react-hooks';

export const CREATE_DIRECTOR = gql`
  mutation createDirector($input: CreateDirectorInput!) {
    createDirector(input: $input) {
      _id
      firstName
      lastName
      imageUrl
    }
  }
`;
