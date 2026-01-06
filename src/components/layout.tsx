import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./navbar";
import Footer from "./footer";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/hooks/sidebar";
import { useIsDesktop } from "@/hooks/media";

const Layout = () => {
  const isDeskTop = useIsDesktop();
  const setOpen = useSidebar((state) => state.setOpen);

  useEffect(() => {
    setOpen(isDeskTop ?? false);
  }, [isDeskTop, setOpen]);
  return (
    <Box className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <Flex className="flex-1 pt-14 overflow-hidden">
        <SideBar />
        <Box className="flex-1 flex flex-col">
          <Box className="flex-1">
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
