import { create } from 'zustand'

interface LoginModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log('1')
    set({ isOpen: true })
  },
  onClose: () => set({ isOpen: false }),
}))
