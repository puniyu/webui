import { motion } from 'motion/react'
import { useTitle } from 'usehooks'

import logo from '@/assets/images/logo.webp'
import { APP_NAME } from '@/utils/app'

const NotFound = () => {
	useTitle(`${APP_NAME} WebUI`)
	const imageUrl = 'https://t.alcy.cc/moez'

	return (
		<div className='flex min-h-screen w-screen items-center justify-center bg-petal-light'>
			<motion.div
				className='flex flex-col items-center gap-6 px-6 text-center md:gap-8 lg:gap-10'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-sakura-100 to-petal-dark shadow-md md:h-28 md:w-28 lg:h-32 lg:w-32'>
					<img src={logo} alt='logo' className='h-full w-full rounded-full object-cover' />
				</div>

				<div>
					<h2 className='lg:text-3xl text-sakura-400 font-[AlimamaFangYuanTi] text-xl md:text-2xl'>
						页面找不到了
					</h2>
					<p className='mt-2 text-sm text-sakura-300 md:text-base lg:text-lg font-[AlibabaPuHuiTi]'>
						这个页面可能已经被移走或不存在了呢~
					</p>
				</div>

				<div className='w-72 overflow-hidden rounded-2xl shadow-lg ring-2 ring-sakura-200 md:w-96 lg:w-120'>
					<img src={imageUrl} className='h-full w-full object-cover' alt='Not Found' />
				</div>

				<button
					className='rounded-full bg-linear-to-r from-sakura-400 to-sakura-500 px-8 py-3 text-base font-semibold text-white shadow-md transition-all hover:from-sakura-500 hover:to-sakura-600 hover:shadow-lg active:scale-95 md:px-10 md:py-4 md:text-lg'
					onClick={() => window.history.back()}
				>
					返回上一页
				</button>
			</motion.div>
		</div>
	)
}

export default NotFound
