import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import logo from "@/assets/logo.webp";

export default function Loading() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
      bgGradient={"linear(to-br, pink.50, white, purple.50)"}
      _dark={{ bgGradient: "linear(to-br, gray.900, black, gray.900)" }}
    >
      <Flex className="relative z-10" direction={"column"} align={"center"}>
        {/* Logo 动画 */}
        <Box>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Box className="relative">
              <Box
                className="absolute -inset-3 blur-lg"
                bg="linear-gradient(135deg, #ffa8c5, #ffb6c1, #ffc4d6)"
                rounded={"full"}
              >
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Box>
              <Image
                src={logo}
                className="size-40 relative z-10"
                rounded="full"
              />
            </Box>
          </motion.div>
        </Box>

        {/* 文字动画 */}
        <Flex className="mt-3!">
          {"Loading".split("").map((char, i) => (
            <Box
              key={i}
              className="text-2xl font-medium"
              bgImage="linear-gradient(135deg, #ff8fb3, #ffa8c5)"
              bgClip="text"
              color="transparent"
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
                <Text>{char}</Text>
              </motion.div>
            </Box>
          ))}
          <Box
            className="text-2xl font-medium"
            bgImage="linear-gradient(135deg, #ff8fb3, #ffa8c5)"
            bgClip="text"
            color="transparent"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Text>...</Text>
            </motion.div>
          </Box>
        </Flex>

        {/* 进度条 */}
        <Box
          className="mt-2.5 w-48 h-1.5 overflow-hidden"
          bg={"gray.200"}
          rounded={"full"}
          _dark={{ bg: "gray.700" }}
        >
          <Box
            h={"full"}
            bg="linear-gradient(90deg, #ffa8c5, #ffb6c1, #ffc4d6)"
            rounded={"full"}
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Box>
        </Box>

        <Text
          className="text-xs"
          mt={"4"}
          color={"gray.400"}
          _dark={{ color: "gray.500" }}
        >
          正在加载资源...
        </Text>
      </Flex>
    </Flex>
  );
}
