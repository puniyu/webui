import React, { createContext } from 'react'

import { SidebarStore, ContextType } from '@/stores/sidebar'

export const Context = createContext<ContextType | null>(null)

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const store = SidebarStore((state) => state)
	const { isOpen, openSidebar, closeSidebar, toggleSidebar } = store

	return (
		<Context.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
			{children}
		</Context.Provider>
	)
}
export default SidebarProvider
