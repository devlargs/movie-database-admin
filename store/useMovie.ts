import { MovieData } from '@graphql/commons';
import create from 'zustand';

type UseMovie = {
  movies: MovieData[];
  loading: boolean;
  setMovies: (movie: MovieData[]) => void;
  //   addActor: (actor: Actor) => void;
  addMovie: (movie: MovieData) => void;
};

const useMovie = create<UseMovie>((set, get) => ({
  movies: [],
  loading: false,
  setMovies: async (movies): Promise<void> => set({ movies }),
  addMovie: (movie): void => {
    set(() => {
      const { movies } = get();
      return { movies: [...movies, movie] };
    });
  },
  //   addActor: (actor: Actor): void =>
  //     set(() => ({
  //       actors: [...get().actors, actor],
  //     })),
}));

export default useMovie;
