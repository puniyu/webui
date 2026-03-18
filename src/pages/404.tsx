import { useTitle } from 'usehooks'

import { APP_NAME } from '@/utils/app'

const NotFound = () => {
	useTitle(`${APP_NAME} WebUI`)
	const imageUrl = 'https://t.alcy.cc/moez'

	return (
		<div className='flex h-screen w-full items-center justify-center'>
			{/* 文本区域 */}
			<div className='relative flex h-9/10 w-9/10 flex-col items-center justify-center rounded-lg bg-white pt-5 shadow-2xl md:h-2/4 md:w-md dark:bg-black'>
				<div>
					<div className='text-3xl text-pink-300'>页面找不到了</div>
				</div>

				<div className='w-9/10 pt-5'>
					<img src={imageUrl} className='rounded-md' alt='Not Found' />
				</div>

				{/* 暗黑模式切换按钮 */}
				<div className='absolute top-4 right-4'></div>
			</div>
		</div>
	)
}

export default NotFound
