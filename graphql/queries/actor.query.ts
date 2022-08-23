import { gql } from '@apollo/react-hooks';

export const GET_ACTOR = gql`
  {
    actors {
      _id
      firstName
      lastName
      imageUrl
      imageHashUrl
    }
  }
`;

export const GET_ACTOR_BY_ID = gql`
  query getActorById($id: String!) {
    actor(_id: $id) {
      firstName
      lastName
      _id
      imageHashUrl
      imageUrl
    }
  }
`;
