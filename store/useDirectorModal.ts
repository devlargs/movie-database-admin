import create from 'zustand';

export type UseDirectorModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useDirectorModal = create<UseDirectorModal>((set) => ({
  isOpen: false,
  onClose: (): void => set(() => ({ isOpen: false })),
  onOpen: (): void => set(() => ({ isOpen: true })),
}));

export default useDirectorModal;
