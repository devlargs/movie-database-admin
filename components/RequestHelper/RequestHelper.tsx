import { useQuery } from '@apollo/react-hooks';
import { GET_GENRES } from '@graphql/queries/genre.query';
import { Genre } from '@graphql/types';
import { FC } from 'react';

const RequestHelper: FC = () => {
  useQuery<{
    genres: Genre[];
  }>(GET_GENRES, {
    onCompleted: () => {
      //   console.log(genres);
    },
  });

  return <></>;
};

export default RequestHelper;
