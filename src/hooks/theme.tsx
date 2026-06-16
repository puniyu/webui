import { useContext } from 'react'

import { Context } from '@/contexts/theme'
export const useTheme = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useTheme must be used within a LayoutProvider')
    }
    return context
}
