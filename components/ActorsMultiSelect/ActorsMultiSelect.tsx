import { Box } from '@chakra-ui/react';
import useActor from '@store/useActor';
import DEFAULTS from '@styles/defaults';
import { FC, useEffect, useMemo } from 'react';
import Select from 'react-select';

const ActorMultiSelect: FC<{
  onChange: (e) => void;
}> = ({ onChange }) => {
  const { setActor: loadActors, loading, actors } = useActor();

  useEffect(() => loadActors(), [loadActors]);

  const selectData = useMemo(() => {
    return actors.map((actor) => ({
      value: actor._id,
      label: `${actor.firstName} ${actor.lastName}`,
    }));
  }, [actors]);

  return (
    <Box mb="0.75rem">
      <Select
        placeholder="Actor"
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

export default ActorMultiSelect;
