import { useQuery } from '@apollo/react-hooks';
import { GET_GENRES } from '@graphql/queries/genre.query';
import { FC } from 'react';

const RequestHelper: FC = () => {
  useQuery(GET_GENRES, {
    onCompleted: () => {
      //   console.log(genres);
    },
  });

  return <></>;
};

export default RequestHelper;
