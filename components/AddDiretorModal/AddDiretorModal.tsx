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
} from '@chakra-ui/react';
import useMovieModal from '@store/useMovieModal';
import { FC } from 'react';

const AddDiretorModal: FC = () => {
  const onClose = useMovieModal((modal) => modal.onClose);
  const isOpen = useMovieModal((modal) => modal.isOpen);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Director</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Input placeholder="First Name" mb={3} />
            <Input placeholder="Last Name" mb={3} />
            <Input placeholder="Image Url" mb={3} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddDiretorModal;
