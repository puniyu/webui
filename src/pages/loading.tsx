import { motion } from "motion/react";
import logo from "@/assets/images/logo.webp";
import { APP_NAME } from "@/utils/app";

const Loading = () => {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-linear-to-br from-pink-50 via-rose-50 to-pink-100">
			{/* Logo 区域 */}
			<motion.div
				className="mb-8 flex flex-col items-center gap-4"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{/* Logo 图标 */}
				<motion.div
					className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-pink-200 to-rose-300 shadow-lg shadow-pink-300/50"
					animate={{
						scale: [1, 1.05, 1],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<img src={logo} alt="logo" className="h-full w-full rounded-full object-cover" />
				</motion.div>

				{/* Logo 文字 */}
				<motion.h1
					className="bg-linear-to-r from-pink-400 to-rose-500 bg-clip-text text-2xl font-bold text-transparent"
					animate={{ opacity: [0.7, 1, 0.7] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					{APP_NAME}
				</motion.h1>
			</motion.div>

			{/* 进度条容器 */}
			<div className="relative w-80">
				{/* 背景轨道 */}
				<div className="h-3 overflow-hidden rounded-full bg-pink-200/50 shadow-inner">
					{/* 进度条 */}
					<motion.div
						className="h-full rounded-full bg-linear-to-r from-pink-200 via-rose-300 to-pink-200 shadow-lg shadow-pink-200/50"
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</div>

				{/* 闪光效果 */}
				<motion.div
					className="absolute inset-0 h-3 overflow-hidden rounded-full"
					initial={{ x: "-100%" }}
					animate={{ x: "200%" }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					<div className="h-full w-20 bg-linear-to-r from-transparent via-white/60 to-transparent" />
				</motion.div>

				{/* 装饰粒子 */}
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute -top-2 h-2 w-2 rounded-full bg-linear-to-br from-pink-300 to-rose-400 shadow-sm shadow-pink-300/50"
						style={{ left: `${20 + i * 30}%` }}
						animate={{
							y: [-5, -15, -5],
							opacity: [0, 1, 0],
							scale: [0.5, 1, 0.5],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							delay: i * 0.3,
						}}
					/>
				))}
			</div>

			{/* 加载文字 */}
			<div className="mt-6 flex gap-1 text-sm font-medium text-pink-400">
				{Array.from("Loading...").map((char, i) => (
					<motion.span
						key={i}
						animate={{
							y: [0, -8, 0],
							opacity: [0.5, 1, 0.5],
						}}
						transition={{
							duration: 1.2,
							repeat: Infinity,
							delay: i * 0.1,
							ease: "easeInOut",
						}}
					>
						{char}
					</motion.span>
				))}
			</div>
		</div>
	);
};

export default Loading;
