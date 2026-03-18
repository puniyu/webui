import React, { createContext } from 'react'

import { SidebarStore, ContextType } from '@/stores/sidebar'

export const Context = createContext<ContextType | null>(null)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const isOpen = SidebarStore((state) => state.isOpen)
	const openSidebar = SidebarStore((state) => state.openSidebar)
	const closeSidebar = SidebarStore((state) => state.closeSidebar)
	const toggleSidebar = SidebarStore((state) => state.toggleSidebar)

	return (
		<Context.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
			{children}
		</Context.Provider>
	)
}
