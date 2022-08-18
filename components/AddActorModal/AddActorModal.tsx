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
import { CREATE_ACTOR } from '@graphql/mutations/actor.mutation';
import useActor from '@store/useActor';
import useActorModal from '@store/useActorModal';
import { useUploadFile } from '@store/useUploadFile';
import { Actor } from 'graphql/types';
import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';

type ActorInput = Omit<Actor, '_id'>;

const AddActorModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const onClose = useActorModal((modal) => modal.onClose);
  const isOpen = useActorModal((modal) => modal.isOpen);
  const [createActor, { loading }] = useMutation(CREATE_ACTOR);
  const addActor = useActor((actor) => actor.addActor);
  const { file, uploadFile, uploading } = useUploadFile(({ file, uploadFile, loading }) => ({
    file,
    uploadFile,
    uploading: loading,
  }));

  const closeModal = (): void => {
    onClose();
    reset();
  };

  const isLoading = useMemo(() => uploading || loading, [uploading, loading]);

  const onSubmit = async (input: ActorInput): Promise<void> => {
    if (file) {
      try {
        await uploadFile('actors', async (imageUrl) => {
          const { data } = await createActor({
            variables: {
              input: {
                ...input,
                imageUrl,
              },
            },
          });
          if (data?.createActor) {
            addActor(data.createActor);
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
          <ModalHeader>Add Actor</ModalHeader>
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

export default AddActorModal;
