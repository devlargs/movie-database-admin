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
import UploadFile from '@components/UploadFile';
import { CREATE_DIRECTOR } from '@graphql/mutations/director.mutation';
import useDirector from '@store/useDirector';
import useDirectorModal from '@store/useDirectorModal';
import { useUploadFile } from '@store/useUploadFile';
import { Director } from 'graphql/types';
import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';

type DirectorInput = Omit<Director, '_id'>;

const AddDirectorModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const onClose = useDirectorModal((modal) => modal.onClose);
  const isOpen = useDirectorModal((modal) => modal.isOpen);
  const [createDirector, { loading }] = useMutation(CREATE_DIRECTOR);
  const addDirector = useDirector((director) => director.addDirector);
  const { file, uploadFile, uploading } = useUploadFile(({ file, uploadFile, loading }) => ({
    file,
    uploadFile,
    uploading: loading,
  }));

  const closeModal = (): void => {
    onClose();
    reset();
  };

  const isLoading = useMemo(() => {
    return uploading || loading;
  }, [uploading, loading]);

  const onSubmit = async (input: DirectorInput): Promise<void> => {
    if (file) {
      try {
        await uploadFile('directors', async (imageUrl) => {
          const { data } = await createDirector({
            variables: {
              input: {
                ...input,
                imageUrl,
              },
            },
          });
          if (data?.createDirector) {
            addDirector(data.createDirector);
          }
        });
      } finally {
        closeModal();
      }
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
            <Input
              placeholder="First Name"
              mb={3}
              {...register('firstName', { required: true })}
              disabled={isLoading}
            />
            {errors.firstName && <Text variant="error">First Name is Required</Text>}

            <Input placeholder="Last Name" mb={3} {...register('lastName', { required: true })} disabled={isLoading} />
            {errors.lastName && <Text variant="error">Last Name is Required</Text>}

            <UploadFile
              label="Photo"
              callback={(url): void => setValue('imageUrl', url)}
              errorMessage={errors.imageUrl && 'Image is Required!'}
              register={register('imageUrl', { required: true })}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddDirectorModal;
