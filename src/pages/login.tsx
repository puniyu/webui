import { useState } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

import logo from '@/assets/images/logo.webp'
import { isDesktop } from '@/utils/media'

const useLoginState = () => {
	const [showPwd, setShowPwd] = useState(false)
	const [remember, setRemember] = useState(false)
	return { showPwd, setShowPwd, remember, setRemember }
}

const FormFields = ({
	showPwd,
	setShowPwd,
	remember,
	setRemember,
}: ReturnType<typeof useLoginState>) => (
	<div className='flex flex-col gap-5'>
		<div className='flex flex-col gap-2'>
			<label className='text-sm font-medium text-sakura-400'>用户名</label>
			<input
				type='text'
				placeholder='请输入用户名'
				className='w-full rounded-xl border-2 border-sakura-100 bg-sakura-50/50 px-4 py-3 text-sakura-500 placeholder-sakura-200 transition-colors outline-none focus:border-sakura-300 focus:bg-white'
			/>
		</div>

		<div className='flex flex-col gap-2'>
			<label className='text-sm font-medium text-sakura-400'>密码</label>
			<div className='relative'>
				<input
					type={showPwd ? 'text' : 'password'}
					placeholder='请输入密码'
					className='w-full rounded-xl border-2 border-sakura-100 bg-sakura-50/50 px-4 py-3 pr-12 text-sakura-500 placeholder-sakura-200 transition-colors outline-none focus:border-sakura-300 focus:bg-white'
				/>
				<button
					type='button'
					onClick={() => setShowPwd((v) => !v)}
					className='absolute top-1/2 right-4 -translate-y-1/2 text-sakura-300 transition-colors hover:text-sakura-400'
				>
					{showPwd ? <HiEyeSlash size={18} /> : <HiEye size={18} />}
				</button>
			</div>
		</div>

		<button
			type='button'
			onClick={() => setRemember((v) => !v)}
			className='group flex w-fit cursor-pointer items-center gap-2 select-none'
		>
			<span
				className={`flex h-4 w-4 items-center justify-center rounded border-2 transition-all ${remember ? 'border-sakura-300 bg-sakura-300' : 'border-sakura-200 bg-sakura-50/50 group-hover:border-sakura-300'}`}
			>
				{remember && (
					<svg className='h-2.5 w-2.5 text-white' viewBox='0 0 10 8' fill='none'>
						<path
							d='M1 4l2.5 2.5L9 1'
							stroke='currentColor'
							strokeWidth='1.8'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				)}
			</span>
			<span className='text-sm text-sakura-300 transition-colors group-hover:text-sakura-400'>
				记住我
			</span>
		</button>
	</div>
)

const Desktop = () => {
	const state = useLoginState()
	return (
		<div className='flex w-full max-w-sm overflow-hidden rounded-3xl shadow-xl md:max-w-3xl lg:max-w-5xl'>
			{/* 左栏 */}
			<div className='flex w-1/2 flex-col items-center justify-center gap-6 bg-linear-to-b from-sakura-50 to-sakura-100 px-12 py-16'>
				<div className='h-60 w-60 overflow-hidden rounded-full shadow-lg ring-4 ring-sakura-200 lg:h-64 lg:w-64'>
					<img src={logo} alt='logo' className='h-full w-full object-cover' />
				</div>
				<p className='text-base font-medium tracking-wide text-sakura-400 lg:text-lg'>
					欢迎回来，请登录
				</p>
			</div>

			{/* 右栏 */}
			<div className='flex w-1/2 flex-col justify-center gap-7 bg-white px-14 py-12 lg:px-20'>
				<div>
					<h1 className='text-3xl font-bold text-sakura-400 lg:text-4xl'>登录</h1>
					<p className='mt-1.5 text-sm text-sakura-300'>请输入你的账号信息</p>
				</div>
				<FormFields {...state} />
				<button
					type='button'
					className='w-full rounded-xl bg-linear-to-r from-sakura-300 to-sakura-400 py-3 text-base font-semibold text-white shadow-sm transition-all hover:from-sakura-400 hover:to-sakura-500 active:scale-[0.98]'
				>
					登录
				</button>
			</div>
		</div>
	)
}

const Mobile = () => {
	const state = useLoginState()
	return (
		<div className='mx-auto w-11/12 rounded-3xl bg-white shadow-xl px-8 py-10 flex flex-col gap-5 font-[AlibabaPuHuiTi]'>
			<div className='flex flex-col items-center gap-2'>
				<div className='h-40 w-40 overflow-hidden rounded-full shadow ring-2 ring-sakura-200'>
					<img src={logo} alt='logo' className='h-full w-full object-cover' />
				</div>
				<p className='text-md font-medium text-sakura-400'>欢迎回来，请登录</p>
			</div>
			<div>
				<h1 className='text-2xl font-bold text-sakura-400'>登录</h1>
				<p className='mt-1 text-sm text-sakura-300'>请输入你的账号信息</p>
			</div>
			<FormFields {...state} />
			<button
				type='button'
				className='w-full rounded-xl bg-linear-to-r from-sakura-300 to-sakura-400 py-3 text-base font-semibold text-white shadow-sm transition-all hover:from-sakura-400 hover:to-sakura-500 active:scale-[0.98]'
			>
				登录
			</button>
		</div>
	)
}

const Login = () => {
	const isDeskTop = isDesktop()

	return (
		<div className='flex min-h-screen w-screen items-center justify-center bg-petal-light'>
			{isDeskTop ? <Desktop /> : <Mobile />}
		</div>
	)
}

export default Login
