import { VStack, Text, HStack, Spacer, Box } from "@chakra-ui/react";
import { FiHome, FiSettings } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { DashBoard_ROUTE } from "@/utils/router";
import { useSidebar } from "@/hooks/sidebar";
import { useIsDesktop } from "@/hooks/media";
import { ColorModeButton } from "@/components/ui/color-mode";

const navItems = [
  { label: "首页", icon: FiHome, path: DashBoard_ROUTE },
  { label: "配置", icon: FiSettings, path: "/settings" },
];

const SideBar = () => {
  const location = useLocation();
  const isDeskTop = useIsDesktop();
  const { isOpen, close } = useSidebar();

  if (isDeskTop) {
    return (
      <motion.div
        className="self-stretch bg-linear-to-b from-pink-50/90 to-rose-50/80 dark:from-black/30 dark:to-black/30 backdrop-blur-xl border-r border-pink-200/30 dark:border-pink-500/10 pt-4 pb-4 overflow-hidden"
        initial={false}
        animate={{
          width: isOpen ? 224 : 64,
          paddingLeft: isOpen ? 12 : 0,
          paddingRight: isOpen ? 12 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <VStack gap={1} align={isOpen ? "stretch" : "center"} className="px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={item.path}
                className={isOpen ? "w-full" : ""}
              >
                <HStack
                  className={`py-3 rounded-xl cursor-pointer transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-linear-to-r from-pink-200/80 to-rose-200/60 dark:from-pink-500/20 dark:to-rose-500/10 text-pink-500 dark:text-pink-300 shadow-sm shadow-pink-200/50 dark:shadow-pink-500/10"
                      : "text-pink-300 dark:text-pink-400/80 hover:bg-pink-100/50 dark:hover:bg-pink-500/10 hover:text-pink-500 dark:hover:text-pink-300"
                  } ${isOpen ? "px-3 gap-3" : "w-12 justify-center"}`}
                >
                  <item.icon size={20} className="shrink-0" />
                  <motion.span
                    className="text-sm font-medium overflow-hidden"
                    initial={false}
                    animate={{
                      width: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </HStack>
              </Link>
            );
          })}
        </VStack>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Box>
          <motion.div
            className="fixed left-0 right-0 top-14 bottom-0 bg-black/30 z-40"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          {/* 侧边栏 - 左侧滑出 */}
          <motion.div
            className="fixed left-0 top-14 bottom-0 w-64 bg-linear-to-b from-pink-50/95 to-rose-50/90 dark:from-gray-900/95 dark:to-black/90 backdrop-blur-xl z-50 shadow-xl shadow-pink-200/20 dark:shadow-black/50 pt-4 px-3 flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <VStack gap={1} align="stretch">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link to={item.path} onClick={close}>
                      <HStack
                        className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 gap-3 ${
                          isActive
                            ? "bg-linear-to-r from-pink-200/80 to-rose-200/60 dark:from-pink-500/20 dark:to-rose-500/10 text-pink-500 dark:text-pink-300 shadow-sm shadow-pink-200/50 dark:shadow-pink-500/10"
                            : "text-pink-300 dark:text-pink-400/80 hover:bg-pink-100/50 dark:hover:bg-pink-500/10 hover:text-pink-500 dark:hover:text-pink-300"
                        }`}
                      >
                        <item.icon size={20} />
                        <Text className="text-sm font-medium">
                          {item.label}
                        </Text>
                      </HStack>
                    </Link>
                  </motion.div>
                );
              })}
            </VStack>
            <Spacer />
            <HStack className="px-2 pb-4 justify-center">
              <ColorModeButton />
            </HStack>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
