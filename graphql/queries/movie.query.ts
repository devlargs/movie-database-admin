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

export const GET_MOVIE_BY_ID = gql`
  query getMovieById($id: String!) {
    movie(_id: $id) {
      title
      _id
      imageUrl
      imageHashUrl
    }
  }
`;
