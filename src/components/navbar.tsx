import { Box, IconButton, Flex, Text } from "@chakra-ui/react";
import { useSidebar } from "@/hooks/sidebar";
import { HiMenu, HiX } from "react-icons/hi";
import { usePageTitle } from "@/hooks/pageTitle";

const NavBar = () => {
  const { isOpen, toggle } = useSidebar();
  const { title } = usePageTitle();

  return (
    <Box w="full">
      <Box mt={"2"} marginInline={"2"}>
        <Box className="bg-white/40 backdrop-blur-xl rounded-full px-4 py-2 shadow-lg shadow-pink-100/40 border border-white/60">
          <Flex className="h-6 items-center justify-between">
            <Flex className="items-center gap-3">
              <IconButton
                onClick={toggle}
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-pink-300 hover:bg-pink-50/50"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </IconButton>
              <Text className="text-gray-800 font-semibold">{title}</Text>
            </Flex>

            <Box className="flex-1 max-w-2xl mx-8">
              <Flex className="items-center justify-center">
                <Box className="text-gray-800 font-medium"></Box>
              </Flex>
            </Box>
            <Box></Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
