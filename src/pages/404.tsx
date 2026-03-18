import { motion } from "motion/react";
import { useTitle } from "usehooks";
import logo from "@/assets/images/logo.webp";
import { APP_NAME } from "@/utils/app";

const NotFound = () => {
	useTitle(`${APP_NAME} WebUI`);
	const imageUrl = "https://t.alcy.cc/moez";

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-br from-pink-50/30 via-rose-50/20 to-pink-100/30">
			{/* 主内容区域 */}
			<motion.div
				className="flex flex-col items-center gap-4"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/* Logo */}
				<div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-pink-100 to-rose-200 shadow-sm">
					<img src={logo} alt="logo" className="h-full w-full rounded-full object-cover" />
				</div>

				{/* 404 标题 */}
				<h1 className="bg-linear-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-6xl font-bold text-transparent">
					404
				</h1>

				{/* 副标题 */}
				<div className="text-center">
					<h2 className="text-xl font-medium text-pink-400">页面找不到了</h2>
					<p className="mt-1 text-sm text-pink-300/70">这个页面可能已经被移走或不存在了呢~</p>
				</div>

				{/* 图片区域 */}
				<div className="mt-4 w-80 overflow-hidden rounded-lg shadow-sm">
					<img src={imageUrl} className="h-full w-full object-cover" alt="Not Found" />
				</div>

				{/* 返回按钮 */}
				<button
					className="mt-4 rounded-full bg-linear-to-r from-pink-300 to-rose-400 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md"
					onClick={() => window.history.back()}
				>
					返回上一页
				</button>
			</motion.div>
		</div>
	);
};

export default NotFound;
