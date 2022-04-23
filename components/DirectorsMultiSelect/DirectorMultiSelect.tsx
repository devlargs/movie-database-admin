import { Box } from '@chakra-ui/react';
import useDirector from '@store/useDirector';
import DEFAULTS from '@styles/defaults';
import { FC, useMemo } from 'react';
import Select from 'react-select';

const DirectorMultiSelect: FC<{
  onChange: (e) => void;
}> = ({ onChange }) => {
  const { directors, loading } = useDirector();

  const selectData = useMemo(() => {
    return directors.map((director) => ({
      value: director._id,
      label: `${director.firstName} ${director.lastName}`,
    }));
  }, [directors]);

  return (
    <Box mb="0.75rem">
      <Select
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

export default DirectorMultiSelect;
