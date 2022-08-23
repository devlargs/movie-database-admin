import { Box } from '@chakra-ui/react';
import useGenre from '@store/useGenre';
import DEFAULTS from '@styles/defaults';
import { FC, useMemo } from 'react';
import Select from 'react-select';

const GenreMultiSelect: FC<{
  onChange: (e) => void;
}> = ({ onChange }) => {
  const { loading, genres } = useGenre();

  const selectData = useMemo(() => {
    return genres.map((genre) => ({
      value: genre._id,
      label: genre.name,
    }));
  }, [genres]);

  return (
    <Box mb="0.75rem">
      <Select
        placeholder="Genre"
        onChange={(e): void => onChange(e)}
        styles={DEFAULTS.select}
        isMulti
        options={selectData}
        isLoading={loading}
        isDisabled={loading}
        isClearable
      />
    </Box>
  );
};

export default GenreMultiSelect;
