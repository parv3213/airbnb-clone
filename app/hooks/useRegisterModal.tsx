import { create } from 'zustand'

interface RegisterModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log('1')
    set({ isOpen: true })
  },
  onClose: () => set({ isOpen: false }),
}))
