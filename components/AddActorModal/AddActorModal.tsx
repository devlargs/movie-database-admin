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
import { CREATE_ACTOR } from '@graphql/mutations/actor.mutation';
import useActor from '@store/useActor';
import useActorModal from '@store/useActorModal';
import { Actor } from 'graphql/types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type ActorInput = Omit<Actor, '_id'>;

const AddActorModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const onClose = useActorModal((modal) => modal.onClose);
  const isOpen = useActorModal((modal) => modal.isOpen);
  const [createActor, { loading }] = useMutation(CREATE_ACTOR);
  const addActor = useActor((actor) => actor.addActor);
  const imageUrl = watch('imageUrl');

  const closeModal = (): void => {
    onClose();
    reset();
  };

  const onSubmit = async (input: ActorInput): Promise<void> => {
    try {
      const { data } = await createActor({
        variables: {
          input,
        },
      });
      if (data?.createActor) {
        addActor(data.createActor);
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
          <ModalHeader>Add Actor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="First Name" mb={3} {...register('firstName', { required: true })} />
            {errors.firstName && <Text variant="error">First Name is Required</Text>}

            <Input placeholder="Last Name" mb={3} {...register('lastName', { required: true })} />
            {errors.lastName && <Text variant="error">Last Name is Required</Text>}

            <Input placeholder="Image Url" mb={3} {...register('imageUrl', { required: true })} />
            {errors.imageUrl && <Text variant="error">Image Url is Required</Text>}
            {imageUrl && <Image src={imageUrl} alt="Director's Image" w={'100%'} h="400px" transition="1s ease-in" />}
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

export default AddActorModal;
