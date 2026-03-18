import { useContext } from 'react'

import { Context } from '@/contexts/sidebar'
export const useSidebar = () => {
	const context = useContext(Context)
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider')
	}
	return context
}
