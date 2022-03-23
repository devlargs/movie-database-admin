import { chakra, Select, SelectProps, Spinner } from '@chakra-ui/react';
import useGenre from '@store/useGenre';
import { FC, useEffect } from 'react';

const GenresSelect: FC<SelectProps> = ({ ...rest }) => {
  const { setGenres: load, loading, genres } = useGenre();

  useEffect(() => load(), [load]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Select {...rest} placeholder="Select Genre">
          {genres.map((genre) => (
            <chakra.option key={genre._id} value={genre._id}>
              {genre.name}
            </chakra.option>
          ))}
        </Select>
      )}
    </>
  );
};

export default GenresSelect;
