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

export const UPDATE_ACTOR = gql`
  mutation updateActor($id: String!, $input: UpdateActorInput!) {
    updateActor(_id: $id, input: $input) {
      _id
      imageHashUrl
      firstName
      lastName
    }
  }
`;
