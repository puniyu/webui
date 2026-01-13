import { useIsDesktop } from "@/hooks/media";
import { useSidebar } from "@/hooks/sidebar";
import { Box, Image, Text, Stack, Flex } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { APP_NAME } from "@/utils/app";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { BASE_ROUTE, DashBoard_ROUTE } from "@/utils/router";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface MenuItemProps {
  to: string;
  label: string;
  icon: ReactNode;
}

const MenuItem = ({ to, label, icon }: MenuItemProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Box
          w="full"
          rounded="xl"
          className={cn(
            "group border-2 border-transparent cursor-pointer transition-all duration-200",
            isActive
              ? "bg-pink-300/80 backdrop-blur-xl"
              : "hover:bg-white/40 hover:backdrop-blur-xl",
          )}
        >
          <Flex
            className={cn(
              "items-center gap-3 px-4 py-2 transition-all duration-200",
              !isActive && "group-hover:ml-1",
            )}
          >
            <Box
              className={cn(
                "text-xl flex items-center transition-colors",
                isActive ? "text-pink-500" : "text-gray-600",
              )}
            >
              {icon}
            </Box>
            <Text
              className={cn(
                "transition-colors",
                isActive
                  ? "text-pink-500 font-semibold"
                  : "text-gray-600 font-medium",
              )}
            >
              {label}
            </Text>
          </Flex>
        </Box>
      )}
    </NavLink>
  );
};

const SideBar = () => {
  const isDeskTop = useIsDesktop();

  return isDeskTop ? <Desktop /> : <Mobile />;
};

const Desktop = () => {
  const { isOpen } = useSidebar();

  return (
    <Box className="overflow-hidden">
      <motion.div
        animate={{
          width: isOpen ? "16rem" : "0rem",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="backdrop-blur-xl backdrop-saturate-150 overflow-y-auto h-full"
      >
        <Box className="p-6 space-y-6 w-64">
          {/* 头像和应用名称区域 */}
          <Box className="flex flex-col items-center space-y-4">
            {/* 头像 */}
            <Box className="relative">
              <Image
                src={logo}
                alt="Puniyu Logo"
                className="w-20 h-20 rounded-full ring-4 ring-white/50 shadow-lg object-cover"
              />
            </Box>

            <Box
              as="h1"
              className="text-xl font-[DouyinSans] font-semibold text-gray-800 tracking-wide text-center"
            >
              {APP_NAME} Web
            </Box>
          </Box>

          <Box className="w-full h-px bg-linear-to-r from-transparent via-pink-300/60 to-transparent" />

          {/* 导航菜单 */}
          <Stack gap="3" width="full">
            <MenuItem
              to={DashBoard_ROUTE}
              label="首页"
              icon={<HiOutlineHome />}
            />
            <MenuItem to={BASE_ROUTE} label="222" icon={<HiOutlineHome />} />
          </Stack>
        </Box>
      </motion.div>
    </Box>
  );
};

const Mobile = () => {
  return <Box></Box>;
};

export default SideBar;
