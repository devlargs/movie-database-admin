import { Genre, Movie } from '@graphql/types';
import useGenre from '@store/useGenre';
import create from 'zustand';

type UseMovie = {
  movies: Movie[];
  loading: boolean;
  setMovies: (movie: Movie[]) => void;
  addMovie: (
    movie: Omit<Movie, 'genres'> & {
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
    const newMovie: Movie = {
      ...movie,
      genres: movie.genres.map((id) => genres.find((genre) => genre._id === id)) as Genre[],
    };

    set(() => ({ movies: [...get().movies, newMovie] }));
  },
}));

export default useMovie;
