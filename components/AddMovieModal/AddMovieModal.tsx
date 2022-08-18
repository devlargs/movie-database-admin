import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import ActorsMultiSelect from '@components/ActorsMultiSelect';
import DirectorsMultiSelect from '@components/DirectorsMultiSelect';
import GenreMultiSelect from '@components/GenreMultiSelect';
import UploadFile from '@components/UploadFile';
import { CREATE_MOVIE } from '@graphql/mutations/movie.mutation';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import useMovieModal from '@store/useMovieModal';
import { useUploadFile } from '@store/useUploadFile';
import { FC, ReactElement, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddMovieModal: FC = () => {
  const onClose = useMovieModal((modal) => modal.onClose);
  const isOpen = useMovieModal((modal) => modal.isOpen);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [createMovie, { loading }] = useMutation(CREATE_MOVIE);
  const { file, uploadFile, uploading } = useUploadFile(({ file, uploadFile, loading }) => ({
    file,
    uploadFile,
    uploading: loading,
  }));
  const isLoading = useMemo(() => uploading || loading, [uploading, loading]);

  const closeModal = (): void => {
    reset();
    onClose();
  };

  const onSubmit = async (input): Promise<void> => {
    if (file) {
      try {
        await uploadFile('movies', async (imageUrl) => {
          await createMovie({
            variables: {
              input: {
                ...input,
                imageUrl,
              },
            },
            refetchQueries: [
              {
                query: GET_MOVIES,
                fetchPolicy: 'network-only',
              },
            ],
          });
        });
      } finally {
        closeModal();
      }
    }
  };

  return (
    <Modal onClose={closeModal} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Add Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Title" mb={3} {...register('title', { required: true })} />
            {errors.title && <Text variant="error">Title is required</Text>}

            <Controller
              control={control}
              name="directors"
              rules={{ required: true }}
              render={({ field: { onChange } }): ReactElement => (
                <DirectorsMultiSelect
                  onChange={(directors): void => {
                    const newDirectors = directors.map((director) => director.value);
                    onChange([...newDirectors]);
                  }}
                />
              )}
            />
            {errors.directors && <Text variant="error">Director is required</Text>}

            <Controller
              control={control}
              name="genres"
              rules={{ required: true }}
              render={({ field: { onChange } }): ReactElement => (
                <GenreMultiSelect
                  onChange={(genres): void => {
                    onChange(genres.map((genre) => genre.value));
                  }}
                />
              )}
            />
            {errors.genres && <Text variant="error">Genre is required</Text>}

            <Controller
              control={control}
              name="actors"
              rules={{ required: true }}
              render={({ field: { onChange } }): ReactElement => (
                <ActorsMultiSelect
                  onChange={(actors): void => {
                    onChange(actors.map((actor) => actor.value));
                  }}
                />
              )}
            />
            {errors.genres && <Text variant="error">Genre is required</Text>}

            <UploadFile
              label="Movie Poster"
              callback={(url): void => setValue('imageUrl', url)}
              errorMessage={errors.imageUrl && 'Movie Poster is Required!'}
              register={register('imageUrl', { required: true })}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddMovieModal;
