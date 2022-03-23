import client from '@graphql/client';
import { GET_GENRES } from '@graphql/queries/genre.query';
import { Genre } from '@graphql/types';
import create from 'zustand';

type UseGenre = {
  genres: Genre[];
  loading: boolean;
  setGenres: () => void;
};

const useGenre = create<UseGenre>((set) => ({
  genres: [],
  loading: false,
  setGenres: async (): Promise<void> => {
    set(() => ({ loading: true }));

    try {
      const { data } = await client.query<{
        genres: Genre[];
      }>({
        query: GET_GENRES,
      });

      set(() => ({
        genres: data.genres,
        loading: false,
      }));
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));

export default useGenre;
