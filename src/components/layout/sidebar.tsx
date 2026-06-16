import { isDesktop } from '@/utils/media'

const SideBar = () => {
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

export default SideBar
