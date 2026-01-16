import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./navbar";
import Footer from "./footer";
import SideBar from "./sidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/contexts/sidebar";
import { PageProvider } from "@/contexts/page";

const Layout = () => {
  return (
    <PageProvider>
      <SidebarProvider>
        <Flex className="h-screen overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-fuchsia-100">
          <SideBar />
          <Flex
            flex="1"
            direction="column"
            className="backdrop-blur-md backdrop-saturate-150"
            overflow="hidden"
          >
            <NavBar />
            <Box flex="1" overflow="auto">
              <Outlet />
            </Box>
            <Footer />
          </Flex>
        </Flex>
      </SidebarProvider>
    </PageProvider>
  );
};

export default Layout;
