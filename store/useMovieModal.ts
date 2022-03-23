import create from 'zustand';

export type UseMovieModal = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const useMovieModal = create<UseMovieModal>((set) => ({
  isOpen: false,
  onClose: (): void => set(() => ({ isOpen: false })),
  onOpen: (): void => set(() => ({ isOpen: true })),
}));

export default useMovieModal;
