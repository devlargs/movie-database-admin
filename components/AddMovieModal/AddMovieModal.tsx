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
import DirectorSelect from '@components/DirectorSelect';
import GenresSelect from '@components/GenresSelect';
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
            <DirectorSelect
              mb={3}
              onChange={
                (e): void => console.log(e.target.value) // eslint-disable-line
              }
            />
            <GenresSelect
              mb={3}
              onChange={
                (e): void => console.log(e.target.value) // eslint-disable-line
              }
            />
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
