import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import logo from "/logo.webp";

export default function Loading() {
  return (
    <Box className="w-full h-screen flex items-center justify-center bg-linear-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden">
      {/* 背景装饰 */}
      {[
        {
          pos: "top-1/4 left-1/4",
          size: "w-64 h-64",
          color: "bg-pink-200/40 dark:bg-pink-500/20",
        },
        {
          pos: "bottom-1/4 right-1/4",
          size: "w-48 h-48",
          color: "bg-purple-200/40 dark:bg-purple-500/20",
        },
      ].map((bg, i) => (
        <motion.div
          key={i}
          className={`absolute ${bg.pos} ${bg.size} ${bg.color} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <Box className="relative z-10 flex flex-col items-center">
        {/* Logo 动画 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Box className="relative">
            <motion.div
              className="absolute -inset-3 rounded-full blur-lg"
              style={{
                background:
                  "linear-gradient(135deg, #ffa8c5, #ffb6c1, #ffc4d6)",
              }}
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src={logo}
              className="size-20! relative z-10"
              rounded="full"
            />
          </Box>
        </motion.div>

        {/* 文字动画 */}
        <Box className="flex mt-3!">
          {"Loading".split("").map((char, i) => (
            <motion.span
              key={i}
              className="text-2xl font-medium"
              style={{
                backgroundImage: "linear-gradient(135deg, #ff8fb3, #ffa8c5)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-2xl font-medium"
            style={{
              backgroundImage: "linear-gradient(135deg, #ff8fb3, #ffa8c5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ...
          </motion.span>
        </Box>

        {/* 进度条 */}
        <Box className="mt-2.5! w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #ffa8c5, #ffb6c1, #ffc4d6)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </Box>

        <Text className="mt-4! text-xs text-gray-400 dark:text-gray-500">
          正在加载资源...
        </Text>
      </Box>
    </Box>
  );
}
