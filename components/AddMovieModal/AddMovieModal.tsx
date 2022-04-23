import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  Image,
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
import DirectorsMultiSelect from '@components/DirectorsMultiSelect';
import GenresSelect from '@components/GenresSelect';
import { CREATE_MOVIE } from '@graphql/mutations/movie.mutation';
import { GET_MOVIES } from '@graphql/queries/movie.query';
import useMovieModal from '@store/useMovieModal';
import { FC, ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';

const AddMovieModal: FC = () => {
  const onClose = useMovieModal((modal) => modal.onClose);
  const isOpen = useMovieModal((modal) => modal.isOpen);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const imageUrl = watch('imageUrl');
  const [createMovie, { loading }] = useMutation(CREATE_MOVIE);

  const closeModal = (): void => {
    reset();
    onClose();
  };

  const onSubmit = async (data): Promise<void> => {
    const input = {
      ...data,
      directors: data.directors,
      genres: [data.genres],
    };

    try {
      await createMovie({
        variables: {
          input,
        },
        refetchQueries: [
          {
            query: GET_MOVIES,
            fetchPolicy: 'network-only',
          },
        ],
      });
    } finally {
      closeModal();
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
              render={({ field: { onChange, value } }): ReactElement => (
                <GenresSelect value={value} mb={3} onChange={onChange} />
              )}
            />
            {errors.genres && <Text variant="error">Genre is required</Text>}

            <Input placeholder="Image Url" mb={3} {...register('imageUrl', { required: true })} />
            {errors.imageUrl && <Text variant="error">Image Url is Required</Text>}
            {imageUrl && <Image src={imageUrl} alt="Director's Image" w={'100%'} h="400px" transition="1s ease-in" />}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" type="submit" isLoading={loading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddMovieModal;
