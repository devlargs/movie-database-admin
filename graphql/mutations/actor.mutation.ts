import { gql } from '@apollo/react-hooks';

export const CREATE_ACTOR = gql`
  mutation createActor($input: CreateActorInput!) {
    createActor(input: $input) {
      _id
      lastName
      firstName
      imageUrl
    }
  }
`;
