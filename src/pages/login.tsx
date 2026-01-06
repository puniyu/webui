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
  AbsoluteCenter,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import {
  IoKeyOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SplitText from "@/components/SplitText";
import { APP_NAME, DOCS_URL, REPO_URL } from "@/utils/app";
import { FiBookOpen, FiGithub } from "react-icons/fi";
import { camelCase } from "es-toolkit/string";
import { useDocumentTitle } from "usehooks";
import { useQuery } from "@tanstack/react-query";
import { UserInfo } from "@/types";

// TODO: 登录功能实现
const Login = () => {
  useDocumentTitle(`Login - ${APP_NAME} WebUI`);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    console.log("登录数据:", data);
    // TODO: 实现登录逻辑
  };

  const {
    data: yiyan,
    isFetching: isYiyanFetching,
    refetch: refetchYiyan,
  } = useQuery({
    queryKey: ["hitokoto"],
    queryFn: async () => {
      const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
      const [res] = await Promise.all([
        axios.get("https://v1.hitokoto.cn"),
        delay(500),
      ]);
      return res.data.hitokoto as string;
    },
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return (
    <Box className="w-full min-h-dvh bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-100 dark:from-gray-900 dark:via-black dark:to-gray-900 relative">
      <AbsoluteCenter className="px-4 md:px-0">
        <Box>
          {/* 表单主体内容 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Box className="p-5 md:p-7 w-80 md:w-md mx-auto rounded-2xl md:rounded-3xl relative bg-white/30 dark:bg-black/30 backdrop-blur-2xl backdrop-saturate-150 border border-white/50 dark:border-white/10 shadow-2xl shadow-pink-400/40 dark:shadow-pink-500/20">
              {/* 暗黑模式切换按钮 */}
              <Box className="absolute top-3 right-3 md:top-4 md:right-4">
                <ColorModeButton />
              </Box>

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
                  className="text-center mt-2 md:mt-3 text-2xl md:text-4xl font-bold font-[DouyinSans] bg-clip-text text-transparent bg-linear-135 from-pink-400 via-pink-300 to-pink-200"
                >
                  {camelCase(APP_NAME)}
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Text className="text-center mt-3 md:mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400 font-normal font-[AlibabaPuHuiTi]">
                  欢迎回来, 请输入您的账号和密码以继续
                </Text>
              </motion.div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* 账号名输入 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="mt-4 md:mt-6"
                >
                  <Text className="text-pink-300 mb-1.5 md:mb-2 text-md md:text-base font-normal font-[AlibabaPuHuiTi]">
                    用户名
                  </Text>
                  <InputGroup
                    startElement={<IoPersonOutline className="text-pink-300" />}
                  >
                    <Input
                      placeholder="输入您的用户名..."
                      {...register("username", {
                        required: "请输入用户名",
                        pattern: {
                          value: /^\s*\S.*/,
                          message: "请输入用户名",
                        },
                      })}
                      className="rounded-xl transition-all font-normal font-[AlibabaPuHuiTi] border-2 border-pink-200 bg-pink-50/50 focus:border-pink-300 focus:shadow-lg focus:shadow-pink-200/50 focus:outline-none"
                    />
                  </InputGroup>
                  {errors.username && (
                    <Text className="text-red-400 text-sm mt-1 font-[AlibabaPuHuiTi]">
                      {errors.username.message}
                    </Text>
                  )}
                </motion.div>

                {/* 密码输入 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="mt-4"
                >
                  <Text className="text-pink-300 mb-1.5 md:mb-2 text-md md:text-base font-normal font-[AlibabaPuHuiTi]">
                    密码
                  </Text>
                  <InputGroup
                    startElement={<IoKeyOutline className="text-pink-300" />}
                    endElement={
                      <Button
                        onClick={() => setShowPassword(!showPassword)}
                        size={"sm"}
                        className="text-pink-200 hover:text-pink-400  bg-transparent transition-colors cursor-pointer"
                      >
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                      </Button>
                    }
                  >
                    <Input
                      placeholder="输入您的密码"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "请输入密码",
                        pattern: {
                          value: /^\s*\S.*/,
                          message: "请输入密码",
                        },
                      })}
                      className="rounded-xl transition-all font-normal font-[AlibabaPuHuiTi] border-2 border-pink-200 bg-pink-50/50 focus:border-pink-300 focus:shadow-lg focus:shadow-pink-200/50 focus:outline-none"
                    />
                  </InputGroup>
                  {errors.password && (
                    <Text className="text-red-400 text-sm mt-1 font-[AlibabaPuHuiTi]">
                      {errors.password.message}
                    </Text>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="w-full mt-5 md:mt-6"
                >
                  <Button
                    type="submit"
                    className="group w-full py-3.5 md:py-4 rounded-xl font-medium text-sm md:text-base border-none text-white shadow-md shadow-pink-200/50 hover:shadow-lg hover:shadow-pink-300/60 hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                    background={
                      "linear-gradient(135deg, #ffc4d6, #ffb6c1, #ffa8c5)"
                    }
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
              </form>

              {/* 一言 */}
              <Box
                className="mt-4 min-h-12.5 flex items-center justify-center cursor-pointer"
                onClick={() => refetchYiyan()}
                title="点击刷新"
              >
                {isYiyanFetching || !yiyan ? (
                  <Flex gap={2}>
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.span
                        key={i}
                        className={`w-2 h-2 rounded-full ${["bg-pink-200", "bg-pink-300", "bg-rose-200"][i]}`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay }}
                      />
                    ))}
                  </Flex>
                ) : (
                  <SplitText
                    text={yiyan}
                    delay={50}
                    splitType="words"
                    className="text-gray-400 dark:text-gray-500 text-sm md:text-base text-center font-[AlibabaPuHuiTi]"
                  />
                )}
              </Box>
            </Box>
          </motion.div>

          {/* 底部信息 */}
          <Box className="pt-6 md:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Flex justifyContent="center" alignItems="center" gap={5}>
                <Link
                  href={REPO_URL}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  className="text-pink-300 hover:text-pink-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <Flex alignItems="center" gap={2}>
                    <FiGithub className="size-6" />
                    <Text className="text-lg font-[AlibabaPuHuiTi]">
                      GitHub
                    </Text>
                  </Flex>
                </Link>
                <Box className="w-px h-5 bg-pink-200" />
                <Link
                  href={DOCS_URL}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  className="text-pink-300 hover:text-pink-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <Flex alignItems="center" gap={2}>
                    <FiBookOpen className="size-6" />
                    <Text className="text-lg font-[AlibabaPuHuiTi]">Docs</Text>
                  </Flex>
                </Link>
              </Flex>

              <Text className="pt-4 text-center text-pink-200 text-base font-[AlibabaPuHuiTi]">
                Made with ❤️ by {APP_NAME} · {new Date().getFullYear()}
              </Text>
            </motion.div>
          </Box>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
