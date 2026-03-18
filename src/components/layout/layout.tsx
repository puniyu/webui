import LayoutProvider from '@/contexts/layout'

import Footer from './footer'

export const Layout = () => {
	return (
		<>
			<LayoutProvider>
				<Footer />
			</LayoutProvider>
		</>
	)
}

export default Layout
