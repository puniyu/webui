import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";
import {
  FiUser,
  FiLogOut,
  FiChevronDown,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { APP_NAME } from "@/utils/app";
import logo from "@/assets/logo.webp";
import { FaRegUserCircle } from "react-icons/fa";
import { useSidebar } from "@/hooks/sidebar";
import { ColorModeButton } from "@/components/ui/color-mode";

// TODO: 后续会获取
const currentUser = "wuliya";

const UserMenu = () => {
  return (
    <Box className="relative ml-2 group">
      <HStack className="text-pink-300 dark:text-pink-300 hover:text-pink-400 cursor-pointer gap-1">
        <FaRegUserCircle size={24} />
        <Text className="text-sm">{currentUser}</Text>
        <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
      </HStack>
      <Box
        className="absolute right-0 top-full mt-1 hidden group-hover:block bg-white/80 dark:bg-black/50 backdrop-blur-xl rounded-xl shadow-xl py-2 min-w-36 border border-pink-200 dark:border-white/10"
        _hover={{ display: "block" }}
      >
        <HStack className="px-4 py-2 text-pink-400 hover:bg-pink-100/50 dark:hover:bg-white/10 cursor-pointer gap-2">
          <FiUser />
          <Text>用户信息</Text>
        </HStack>
        <HStack className="px-4 py-2 text-pink-400 hover:bg-pink-100/50 dark:hover:bg-white/10 cursor-pointer gap-2">
          <FiLogOut /> <Text>退出登录</Text>
        </HStack>
      </Box>
    </Box>
  );
};

const NavBar = () => {
  const { isOpen, toggle: toggleSidebar } = useSidebar();
  const isDeskTop = useMediaQuery("only screen and (min-width: 993px)");

  return (
    <Box className="fixed top-0 left-0 right-0 z-50">
      <Flex
        className="h-14 px-6 backdrop-blur-xl bg-pink-50/80 dark:bg-black/30 border-b border-pink-200/50 dark:border-white/10"
        justify={isDeskTop ? "space-between" : "center"}
        align="center"
        position="relative"
      >
        {/* Logo区域 */}
        <HStack gap={4}>
          <Image
            src={logo}
            alt={APP_NAME}
            className="h-9 w-9 rounded-full object-cover"
          />
          {isDeskTop && (
            <>
              <Text className="text-lg font-semibold text-pink-300">
                {APP_NAME}
              </Text>
              <Box
                className="p-2 rounded-lg text-pink-300 hover:bg-pink-100/50 dark:hover:bg-white/10 cursor-pointer transition-colors"
                onClick={toggleSidebar}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </Box>
            </>
          )}
        </HStack>

        {/* 移动端菜单按钮 */}
        {!isDeskTop && (
          <Box
            className="absolute right-6 p-2 rounded-lg text-pink-300 hover:bg-pink-100/50 dark:hover:bg-white/10 cursor-pointer transition-colors"
            onClick={toggleSidebar}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.div>
            </AnimatePresence>
          </Box>
        )}

        {/* 搜索 */}
        {isDeskTop && (
          <HStack className="absolute left-1/2 -translate-x-1/2 bg-white/80 dark:bg-black/30 backdrop-blur-xl rounded-md px-4 h-8 border border-pink-200 dark:border-white/10 w-md cursor-pointer hover:border-pink-300 dark:hover:border-white/20 transition-colors">
            <Text className="text-sm text-pink-300 flex-1">搜索...</Text>
            <FiSearch className="text-pink-300" />
          </HStack>
        )}
        {isDeskTop && (
          <HStack gap={2}>
            <UserMenu />
            <ColorModeButton />
          </HStack>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;
