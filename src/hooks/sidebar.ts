import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  setOpen: (open: boolean) => void;
}

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  setOpen: (open) => set({ isOpen: open }),
}));
