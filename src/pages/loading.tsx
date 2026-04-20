import { motion } from "motion/react";
import logo from "@/assets/images/logo.webp";
import { APP_NAME } from "@/utils/app";

const Loading = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-sakura-50 via-white to-sakura-100 px-6">
			<motion.div
				className="flex flex-col items-center gap-4"
				initial={{ opacity: 0, y: -16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					className="h-20 w-20 overflow-hidden rounded-full shadow-lg ring-4 ring-sakura-200 sm:h-24 sm:w-24"
					animate={{ scale: [1, 1.04, 1] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				>
					<img src={logo} alt="logo" className="h-full w-full object-cover" />
				</motion.div>

				<motion.h1
					className="bg-linear-to-r from-sakura-400 to-sakura-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
					animate={{ opacity: [0.7, 1, 0.7] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					{APP_NAME}
				</motion.h1>
			</motion.div>

			{/* 进度条 */}
			<div className="relative w-4/5 max-w-xs sm:max-w-sm">
				<div className="h-2 overflow-hidden rounded-full bg-sakura-100 shadow-inner sm:h-2.5">
					<motion.div
						className="h-full rounded-full bg-linear-to-r from-sakura-200 via-sakura-300 to-sakura-200"
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					/>
				</div>
				<motion.div
					className="absolute inset-0 overflow-hidden rounded-full"
					initial={{ x: "-100%" }}
					animate={{ x: "200%" }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
				>
					<div className="h-full w-16 bg-linear-to-r from-transparent via-white/70 to-transparent" />
				</motion.div>
			</div>

			{/* 加载文字 */}
			<div className="flex gap-0.5 text-sm font-medium text-sakura-300 sm:text-base">
				{Array.from("Loading...").map((char, i) => (
					<motion.span
						key={i}
						animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
					>
						{char}
					</motion.span>
				))}
			</div>
		</div>
	);
};

export default Loading;
