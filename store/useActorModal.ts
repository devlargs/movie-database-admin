import create from 'zustand';

export type UseActorModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useActorModal = create<UseActorModal>((set) => ({
  isOpen: false,
  onClose: (): void => set(() => ({ isOpen: false })),
  onOpen: (): void => set(() => ({ isOpen: true })),
}));

export default useActorModal;
