import { useMutation } from '@apollo/react-hooks';
import { Box, Button, Input, Tag, Text, useToast } from '@chakra-ui/react';
import { CREATE_GENRE } from '@graphql/mutations/genre.mutation';
import { Genre } from '@graphql/types';
import useGenre from '@store/useGenre';
import getFontColor from '@utils/getFontColor';
import { FC, useMemo, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { useForm } from 'react-hook-form';

type AddGenre = Omit<Genre, '_id'>;

const AddGenreForm: FC = () => {
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();
  const [createGenre, { loading }] = useMutation(CREATE_GENRE);
  const addGenre = useGenre((genre) => genre.addGenre);
  const genres = useGenre((genre) => genre.genres);
  const existingColors = useMemo(() => {
    return genres.map((genre) => genre.color);
  }, [genres]);
  const toast = useToast();

  const color = watch('color');
  const name = watch('name');

  const onSubmit = async (input: AddGenre): Promise<void> => {
    // TODO - this must be handled on the backend side
    if (!existingColors.includes(input.color)) {
      try {
        const { data } = await createGenre({
          variables: {
            input,
          },
        });
        await fetch('/api/revalidate?url=genres');
        addGenre({
          ...input,
          ...data.createGenre,
        });
        toast({
          title: 'Successfully added genre',
          status: 'success',
          position: 'top-right',
        });
      } finally {
        reset();
      }
    } else {
      toast({
        title: 'Color already used by another genre',
        status: 'error',
        position: 'top-right',
      });
    }
  };

  return (
    <Box w="100%">
      <Text fontSize="20px" mb="4">
        Add Genre
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Name" mb={3} {...register('name', { required: true })} />
        {errors.name && <Text variant="error">Name is Required</Text>}

        <Input
          value={color}
          placeholder="Color"
          readOnly
          onClick={(): void => setOpenColorPicker(true)}
          mb="3"
          {...register('color', { required: true })}
        />
        {errors.color && <Text variant="error">Name is Required</Text>}

        {openColorPicker && (
          <SwatchesPicker
            width="100%"
            onChange={(picker): void => {
              setValue('color', picker.hex);
              setOpenColorPicker(false);
            }}
          />
        )}

        <Box>
          {name && color && (
            <>
              Preview:{' '}
              <Tag ml="2" bg={color} color={getFontColor(color)}>
                {name}
              </Tag>
            </>
          )}
        </Box>

        <Button type="submit" mt="4" isLoading={loading}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddGenreForm;
