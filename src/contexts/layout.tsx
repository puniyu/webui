import React, { createContext } from 'react'

import { SidebarProvider } from './sidebar'

export const Context = createContext(null)

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Context.Provider value={null}>
				<SidebarProvider>{children}</SidebarProvider>
			</Context.Provider>
		</>
	)
}
