import client from '@graphql/client';
import { GET_DIRECTORS } from '@graphql/queries/director.query';
import { Director } from '@graphql/types';
import create from 'zustand';

type UseDirector = {
  directors: Director[];
  loading: boolean;
  setDirector: () => void;
  addDirector: (director: Director) => void;
};

const useDirector = create<UseDirector>((set, get) => ({
  directors: [],
  loading: false,
  setDirector: async (): Promise<void> => {
    set(() => ({ loading: true }));

    try {
      const { data } = await client.query<{
        directors: Director[];
      }>({
        query: GET_DIRECTORS,
      });

      set(() => ({
        directors: data.directors,
        loading: false,
      }));
    } finally {
      set(() => ({ loading: false }));
    }
  },
  addDirector: (director: Director): void =>
    set(() => ({
      directors: [...get().directors, director],
    })),
}));

export default useDirector;
