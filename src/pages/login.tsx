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
import { motion, AnimatePresence } from "motion/react";
import { IoKeyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import SplitText from "@/components/SplitText";
import { APP_NAME, DOCS_URL, REPO_URL } from "@/utils/app";
import { FiBookOpen, FiGithub } from "react-icons/fi";
import "@/styles/login.scss";

// TODO:
// - 登录功能实现
export default function Login() {
  useEffect(() => {
    document.title = `登录 - ${APP_NAME} WebUI`;
  });

  const [yiyan, setYiyan] = useState<string | null>(null);

  useEffect(() => {
    if (yiyan !== null) return;
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
    Promise.all([axios.get("https://v1.hitokoto.cn"), delay(500)])
      .then(([res]) => setYiyan(res.data.hitokoto))
      .catch(() => setYiyan("加载一言失败"));
  }, [yiyan]);

  return (
    <Box className="w-full min-h-screen h-dvh flex justify-center items-center bg-linear-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden fixed inset-0">
      {/* 背景装饰 */}
      {[
        {
          pos: "-top-10 -left-10 md:top-20 md:left-20",
          size: "w-48 h-48 md:w-72 md:h-72",
          color: "bg-pink-200/30 dark:bg-pink-500/10",
          scale: [1, 1.2, 1],
        },
        {
          pos: "-bottom-10 -right-10 md:bottom-20 md:right-20",
          size: "w-56 h-56 md:w-96 md:h-96",
          color: "bg-purple-200/30 dark:bg-purple-500/10",
          scale: [1.2, 1, 1.2],
        },
      ].map((bg, i) => (
        <motion.div
          key={i}
          className={`absolute ${bg.pos} ${bg.size} ${bg.color} rounded-full blur-3xl`}
          animate={{ scale: bg.scale, opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <Box className="relative z-10 px-4 md:px-0">
        {/* 表单主体内容 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Box className="p-5! md:p-7! w-80 md:w-md mx-auto rounded-2xl md:rounded-3xl relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-pink-500/10 dark:shadow-purple-500/10">
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
                  scale: 1.08,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box className="relative">
                  <motion.div
                    className="absolute -inset-2 rounded-full blur-md avatar"
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
                    className="size-20! md:size-28! relative z-10"
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
                className="text-center mt-2 md:mt-3 text-2xl! md:text-3xl! font-bold! bg-clip-text text-transparent title"
              >
                PuniYu
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Text className="text-center mt-3 md:mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400">
                欢迎回来, 请输入您的访问令牌以继续
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-4 md:mt-6"
            >
              <Text className="text-pink-500 dark:text-pink-300 font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                访问令牌
              </Text>
              <InputGroup
                startElement={<IoKeyOutline className="text-gray-400" />}
              >
                <Input
                  colorPalette="pink"
                  placeholder="输入您的令牌..."
                  type="password"
                  className="rounded-xl! border-gray-200! dark:border-gray-700! focus:border-pink-400! transition-all"
                />
              </InputGroup>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4! md:mt-5!"
            >
              <Button className="w-full py-5! md:py-6! rounded-xl! font-semibold! transition-all duration-300 text-white! text-sm md:text-base border-none! btn">
                登录
              </Button>
            </motion.div>

            {/* 一言 */}
            <motion.div
              className="mt-4 md:mt-6 min-h-[50px] md:min-h-[60px] flex items-center justify-center cursor-pointer"
              onClick={() => setYiyan(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="点击刷新一言"
            >
              <AnimatePresence mode="wait">
                {yiyan === null ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-pink-400" : "bg-purple-400"}`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={yiyan}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SplitText
                      text={yiyan || ""}
                      delay={50}
                      splitType={"words"}
                      className="text-gray-400 dark:text-gray-500 text-xs md:text-sm italic block! text-center"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Box>
        </motion.div>

        {/* 底部信息 */}
        <motion.div
          className="pt-5! md:pt-8!"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <Flex gap={8} justifyContent="center">
            {[
              { href: REPO_URL, icon: FiGithub, label: "GitHub" },
              { href: DOCS_URL, icon: FiBookOpen, label: "Docs" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <Flex
                    alignItems="center"
                    gap={2}
                    className="text-gray-500 hover:text-pink-500 transition-colors duration-300"
                  >
                    <Icon className="size-5!" />
                    <Text fontSize="sm">{label}</Text>
                  </Flex>
                </Link>
              </motion.div>
            ))}
          </Flex>

          <Text className="pt-3! md:pt-4! text-center text-gray-400 dark:text-gray-600 text-xs">
            Made with ❤️ by {APP_NAME} · © {new Date().getFullYear()}
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
}
