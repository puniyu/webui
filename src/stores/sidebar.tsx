import { create } from 'zustand'

export type State = {
	isOpen: boolean
}
export type Action = {
	openSidebar: () => void
	closeSidebar: () => void
	toggleSidebar: () => void
}

export type ContextType = State & Action

export const SidebarStore = create<ContextType>((set) => ({
	isOpen: false,
	openSidebar: () => set({ isOpen: true }),
	closeSidebar: () => set({ isOpen: false }),
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default SidebarStore
