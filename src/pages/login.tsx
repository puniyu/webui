import {
  Box,
  Heading,
  Text,
  Input,
  Image,
  InputGroup,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { IoKeyOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SplitText from "@/components/SplitText";
import { APP_NAME, DOCS_URL, REPO_URL } from "@/utils/app";
import { FiBookOpen, FiGithub } from "react-icons/fi";
import { camelCase } from "es-toolkit/string";

// TODO: 登录功能实现
export default function Login() {
  useEffect(() => {
    document.title = `登录 - ${APP_NAME} WebUI`;
  },[]);

  const [yiyan, setYiyan] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (yiyan !== null) return;
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    Promise.all([axios.get("https://v1.hitokoto.cn"), delay(500)])
      .then(([res]) => setYiyan(res.data.hitokoto))
      .catch(() => setYiyan("加载一言失败"));
  }, [yiyan]);

  return (
    <Box className="w-full min-h-dvh py-8 flex justify-center items-center bg-linear-to-br from-pink-100 via-pink-100 to-purple-100 dark:from-gray-900 dark:via-black dark:to-gray-900 relative">

      <Box className="px-4 md:px-0">
        {/* 表单主体内容 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Box className="p-6 md:p-8 w-80 md:w-md mx-auto rounded-2xl md:rounded-3xl relative bg-white dark:bg-black/30 border border-pink-200/60 dark:border-white/10 shadow-lg shadow-pink-100 dark:shadow-pink-200/20 dark:backdrop-blur-2xl dark:backdrop-saturate-150">
            {/* 暗黑模式切换按钮 */}
            <motion.div
              className="absolute top-3 right-3 md:top-4 md:right-4"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <ColorModeButton />
            </motion.div>

            {/* 头像区域 */}
            <Box className="flex justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box className="relative">
                  <motion.div
                    className="absolute -inset-2 rounded-full blur-md bg-linear-135 from-pink-300 via-pink-200 to-pink-100"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Image
                    src={logo}
                    className="size-20 md:size-28 relative z-10"
                    rounded="full"
                    border="3px solid"
                    borderColor="white"
                  />
                </Box>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <Heading
                as="h1"
                className="text-center mt-3 md:mt-4 text-2xl md:text-4xl font-bold font-[DouyinSans] text-[#FF9ECD] dark:text-[#FFB8DA]"
              >
                {camelCase(APP_NAME)}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Text className="text-center mt-2 md:mt-3 text-sm md:text-base text-pink-300 dark:text-pink-400 font-normal font-[AlibabaPuHuiTi]">
                欢迎回来, 请输入您的访问令牌以继续
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-4 md:mt-6"
            >
              <Text className="text-pink-400 dark:text-pink-300/80 mb-1.5 md:mb-2 text-md md:text-base font-medium font-[AlibabaPuHuiTi]">
                访问令牌
              </Text>
              <InputGroup
                startElement={<IoKeyOutline className="text-pink-400" />}
                endElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-pink-300 hover:text-pink-500 transition-colors cursor-pointer"
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                }
              >
                <Input
                  placeholder="输入您的令牌..."
                  type={showPassword ? "text" : "password"}
                  className="rounded-xl transition-all font-normal font-[AlibabaPuHuiTi] border-2 border-[#FFD1E3] dark:border-[#FF9ECD]/30 bg-[#FFF5F8]! dark:bg-[#FF9ECD]/5! focus:border-[#FF9ECD]! dark:focus:border-[#FFB8DA]! focus:shadow-md focus:shadow-[#FFD1E3]/50! focus:outline-none placeholder:text-[#FFB8DA]"
                />
              </InputGroup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="w-full mt-5! md:mt-6!"
            >
              <Button
                className="group w-full py-3.5 md:py-4 rounded-xl font-medium text-sm md:text-base border-none text-white! hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                background="#f9a8d4"
              >
                <Text className="flex items-center justify-center gap-1.5">
                  登录
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </Text>
              </Button>
            </motion.div>

            {/* 一言 */}
            <Box
              className="mt-5 md:mt-6 min-h-10 flex items-center justify-center cursor-pointer"
              onClick={() => setYiyan(null)}
              title="点击刷新"
            >
              {yiyan === null ? (
                <Flex gap={1.5}>
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-pink-300"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay }}
                    />
                  ))}
                </Flex>
              ) : (
                <SplitText
                  text={yiyan}
                  delay={50}
                  splitType="words"
                  className="text-pink-300 dark:text-pink-400 text-sm text-center font-[AlibabaPuHuiTi]"
                />
              )}
            </Box>
          </Box>
        </motion.div>

        {/* 底部信息 */}
        <motion.div
          className="pt-6 md:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Flex justifyContent="center" alignItems="center" gap={5}>
            <Link
              href={REPO_URL}
              target="_blank"
              _hover={{ textDecoration: "none" }}
              className="text-pink-300 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <Flex alignItems="center" gap={1.5}>
                <FiGithub className="size-5" />
                <Text className="text-base font-[AlibabaPuHuiTi]">GitHub</Text>
              </Flex>
            </Link>
            <Box className="w-px h-4 bg-pink-200 dark:bg-pink-700/40" />
            <Link
              href={DOCS_URL}
              target="_blank"
              _hover={{ textDecoration: "none" }}
              className="text-pink-300 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <Flex alignItems="center" gap={1.5}>
                <FiBookOpen className="size-5" />
                <Text className="text-base font-[AlibabaPuHuiTi]">Docs</Text>
              </Flex>
            </Link>
          </Flex>

          <Text className="pt-3 text-center text-pink-200 dark:text-pink-400 text-sm font-[AlibabaPuHuiTi]">
            Made with ❤️ by {APP_NAME} · © {new Date().getFullYear()}
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
}
