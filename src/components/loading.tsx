import { motion } from "motion/react";
import logo from "@/assets/logo.webp";

export default function Loading() { 
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-pink-50 to-white dark:from-gray-900 dark:to-black dark:via-gray-900">
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo 动画 */}
        <div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative">
              <div className="absolute -inset-3 blur-lg bg-linear-to-br from-pink-400 via-pink-300 to-pink-200 rounded-full">
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <img
                src={logo}
                className="size-40 relative z-10 rounded-full"
                alt="Logo"
              />
            </div>
          </motion.div>
        </div>

        {/* 文字动画 */}
        <div className="mt-3! flex">
          {"Loading".split("").map((char, i) => (
            <div
              key={i}
              className="text-2xl font-medium bg-linear-to-br from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent"
            >
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
              >
                <span>{char}</span>
              </motion.div>
            </div>
          ))}
          <div
            className="text-2xl font-medium bg-linear-to-br from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>...</span>
            </motion.div>
          </div>
        </div>

        {/* 进度条 */}
        <div className="mt-2.5 w-48 h-1.5 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700 relative">
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-pink-400 via-pink-300 to-pink-200 rounded-full"
            initial={{ left: "-100%" }}
            animate={{ left: ["-100%", "0%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        </div>

        <div className="text-xs mt-4 text-gray-400 dark:text-gray-500">
          正在加载资源...
        </div>
      </div>
    </div>
  );
}