import { createContext, ReactNode, useState } from 'react'

interface PageContextType {
	title: string
	setTitle: (title: string) => void
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export const PageProvider = ({ children }: { children: ReactNode }) => {
	const [title, setTitle] = useState('')

	return <PageContext.Provider value={{ title, setTitle }}>{children}</PageContext.Provider>
}
