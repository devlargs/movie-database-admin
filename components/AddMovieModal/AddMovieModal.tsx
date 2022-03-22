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
  Select,
} from '@chakra-ui/react';
import useMovieModal from '@store/useMovieModal';
import { FC } from 'react';

const AddMovieModal: FC = () => {
  const onClose = useMovieModal((modal) => modal.onClose);
  const isOpen = useMovieModal((modal) => modal.isOpen);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Input placeholder="Title" mb={3} />
            <Select placeholder="Select Director" mb={3}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Select Genre" mb={3}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Input placeholder="Rating" type="number" mb={3} />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal">Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMovieModal;
