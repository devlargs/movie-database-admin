import { chakra, Select, SelectProps, Spinner } from '@chakra-ui/react';
import useDirector from '@store/useDirector';
import { FC, useEffect } from 'react';

const DirectorSelect: FC<SelectProps> = ({ ...rest }) => {
  const { setDirector: loadDirectors, loading, directors } = useDirector();

  useEffect(() => loadDirectors(), [loadDirectors]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Select {...rest} placeholder="Select Director">
          {directors.map((director) => (
            <chakra.option key={director._id} value={director._id}>
              {director.firstName} {director.lastName}
            </chakra.option>
          ))}
        </Select>
      )}
    </>
  );
};

export default DirectorSelect;
