import {create} from 'zustand';

const useModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: (newState) => set({ isOpen: newState }),
}));

export default useModal;
