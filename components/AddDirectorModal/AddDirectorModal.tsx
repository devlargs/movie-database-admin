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
import UploadFile from '@components/UploadFile';
import { CREATE_DIRECTOR } from '@graphql/mutations/director.mutation';
import useDirector from '@store/useDirector';
import useDirectorModal from '@store/useDirectorModal';
import { Director } from 'graphql/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type DirectorInput = Omit<Director, '_id'>;

const AddDirectorModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();
  const onClose = useDirectorModal((modal) => modal.onClose);
  const isOpen = useDirectorModal((modal) => modal.isOpen);
  const [createDirector, { loading }] = useMutation(CREATE_DIRECTOR);
  const addDirector = useDirector((director) => director.addDirector);
  const imageUrl = watch('imageUrl');

  const closeModal = (): void => {
    onClose();
    reset();
  };

  const onSubmit = async (input: DirectorInput): Promise<void> => {
    try {
      const { data } = await createDirector({
        variables: {
          input,
        },
      });
      if (data?.createDirector) {
        addDirector(data.createDirector);
      }
    } finally {
      closeModal();
    }
  };

  return (
    <Modal onClose={closeModal} isOpen={isOpen} isCentered closeOnOverlayClick={false}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Add Director</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="First Name" mb={3} {...register('firstName', { required: true })} />
            {errors.firstName && <Text variant="error">First Name is Required</Text>}

            <Input placeholder="Last Name" mb={3} {...register('lastName', { required: true })} />
            {errors.lastName && <Text variant="error">Last Name is Required</Text>}

            <Input mb={3} {...register('imageUrl', { required: true })} display="none" />
            <UploadFile
              label="Photo"
              callback={(url): void => setValue('imageUrl', url)}
              type="directors"
              errorMessage={errors.imageUrl && 'Image is Required!'}
            />

            {imageUrl && (
              <Image mt={3} src={imageUrl} alt="Director's Image" w={'100%'} h="400px" transition="1s ease-in" />
            )}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="teal" isLoading={loading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddDirectorModal;
