import { isDesktop } from '@/utils/media'
const NavBar = () => {
	const isDeskTop = isDesktop()

	return isDeskTop ? <Desktop /> : <Mobile />
}

const Desktop = () => {
	return (
		<>
			<div></div>
		</>
	)
}

const Mobile = () => {
	return (
		<>
			<div></div>
		</>
	)
}

export default NavBar
