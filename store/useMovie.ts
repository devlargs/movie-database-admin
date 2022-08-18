import { MovieData } from '@graphql/commons';
import { Genre } from '@graphql/types';
import useGenre from '@store/useGenre';
import create from 'zustand';

type UseMovie = {
  movies: MovieData[];
  loading: boolean;
  setMovies: (movie: MovieData[]) => void;
  addMovie: (
    movie: Omit<MovieData, 'genres'> & {
      genres: string[];
    }
  ) => void;
};

const useMovie = create<UseMovie>((set, get) => ({
  movies: [],
  loading: false,
  setMovies: async (movies): Promise<void> => set({ movies }),
  addMovie: (movie): void => {
    const genres = useGenre.getState().genres;
    const newMovie: MovieData = {
      ...movie,
      genres: movie.genres.map((id) => genres.find((genre) => genre._id === id)) as Genre[],
    };

    set(() => ({ movies: [...get().movies, newMovie] }));
  },
}));

export default useMovie;
