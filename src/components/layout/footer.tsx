import { APP_DESC, APP_NAME } from '@/utils/app'

const Footer = () => {
	return (
		<>
			<div className='text-md flex flex-col items-center gap-1 px-4 py-6 font-[AlibabaPuHuiTi]'>
				<div className='font-medium text-gray-800'>{APP_NAME}</div>
				<div className='text-sm text-gray-700'>
					© {new Date().getFullYear()} · {APP_DESC}
				</div>
			</div>
		</>
	)
}

export default Footer
