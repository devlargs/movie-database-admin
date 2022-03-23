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
  } = useForm();
  const onClose = useDirectorModal((modal) => modal.onClose);
  const isOpen = useDirectorModal((modal) => modal.isOpen);

  const imageUrl = watch('imageUrl');

  const onSubmit = (data: DirectorInput): void => {
    console.log(data); // eslint-disable-line
  };

  return (
    <Modal
      onClose={(): void => {
        onClose();
        reset();
      }}
      isOpen={isOpen}
      isCentered
      closeOnOverlayClick={false}
    >
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

            <Input placeholder="Image Url" mb={3} {...register('imageUrl', { required: true })} />
            {errors.imageUrl && <Text variant="error">Image Url is Required</Text>}
            {imageUrl && <Image src={imageUrl} alt="Director's Image" w={'100%'} h="400px" transition="1s ease-in" />}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddDirectorModal;
