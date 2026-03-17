import { createContext, ReactNode, useEffect, useState } from 'react'

import { isDesktop } from '@/utils/media'

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(true)
	const isDeskTop = isDesktop()

	useEffect(() => {
		setIsOpen(isDeskTop ?? false)
	}, [isDeskTop])

	const toggle = () => setIsOpen((prev) => !prev)
	const close = () => setIsOpen(false)

	return (
		<SidebarContext.Provider value={{ isOpen, toggle, close, setOpen: setIsOpen }}>
			{children}
		</SidebarContext.Provider>
	)
}

interface SidebarContextType {
	isOpen: boolean
	toggle: () => void
	close: () => void
	setOpen: (open: boolean) => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)
