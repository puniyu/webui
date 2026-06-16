import { useMediaQuery } from 'usehooks'

export const isMobile = () => {
	return useMediaQuery('(max-width: 768px)')
}

export const isDesktop = () => {
	return useMediaQuery('(min-width: 769px)')
}
